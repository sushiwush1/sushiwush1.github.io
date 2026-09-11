import type { Fact, InfoCardItem, ProcessStep, Sticker, Testimonial } from './types'

export const hero = {
  greeting: 'Hello!',
  headlineName: "I'm Kanishka,",
  headlineRest: 'and I work in HR.',
  intro:
    'I studied **I-O Psychology**, and I have worked in **recruiting**, **campus operations** and **counseling**. Most of my days have been about people and the systems that support them.',
}

export const stickers: Sticker[] = [
  {
    label: 'People Operations',
    accent: 'blue',
    doodle: 'Sparkle',
    position: 'top-left',
    rotate: -12,
  },
  { label: 'Recruiting', accent: 'yellow', doodle: 'Magnifier', position: 'top-right', rotate: 8 },
  {
    label: 'I-O Psychology',
    accent: 'pink',
    doodle: 'Lightbulb',
    position: 'mid-right',
    rotate: 10,
  },
  { label: 'Onboarding', accent: 'green', doodle: 'Handshake', position: 'mid-left', rotate: -6 },
]

export const infoCards: InfoCardItem[] = [
  {
    title: 'My Work',
    text: 'A few projects from Hartford and my internships, told the way they happened.',
    to: '/work',
    accent: 'blue',
    doodle: 'Clipboard',
  },
  {
    title: 'About Me',
    text: 'Where I come from, what I studied, and what I do outside of work.',
    to: '/#about',
    accent: 'yellow',
    doodle: 'Heart',
  },
  {
    title: 'Contact Me',
    text: 'Hiring for your team? Send me a note about the role.',
    to: '/contact',
    accent: 'green',
    doodle: 'PaperPlane',
  },
]

export const selectedWork = {
  heading: 'Selected work',
  intro:
    'Real projects from my time in **residential life** and **counseling**, written the way they happened.',
  moreLabel: 'Want to see everything?',
  moreButton: 'See All Work',
  featuredCount: 4,
}

export const process = {
  heading: 'How I like to work',
  intro:
    'These habits came out of busy semesters, sensitive conversations and a lot of data entry. They are how I approach most things.',
  button: 'More About Me',
  steps: [
    {
      title: 'Say it honestly',
      text: 'When someone asks for feedback, I give it kindly and clearly. When our interim director asked the team about a new RA training plan, I said it would be a lot for students to take in at once.',
      accent: 'powder',
      icon: 'Listen',
    },
    {
      title: 'Make it easier to follow',
      text: 'I want information to be easy to take in, so I break big things into clear categories and steps. That is how I rebuilt that training plan.',
      accent: 'green',
      icon: 'Screen',
    },
    {
      title: 'Follow it through',
      text: 'Logging a request is the first step. At Hartford I followed up with Facility Services myself until repairs were actually handled, and kept families in the loop along the way.',
      accent: 'pink',
      icon: 'Coordinate',
    },
    {
      title: 'Keep the details right',
      text: 'I have handled housing charges, student records and confidential reports. I slow down, check the entry, and treat private information with care.',
      accent: 'blue',
      icon: 'FollowThrough',
    },
  ] satisfies ProcessStep[],
}

export const numbers = {
  heading: 'A few numbers',
  intro: 'Some figures from my **recruiting work** in India and my **graduate studies** in the US.',
  facts: [
    { value: '20+', label: 'Client mandates recruited for', accent: 'purple' },
    { value: '30%', label: 'Reduction in time-to-hire', accent: 'green' },
    { value: '25%', label: 'Increase in client satisfaction', accent: 'pink' },
    { value: '3,000+', label: 'Residents in my campus community', accent: 'blue' },
    { value: '3.88', label: 'GPA in my I-O Psychology M.S.', accent: 'yellow' },
  ] satisfies Fact[],
}

export const experienceSection = {
  heading: 'Experience and education',
  intro:
    'Two countries, two degrees in **psychology**, and work that has always centered on **people**.',
}

export const notesSection = {
  heading: 'Notes',
  intro: 'Short pieces on the things I think about when I think about **work** and **people**.',
  button: 'Read All Notes',
}

export const testimonialsSection = {
  heading: 'Kind words',
  intro: 'What people I have worked with say.',
}

export const testimonials: Testimonial[] = []
