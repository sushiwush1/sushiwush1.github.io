import type { ComponentType, SVGProps } from 'react'
import type { DoodleName, ProcessIconName } from '../../content/types'
import {
  BookOpen,
  Calendar,
  Clipboard,
  CoffeeCup,
  Compass,
  CurvedArrow,
  Envelope,
  Handshake,
  Heart,
  Lightbulb,
  Magnifier,
  PaperPlane,
  PeopleGroup,
  Rainbow,
  Sparkle,
  SpeechBubble,
  Squiggle,
  Star,
  Target,
  Trophy,
} from './Doodles'
import { Coordinate, FollowThrough, Listen, Screen } from './ProcessIcons'

export {
  BookOpen,
  Calendar,
  Clipboard,
  CoffeeCup,
  Compass,
  CurvedArrow,
  Envelope,
  Handshake,
  Heart,
  Lightbulb,
  Magnifier,
  PaperPlane,
  PeopleGroup,
  Rainbow,
  Sparkle,
  SpeechBubble,
  Squiggle,
  Star,
  Target,
  Trophy,
} from './Doodles'
export { Coordinate, FollowThrough, Listen, Screen } from './ProcessIcons'

export const doodleMap: Record<DoodleName, ComponentType<SVGProps<SVGSVGElement>>> = {
  Sparkle,
  Star,
  Clipboard,
  Handshake,
  SpeechBubble,
  PaperPlane,
  Lightbulb,
  Calendar,
  Heart,
  Envelope,
  PeopleGroup,
  Magnifier,
  Target,
  CoffeeCup,
  Squiggle,
  CurvedArrow,
  Rainbow,
  BookOpen,
  Trophy,
  Compass,
}

export const processIconMap: Record<ProcessIconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  Listen,
  Screen,
  Coordinate,
  FollowThrough,
}
