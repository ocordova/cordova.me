export interface Tool {
  name: string
  description: string
  url: string
  icon?: string
}

export const categories = [
  {
    name: 'Coding',
    tools: [
      {
        name: 'Dracula Theme',
        description:
          'I love this dark theme. I use it in VSCode, Warp, Telegram, Slack, etc.',
        url: 'https://draculatheme.com/',
        icon: '/static/tools/dracula.png',
      },
      {
        name: 'FiraCode',
        description:
          "Great monospaced font. It's easier to read and has ligatures.",
        url: 'https://github.com/tonsky/FiraCode',
        icon: '/static/tools/fira-code.png',
      },
      {
        name: 'GitHub Copilot',
        description:
          'The code completion is impressive, helping you code faster, write tests, and learn new things.',
        url: 'https://copilot.github.com/',
        icon: '/static/tools/github-copilot.png',
      },

      {
        name: 'Visual Studio Code',
        description:
          "After using Sublime for many years, I switched to VSCode like everyone else. It's fast, lightweight, and has numerous extensions.",
        url: 'https://code.visualstudio.com/',
        icon: '/static/tools/vscode.png',
      },
    ],
  },
  {
    name: 'Terminal',
    tools: [
      {
        name: 'Warp',
        description:
          "I used to use Hyper with Fig, but a friend recommended Warp. It's fast, has smooth scrolling, and offers efficient bookmark management.",
        url: 'https://warp.dev/',
        icon: '/static/tools/warp.png',
      },
    ],
  },
  {
    name: 'Design',
    tools: [
      {
        name: 'Adobe Creative Cloud',
        description:
          "I use Photoshop, Illustrator, InDesign and After Effects. I'm used to the Adobe shortcuts and makes me work faster.",
        url: 'https://www.adobe.com/creativecloud.html',
        icon: '/static/tools/adobe-creative-cloud.png',
      },
      {
        name: 'Figma',
        description:
          'I use Figma for interface and web design and Adobe Creative Cloud for everything else.',
        url: 'https://www.figma.com/',
        icon: '/static/tools/figma.png',
      },
    ],
  },
  {
    name: 'Apps',
    tools: [
      {
        name: 'Cron',
        description: 'Best calendar app for Mac and mobile.',
        url: 'https://cron.com/',
        icon: '/static/tools/cron.png',
      },
      {
        name: 'DaisyDisk',
        description:
          'I use this app to clean my Mac, which displays the sizes of folders and files.',
        url: 'https://daisydiskapp.com/',
        icon: '/static/tools/daisy-disk.png',
      },
      {
        name: 'Dashlane',
        description:
          'I prefer Dashlane over LastPass and 1Password for my password manager due to its superior UI and UX.',
        url: 'https://www.dashlane.com/',
        icon: '/static/tools/dashlane.png',
      },

      {
        name: 'Insomnia',
        description:
          "I prefer Insomnia over Postman. It's faster and has a better UI.",
        url: 'https://insomnia.rest/',
        icon: '/static/tools/insomnia.png',
      },

      {
        name: 'LinearMouse',
        description:
          "It helps me adjust my mouse's speed and acceleration beyond Mac's settings without using the terminal.",
        url: 'https://linearmouse.app/',
        icon: '/static/tools/linear-mouse.png',
      },
      {
        name: 'Magnet',
        description:
          "I'm used to how Windows or GNOME manage their windows, , and it helps me organize them by dragging to the edges or using keyboard shortcuts.",
        url: 'https://magnet.crowdcafe.com/',
        icon: '/static/tools/magnet.png',
      },
      {
        name: 'Obsidian',
        description:
          "I use it to take notes, and it's great for organizing and managing user and market research.",
        url: 'https://obsidian.md/',
        icon: '/static/tools/obsidian.png',
      },
      {
        name: 'Stoplight',
        description:
          "If you work with APIs and OpenAPI, this is a must-have; it's an excellent tool for managing your API documentation.",
        url: 'https://stoplight.io/',
        icon: '/static/tools/stoplight.png',
      },
      {
        name: 'tldraw',
        description:
          'My go to tool for whiteboarding. I used to use Excalidraw.',
        url: 'https://tldraw.com/',
        icon: '/static/tools/tldraw.svg',
      },
      {
        name: 'TickTick',
        description:
          'My current choice for to-do lists. It has a great UI and UX.',
        url: 'https://ticktick.com/',
        icon: '/static/tools/tick_tick.png',
      },
      {
        name: 'TomatoBar',
        description: 'When I find hard to focus, I use the Pomodoro technique.',
        url: 'https://github.com/ivoronin/TomatoBar',
        icon: '/static/tools/tomato-bar.png',
      },
    ],
  },
  {
    name: 'Services',
    tools: [
      {
        name: 'Algolia',
        description:
          'When it comes to incorporating search capabilities into any project, my go-to option is always the same.',
        url: 'https://www.algolia.com/',
        icon: '/static/tools/algolia.png',
      },
      {
        name: 'Cloudflare',
        description:
          'I use Cloudflare to manage my DNS and CDN for all my domains.',
        url: 'https://www.cloudflare.com/',
        icon: '/static/tools/cloudflare.png',
      },
      {
        name: 'Google Domains',
        description:
          "I moved all my domains. It's easy to manage, and they don't charge you for everything.",
        url: 'https://domains.google/',
        icon: '/static/tools/google-domains.png',
      },
      {
        name: 'Google One',
        description:
          "I used to use SugarSync, but it started to have annoying bugs. I moved to Google One, and I'm happy with it.",
        url: 'https://one.google.com/',
        icon: '/static/tools/google-one.png',
      },
      {
        name: 'Grammarly',
        description:
          'It improved my writing skills significantly, and I highly recommend it to non-native English speakers like me.',
        url: 'https://www.grammarly.com/',
        icon: '/static/tools/grammarly.png',
      },
      {
        name: 'hCaptcha',
        description: 'Privacy-focused alternative to Google reCAPTCHA.',
        url: 'https://www.hcaptcha.com/',
        icon: '/static/tools/hcaptcha.svg',
      },
      {
        name: 'Last.fm',
        description:
          'I love to see my music stats. I use Last.fm to track my music listening habits.',
        url: 'https://www.last.fm/',
        icon: '/static/tools/lastfm.png',
      },
      {
        name: 'Linear',
        description:
          'Amazing issue tracker. I use it for my personal and freelance projects. Jira no longer exists for me.',
        url: 'https://linear.app/',
        icon: '/static/tools/linear.png',
      },
      {
        name: 'Literal',
        description: 'I use Literal to track my books and discover new ones.',
        url: 'https://literal.club/',
        icon: '/static/tools/literal.webp',
      },
      {
        name: 'Notion',
        description: 'I use Notion for my personal and project notes.',
        url: 'https://www.notion.so/',
        icon: '/static/tools/notion.png',
      },
      {
        name: 'Odoo',
        description:
          'A comprehensive and efficient solution for managing various aspects of business operations, from accounting, inventory, and manufacturing to HR.',
        url: 'https://www.odoo.com/',
        icon: '/static/tools/odoo.webp',
      },
      {
        name: 'Plausible',
        description:
          'You can make informed decisions without cookies or personal data.',
        url: 'https://plausible.io/',
        icon: '/static/tools/plausible.png',
      },
      {
        name: 'Shopify',
        description:
          'My preferred e-commerce option, Hydrogen/Remix, offers the best developer experience for frontend development.',
        url: 'https://www.shopify.com/',
        icon: '/static/tools/shopify.svg',
      },
      {
        name: 'Trakt',
        description:
          'I use Trakt to track my TV shows and movies watching habits and to discover new content.',
        url: 'https://trakt.tv/',
        icon: '/static/tools/trakt.png',
      },
      {
        name: 'Vercel',
        description:
          'The best developer experience. Here where I host all my websites.',
        url: 'https://vercel.com/',
        icon: '/static/tools/vercel.png',
      },
    ],
  },
  {
    name: 'Screen recording',
    tools: [
      {
        name: 'Kap',
        description:
          'I use Kap to record small videos on my screen and easily share them as mp4 or gifs.',
        url: 'https://getkap.co/',
        icon: '/static/tools/kap.png',
      },
      {
        name: 'Shottr',
        description:
          'I use it to take screenshots of my screen, edit them and share them. Perfect for designers and front-end developers.',
        url: 'https://shottr.cc/',
        icon: '/static/tools/shottr.png',
      },
    ],
  },
  {
    name: 'Setup',
    tools: [
      {
        name: 'MacBook Air M1 (2020)',
        description:
          'The M1 chip is fantastic. It has plenty of power to run all the apps I need, even Adobe CS and Android Studio.',
        url: 'https://www.apple.com/mx/shop/buy-mac/macbook-air/m1-chip',
        icon: '/static/tools/macbook-air-m1.png',
      },
      {
        name: 'Samsung 34" Monitor Ultra WQHD',
        description:
          'Easier to work with two windows or more side by side. Perfect for frontend development and design',
        url: 'https://www.samsung.com/us/computing/monitors/uhd-and-wqhd/34-sj55w-ultra-wqhd-monitor-ls34j550wqnxza/',
        icon: '/static/tools/samsung-monitor.png',
      },
      {
        name: 'Apple Magic Trackpad',
        description:
          "I got used to the gestures on my MacBook. It's a bit expensive, but it's worth it.",
        url: 'https://www.apple.com/shop/product/MMMP3AM/A/magic-trackpad-black-multi-touch-surface',
        icon: '/static/tools/apple-magic-trackpad.png',
      },
      {
        name: 'Apple Magic Keyboard',
        description:
          "I'm not demanding when it comes to keyboards, and this one is comfortable to type, quiet, and combines well with the trackpad :P",
        url: 'https://www.apple.com/shop/product/MK2A3E/A/magic-keyboard-spanish',
        icon: '/static/tools/apple-magic-keyboard.png',
      },
      {
        name: 'Anker 533 USB-C Hub (5-in-1, Slim)',
        description:
          'All I need in one place. I can connect my monitor, external hard drive and ethernet cable.',
        url: 'https://www.anker.com/products/a8338',
        icon: '/static/tools/anker-usb-c-hub.png',
      },
    ],
  },
  {
    name: 'Audio',
    tools: [
      {
        name: 'AirPods Pro (1st gen)',
        description:
          'I use my AirPods Pro for everything. I love the noise cancellation and the transparency mode; I wish they had volume controls and multiple-device support.',
        url: 'https://www.apple.com//airpods-pro/',
        icon: '/static/tools/airpods-pro.png',
      },
    ],
  },
  {
    name: 'Reading',
    tools: [
      {
        name: 'Audible',
        description:
          "I like to listen to audiobooks while I do exercise or while I'm cooking.",
        url: 'https://www.audible.com/',
        icon: '/static/tools/audible.png',
      },
      {
        name: 'Kindle Paperwhite (8 GB)',
        description:
          'It took me years to finally move to an e-reader. Fantastic for text books and long reads.',
        url: 'https://www.amazon.com/Kindle-Paperwhite-adjustable-Ad-Supported/dp/B08KTZ8249',
        icon: '/static/tools/kindle.png',
      },
    ],
  },
]
