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
      'Led and supervised a team of Resident Assistants, setting expectations, coaching them on their performance and their programming, and acting as their first point of support when a situation with a resident became difficult.',
      'Acted as a business partner to Public Safety, Counseling Services and Student Conduct on sensitive staff and resident matters, sharing information appropriately, documenting concerns, and working toward fair and consistent outcomes under university policy.',
      'Reviewed attendance data for RA-led programming, compared turnout across events to find where engagement was slipping, and coached the team on changes that lifted participation across a community of more than 3,000 residents.',
      'Recruited, interviewed and onboarded new RA staff each semester, preparing offer letters, running orientation and training, and keeping records, check-ins and housing charges accurate in StarRez and Excel.',
      'Handled confidential information with discretion as a mandatory Title IX reporter and Campus Security Authority, applying policy carefully and escalating reports through the proper channels.',
    ],
  },
  {
    id: 'aramark',
    dates: 'Oct 2024 to May 2025',
    accent: 'blue',
    title: 'Student Manager',
    organization: 'Aramark',
    place: 'Connecticut',
    bullets: [
      'Led and coached a team of 10, training them on workflows and holding a clear standard for performance and accountability, which improved operational efficiency by 20%.',
      'Built Excel dashboards and KPI reports using pivot tables and advanced formulas to track inventory against demand and surface the planning gaps that kept repeating.',
      'Reduced inventory shortages by 30% through demand forecasting and a reworked reorder and replenishment process.',
      'Coordinated with suppliers to resolve delivery discrepancies and data issues, cutting delivery delays by 20% with a redesigned logistics schedule.',
      'Reduced invoice documentation errors by 25% by standardizing data entry workflows and processing protocols, which kept transactions accurate and compliant.',
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
      'Served as the go-to HR generalist for more than 20 client companies, advising employees and hiring managers on everyday people questions, HR policy and next steps, and building trusted relationships across every account.',
      'Supported employee relations matters from start to finish, listening to concerns, documenting issues clearly, advising managers on how to respond, and escalating complex or sensitive cases so they were resolved fairly and consistently.',
      'Ran onboarding and full-cycle talent processes for 8 to 10 open roles at a time, from screening and interviews through offers and new hire paperwork, averaging 3 to 5 placements a month.',
      'Maintained employee records and onboarding files in BambooHR and built Excel trackers for hiring progress, time-to-hire and placements, using the data to spot bottlenecks and report status to client stakeholders.',
      'Redesigned the onboarding and hiring coordination workflow based on what the tracking data showed, cutting time-to-hire by 30% and lifting client satisfaction by 25%.',
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
