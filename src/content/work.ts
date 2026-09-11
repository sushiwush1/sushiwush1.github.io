import type { WorkItem } from './types'

export const workPage = {
  heading: 'My work',
  intro:
    'Projects from **residential life** at the University of Hartford and my **counseling internship** in India. Each one is something I did myself or with my team.',
  relatedHeading: 'More work',
  relatedButton: 'See All Work',
  labels: {
    where: 'Where',
    role: 'My role',
    when: 'When',
    context: 'The situation',
    steps: 'What I did',
    outcome: 'What came of it',
    button: 'View Project',
    back: 'All Work',
  },
}

export const work: WorkItem[] = [
  {
    slug: 'ra-training-redesign',
    title: 'Making RA training easier to take in',
    tags: 'Training design, Residential life',
    summary:
      'Our interim director asked for honest feedback on a new Resident Assistant training plan. I shared a concern, then rebuilt the plan into clear categories. It is still the template the program uses.',
    accent: 'yellow',
    doodles: ['BookOpen', 'Lightbulb', 'Sparkle'],
    where: 'University of Hartford, Office of Residential Life',
    role: 'Graduate Assistant',
    when: '2025 to 2026',
    context: [
      'Resident Assistants are full-time students who take on the RA job on top of their classes. Their training has to prepare them for a lot, from community building to handling emergencies.',
      'At a staff meeting, our interim director presented a new training curriculum and asked the team for honest feedback.',
    ],
    steps: [
      {
        title: 'I spoke up',
        text: 'I said the plan would feel overwhelming. It asked students to take in a large amount of information all at once, on top of everything else in their week.',
      },
      {
        title: 'We added a calendar as a team',
        text: 'The director asked us to come up with something better. Right there in the meeting, we decided together to spread the training out on a calendar.',
      },
      {
        title: 'I reorganized the content',
        text: 'After the meeting I took the curriculum and grouped it into categories, so each part covered one clear area and nothing felt like one giant block.',
      },
      {
        title: 'I shared it back',
        text: 'I brought the redesigned version to the director so it could be used with the calendar the team had agreed on.',
      },
    ],
    outcome: [
      'The director adopted the category structure, and it is still used as the template for RA training.',
    ],
  },
  {
    slug: 'facility-follow-through',
    title: 'Seeing facility requests through',
    tags: 'Operations, Communication',
    summary:
      'Maintenance problems came in through WebTMA, and parents sometimes called asking for room changes. I followed up with Facility Services myself and kept families informed until each issue was handled.',
    accent: 'blue',
    doodles: ['Clipboard', 'SpeechBubble', 'Handshake'],
    where: 'University of Hartford, Office of Residential Life',
    role: 'Graduate Assistant',
    when: '2025 to 2026',
    context: [
      'With more than 3,000 students living on campus, something always needs fixing. Requests went into a work order system called WebTMA.',
      'Sometimes parents called wanting their student moved to a new room over a problem Facilities could fix quickly.',
    ],
    steps: [
      {
        title: 'Logged the request',
        text: 'I entered each issue in WebTMA with the details Facilities would need.',
      },
      {
        title: 'Followed up directly',
        text: 'I reached out to Facility Services myself to check on tickets and keep them moving.',
      },
      {
        title: 'Talked with families',
        text: 'When parents called about a room change, I explained what was actually wrong and how soon it could be fixed, so they understood their options.',
      },
      {
        title: 'Planned for bigger repairs',
        text: 'For larger problems I worked with Facilities on whether a student needed temporary housing while the repair was done.',
      },
    ],
    outcome: [
      'The aim every time was a straight answer for the family and a real plan for the repair.',
    ],
  },
  {
    slug: 'semester-records',
    title: 'Keeping records right in the busiest weeks',
    tags: 'Data entry, Student records',
    summary:
      'Every semester opening and closing brought a wave of check-ins, housing charges and room condition reports. I handled the data in StarRez and Excel, including sensitive student information.',
    accent: 'green',
    doodles: ['Calendar', 'Magnifier', 'Star'],
    where: 'University of Hartford, Office of Residential Life',
    role: 'Graduate Assistant',
    when: '2025 to 2026',
    context: [
      'The start and end of each semester are the busiest days in residential life. Thousands of students move in or out within a short window.',
      'Every room needs a condition report, every check-in needs a record, and housing charges need to land on the right student account.',
    ],
    steps: [
      {
        title: 'Checked students in',
        text: 'I checked students in and recorded their details in StarRez, the housing software the university uses.',
      },
      {
        title: 'Entered housing charges',
        text: 'I added housing-related charges to student accounts, which meant working carefully with private information.',
      },
      {
        title: 'Handled room condition reports',
        text: 'I entered room condition report data in Excel in high volume at opening and closing.',
      },
      {
        title: 'Covered the front desk',
        text: 'Across the year I spent about 16 hours a week at the front desk, handling room verifications and room change requests.',
      },
    ],
    outcome: [
      'Careful records are what let everything else in a residence hall run smoothly, especially in the weeks when everyone arrives or leaves at once.',
    ],
  },
  {
    slug: 'on-duty',
    title: 'Being on duty for a campus community',
    tags: 'Mediation, Confidential reporting',
    summary:
      'On a weekly duty rotation I responded to emergencies, wellness checks and conflicts between roommates. As a Title IX reporter and Campus Security Authority, I knew when and how to escalate.',
    accent: 'pink',
    doodles: ['Heart', 'PeopleGroup', 'Compass'],
    where: 'University of Hartford, Office of Residential Life',
    role: 'Graduate Assistant',
    when: '2025 to 2026',
    context: [
      'Residential life staff are the first people students call when something goes wrong, at any hour.',
      'Some of those situations are sensitive, and the university designates certain staff to report them properly.',
    ],
    steps: [
      {
        title: 'Took duty shifts',
        text: 'I was part of a weekly duty rotation covering campus emergencies, wellness checks and policy violations.',
      },
      {
        title: 'Mediated roommate conflicts',
        text: 'I sat down with roommates who were struggling to live together and helped them find something workable.',
      },
      {
        title: 'Documented incidents',
        text: 'I wrote up each incident clearly so the right people had an accurate record.',
      },
      {
        title: 'Reported and escalated',
        text: 'As a mandatory Title IX reporter and Campus Security Authority, I worked with Public Safety, Counseling Services and Student Conduct.',
      },
    ],
    outcome: [
      'This is the part of the role closest to employee relations work: listening to both sides, writing things down accurately, and knowing when a situation needs to go further.',
    ],
  },
  {
    slug: 'nidaan-engagement',
    title: 'Engagement activities for children with ADHD and ASD',
    tags: 'Program design, Counseling',
    summary:
      'During my counseling internship I co-facilitated more than 15 behavioral therapy sessions and designed engagement activities that the centre went on to adopt.',
    accent: 'lime',
    doodles: ['Rainbow', 'Star', 'Sparkle'],
    where: 'NIDAAN Inclusive School and Therapy Centre, India',
    role: 'Counseling Psychology Intern',
    when: 'Jan 2024 to Mar 2024',
    context: [
      'NIDAAN is an inclusive school and therapy centre that works with children on the autism spectrum and children with ADHD.',
      'I joined the clinical team as a counseling psychology intern.',
    ],
    steps: [
      {
        title: 'Co-facilitated sessions',
        text: 'I helped run more than 15 behavioral therapy sessions for children on the autism spectrum.',
      },
      {
        title: 'Designed activities',
        text: 'I created engagement activities for children with ADHD and ASD.',
      },
      {
        title: 'Supported assessment',
        text: 'I conducted mental status exams under the clinical team.',
      },
      {
        title: 'Joined treatment planning',
        text: 'I contributed to treatment planning alongside the clinicians.',
      },
    ],
    outcome: ['The centre adopted the engagement activities I designed.'],
  },
]
