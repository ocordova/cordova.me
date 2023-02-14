export enum Category {
  article = 'article',
  resource = 'resource',
  tool = 'tool',
  video = 'video',
}

interface Bookmark {
  title: string
  url: string
  category: Category
  description: string
  icon: string
}

export const bookmarks: Bookmark[] = [
  {
    title: 'Untools',
    url: 'https://untools.co/',
    category: Category.resource,
    description:
      'Collection of thinking tools and frameworks to help you solve problems, make decisions and understand systems.',
    icon: '/static/bookmarks/untools.png',
  },
  {
    title: 'Stratechery',
    url: 'https://stratechery.com/',
    category: Category.resource,
    description: 'Newsletter and podcast with insights on the tech industry',
    icon: '/static/bookmarks/stratechery.png',
  },
  {
    title: 'The Product Manifesto',
    url: 'https://www.productmanifesto.com/',
    category: Category.resource,
    description: '10 principles for building better products',
    icon: '/static/bookmarks/the-product-manifesto.png',
  },
  {
    title: 'Make My Persona',
    url: 'https://www.hubspot.com/make-my-persona',
    category: Category.tool,
    description: 'Create a buyer persona for your product',
    icon: '/static/bookmarks/make-my-persona.png',
  },
  {
    title: 'Startup Failure Rate',
    url: 'https://www.failory.com/blog/startup-failure-rate',
    category: Category.article,
    description:
      '90% of startups fail. In this article, they analyze where this percentage comes from and the main reasons why.',
    icon: '/static/bookmarks/failory.png',
  },
  {
    title: 'Design Thinking toolkit',
    url: 'https://www.innovationchampions.com.au/',
    category: Category.resource,
    description:
      'Identify which state your idea is currently in, then choose the tools you will need to move forward.',
    icon: '/static/bookmarks/design-thinking-toolkit.png',
  },
  {
    title: 'UX Project Checklist',
    url: 'https://uxchecklist.github.io/',
    category: Category.resource,
    description:
      "Start your next UX project with this checklist and don't forget about anything!",
    icon: '/static/bookmarks/ux-project-checklist.png',
  },
  {
    title: 'The Next Generation of Developer-First Products',
    url: 'https://www.youtube.com/watch?v=ja-Pr58FCIQ',
    category: Category.video,
    description:
      'Zeno Rocha talks about the history and future of developer-first products',
    icon: '/static/bookmarks/zeno-rocha.png',
  },
  {
    title: 'Sample Size Calculator',
    url: 'https://www.checkmarket.com/sample-size-calculator',
    category: Category.tool,
    description:
      'Calculate the number of respondents needed in a survey using our free sample size calculator',
    icon: '/static/bookmarks/sample-size-calculator.jpeg',
  },
  {
    title: 'Mission → Vision → Strategy → Goals → Roadmap → Task',
    url: 'https://open.substack.com/pub/lenny/p/mission-vision-strategy-goals-roadmap?utm_campaign=post&utm_medium=web',
    category: Category.article,
    description: 'As taught to us by Oceans Eleven',
    icon: '/static/bookmarks/mission-vision-strategy-goals-roadmap.png',
  },
  {
    title: 'How to Create Your Product Strategy',
    url: 'https://www.youtube.com/watch?v=11b2JdeHoGM',
    category: Category.video,
    description:
      "Dan Olsen, author of the book 'The Lean Product Playbook', shares his insights on how to create a product strategy",
    icon: '/static/bookmarks/dan-olsen.png',
  },
  {
    title: '15+ examples of successful MVPs',
    url: 'https://www.rst.software/blog/15-examples-of-successful-mvps',
    category: Category.article,
    description:
      'Example of the MVPs of top companies like Amazon, Dropbox or Spotify',
    icon: '/static/bookmarks/15-examples-of-successful-mvps.png',
  },
  {
    title: 'Design Principles',
    url: 'https://principles.design/',
    category: Category.resource,
    description: 'An open source collection of Design Principles and methods.',
    icon: '/static/bookmarks/design-principles.png',
  },
]
