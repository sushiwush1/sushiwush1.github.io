import type { FaqItem } from './types'

export const contactPage = {
  heading: 'How can I help your team?',
  intro:
    'If you are hiring for HR, people operations or recruiting, I would love to hear about the role.',
  cardHeading: "Let's get in touch",
  cardIntro: 'Send a message here, email me directly, or connect with me on LinkedIn.',
  rows: [
    { label: 'Based in', value: 'Washington, DC, and open to relocating', icon: 'Compass' },
    {
      label: 'Email',
      value: 'kanishkayadavv18@gmail.com',
      icon: 'Envelope',
      href: 'mailto:kanishkayadavv18@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/kanishka-yadav18',
      icon: 'PeopleGroup',
      href: 'https://www.linkedin.com/in/kanishka-yadav18',
    },
  ],
  form: {
    nameLabel: 'Name',
    namePlaceholder: 'What is your name?',
    emailLabel: 'Email',
    emailPlaceholder: 'Your email address',
    companyLabel: 'Company',
    companyPlaceholder: 'Where do you work?',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about the role',
    submit: 'Send a Message',
    note: 'This opens your email app with your message ready to send.',
    subjectPrefix: 'Hello from',
  },
  faqHeading: 'Good to know',
  faqIntro: 'Answers to a few things recruiters and hiring managers usually ask me first.',
  faq: [
    {
      question: 'What kind of roles are you looking for?',
      answer:
        'HR Generalist, People Operations and Talent Acquisition or Recruiting Coordinator roles are my main focus. I am also interested in training and development work.',
    },
    {
      question: 'When can you start?',
      answer: 'I have finished my Master’s and can start right away.',
    },
    {
      question: 'Where are you based, and are you open to relocating?',
      answer:
        'I live in Washington, DC, and I am willing to relocate for the right role. I am happy to work on site, hybrid or remote.',
    },
    {
      question: 'Are you open to contract roles?',
      answer: 'Yes. I am open to full-time, contract and 1099 positions.',
    },
    {
      question: 'Which HR systems have you used?',
      answer:
        'BambooHR for candidate and employee records, StarRez for student housing records, and WebTMA for work orders. I work in Excel, including pivot tables and VLOOKUPs, along with SharePoint and the rest of Microsoft Office. I pick up new systems quickly.',
    },
  ] satisfies FaqItem[],
}

export const notFound = {
  heading: 'This page wandered off.',
  intro: 'The link may be old or mistyped. Here are a few places to start.',
  button: 'Back Home',
}
