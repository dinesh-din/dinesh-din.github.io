// Settings for the interactive parts of the site. Edit freely.

export const extras = {
  // Which picture to show in the hero:
  //   'cartoon' = the animated illustrated avatar built into the site (no image needed)
  //   'bitmoji' = your own Bitmoji / avatar PNG (set `bitmoji` below)
  //   'photo'   = your real photo (set `photo` in src/site.ts)
  avatarMode: 'cartoon' as 'cartoon' | 'bitmoji' | 'photo',

  // Put your exported Bitmoji PNG in the `public` folder, then set the path. Example: '/bitmoji.png'
  bitmoji: '',

  // Colors for the built-in cartoon avatar and the little buddy. Change them to match you.
  cartoon: {
    skin: '#c68a63',
    hair: '#1a1410',
    jacket: '#6c3bff',
    shirt: '#ffffff',
    beard: true,
    glasses: false,
  },

  // Messages in the hero speech bubble. Click the bubble or the avatar to see the next one.
  greetings: [
    "Hi, I'm Dinesh!",
    'I build Java and Spring apps.',
    'Ask me about AI agents.',
    'Take a look at my projects below.',
    "Let's build something together.",
  ],

  // Floating stickers around the hero avatar (use up to 4).
  orbit: ['Java', 'Spring', 'AI', 'AWS'],

  // The typed line under your name: "I build ___"
  roles: [
    'Spring Boot microservices',
    'full-stack web apps',
    'LLM-powered chat apps',
    'autonomous AI agents',
    'cloud-native systems on AWS',
  ],

  // Optional: free visitor counter. Sign up at goatcounter.com, then put your site code here.
  // Example: 'dinesh' (for dinesh.goatcounter.com). Leave empty for no analytics.
  goatcounter: '',

  // Optional: a contact form that sends to your email. Create a free form at formspree.io
  // and paste its ID here (the part after /f/). Leave empty to show email and links only.
  formspree: '',

  // Optional: certifications, awards and wins. The "Recognition" section appears when you add some.
  // Example: { title: 'AWS Certified Developer', detail: 'Associate, 2025' }
  achievements: [] as { title: string; detail: string }[],

  // Optional: kind words from teammates or managers (only use real ones, with permission).
  // Example: { quote: 'Dinesh turns vague ideas into working software.', name: 'Name', role: 'Engineering Manager' }
  testimonials: [] as { quote: string; name: string; role: string }[],

  // The small buddy that follows you down the page.
  buddy: {
    enabled: true,
    // What the buddy says when you scroll to each section.
    lines: {
      about: 'Nice to meet you! Keep scrolling.',
      experience: 'Here is where I have worked.',
      projects: 'Swiping through my projects!',
      skills: 'Looking for a skill? Type in the search box.',
      contact: "Let's build something together!",
    },
    // Click the buddy to hear these, one after another.
    tips: [
      'Secret: try the Konami code on your keyboard.',
      'Click me five times fast for a surprise.',
      'Psst, try the Grid view for projects.',
      'The sun or moon button switches the theme.',
      'Search "Kafka" in the skills.',
      'Every project links to its code on GitHub.',
    ],
  },

  // Animated numbers under the hero. Two more (projects and skills) are added automatically.
  // Fun facts shown in the last stat tile. A random one appears on every visit;
  // click the tile for the next one. Edit, add or delete freely (keep "big" short).
  funFacts: [
    // Professional
    { big: 'JWT', text: 'keeps every role-based route in PharmaConnect locked down' },
    { big: '2', text: 'frontend frameworks I ship with: Angular and React' },
    { big: '3', text: 'AI assistants and agents built as personal projects' },
    { big: 'Java', text: 'first, with AI added on top' },
    { big: 'Spring AI', text: 'plugs OpenAI models into my Java backends' },
    { big: '15', text: 'skill areas, from languages to observability' },
    { big: 'Kafka', text: 'is one of the many things you can search below' },
    { big: 'dinesh-din', text: 'is where all my code lives on GitHub' },
    // Just for fun (edit these to match your own sense of humour)
    { big: '\u221e', text: 'cups of coffee behind these projects' },
    { big: 'Ctrl+Z', text: 'my most trusted shortcut' },
    { big: '\u{1F986}', text: 'rubber duck debugging: highly recommended' },
    { big: 'git push', text: 'my favourite way to end a day' },
    { big: '1 buddy', text: 'follows you down this page. Say hi to it!' },
    { big: '\u263E / \u2600', text: 'light or dark? Try the button in the header' },
  ],

  stats: [
    { value: 99.9, decimals: 1, suffix: '%', label: 'Uptime on PharmaConnect, with 92% test coverage' },
  ],
};