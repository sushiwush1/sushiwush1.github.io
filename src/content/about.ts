import type { Capability, OutsideWorkItem, ToolGroup } from './types'

export const about = {
  anchorId: 'about',
  greeting: 'Hey!',
  heading: "That's me.",
  paragraphs: [
    "I'm Kanishka. I grew up in India, studied psychology at Devi Ahilya Vishwavidyalaya in Indore, and spent close to two years as the go-to HR generalist for more than 20 client companies at Sapphire Management Consultancy.",
    "I came to the United States when I was twenty for my Master's in Industrial-Organizational Psychology at the University of Hartford. Figuring everything out on my own, from taxes to commuting to how people here talk to each other, has taught me a lot.",
    'Honestly, I love people. The part of HR I care about most is being the person employees and managers come to, and using what the numbers show to make the process around them work better. I am a fast learner.',
  ],
  toolsHeading: 'Tools I use',
  toolGroups: [
    { title: 'HR and records', accent: 'blue', tools: ['BambooHR', 'StarRez', 'WebTMA'] },
    {
      title: 'Microsoft',
      accent: 'green',
      tools: [
        'Excel, including pivot tables and VLOOKUPs',
        'Word',
        'PowerPoint',
        'Outlook',
        'Teams',
        'SharePoint',
        'Power BI',
      ],
    },
    { title: 'AI tools', accent: 'pink', tools: ['Claude', 'Microsoft Copilot', 'ChatGPT'] },
  ] satisfies ToolGroup[],
  capabilitiesHeading: 'What I can help with',
  capabilitiesIntro:
    'The work I have done so far, across **HR generalist support**, **employee relations** and **people programs**.',
  capabilities: [
    { label: 'Employee relations', accent: 'pink', doodle: 'Heart' },
    { label: 'Manager partnership', accent: 'blue', doodle: 'Handshake' },
    { label: 'Onboarding and talent processes', accent: 'green', doodle: 'PaperPlane' },
    { label: 'Employee engagement', accent: 'yellow', doodle: 'PeopleGroup' },
    { label: 'Team leadership and coaching', accent: 'purple', doodle: 'Trophy' },
    { label: 'HR metrics and reporting', accent: 'powder', doodle: 'Target' },
    { label: 'Policy application', accent: 'lime', doodle: 'BookOpen' },
    { label: 'Confidential reporting', accent: 'red', doodle: 'Compass' },
    { label: 'Process improvement', accent: 'blue', doodle: 'Lightbulb' },
  ] satisfies Capability[],
  outsideHeading: 'Outside of work',
  outside: [
    {
      title: 'Founded Hold Space',
      text: 'During my undergrad I founded a mental health awareness club called Hold Space and served as its president.',
      accent: 'powder',
      doodle: 'Heart',
    },
    {
      title: 'Led our Valorant team',
      text: 'At the University of Hartford I was team manager and captain of our club esports Valorant team.',
      accent: 'purple',
      doodle: 'Trophy',
    },
    {
      title: 'Soccer and field hockey',
      text: 'I played soccer for my university in India, and I have played soccer and field hockey at state and national level.',
      accent: 'lime',
      doodle: 'Star',
    },
  ] satisfies OutsideWorkItem[],
}
