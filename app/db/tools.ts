export interface Tool {
  name: string;
  description: string;
  url: string;
  icon?: string;
}

export const categories = [
  {
    name: "Coding",
    tools: [
      {
        name: "0xProto",
        description:
          "I love that in this font the ligatures does not deform the shape of the characters.",
        url: "https://github.com/0xType/0xProto",
        icon: "/static/tools/0xProto.png",
      },
      {
        name: "Dracula Theme",
        description:
          "I love this dark theme. I use it in VSCode, Warp, Telegram, Slack, etc.",
        url: "https://draculatheme.com/",
        icon: "/static/tools/dracula.png",
      },
      {
        name: "GitHub Copilot",
        description:
          "The code completion is impressive, helping you code faster, write tests, and learn new things.",
        url: "https://copilot.github.com/",
        icon: "/static/tools/github-copilot.png",
      },
      {
        name: "Visual Studio Code",
        description:
          "After using Sublime for many years, I switched to VSCode like everyone else. It's fast, lightweight, and has numerous extensions.",
        url: "https://code.visualstudio.com/",
        icon: "/static/tools/vscode.png",
      },
    ],
  },
  {
    name: "Terminal",
    tools: [
      {
        name: "Warp",
        description:
          "I used to use Hyper with Fig, but a friend recommended Warp. It's fast, has smooth scrolling, and offers efficient bookmark management.",
        url: "https://warp.dev/",
        icon: "/static/tools/warp.png",
      },
    ],
  },
  {
    name: "Design",
    tools: [
      {
        name: "Affinity Designer",
        description:
          "Great alternative to Adobe Illustrator. I use it for vector design and illustrations.",
        url: "https://affinity.serif.com/designer/",
        icon: "/static/tools/affinity-designer.png",
      },
      {
        name: "Affinity Photo",
        description:
          "Great alternative to Adobe Photoshop. I use it for photo editing. It has all the features I need and very similar shortcuts.",
        url: "https://affinity.serif.com/photo/",
        icon: "/static/tools/affinity-photo.png",
      },
      {
        name: "Figma",
        description:
          "I use Figma for interface and web design and Adobe Creative Cloud for everything else.",
        url: "https://www.figma.com/",
        icon: "/static/tools/figma.png",
      },
    ],
  },
  {
    name: "Apps",
    tools: [
      {
        name: "Brave",
        description:
          "My default browser. It's faster, secure and has a built-in ad blocker. I just disable almost all the crypto features.",
        url: "https://brave.com/",
        icon: "/static/tools/brave.png",
      },
      {
        name: "DaisyDisk",
        description:
          "I use this app to clean my Mac, which displays the sizes of folders and files.",
        url: "https://daisydiskapp.com/",
        icon: "/static/tools/daisy-disk.png",
      },
      {
        name: "Insomnia",
        description:
          "I prefer Insomnia over Postman. It's faster and has a better UI.",
        url: "https://insomnia.rest/",
        icon: "/static/tools/insomnia.png",
      },

      {
        name: "LinearMouse",
        description:
          "It helps me adjust my mouse's speed and acceleration beyond Mac's settings without using the terminal.",
        url: "https://linearmouse.app/",
        icon: "/static/tools/linear-mouse.png",
      },
      {
        name: "Magnet",
        description:
          "I'm used to how Windows or GNOME manage their windows, , and it helps me organize them by dragging to the edges or using keyboard shortcuts.",
        url: "https://magnet.crowdcafe.com/",
        icon: "/static/tools/magnet.png",
      },
      {
        name: "Obsidian",
        description:
          "I use it to take notes, and it's great for organizing and managing user and market research.",
        url: "https://obsidian.md/",
        icon: "/static/tools/obsidian.png",
      },
      {
        name: "Photoroom",
        description:
          "Amazing tool to automatically remove the background from product photos and replace it with a solid color, it's saves me a lot of time when I need to edit e-commerce photos.",
        url: "https://photoroom.com/",
        icon: "/static/tools/photoroom.png",
      },
      {
        name: "Stoplight",
        description:
          "If you work with APIs and OpenAPI, this is a must-have; it's an excellent tool for managing your API documentation.",
        url: "https://stoplight.io/",
        icon: "/static/tools/stoplight.png",
      },
      {
        name: "TablePlus",
        description:
          "I used to use DBeaver, but I switched to TablePlus when they added a Diagram feature. Overall, the UI is better.",
        url: "https://tableplus.com/",
        icon: "/static/tools/tableplus.png",
      },
      {
        name: "tldraw",
        description:
          "My go to tool for whiteboarding. I used to use Excalidraw.",
        url: "https://tldraw.com/",
        icon: "/static/tools/tldraw.png",
      },
      {
        name: "TickTick",
        description:
          "My current choice for to-do lists. It has a great UI and UX.",
        url: "https://ticktick.com/",
        icon: "/static/tools/tick_tick.png",
      },
      {
        name: "TomatoBar",
        description: "When I find hard to focus, I use the Pomodoro technique.",
        url: "https://github.com/ivoronin/TomatoBar",
        icon: "/static/tools/tomato-bar.png",
      },
    ],
  },
  {
    name: "Services",
    tools: [
      {
        name: "Algolia",
        description:
          "When it comes to incorporating search capabilities into any project, my go-to option is always the same.",
        url: "https://www.algolia.com/",
        icon: "/static/tools/algolia.png",
      },
      {
        name: "Cloudflare",
        description:
          "I use Cloudflare to manage my DNS and CDN for all my domains.",
        url: "https://www.cloudflare.com/",
        icon: "/static/tools/cloudflare.png",
      },
      {
        name: "Fly",
        description:
          "Greatdeveloper experience. It's my go-to option for deploying my projects.",
        url: "https://fly.io/",
        icon: "/static/tools/fly.png",
      },
      {
        name: "hCaptcha",
        description: "Privacy-focused alternative to Google reCAPTCHA.",
        url: "https://www.hcaptcha.com/",
        icon: "/static/tools/hcaptcha.png",
      },
      {
        name: "iCloud+",
        description:
          "I switched to iCloud+ from Dashlane, Google Now, and Google Workspace for its seamless integration with the Apple ecosystem.",
        url: "https://www.apple.com/icloud/",
        icon: "/static/tools/icloud+.png",
      },
      {
        name: "Last.fm",
        description:
          "I love to see my music stats. I use Last.fm to track my music listening habits.",
        url: "https://www.last.fm/",
        icon: "/static/tools/lastfm.png",
      },
      {
        name: "Linear",
        description:
          "Amazing issue tracker. I use it for my personal and freelance projects. Jira no longer exists for me.",
        url: "https://linear.app/",
        icon: "/static/tools/linear.png",
      },
      {
        name: "Literal",
        description: "I use Literal to track my books and discover new ones.",
        url: "https://literal.club/",
        icon: "/static/tools/literal.png",
      },
      {
        name: "Notion",
        description: "I use Notion for my personal and project notes.",
        url: "https://www.notion.so/",
        icon: "/static/tools/notion.png",
      },
      {
        name: "Odoo",
        description:
          "A comprehensive and efficient solution for managing various aspects of business operations, from accounting, inventory, and manufacturing to HR.",
        url: "https://www.odoo.com/",
        icon: "/static/tools/odoo.png",
      },
      {
        name: "Plausible",
        description:
          "You can make informed decisions without cookies or personal data.",
        url: "https://plausible.io/",
        icon: "/static/tools/plausible.png",
      },
      {
        name: "Pulumi",
        description:
          "I love you use general-purpose programming languages to define infrastructure as code instead of HCL like Terraform.",
        url: "https://www.pulumi.com/",
        icon: "/static/tools/pulumi.png",
      },
      {
        name: "Shopify",
        description:
          "My preferred e-commerce option, Hydrogen/Remix, offers the best developer experience for frontend development.",
        url: "https://www.shopify.com/",
        icon: "/static/tools/shopify.png",
      },
      {
        name: "Trakt",
        description:
          "I use Trakt to track my TV shows and movies watching habits and to discover new content.",
        url: "https://trakt.tv/",
        icon: "/static/tools/trakt.png",
      },
    ],
  },
  {
    name: "Screen recording",
    tools: [
      {
        name: "Kap",
        description:
          "I use Kap to record small videos on my screen and easily share them as mp4 or gifs.",
        url: "https://getkap.co/",
        icon: "/static/tools/kap.png",
      },
      {
        name: "Shottr",
        description:
          "I use it to take screenshots of my screen, edit them and share them. Perfect for designers and front-end developers.",
        url: "https://shottr.cc/",
        icon: "/static/tools/shottr.png",
      },
    ],
  },
  {
    name: "Setup",
    tools: [
      {
        name: "MacBook Air M1 (2020)",
        description:
          "The M1 chip is fantastic. It has plenty of power to run all the apps I need, even Adobe CS and Android Studio.",
        url: "https://www.apple.com/mx/shop/buy-mac/macbook-air/m1-chip",
        icon: "/static/tools/macbook-air-m1.png",
      },
      {
        name: 'Samsung 34" Monitor Ultra WQHD',
        description:
          "Easier to work with two windows or more side by side. Perfect for frontend development and design",
        url: "https://www.samsung.com/us/computing/monitors/uhd-and-wqhd/34-sj55w-ultra-wqhd-monitor-ls34j550wqnxza/",
        icon: "/static/tools/samsung-monitor.png",
      },
      {
        name: "Apple Magic Trackpad",
        description:
          "I got used to the gestures on my MacBook. It's a bit expensive, but it's worth it.",
        url: "https://www.apple.com/shop/product/MMMP3AM/A/magic-trackpad-black-multi-touch-surface",
        icon: "/static/tools/apple-magic-trackpad.png",
      },
      {
        name: "Apple Magic Keyboard",
        description:
          "I'm not demanding when it comes to keyboards, and this one is comfortable to type, quiet, and combines well with the trackpad :P",
        url: "https://www.apple.com/shop/product/MK2A3E/A/magic-keyboard-spanish",
        icon: "/static/tools/apple-magic-keyboard.png",
      },
      {
        name: "Anker 533 USB-C Hub (5-in-1, Slim)",
        description:
          "All I need in one place. I can connect my monitor, external hard drive and ethernet cable.",
        url: "https://www.anker.com/products/a8338",
        icon: "/static/tools/anker-usb-c-hub.png",
      },
    ],
  },
  {
    name: "Audio",
    tools: [
      {
        name: "AirPods Pro (2nd gen)",
        description:
          "I use my AirPods Pro for everything. I love the noise cancellation and the transparency mode; I wish they had volume controls and multiple-device support.",
        url: "https://www.apple.com//airpods-pro/",
        icon: "/static/tools/airpods-pro.png",
      },
    ],
  },
  {
    name: "Reading",
    tools: [
      {
        name: "Everand",
        description:
          "I switched from Audible to Everand. It’s subscription-based, instead of requiring the purchase of individual books. I love listening to audiobooks while I exercise or cook.",
        url: "https://www.everand.com/",
        icon: "/static/tools/everand.png",
      },
      {
        name: "Kindle Paperwhite (8 GB)",
        description:
          "It took me years to finally move to an e-reader. Fantastic for text books and long reads.",
        url: "https://www.amazon.com/Kindle-Paperwhite-adjustable-Ad-Supported/dp/B08KTZ8249",
        icon: "/static/tools/kindle.png",
      },
    ],
  },
];
