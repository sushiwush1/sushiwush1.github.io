import type { NavLink, SocialLink } from './types'

export const site = {
  name: 'Kanishka Yadav',
  firstName: 'Kanishka',
  logo: 'Kanishka',
  role: 'HR and People Operations',
  email: 'kanishkayadavv18@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kanishka-yadav18',
  location: 'Washington, DC',
  url: 'https://sushiwush1.github.io',
  metaTitle: 'Kanishka Yadav | HR Generalist, People Operations and Recruiting',
  metaDescription:
    'Kanishka Yadav is an HR and People Operations professional in Washington, DC, open to relocation. M.S. in Industrial-Organizational Psychology with experience in full-cycle recruiting, onboarding and HR operations.',
  keywords: [
    'Kanishka Yadav',
    'HR Generalist',
    'People Operations',
    'Human Resources',
    'HR Coordinator',
    'Talent Acquisition',
    'Recruiting Coordinator',
    'Full-cycle recruiting',
    'Onboarding',
    'HR operations',
    'Training and development',
    'Industrial-Organizational Psychology',
    'I-O Psychology',
    'Residential life',
    'BambooHR',
    'Washington DC',
    'Open to relocation',
    'University of Hartford',
  ],
  photoAlt: 'Portrait of Kanishka Yadav',
} as const

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/#about' },
  { label: 'Notes', to: '/notes' },
  { label: 'Contact', to: '/contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: site.linkedin, icon: 'linkedin' },
  { label: 'Email Kanishka', href: `mailto:${site.email}`, icon: 'email' },
]

export const footer = {
  ctaHeading: "Let's talk about your team.",
  ctaIntro:
    "Hiring for HR, people operations or recruiting? I'd love to hear about the role and the people you work with.",
  ctaButton: 'Get in Touch',
  ctaNote: "I'd love to hear from you",
  circleBadgeText: 'OPEN TO HR ROLES · OPEN TO HR ROLES · ',
  copyright: `© ${new Date().getFullYear()} Kanishka Yadav`,
  links: [
    { label: 'Work', to: '/work' },
    { label: 'Notes', to: '/notes' },
    { label: 'Contact', to: '/contact' },
  ] satisfies NavLink[],
}
