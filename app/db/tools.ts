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
          "I love that the ligatures in this font do not distort the characters' shapes.",
        url: "https://github.com/0xType/0xProto",
        icon: "/static/tools/0xProto.png",
      },
      {
        name: "Dracula Theme",
        description:
          "I love this dark theme. I use it in VSCode, Warp, Telegram, Slack, and more.",
        url: "https://draculatheme.com/",
        icon: "/static/tools/dracula.png",
      },
      {
        name: "GitHub Copilot",
        description:
          "Its code completion is impressive, helping you code faster, write tests, and learn new things.",
        url: "https://copilot.github.com/",
        icon: "/static/tools/github-copilot.png",
      },
      {
        name: "Visual Studio Code",
        description:
          "After many years with Sublime, I switched to VSCode like everyone else. It's fast, lightweight, and has a multitude of extensions.",
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
          "I used to rely on Hyper with Fig, but a friend recommended Warp. It's fast, offers smooth scrolling, and provides efficient bookmark management.",
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
          "A great alternative to Adobe Illustrator. I use it for vector design and illustrations.",
        url: "https://affinity.serif.com/designer/",
        icon: "/static/tools/affinity-designer.png",
      },
      {
        name: "Affinity Photo",
        description:
          "A great alternative to Adobe Photoshop. I use it for photo editing; it has all the features I need along with similar shortcuts.",
        url: "https://affinity.serif.com/photo/",
        icon: "/static/tools/affinity-photo.png",
      },
      {
        name: "Figma",
        description:
          "I use Figma for interface and web design, and Affinity for everything else.",
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
          "My default browser—it's fast, secure, and features a built-in ad blocker. I disable almost all of its crypto features.",
        url: "https://brave.com/",
        icon: "/static/tools/brave.png",
      },
      {
        name: "DaisyDisk",
        description:
          "I use this app to clean up my Mac; it displays the sizes of folders and files.",
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
          "It helps me adjust my mouse's speed and acceleration beyond the default Mac settings without using the terminal.",
        url: "https://linearmouse.app/",
        icon: "/static/tools/linear-mouse.png",
      },
      {
        name: "Magnet",
        description:
          "I'm used to how Windows or GNOME manage windows, and Magnet helps me organize them by dragging to the edges or using keyboard shortcuts.",
        url: "https://magnet.crowdcafe.com/",
        icon: "/static/tools/magnet.png",
      },
      {
        name: "Obsidian",
        description:
          "I use it for note-taking, and it's excellent for organizing and managing both user and market research.",
        url: "https://obsidian.md/",
        icon: "/static/tools/obsidian.png",
      },
      {
        name: "Photoroom",
        description:
          "An amazing tool that automatically removes the background from product photos and replaces it with a solid color. It saves me a lot of time when editing e-commerce photos.",
        url: "https://photoroom.com/",
        icon: "/static/tools/photoroom.png",
      },
      {
        name: "Stoplight",
        description:
          "If you work with APIs and OpenAPI, this is a must-have. It's an excellent tool for managing your API documentation.",
        url: "https://stoplight.io/",
        icon: "/static/tools/stoplight.png",
      },
      {
        name: "TablePlus",
        description:
          "I used to use DBeaver, but I switched to TablePlus when they added a diagramming feature. Overall, the UI is better.",
        url: "https://tableplus.com/",
        icon: "/static/tools/tableplus.png",
      },
      {
        name: "tldraw",
        description:
          "My go-to tool for whiteboarding. I used to use Excalidraw.",
        url: "https://tldraw.com/",
        icon: "/static/tools/tldraw.png",
      },
      {
        name: "TickTick",
        description:
          "My current choice for managing to-do lists—it offers a great UI and UX.",
        url: "https://ticktick.com/",
        icon: "/static/tools/tick_tick.png",
      },
      {
        name: "TomatoBar",
        description:
          "When I have difficulty focusing, I use the Pomodoro technique with TomatoBar.",
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
          "When it comes to adding search functionality to any project, Algolia is my go-to option.",
        url: "https://www.algolia.com/",
        icon: "/static/tools/algolia.png",
      },
      {
        name: "Better Stack",
        description:
          "I love its site monitoring, uptime alerts, heartbeat checks, and on-call management features.",
        url: "https://betterstack.com",
        icon: "/static/tools/betterstack.png",
      },
      {
        name: "Cloudflare",
        description:
          "I use Cloudflare to manage the DNS and CDN for all my domains.",
        url: "https://www.cloudflare.com/",
        icon: "/static/tools/cloudflare.png",
      },
      {
        name: "Fly",
        description:
          "Fly offers a great developer experience, making it my go-to option for deploying projects.",
        url: "https://fly.io/",
        icon: "/static/tools/fly.png",
      },
      {
        name: "hCaptcha",
        description: "A privacy-focused alternative to Google reCAPTCHA.",
        url: "https://www.hcaptcha.com/",
        icon: "/static/tools/hcaptcha.png",
      },
      {
        name: "iCloud+",
        description:
          "I switched to iCloud+ from Dashlane, Google Now, and Google Workspace because of its seamless integration with the Apple ecosystem.",
        url: "https://www.apple.com/icloud/",
        icon: "/static/tools/icloud+.png",
      },
      {
        name: "Last.fm",
        description:
          "I love checking my music stats—I use Last.fm to track my listening habits.",
        url: "https://www.last.fm/",
        icon: "/static/tools/lastfm.png",
      },
      {
        name: "Linear",
        description:
          "An amazing issue tracker that I use for both personal and freelance projects. Jira is no longer an option for me.",
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
        description: "I use Notion for personal and project notes.",
        url: "https://www.notion.so/",
        icon: "/static/tools/notion.png",
      },
      {
        name: "Odoo",
        description:
          "A comprehensive and efficient solution for managing various aspects of business operations—from accounting and inventory to manufacturing and HR.",
        url: "https://www.odoo.com/",
        icon: "/static/tools/odoo.png",
      },
      {
        name: "Pulumi",
        description:
          "I love using general-purpose programming languages to define infrastructure as code instead of using HCL like Terraform.",
        url: "https://www.pulumi.com/",
        icon: "/static/tools/pulumi.png",
      },
      {
        name: "Shopify",
        description:
          "Shopify is my preferred e-commerce platform, and its Hydrogen/Remix framework offers the best developer experience for frontend development.",
        url: "https://www.shopify.com/",
        icon: "/static/tools/shopify.png",
      },
      {
        name: "Trakt",
        description:
          "I use Trakt to track my TV shows and movies while also discovering new content.",
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
          "I use Kap to record short screen videos that I can easily share as MP4s or GIFs.",
        url: "https://getkap.co/",
        icon: "/static/tools/kap.png",
      },
      {
        name: "Shottr",
        description:
          "I use it to capture, edit, and share screenshots—perfect for designers and front-end developers.",
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
          "The M1 chip is fantastic—it has enough power to run all the apps I need, even Adobe CS and Android Studio.",
        url: "https://www.apple.com/mx/shop/buy-mac/macbook-air/m1-chip",
        icon: "/static/tools/macbook-air-m1.png",
      },
      {
        name: 'Samsung 34" Monitor Ultra WQHD',
        description:
          "It makes working with multiple windows side by side much easier—perfect for frontend development and design.",
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
          "I'm not overly demanding when it comes to keyboards, but this one is comfortable to type on, quiet, and works well with the trackpad.",
        url: "https://www.apple.com/shop/product/MK2A3E/A/magic-keyboard-spanish",
        icon: "/static/tools/apple-magic-keyboard.png",
      },
      {
        name: "Anker 533 USB-C Hub (5-in-1, Slim)",
        description:
          "Everything I need in one place—I can connect my monitor, external hard drive, and Ethernet cable.",
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
          "I use my AirPods Pro for everything. I love the noise cancellation and transparency mode, though I wish they had volume controls and support for multiple devices.",
        url: "https://www.apple.com/airpods-pro/",
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
          "I switched from Audible to Everand—i's subscription-based rather than requiring individual book purchases. I love listening to audiobooks while exercising or cooking.",
        url: "https://www.everand.com/",
        icon: "/static/tools/everand.png",
      },
      {
        name: "Kindle Paperwhite (8 GB)",
        description:
          "It took me years to finally transition to an e-reader. Fantastic for textbooks and long reads.",
        url: "https://www.amazon.com/Kindle-Paperwhite-adjustable-Ad-Supported/dp/B08KTZ8249",
        icon: "/static/tools/kindle.png",
      },
    ],
  },
];
