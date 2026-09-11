import { Reveal } from '../components/ui/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { site } from '../content/site'
import { AboutSection } from '../sections/home/AboutSection'
import { ExperienceSection } from '../sections/home/ExperienceSection'
import { HeroSection } from '../sections/home/HeroSection'
import { InfoCardsSection } from '../sections/home/InfoCardsSection'
import { NotesTeaserSection } from '../sections/home/NotesTeaserSection'
import { NumbersSection } from '../sections/home/NumbersSection'
import { ProcessSection } from '../sections/home/ProcessSection'
import { SelectedWorkSection } from '../sections/home/SelectedWorkSection'
import { TestimonialsSection } from '../sections/home/TestimonialsSection'

export function HomePage() {
  usePageMeta(site.metaTitle, site.metaDescription)

  return (
    <>
      <HeroSection />
      <InfoCardsSection />
      <Reveal as="div">
        <SelectedWorkSection />
      </Reveal>
      <ProcessSection />
      <NumbersSection />
      <Reveal as="div">
        <ExperienceSection />
      </Reveal>
      <Reveal as="div">
        <AboutSection />
      </Reveal>
      <Reveal as="div">
        <NotesTeaserSection />
      </Reveal>
      <Reveal as="div" delayMs={80}>
        <TestimonialsSection />
      </Reveal>
    </>
  )
}
