interface Job {
  title: string
  company: string
  companyUrl: string
  startDate: string
  endDate?: string
  type: string
  icon: string
}

interface Education {
  title: string
  company: string
  companyUrl: string
  startDate: string
  endDate?: string
  icon: string
  certificateUrl?: string
}

export const jobs: Job[] = [
  {
    title: 'Product Manager',
    company: 'Artiflora',
    companyUrl: 'https://artiflora.mx/',
    startDate: '2020-01-01',
    type: 'Freelance',
    icon: '/static/jobs/artiflora.jpeg',
  },
  {
    title: 'Full Stack Engineer',
    company: 'Palenca (YC 21)',
    companyUrl: 'https://palenca.com/',
    startDate: '2022-01-01',
    endDate: '2022-12-01',
    type: 'Full-Time',
    icon: '/static/jobs/palenca.jpeg',
  },
  {
    title: 'Full Stack Engineer',
    company: 'Bright Inc',
    companyUrl: 'https://thinkbright.mx/',
    startDate: '2021-07-01',
    endDate: '2021-11-01',
    type: 'Full-Time',
    icon: '/static/jobs/bright.png',
  },
  {
    title: 'Full Stack Engineer',
    company: 'Pronto',
    companyUrl: 'https://www.tuprontomx.com/',
    startDate: '2020-02-01',
    endDate: '2021-06-01',
    type: 'Full-Time',
    icon: '/static/jobs/pronto.jpeg',
  },
  {
    title: 'Lead Web Developer',
    company: 'Pixzelle Studio',
    companyUrl: 'https://pixzelle.mx/',
    startDate: '2019-08-01',
    endDate: '2020-01-01',
    type: 'Full-Time',
    icon: '/static/jobs/pixzelle.jpeg',
  },
  {
    title: 'Business Analysis Advisor',
    company: 'BBVA México',
    companyUrl: 'https://www.bbva.mx/',
    startDate: '2018-01-01',
    endDate: '2019-07-01',
    type: 'Full-Time',
    icon: '/static/jobs/bbva.png',
  },
  {
    title: 'Holding Systems Manager',
    company: 'BBVA México',
    companyUrl: 'https://www.bbva.mx/',
    startDate: '2016-12-01',
    endDate: '2018-01-01',
    type: 'Full-Time',
    icon: '/static/jobs/bbva.png',
  },
  {
    title: 'Business Partner',
    company: 'BBVA México',
    companyUrl: 'https://www.bbva.mx/',
    startDate: '2014-03-01',
    endDate: '2016-12-01',
    type: 'Full-Time',
    icon: '/static/jobs/bbva.png',
  },
  {
    title: 'Solutions Analyst',
    company: 'Everis',
    companyUrl: 'https://www.nttdata.com/',
    startDate: '2012-07-01',
    endDate: '2014-03-01',
    type: 'Full-Time',
    icon: '/static/jobs/everis.jpeg',
  },
  {
    title: 'Systems Administrator',
    company: 'Consultoría de Proceso (Kepner-Tregoe México)',
    companyUrl: 'https://www.kepner-tregoe.com.mx/',
    startDate: '2010-03-01',
    endDate: '2012-07-01',
    type: 'Part-Time',
    icon: '/static/jobs/kepner-tregoe.png',
  },
  {
    title: 'Customer Support Engineer',
    company: 'Internet Networks (Aquired by Wingu Networks)',
    companyUrl: 'https://www.wingunetworks.com/',
    startDate: '2009-07-01',
    endDate: '2010-03-01',
    type: 'Part-Time',
    icon: '/static/jobs/internet-networks.png',
  },
]

export const education: Education[] = [
  {
    title: 'Product Manager',
    company: 'Udacity',
    companyUrl: 'https://www.udacity.com/',
    startDate: '2022-06-01',
    endDate: '2022-10-01',
    icon: '/static/education/udacity.jpeg',
    certificateUrl: 'https://graduation.udacity.com/confirm/MH2CEPJR',
  },
  {
    title: 'Chef',
    company: 'ASPIC',
    companyUrl: 'https://aspic.edu.mx/',
    startDate: '2017-01-01',
    endDate: '2018-01-01',
    icon: '/static/education/aspic.jpeg',
  },
  {
    title: 'Computer Systems Engineering',
    company: 'Universidad del Valle de México',
    companyUrl: 'https://www.uvm.edu.mx/',
    startDate: '2007-01-01',
    endDate: '2011-01-01',
    icon: '/static/education/uvm.jpeg',
  },
]
