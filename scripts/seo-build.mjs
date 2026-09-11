// Post-build SEO step: per-route HTML with its own meta tags and a static text
// snapshot (served with HTTP 200 on GitHub Pages), plus sitemap.xml, llms.txt
// and llms-full.txt generated from src/content so they never drift.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const load = (name) => import(join(root, 'src/content', `${name}.ts`))

const [
  { site, footer },
  home,
  { experience, education },
  { about },
  { work, workPage },
  { notes, notesPage },
  { contactPage, notFound },
] = await Promise.all(['site', 'home', 'experience', 'about', 'work', 'notes', 'contact'].map(load))

const { hero } = home
const ORIGIN = site.url
const TODAY = new Date().toISOString().slice(0, 10)
const plain = (text) => text.replaceAll('**', '')
const esc = (text) =>
  plain(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
// GitHub Pages serves route folders at a trailing-slash URL, so canonical links use it too.
const url = (path) => `${ORIGIN}${path === '/' ? '/' : `${path}/`}`

const person = {
  '@type': 'Person',
  '@id': `${ORIGIN}/#person`,
  name: site.name,
  jobTitle: site.role,
  description: site.metaDescription,
  url: `${ORIGIN}/`,
  image: `${ORIGIN}/images/headshot-840.jpg`,
  email: `mailto:${site.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Washington',
    addressRegion: 'DC',
    addressCountry: 'US',
  },
  alumniOf: education.map((e) => ({
    '@type': 'CollegeOrUniversity',
    name: e.school.split(',')[0],
  })),
  hasCredential: education.map((e) => ({
    '@type': 'EducationalOccupationalCredential',
    name: e.degree,
  })),
  sameAs: [site.linkedin],
  knowsAbout: [...site.keywords],
}

// ---------- static text snapshots ----------
const list = (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`
const nav = `<nav><a href="/">Home</a> · <a href="/work">Work</a> · <a href="/notes">Notes</a> · <a href="/contact">Contact</a></nav>`
const contactLine = `<p>Email: <a href="mailto:${site.email}">${site.email}</a> · LinkedIn: <a href="${site.linkedin}">${site.linkedin}</a> · ${esc(site.location)}, open to relocating</p>`

const snapshots = {
  home: () => `
    <h1>${esc(site.name)}: ${esc(site.role)}</h1>
    <p>${esc(hero.intro)}</p>${contactLine}
    <h2>${esc(home.numbers.heading)}</h2>${list(home.numbers.facts.map((f) => `${f.value} ${f.label}`))}
    <h2>${esc(home.experienceSection.heading)}</h2>
    ${experience.map((x) => `<h3>${esc(x.title)}, ${esc(x.organization)} (${esc(x.dates)}, ${esc(x.place)})</h3>${list(x.bullets)}`).join('')}
    ${education.map((x) => `<h3>${esc(x.degree)}, ${esc(x.school)} (${esc(x.dates)})</h3>${list(x.details)}`).join('')}
    <h2>${esc(home.process.heading)}</h2>${list(home.process.steps.map((s) => `${s.title}: ${s.text}`))}
    <h2>About</h2>${about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')}
    <h3>${esc(about.capabilitiesHeading)}</h3>${list(about.capabilities.map((c) => c.label))}
    <h3>${esc(about.toolsHeading)}</h3>${list(about.toolGroups.map((g) => `${g.title}: ${g.tools.join(', ')}`))}
    <h3>${esc(about.outsideHeading)}</h3>${list(about.outside.map((o) => `${o.title}: ${o.text}`))}
    <h2>${esc(workPage.heading)}</h2>${work.map((w) => `<p><a href="/work/${w.slug}">${esc(w.title)}</a>: ${esc(w.summary)}</p>`).join('')}
    <h2>${esc(notesPage.heading)}</h2>${notes.map((n) => `<p><a href="/notes/${n.slug}">${esc(n.title)}</a>: ${esc(n.excerpt)}</p>`).join('')}`,
  work: () => `<h1>${esc(workPage.heading)}</h1><p>${esc(workPage.intro)}</p>
    ${work.map((w) => `<h2><a href="/work/${w.slug}">${esc(w.title)}</a></h2><p>${esc(w.tags)}</p><p>${esc(w.summary)}</p>`).join('')}`,
  workItem: (w) => `<h1>${esc(w.title)}</h1><p>${esc(w.summary)}</p>
    <p>${esc(workPage.labels.where)}: ${esc(w.where)}. ${esc(workPage.labels.role)}: ${esc(w.role)}. ${esc(workPage.labels.when)}: ${esc(w.when)}.</p>
    <h2>${esc(workPage.labels.context)}</h2>${w.context.map((p) => `<p>${esc(p)}</p>`).join('')}
    <h2>${esc(workPage.labels.steps)}</h2><ol>${w.steps.map((s) => `<li><strong>${esc(s.title)}.</strong> ${esc(s.text)}</li>`).join('')}</ol>
    <h2>${esc(workPage.labels.outcome)}</h2>${w.outcome.map((p) => `<p>${esc(p)}</p>`).join('')}`,
  notes: () => `<h1>${esc(notesPage.heading)}</h1><p>${esc(notesPage.intro)}</p>
    ${notes.map((n) => `<h2><a href="/notes/${n.slug}">${esc(n.title)}</a></h2><p>${esc(n.excerpt)}</p>`).join('')}`,
  note: (n) =>
    `<article><h1>${esc(n.title)}</h1><p><time datetime="${n.date}">${n.date}</time></p>${n.body.map((p) => `<p>${esc(p)}</p>`).join('')}</article>`,
  contact: () => `<h1>${esc(contactPage.heading)}</h1><p>${esc(contactPage.intro)}</p>${contactLine}
    <h2>${esc(contactPage.faqHeading)}</h2>${contactPage.faq.map((f) => `<h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p>`).join('')}`,
}
// ---------- routes ----------
const routes = [
  {
    path: '/',
    title: site.metaTitle,
    description: site.metaDescription,
    body: snapshots.home(),
    schema: [
      person,
      {
        '@type': 'WebSite',
        '@id': `${ORIGIN}/#website`,
        url: `${ORIGIN}/`,
        name: site.name,
        about: { '@id': person['@id'] },
      },
    ],
  },
  {
    path: '/work',
    title: `${plain(workPage.heading)} | ${site.name}`,
    description: plain(workPage.intro),
    body: snapshots.work(),
    schema: [],
  },
  ...work.map((w) => ({
    path: `/work/${w.slug}`,
    title: `${w.title} | ${site.name}`,
    description: w.summary,
    body: snapshots.workItem(w),
    schema: [
      {
        '@type': 'CreativeWork',
        name: w.title,
        abstract: w.summary,
        keywords: w.tags,
        author: { '@id': person['@id'] },
        url: url(`/work/${w.slug}`),
      },
    ],
  })),
  {
    path: '/notes',
    title: `${plain(notesPage.heading)} | ${site.name}`,
    description: plain(notesPage.intro),
    body: snapshots.notes(),
    schema: [],
  },
  ...notes.map((n) => ({
    path: `/notes/${n.slug}`,
    title: `${n.title} | ${site.name}`,
    description: n.excerpt,
    body: snapshots.note(n),
    type: 'article',
    schema: [
      {
        '@type': 'BlogPosting',
        headline: n.title,
        description: n.excerpt,
        datePublished: n.date,
        author: { '@id': person['@id'] },
        mainEntityOfPage: url(`/notes/${n.slug}`),
      },
    ],
  })),
  {
    path: '/contact',
    title: `Contact | ${site.name}`,
    description: plain(contactPage.intro),
    body: snapshots.contact(),
    schema: [{ '@type': 'ContactPage', url: url('/contact'), about: { '@id': person['@id'] } }],
  },
]

const template = readFileSync(join(dist, 'index.html'), 'utf8')

function setMeta(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`SEO build: pattern not found ${pattern}`)
  return html.replace(pattern, replacement)
}

function renderRoute(route) {
  const title = esc(route.title)
  const description = esc(route.description)
  const canonical = url(route.path)
  let html = template
  html = setMeta(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
  html = setMeta(
    html,
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${description}" />`,
  )
  html = setMeta(
    html,
    /<link\s+rel="canonical"[\s\S]*?\/>/,
    `<link rel="canonical" href="${canonical}" />`,
  )
  html = setMeta(
    html,
    /<meta\s+property="og:type"[\s\S]*?\/>/,
    `<meta property="og:type" content="${route.type ?? 'website'}" />`,
  )
  html = setMeta(
    html,
    /<meta\s+property="og:url"[\s\S]*?\/>/,
    `<meta property="og:url" content="${canonical}" />`,
  )
  html = setMeta(
    html,
    /<meta\s+property="og:title"[\s\S]*?\/>/,
    `<meta property="og:title" content="${title}" />`,
  )
  html = setMeta(
    html,
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${description}" />`,
  )
  html = setMeta(
    html,
    /<meta\s+name="twitter:title"[\s\S]*?\/>/,
    `<meta name="twitter:title" content="${title}" />`,
  )
  html = setMeta(
    html,
    /<meta\s+name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${description}" />`,
  )
  const graph = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': route.path === '/' ? route.schema : [person, ...route.schema],
  })
  html = setMeta(
    html,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${graph.replaceAll('<', '\\u003c')}</script>`,
  )
  html = setMeta(
    html,
    /<div id="root"><\/div>/,
    `<div id="root"><div class="prerender">${nav}${route.body.replace(/\n\s*/g, '')}</div></div>`,
  )
  return html
}

for (const route of routes) {
  const file =
    route.path === '/' ? join(dist, 'index.html') : join(dist, route.path.slice(1), 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, renderRoute(route))
}

const notFoundHtml = renderRoute({
  path: '/',
  title: `Page not found | ${site.name}`,
  description: notFound.intro,
  body: `<h1>${esc(notFound.heading)}</h1><p>${esc(notFound.intro)}</p>`,
  schema: [person],
}).replace('<link rel="canonical"', '<meta name="robots" content="noindex" /><link rel="canonical"')
writeFileSync(join(dist, '404.html'), notFoundHtml)

// ---------- sitemap ----------
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url>\n    <loc>${url(r.path)}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <priority>${r.path === '/' ? '1.0' : r.path.split('/').length > 2 ? '0.6' : '0.8'}</priority>\n  </url>`).join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), sitemap)

// ---------- llms.txt ----------
const bullets = (items) => items.map((i) => `- ${plain(i)}`).join('\n')
const summary = `${site.name} is an HR and People Operations professional based in ${site.location} and willing to relocate. She holds an M.S. in Industrial-Organizational Psychology from the University of Hartford (GPA 3.88, May 2026) and has experience in full-cycle recruiting, residential life operations and counseling. She is looking for HR Generalist, People Operations, Talent Acquisition or Recruiting Coordinator roles and can start right away.`

const llms = `# ${site.name}

> ${summary}

## Quick facts

- Role focus: HR Generalist, People Operations, Talent Acquisition, Recruiting Coordinator, Training and Development
- Location: ${site.location}, willing to relocate; open to on-site, hybrid and remote work
- Employment types: full-time, contract and 1099
- Availability: can start right away
- Education: M.S. Industrial-Organizational Psychology, University of Hartford (GPA 3.88); B.A. Psychology, Devi Ahilya Vishwavidyalaya
- Tools: ${about.toolGroups.flatMap((g) => g.tools).join(', ')}
- Email: ${site.email}
- LinkedIn: ${site.linkedin}

## Pages

- [Home](${url('/')}): overview, experience, education, skills and background
- [Work](${url('/work')}): project write-ups from residential life and counseling
- [Notes](${url('/notes')}): short personal pieces about people and work
- [Contact](${url('/contact')}): how to reach her, plus answers to common recruiter questions

## Work

${work.map((w) => `- [${w.title}](${url(`/work/${w.slug}`)}): ${w.summary}`).join('\n')}

## Notes

${notes.map((n) => `- [${n.title}](${url(`/notes/${n.slug}`)}): ${n.excerpt}`).join('\n')}

## Optional

- [Full profile in one file](${url('/llms-full.txt')}): every section of the site as plain text
`

const llmsFull = `# ${site.name}

> ${summary}

Website: ${url('/')}
Email: ${site.email}
LinkedIn: ${site.linkedin}
Location: ${site.location}, willing to relocate

## About

${about.paragraphs.map(plain).join('\n\n')}

## Key numbers

${bullets(home.numbers.facts.map((f) => `${f.value}: ${f.label}`))}

## Experience

${experience.map((x) => `### ${x.title}, ${x.organization}\n${x.place} | ${x.dates}\n\n${bullets(x.bullets)}`).join('\n\n')}

## Education

${education.map((x) => `### ${x.degree}, ${x.school}\n${x.place} | ${x.dates}\n\n${bullets(x.details)}`).join('\n\n')}

## What she can help with

${bullets(about.capabilities.map((c) => c.label))}

## Tools

${about.toolGroups.map((g) => `- ${g.title}: ${g.tools.join(', ')}`).join('\n')}

## How she works

${home.process.steps.map((s) => `- ${s.title}: ${s.text}`).join('\n')}

## Outside of work

${bullets(about.outside.map((o) => `${o.title}: ${o.text}`))}

## Work

${work
  .map(
    (w) => `### ${w.title}
URL: ${url(`/work/${w.slug}`)}
${w.where} | ${w.role} | ${w.when}
Tags: ${w.tags}

${w.summary}

${w.context.join('\n\n')}

${w.steps.map((s, i) => `${i + 1}. ${s.title}: ${s.text}`).join('\n')}

Outcome: ${w.outcome.join(' ')}`,
  )
  .join('\n\n')}

## Notes

${notes.map((n) => `### ${n.title}\nURL: ${url(`/notes/${n.slug}`)}\n\n${n.body.join('\n\n')}`).join('\n\n')}

## Frequently asked

${contactPage.faq.map((f) => `### ${f.question}\n${f.answer}`).join('\n\n')}

${footer.copyright}
`

writeFileSync(join(dist, 'llms.txt'), llms)
writeFileSync(join(dist, 'llms-full.txt'), llmsFull)

console.log(`SEO build: ${routes.length} routes, 404.html, sitemap.xml, llms.txt, llms-full.txt`)
