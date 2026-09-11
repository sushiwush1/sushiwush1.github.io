import type { NoteItem } from './types'

export const notesPage = {
  heading: 'Notes',
  intro: 'Short, honest pieces about **people**, **work** and what I have learned along the way.',
  back: 'All Notes',
  readLabel: 'Read Note',
  moreHeading: 'More notes',
}

export const notes: NoteItem[] = [
  {
    slug: 'why-i-love-working-with-people',
    title: 'Why I love working with people',
    date: '2026-09-11',
    readingTime: '2 min read',
    excerpt:
      'When someone starts a new job, their whole situation can change, and often their family’s too. That is a big part of why I chose HR.',
    accent: 'yellow',
    doodle: 'Heart',
    body: [
      'People ask me why I went into HR. The simplest answer is that I love people.',
      'When I was recruiting, every candidate who joined a job was someone whose situation had just changed. Often it changed things for their family too. I have never thought of that as a small thing.',
      'Psychology gave me language for what I had already noticed. How people are selected, how they settle in, and how they are treated in their first months shapes how they feel about their work for a long time.',
      'That is why I care about the parts of HR that happen behind the scenes: accurate records, clear processes, and following up when something is stuck. Those details decide whether a new hire feels looked after.',
      'I want to keep growing on the operational side of HR, where good systems and good care for people meet.',
    ],
  },
  {
    slug: 'moving-to-the-us-at-twenty',
    title: 'What moving to the US at twenty taught me',
    date: '2026-09-11',
    readingTime: '2 min read',
    excerpt:
      'Taxes, commuting, and learning how people here talk to each other. Figuring it all out on my own has taught me a lot.',
    accent: 'blue',
    doodle: 'PaperPlane',
    body: [
      'I came to the United States when I was twenty to start my Master’s at the University of Hartford.',
      'Nobody hands you a guide for that. I had to figure out taxes, how to get around, and all the small unwritten rules of how people interact here.',
      'Doing all of that on my own has been a real learning experience.',
      'It also made me think about what it feels like to be new somewhere. A new country and a new job have a lot in common. You are trying to learn the rules while also trying to show people what you can do.',
      'I bring that with me into any role where I help people find their footing.',
    ],
  },
  {
    slug: 'when-someone-asks-for-feedback',
    title: 'When someone asks for honest feedback',
    date: '2026-09-11',
    readingTime: '2 min read',
    excerpt:
      'Our interim director asked what we thought of a new RA training plan. Saying so honestly led to a template the program still uses.',
    accent: 'green',
    doodle: 'SpeechBubble',
    body: [
      'During my graduate assistantship, our interim director presented a new training curriculum for Resident Assistants at a staff meeting and asked us for honest feedback.',
      'RAs are full-time students doing the job on top of classes. Looking at the plan, I could see it would be a lot for them to take in at once, so I said that.',
      'The director asked the team to come up with something better. In the room, we agreed to spread the training out on a calendar. After the meeting, I reorganized the content into clear categories so it would feel manageable.',
      'That structure became the template the program still uses.',
      'What I took from it is simple. When someone genuinely asks what you think, the kind thing is to tell them, and then help with the next step.',
    ],
  },
]
