import type { EducationItem, ExperienceItem } from './types'

export const experience: ExperienceItem[] = [
  {
    id: 'hartford',
    dates: 'Jul 2025 to May 2026',
    accent: 'purple',
    title: 'Graduate Assistant',
    organization: 'University of Hartford, Office of Residential Life',
    place: 'West Hartford, CT',
    bullets: [
      'Supported daily operations for a residential community of more than 3,000 students, including about 16 hours a week at the front desk, room condition reports, room verifications and room changes.',
      'Checked students in and entered housing charges and sensitive student information in StarRez, and handled high-volume room condition report data in Excel at every semester opening and closing.',
      'Submitted facility requests in WebTMA and followed up with Facility Services directly until they were resolved.',
      'Took a weekly duty rotation covering emergencies, wellness checks, policy violations and roommate mediations, and documented each incident.',
      'Served as a mandatory Title IX reporter and Campus Security Authority, working with Public Safety, Counseling Services and Student Conduct.',
      'Redesigned the RA training curriculum into clear categories, which is still used as the program template.',
      'Planned community programming and staff recognition events, and helped with mid-semester RA hiring and offer letters.',
    ],
  },
  {
    id: 'sapphire',
    dates: 'Aug 2022 to May 2024',
    accent: 'yellow',
    title: 'Human Resources Specialist',
    organization: 'Sapphire Management Consultancy',
    place: 'Indore, India',
    bullets: [
      'Ran full-cycle recruitment across more than 20 client mandates in multiple industries, from sourcing and screening to interviews, offers and onboarding.',
      'Recruited for technology roles including data engineering, product management and software development.',
      'Kept candidate and employee records in BambooHR.',
      'Time-to-hire came down by 30% and client satisfaction ratings rose by 25%.',
    ],
  },
  {
    id: 'nidaan',
    dates: 'Jan 2024 to Mar 2024',
    accent: 'green',
    title: 'Counseling Psychology Intern',
    organization: 'NIDAAN Inclusive School and Therapy Centre',
    place: 'India',
    bullets: [
      'Co-facilitated more than 15 behavioral therapy sessions for children on the autism spectrum.',
      'Designed engagement activities for children with ADHD and ASD that the centre went on to adopt.',
      'Conducted mental status exams and contributed to treatment planning with the clinical team.',
    ],
  },
  {
    id: 'pal',
    dates: 'Apr 2023 to May 2023',
    accent: 'pink',
    title: 'Psychology Intern',
    organization: 'Dr. V.S. Pal, Psychiatrist',
    place: 'India',
    bullets: [
      'Conducted patient interviews that supported mental health assessments.',
      'Observed therapy sessions to build clinical experience in counseling and well-being.',
    ],
  },
]

export const education: EducationItem[] = [
  {
    id: 'ms',
    dates: 'Aug 2024 to May 2026',
    accent: 'blue',
    degree: 'M.S., Industrial-Organizational Psychology',
    school: 'University of Hartford',
    place: 'West Hartford, CT',
    details: [
      'GPA 3.88 out of 4.00',
      'Coursework in Personnel Psychology, Emotional Intelligence in Organizations, Leadership, Organizational Communication, Global Talent Management, Organizational Development, Experimental Design and Advanced Research Methods.',
    ],
  },
  {
    id: 'ba',
    dates: 'Jul 2021 to May 2024',
    accent: 'lime',
    degree: 'B.A., Psychology',
    school: 'Devi Ahilya Vishwavidyalaya, School of Social Sciences',
    place: 'Indore, India',
    details: [
      'Founded and led Hold Space, a mental health awareness club.',
      'Played soccer for the university.',
    ],
  },
]
