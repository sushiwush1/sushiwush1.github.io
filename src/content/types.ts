import type { Accent } from '../components/ui/accent'

export type DoodleName =
  | 'Sparkle'
  | 'Star'
  | 'Clipboard'
  | 'Handshake'
  | 'SpeechBubble'
  | 'PaperPlane'
  | 'Lightbulb'
  | 'Calendar'
  | 'Heart'
  | 'Envelope'
  | 'PeopleGroup'
  | 'Magnifier'
  | 'Target'
  | 'CoffeeCup'
  | 'Squiggle'
  | 'CurvedArrow'
  | 'Rainbow'
  | 'BookOpen'
  | 'Trophy'
  | 'Compass'

export type ProcessIconName = 'Listen' | 'Screen' | 'Coordinate' | 'FollowThrough'

export interface NavLink {
  label: string
  to: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'linkedin' | 'email'
}

export interface Sticker {
  label: string
  accent: Accent
  doodle: DoodleName
  position: 'top-left' | 'mid-left' | 'top-right' | 'mid-right'
  rotate: number
}

export interface InfoCardItem {
  title: string
  text: string
  to: string
  accent: Accent
  doodle: DoodleName
}

export interface Fact {
  value: string
  label: string
  accent: Accent
}

export interface ProcessStep {
  title: string
  text: string
  accent: Accent
  icon: ProcessIconName
}

export interface ExperienceItem {
  id: string
  dates: string
  accent: Accent
  title: string
  organization: string
  place: string
  bullets: string[]
}

export interface EducationItem {
  id: string
  dates: string
  accent: Accent
  degree: string
  school: string
  place: string
  details: string[]
}

export interface WorkStep {
  title: string
  text: string
}

export interface WorkItem {
  slug: string
  title: string
  tags: string
  summary: string
  accent: Accent
  doodles: DoodleName[]
  where: string
  role: string
  when: string
  context: string[]
  steps: WorkStep[]
  outcome: string[]
}

export interface NoteItem {
  slug: string
  title: string
  date: string
  readingTime: string
  excerpt: string
  accent: Accent
  doodle: DoodleName
  body: string[]
}

export interface Capability {
  label: string
  accent: Accent
  doodle: DoodleName
}

export interface ToolGroup {
  title: string
  accent: Accent
  tools: string[]
}

export interface OutsideWorkItem {
  title: string
  text: string
  accent: Accent
  doodle: DoodleName
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
}
