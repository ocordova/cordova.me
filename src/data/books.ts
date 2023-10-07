interface Book {
  title: string
  author: string
  cover: string
  goodReadsUrl: string
  amazonUrl: string
  literalUrl: string
  review: string
}

export const books: Book[] = [
  {
    title: 'Build: An Unorthodox Guide to Making Things Worth Making',
    author: 'Tony Fadell',
    cover: '/static/books/build.jpeg',
    goodReadsUrl: 'https://www.goodreads.com/book/show/59696349-build',
    amazonUrl: 'https://www.amazon.com/gp/product/1787634116/',
    literalUrl: 'https://literal.club/book/tony-fadell-build-78c5y',
    review:
      "A captivating fusion of autobiography, startup savvy, and professional insights. It's a guide to crafting ideas, nurturing teams, and building customer-driven products and successful organizations.",
  },
  {
    title: 'Simple Numbers, Straight Talk, Big Profits!',
    author: 'Greg Crabtre',
    cover: '/static/books/simple-numbers-straight-talk-big-profits.jpeg',
    goodReadsUrl:
      'https://www.goodreads.com/book/show/12661583-simple-numbers-straight-talk-big-profits',
    amazonUrl:
      'https://www.amazon.com/Simple-Numbers-Straight-Talk-Profits/dp/1608320561',
    literalUrl:
      'https://literal.club/book/simple-numbers-straight-talk-big-profits-b7wgh',
    review:
      'A fantastic book for gaining insight into the financial aspects of a business and the key financial indicators to evaluate the overall health of the business.',
  },
  {
    title:
      'Continuous Discovery Habits: Discover Products that Create Customer Value and Business Value',
    author: 'Teresa Torres',
    cover: '/static/books/continuous-discovery-habits.jpg',
    goodReadsUrl:
      'https://www.goodreads.com/book/show/58046715-continuous-discovery-habits',
    amazonUrl: 'https://www.amazon.com/dp/B09XYX49KX',
    literalUrl: 'https://literal.club/book/continuous-discovery-habits-3yeeo',
    review:
      'Highlights the significance of cross-functional teams, weekly customer interviews, and using The Opportunity Solution Tree tool to connect business goals, customer needs, and ideas for experimentation.',
  },
  {
    title: '14 Habits of Highly Productive Developers',
    author: 'Zeno Rocha',
    cover: '/static/books/14-habits-of-highly-productive-developers.jpeg',
    goodReadsUrl:
      'https://www.goodreads.com/book/show/54438214-14-habits-of-highly-productive-developers',
    amazonUrl:
      'https://www.amazon.com/14-Habits-Highly-Productive-Developers-ebook/dp/B08BF74RRG',
    literalUrl:
      'https://literal.club/book/14-habits-of-highly-productive-developers-6qd8k',
    review:
      "It's a concise and practical guide that provides actionable tips for becoming a better software engineer, as well as valuable insights from experienced industry developers.",
  },
  {
    title:
      'Running Lean: Iterate from Plan A to a Plan That Works (3rd Edition)',
    author: 'Ash Maurya',
    cover: '/static/books/running-lean.jpeg',
    goodReadsUrl: 'https://www.goodreads.com/book/show/13078769-running-lean',
    amazonUrl: 'https://www.amazon.com/gp/product/1449305172/',
    literalUrl: 'https://literal.club/book/running-lean-rv1q0',
    review:
      'A practical guide for validating business ideas, achieving product market fit, and launching quickly. Offers clear framework for testing and iterating products, and identifying right problems for customers.',
  },
  {
    title: 'Hooked: How to Build Habit-Forming Products',
    author: 'Nir Eyal',
    cover: '/static/books/hooked.jpeg',
    goodReadsUrl: 'https://www.goodreads.com/book/show/22668729-hooked',
    amazonUrl: 'https://www.amazon.com/gp/product/1591847788/',
    literalUrl: 'https://literal.club/book/hooked-u5dpd',
    review:
      'Learn how to design habit-forming products with a valuable guide that explores the psychology of habit formation and provides actionable strategies for ethical and user-focused product design.',
  },
  {
    title:
      'The Mom Test: How to talk to customers & learn if your business is a good idea when everyone is lying to you',
    author: 'Rob Fitzpatrick',
    cover: '/static/books/the-mom-test.jpeg',
    goodReadsUrl: 'https://www.goodreads.com/book/show/52283963-the-mom-test',
    amazonUrl: 'https://www.amazon.com/gp/product/B01H4G2J1U/',
    literalUrl: 'https://literal.club/book/the-mom-test-79co9',
    review:
      'A must-read for anyone who works at startups, builds products, talks to customers, wants to sell a product or idea effectively, and wants to gather customer feedback.',
  },
  {
    title:
      'Think Like a UX Researcher: How to Observe Users, Influence Design, and Shape Business Strategy',
    author: 'David Travis & Philip Hodgson',
    cover: '/static/books/think-like-a-ux-researcher.jpeg',
    goodReadsUrl:
      'https://www.goodreads.com/book/show/42362866-think-like-a-ux-researcher',
    amazonUrl: 'https://www.amazon.com/gp/product/1138365297/',
    literalUrl: 'https://literal.club/book/think-like-a-ux-researcher-jzg85',
    review:
      'An incredibly dense and well-structured book that provides insights into the principles and methods of user experience research, enabling the collection of comprehensive attitudinal and behavioral data.',
  },
  {
    title:
      'Escaping the Build Trap: How Effective Product Management Creates Real Value',
    author: 'Melissa Perri',
    cover: '/static/books/escaping-the-build-trap.jpeg',
    goodReadsUrl:
      'https://www.goodreads.com/book/show/42611483-escaping-the-build-trap',
    amazonUrl: 'https://www.amazon.com/gp/product/B07K3QBWG1/',
    literalUrl: 'https://literal.club/book/escaping-the-build-trap-cumnl',
    review:
      'This book is essential for any organization looking to become product-led. It provides a clear and actionable framework for shifting from a build-driven culture to a product-driven one',
  },
  {
    title: 'Inspired: How to Create Tech Products Customers Love (2nd Edition)',
    author: ' Marty Cagan',
    cover: '/static/books/inspired.jpeg',
    goodReadsUrl: 'https://www.goodreads.com/book/show/35249663-inspired',
    amazonUrl: 'https://www.amazon.com/gp/product/1119387507',
    literalUrl: 'https://literal.club/book/inspired-qoqb4',
    review:
      'It provides valuable insights from  industry leaders like Google, Apple, and Amazon on their approach to product development and the vital role of product managers.',
  },
  {
    title:
      'The Lean Product Playbook: How to Innovate with Minimum Viable Products and Rapid Customer Feedback',
    author: 'Dan Olsen',
    cover: '/static/books/lean-product-playbook.jpeg',
    goodReadsUrl:
      'https://www.goodreads.com/book/show/25374501-the-lean-product-playbook',
    amazonUrl: 'https://www.amazon.com/gp/product/B00SZ638C8/',
    literalUrl: 'https://literal.club/book/the-lean-product-playbook-0eqhq',
    review:
      'Lean methodology guide for product managers, with real-world examples, practical tips, and easy-to-follow steps on idea validation, feature prioritization, and success measurement.',
  },
]
