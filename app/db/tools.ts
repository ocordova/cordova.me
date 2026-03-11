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
        description: "Monospace font with ligatures that respect character shapes.",
        url: "https://github.com/0xType/0xProto",
        icon: "/static/tools/0xProto.png",
      },
      {
        name: "Claude Code",
        description: "Pair programming and brainstorming.",
        url: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview",
        icon: "/static/tools/claude.png",
      },
      {
        name: "Dracula Theme",
        description: "Dark theme everywhere — editor, terminal, apps.",
        url: "https://draculatheme.com/",
        icon: "/static/tools/dracula.png",
      },
      {
        name: "Zed",
        description: "Fast and minimal. After years of VSCode, no looking back.",
        url: "https://zed.dev/",
        icon: "/static/tools/zed.png",
      },
    ],
  },
  {
    name: "Terminal",
    tools: [
      {
        name: "Warp",
        description: "Fast terminal with smooth scrolling and bookmarks.",
        url: "https://warp.dev/",
        icon: "/static/tools/warp.png",
      },
    ],
  },
  {
    name: "Design",
    tools: [
      {
        name: "Affinity",
        description: "Design, photo editing, and publishing — all in one.",
        url: "https://affinity.serif.com/",
        icon: "/static/tools/affinity.png",
      },
    ],
  },
  {
    name: "Apps",
    tools: [
      {
        name: "Brave",
        description: "Fast browser with built-in ad blocker.",
        url: "https://brave.com/",
        icon: "/static/tools/brave.png",
      },
      {
        name: "DaisyDisk",
        description: "Visual disk space cleanup.",
        url: "https://daisydiskapp.com/",
        icon: "/static/tools/daisy-disk.png",
      },
      {
        name: "Insomnia",
        description: "API client. Faster and cleaner than Postman.",
        url: "https://insomnia.rest/",
        icon: "/static/tools/insomnia.png",
      },
      {
        name: "LinearMouse",
        description: "Fine-tune mouse speed beyond macOS defaults.",
        url: "https://linearmouse.app/",
        icon: "/static/tools/linear-mouse.png",
      },
      {
        name: "Magnet",
        description: "Window management via edges and shortcuts.",
        url: "https://magnet.crowdcafe.com/",
        icon: "/static/tools/magnet.png",
      },
      {
        name: "Obsidian",
        description: "Notes, research, and knowledge management.",
        url: "https://obsidian.md/",
        icon: "/static/tools/obsidian.png",
      },
      {
        name: "Photoroom",
        description: "Automatic background removal for product photos.",
        url: "https://photoroom.com/",
        icon: "/static/tools/photoroom.png",
      },
      {
        name: "Stoplight",
        description: "API documentation with OpenAPI.",
        url: "https://stoplight.io/",
        icon: "/static/tools/stoplight.png",
      },
      {
        name: "TablePlus",
        description: "Database client with a clean UI.",
        url: "https://tableplus.com/",
        icon: "/static/tools/tableplus.png",
      },
      {
        name: "tldraw",
        description: "Whiteboarding, simple and quick.",
        url: "https://tldraw.com/",
        icon: "/static/tools/tldraw.png",
      },
      {
        name: "TickTick",
        description: "To-do lists with great UX.",
        url: "https://ticktick.com/",
        icon: "/static/tools/tick_tick.png",
      },
      {
        name: "TomatoBar",
        description: "Pomodoro timer in the menu bar.",
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
        description: "Search for any project.",
        url: "https://www.algolia.com/",
        icon: "/static/tools/algolia.png",
      },
      {
        name: "Better Stack",
        description: "Monitoring, uptime alerts, and on-call.",
        url: "https://betterstack.com",
        icon: "/static/tools/betterstack.png",
      },
      {
        name: "Cloudflare",
        description: "DNS and CDN for all my domains.",
        url: "https://www.cloudflare.com/",
        icon: "/static/tools/cloudflare.png",
      },
      {
        name: "Fly",
        description: "Where I deploy things.",
        url: "https://fly.io/",
        icon: "/static/tools/fly.png",
      },
      {
        name: "hCaptcha",
        description: "Privacy-focused captcha.",
        url: "https://www.hcaptcha.com/",
        icon: "/static/tools/hcaptcha.png",
      },
      {
        name: "iCloud+",
        description: "Seamless within the Apple ecosystem.",
        url: "https://www.apple.com/icloud/",
        icon: "/static/tools/icloud+.png",
      },
      {
        name: "Last.fm",
        description: "Tracking my listening habits.",
        url: "https://www.last.fm/",
        icon: "/static/tools/lastfm.png",
      },
      {
        name: "Linear",
        description: "Issue tracking for personal and freelance projects.",
        url: "https://linear.app/",
        icon: "/static/tools/linear.png",
      },
      {
        name: "Literal",
        description: "Tracking books and discovering new ones.",
        url: "https://literal.club/",
        icon: "/static/tools/literal.png",
      },
      {
        name: "Notion",
        description: "Personal and project notes.",
        url: "https://www.notion.so/",
        icon: "/static/tools/notion.png",
      },
      {
        name: "Pulumi",
        description: "Infrastructure as code in real programming languages.",
        url: "https://www.pulumi.com/",
        icon: "/static/tools/pulumi.png",
      },
      {
        name: "Shopify",
        description: "E-commerce platform with great DX via Hydrogen.",
        url: "https://www.shopify.com/",
        icon: "/static/tools/shopify.png",
      },
      {
        name: "Trakt",
        description: "Tracking TV shows and movies.",
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
        description: "Quick screen recordings as MP4 or GIF.",
        url: "https://getkap.co/",
        icon: "/static/tools/kap.png",
      },
      {
        name: "Shottr",
        description: "Screenshots with annotation tools.",
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
        description: "The M1 chip handles everything I need.",
        url: "https://www.apple.com/mx/shop/buy-mac/macbook-air/m1-chip",
        icon: "/static/tools/macbook-air-m1.png",
      },
      {
        name: 'Samsung 34" Monitor Ultra WQHD',
        description: "Multiple windows side by side.",
        url: "https://www.samsung.com/us/computing/monitors/uhd-and-wqhd/34-sj55w-ultra-wqhd-monitor-ls34j550wqnxza/",
        icon: "/static/tools/samsung-monitor.png",
      },
      {
        name: "Apple Magic Trackpad",
        description: "Can't work without the gestures.",
        url: "https://www.apple.com/shop/product/MMMP3AM/A/magic-trackpad-black-multi-touch-surface",
        icon: "/static/tools/apple-magic-trackpad.png",
      },
      {
        name: "Apple Magic Keyboard",
        description: "Comfortable, quiet, pairs well with the trackpad.",
        url: "https://www.apple.com/shop/product/MK2A3E/A/magic-keyboard-spanish",
        icon: "/static/tools/apple-magic-keyboard.png",
      },
      {
        name: "Anker 533 USB-C Hub (5-in-1, Slim)",
        description: "Monitor, storage, and ethernet in one port.",
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
        description: "Noise cancellation and transparency for everything.",
        url: "https://www.apple.com/airpods-pro/",
        icon: "/static/tools/airpods-pro.png",
      },
      {
        name: "Evermusic",
        description: "Music player for desktop and mobile.",
        url: "https://evermusic.app/",
      },
    ],
  },
  {
    name: "Reading",
    tools: [
      {
        name: "Everand",
        description: "Subscription audiobooks while exercising or cooking.",
        url: "https://www.everand.com/",
        icon: "/static/tools/everand.png",
      },
      {
        name: "Kindle Paperwhite (8 GB)",
        description: "For textbooks and long reads.",
        url: "https://www.amazon.com/Kindle-Paperwhite-adjustable-Ad-Supported/dp/B08KTZ8249",
        icon: "/static/tools/kindle.png",
      },
    ],
  },
];
