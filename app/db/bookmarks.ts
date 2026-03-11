export enum Category {
  article = "article",
  resource = "resource",
  tool = "tool",
  video = "video",
}

export interface Bookmark {
  title: string;
  url: string;
  category: Category;
  description: string;
  icon?: string;
}

export const bookmarks: Bookmark[] = [
  {
    title:
      "Trust (is) the process: Why following a framework doesn't guarantee good results",
    url: "https://uxdesign.cc/trust-is-the-process-why-following-a-framework-doesnt-guarantee-good-results-fa933c4304cd",
    category: Category.article,
    description: "Process without judgment is ritual.",
    icon: "/static/bookmarks/uxdesign.jpeg",
  },
  {
    title: "Rethinking the Technical Interview",
    url: "https://www.youtube.com/watch?v=H2OjewTu_fY",
    category: Category.video,
    description: "Highlight strengths, not algorithms.",
    icon: "/static/bookmarks/theo.jpg",
  },
  {
    title: "Stick to boring architecture for as long as possible - Addy Osmani",
    url: "https://addyo.substack.com/p/stick-to-boring-architecture-for",
    category: Category.article,
    description: "Stable foundations over shiny tools.",
    icon: "/static/bookmarks/addyo.webp",
  },
  {
    title: "Introduction to Modern Product Discovery - Teresa Torres",
    url: "https://www.youtube.com/watch?v=l7-5x0ra2tc",
    category: Category.video,
    description: "How product discovery has evolved.",
    icon: "/static/bookmarks/productized.jpg",
  },
  {
    title: "We Don't Sell Saddles Here - Stewart Butterfield",
    url: "https://medium.com/@stewart/we-dont-sell-saddles-here-4c59524d650d",
    category: Category.article,
    description: "Sell the transformation, not the product.",
    icon: "/static/bookmarks/medium.svg",
  },
  {
    title: "What is Jobs-to-be-Done? - Tony Ulwick",
    url: "https://www.youtube.com/watch?v=Et4H4Ty1qhQ",
    category: Category.video,
    description: "The JTBD framework in a nutshell.",
    icon: "/static/bookmarks/strategyn.jpg",
  },
  {
    title: "How to Write a Product Strategy in 1 Day / 1 Week / 1 Month",
    url: "https://www.news.aakashg.com/p/strategy-in-1-day-week-month",
    category: Category.article,
    description: "Strategy at different time scales.",
    icon: "/static/bookmarks/aakashg.png",
  },
  {
    title: "The Guide to Product Analytics - Mixpanel",
    url: "https://mixpanel.com/content/guide-to-product-analytics/",
    category: Category.resource,
    description: "Practical guide with hands-on examples.",
    icon: "/static/bookmarks/mixpanel.png",
  },
  {
    title: "The Dangerous Animals of Product Management",
    url: "https://www.productboard.com/blog/dangerous-animals-product-management-infographic/",
    category: Category.article,
    description: "A humorous field guide to PM archetypes.",
    icon: "/static/bookmarks/productboard.svg",
  },
  {
    title: "Just for Fun. No, Really.",
    url: "https://justforfunnoreally.dev/",
    category: Category.resource,
    description: "Sometimes that's reason enough.",
  },
  {
    title: "Becoming A Product-Driven, Not A Sales-Driven, Company",
    url: "https://www.forbes.com/sites/forbesbusinesscouncil/2020/08/28/becoming-a-product-driven-not-a-sales-driven-company/?sh=6e3ffb177fa8",
    category: Category.article,
    description: "Product-led over sales-led for the long run.",
    icon: "/static/bookmarks/forbes.svg",
  },
  {
    title: "Why smaller websites shouldn't bother with A/B testing",
    url: "https://uxplanet.org/why-smaller-websites-shouldnt-bother-with-a-b-testing-5f28b8b1a14d",
    category: Category.article,
    description: "Not every tool fits every scale.",
    icon: "/static/bookmarks/uxplanet.png",
  },
  {
    title: "The Product Manifesto",
    url: "https://www.productmanifesto.com/",
    category: Category.resource,
    description: "10 principles for better products.",
    icon: "/static/bookmarks/the-product-manifesto.png",
  },
  {
    title: "Untools",
    url: "https://untools.co/",
    category: Category.resource,
    description: "Thinking tools for problem solving.",
    icon: "/static/bookmarks/untools.png",
  },
  {
    title: "Stratechery",
    url: "https://stratechery.com/",
    category: Category.resource,
    description: "Tech industry analysis and insights.",
    icon: "/static/bookmarks/stratechery.png",
  },
  {
    title: "Ditch your personas. Here are 17 alternatives you can use",
    url: "https://medium.com/angi-studio/ditch-your-personas-here-are-17-alternatives-you-can-use-44a285840e5d",
    category: Category.article,
    description: "Better ways to communicate research.",
    icon: "/static/bookmarks/medium.svg",
  },
  {
    title: "Startup Failure Rate",
    url: "https://www.failory.com/blog/startup-failure-rate",
    category: Category.article,
    description: "90% fail. Here's why.",
    icon: "/static/bookmarks/failory.png",
  },
  {
    title: "UX Methods Bank",
    url: "https://uxmastery.com/resources/techniques/",
    category: Category.resource,
    description: "Collection of UX methods and techniques.",
    icon: "/static/bookmarks/uxmastery.png",
  },
  {
    title: "UX Project Checklist",
    url: "https://uxchecklist.github.io/",
    category: Category.resource,
    description: "So you don't forget anything.",
    icon: "/static/bookmarks/ux-project-checklist.png",
  },
  {
    title: "The Next Generation of Developer-First Products",
    url: "https://www.youtube.com/watch?v=ja-Pr58FCIQ",
    category: Category.video,
    description: "Zeno Rocha on the future of dev tools.",
    icon: "/static/bookmarks/zeno-rocha.png",
  },
  {
    title: "UX Design Methods & Deliverables",
    url: "https://uxdesign.cc/ux-design-methods-deliverables-657f54ce3c7d",
    category: Category.article,
    description: "Common methods and deliverables.",
    icon: "/static/bookmarks/uxdesign.jpeg",
  },
  {
    title: "Sample Size Calculator",
    url: "https://www.checkmarket.com/sample-size-calculator",
    category: Category.tool,
    description: "How many respondents do you need.",
    icon: "/static/bookmarks/sample-size-calculator.jpeg",
  },
  {
    title: "Mission → Vision → Strategy → Goals → Roadmap → Task",
    url: "https://open.substack.com/pub/lenny/p/mission-vision-strategy-goals-roadmap?utm_campaign=post&utm_medium=web",
    category: Category.article,
    description: "As taught by Ocean's Eleven.",
    icon: "/static/bookmarks/mission-vision-strategy-goals-roadmap.png",
  },
  {
    title: "How to Create Your Product Strategy",
    url: "https://www.youtube.com/watch?v=11b2JdeHoGM",
    category: Category.video,
    description: "Dan Olsen on lean product strategy.",
    icon: "/static/bookmarks/dan-olsen.png",
  },
  {
    title: "15+ examples of successful MVPs",
    url: "https://www.rst.software/blog/15-examples-of-successful-mvps",
    category: Category.article,
    description: "Amazon, Dropbox, Spotify — how they started.",
    icon: "/static/bookmarks/15-examples-of-successful-mvps.png",
  },
  {
    title: "Design Principles",
    url: "https://principles.design/",
    category: Category.resource,
    description: "Open source collection of design principles.",
    icon: "/static/bookmarks/design-principles.png",
  },
];
