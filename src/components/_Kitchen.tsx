import { Accordion } from './ui/Accordion'
import { ArrowButton } from './ui/ArrowButton'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { CapabilityTag } from './ui/CapabilityTag'
import { CircleBadge } from './ui/CircleBadge'
import { ExperienceCard } from './ui/ExperienceCard'
import { FactPill } from './ui/FactPill'
import { InfoCard } from './ui/InfoCard'
import { PhotoFrame } from './ui/PhotoFrame'
import { PortfolioCard } from './ui/PortfolioCard'
import { ProcessCard } from './ui/ProcessCard'
import { Reveal } from './ui/Reveal'
import { RichText } from './ui/RichText'
import { SectionHeading } from './ui/SectionHeading'
import { SkillBar } from './ui/SkillBar'
import { Sticker } from './ui/Sticker'
import { TextArea } from './ui/TextArea'
import { TextField } from './ui/TextField'
import { accents } from './ui/accent'
import { doodleMap, processIconMap } from './doodles'

const doodleNames = Object.keys(doodleMap) as (keyof typeof doodleMap)[]
const processIconNames = Object.keys(processIconMap) as (keyof typeof processIconMap)[]

/**
 * Dev-only showcase of every component with sample props, for review before
 * pages are composed. Not linked from the site nav.
 */
export function Kitchen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', padding: '3rem 0' }}>
      <section className="container">
        <h1>Component kitchen</h1>
        <p>Every foundation component with sample data. Dev only.</p>
      </section>

      <section className="container">
        <h2>Doodles</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {doodleNames.map((name) => {
            const Doodle = doodleMap[name]
            return (
              <div key={name} style={{ width: 64, textAlign: 'center' }}>
                <div style={{ width: 48, height: 48, margin: '0 auto' }}>
                  <Doodle />
                </div>
                <small>{name}</small>
              </div>
            )
          })}
        </div>
      </section>

      <section className="container">
        <h2>Process icons</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {processIconNames.map((name) => {
            const Icon = processIconMap[name]
            return (
              <div
                key={name}
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  border: '1px solid var(--color-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon />
              </div>
            )
          })}
        </div>
      </section>

      <section className="container">
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button to="/">Default button</Button>
          <Button variant="dark" to="/">
            Dark button
          </Button>
          <Button href="https://example.com">External link</Button>
          <Button onClick={() => undefined}>Click handler</Button>
          {accents.map((accent) => (
            <ArrowButton key={accent} label={`Go, ${accent}`} accent={accent} href="#" />
          ))}
        </div>
      </section>

      <section className="container">
        <h2>Badges and stickers</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {accents.map((accent) => (
            <Badge key={accent} accent={accent}>
              {accent}
            </Badge>
          ))}
        </div>
        <div style={{ position: 'relative', height: 140, marginTop: '1rem' }}>
          <Sticker accent="blue" position={{ top: '10px', left: '10px' }} rotateDeg={-10}>
            No-code Design
          </Sticker>
          <Sticker accent="pink" position={{ top: '40px', left: '200px' }} rotateDeg={8}>
            Web Development
          </Sticker>
        </div>
      </section>

      <section className="container">
        <SectionHeading
          title="Section heading"
          intro="This intro paragraph uses **RichText** for emphasis on a few words."
        />
      </section>

      <section className="container">
        <p>
          <RichText text="Inline **RichText** rendering, with **two** emphasized spans." />
        </p>
      </section>

      <section className="container">
        <h2>Info cards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {(['blue', 'yellow', 'green'] as const).map((accent, index) => (
            <InfoCard
              key={accent}
              doodle={<doodleMap.Clipboard />}
              title={`Card ${index + 1}`}
              text="Short supporting text for this card."
              linkLabel="Learn more"
              href="#"
              accent={accent}
            />
          ))}
        </div>
      </section>

      <section className="container">
        <h2>Portfolio card</h2>
        <PortfolioCard
          title="Sample project"
          meta="Case study, Research"
          summary="A short summary of the work and the outcome it produced."
          buttonLabel="View project"
          to="/work/sample"
          accent="purple"
          media={<doodleMap.Star />}
        />
      </section>

      <section className="container">
        <h2>Process cards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          <ProcessCard
            icon={<processIconMap.Listen />}
            number="(01)"
            title="Listen first"
            text="A sample step description for the process section."
            accent="powder"
          />
          <ProcessCard
            icon={<processIconMap.Screen />}
            number="(02)"
            title="Shape it clearly"
            text="Another sample step description."
            accent="green"
          />
        </div>
      </section>

      <section className="container">
        <h2>Fact pills</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <FactPill value="98%" label="Sample metric label" accent="purple" />
          <FactPill value="15" label="Years of sample data" accent="green" />
        </div>
      </section>

      <section className="container">
        <h2>Experience card</h2>
        <ExperienceCard
          dates="Jan 2024 to Present"
          accent="lime"
          title="Sample Role Title"
          organization="Sample Organization"
          place="Sample City, ST"
          bullets={['First accomplishment bullet.', 'Second accomplishment bullet.']}
        />
      </section>

      <section className="container">
        <h2>Capability tags</h2>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <CapabilityTag label="Sample capability" icon={<doodleMap.Target />} accent="yellow" />
          <CapabilityTag label="Another capability" icon={<doodleMap.Heart />} accent="pink" />
        </div>
      </section>

      <section className="container">
        <h2>Skill bars</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 320 }}>
          <SkillBar label="Sample skill" value="Daily" level={90} accent="blue" />
          <SkillBar label="Another skill" value="Weekly" level={60} accent="green" />
        </div>
      </section>

      <section className="container">
        <h2>Circle badge</h2>
        <CircleBadge text="SAMPLE TEXT · SAMPLE TEXT · " accent="yellow" />
      </section>

      <section className="container">
        <h2>Photo frame</h2>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end' }}>
          <PhotoFrame alt="Sample portrait" variant="circle" />
          <PhotoFrame alt="Sample portrait" variant="blob" accent="yellow" size={280} />
        </div>
      </section>

      <section className="container">
        <h2>Form fields</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 360 }}>
          <TextField label="Name" placeholder="What is your name?" />
          <TextField
            label="Email"
            placeholder="Your email address"
            error="This field is required"
          />
          <TextArea label="Message" placeholder="Tell me about the role" />
        </div>
      </section>

      <section className="container">
        <h2>Accordion</h2>
        <Accordion
          items={[
            { question: 'Sample question one?', answer: 'Sample answer one.' },
            { question: 'Sample question two?', answer: 'Sample answer two.' },
          ]}
        />
      </section>

      <section className="container">
        <h2>Reveal</h2>
        <Reveal>
          <p>This content fades up into view.</p>
        </Reveal>
      </section>
    </div>
  )
}
