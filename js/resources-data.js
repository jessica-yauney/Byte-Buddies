// ============================================================
//  Byte Buddies — Resource Data
//  To add a new resource, copy one object and fill it in!
//  See README.md for full instructions.
// ============================================================

const RESOURCES = [
  {
    id: "001",
    title: "Scratch Maze Game — Build Your First Game!",
    description: "Follow along as I walk you through building a maze game in Scratch from scratch (pun intended). We'll cover sprites, motion blocks, and collision detection. By the end you'll have a real playable game you can share with your friends.",
    resource_type: "video",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    contributor_name: "Maya Chen",
    tags: ["Scratch", "Games", "Loops", "Beginner"],
    format: "activity",
    grade_level: "K-5",
    date_added: "2025-01-15"
  },
  {
    id: "002",
    title: "What Even IS the Internet?",
    description: "Ever wonder how a video gets from YouTube's servers to your screen in less than a second? This mini-lecture breaks down how the internet works using pizza delivery as an analogy. No coding required — just pure curiosity!",
    resource_type: "pdf",
    url: "resources/what-is-the-internet.pdf",
    contributor_name: "Jordan Lee",
    tags: ["Internet", "Networking", "How It Works"],
    format: "mini-lecture",
    grade_level: "6-8",
    date_added: "2025-01-20"
  },
  {
    id: "003",
    title: "Coding as a Career: Real Paths into Tech",
    description: "I interviewed five people who work in tech — a game developer, a cybersecurity analyst, a UX designer, a data scientist, and a software engineer — and put together this guide on what they actually do every day and how they got there.",
    resource_type: "link",
    url: "https://example.com/career-guide",
    contributor_name: "Alex Rivera",
    tags: ["Careers", "Confidence", "Inspiration"],
    format: "inspiration",
    grade_level: "6-8",
    date_added: "2025-02-01"
  },
  {
    id: "004",
    title: "Python Turtle Art — Make Cool Patterns with Loops",
    description: "Loops can seem boring until you use them to draw! This activity uses Python's turtle module to create geometric art with for-loops. Includes starter code and challenges to make your own patterns. Works in any browser with Trinket.io.",
    resource_type: "link",
    url: "https://trinket.io/example",
    contributor_name: "Priya Patel",
    tags: ["Python", "Loops", "Art", "Beginner"],
    format: "activity",
    grade_level: "6-8",
    date_added: "2025-02-05"
  },
  {
    id: "005",
    title: "What Is AI? A Friendly Introduction",
    description: "AI is everywhere but most explanations are either way too simple or way too complicated. This doc hits the sweet spot — explaining machine learning, neural networks, and how apps like Spotify's recommendation engine work, using examples from everyday life.",
    resource_type: "doc",
    url: "resources/what-is-ai.docx",
    contributor_name: "Sam Okoye",
    tags: ["AI", "Machine Learning", "Algorithms"],
    format: "mini-lecture",
    grade_level: "6-8",
    date_added: "2025-02-10"
  },
  {
    id: "006",
    title: "Stay Safe Online: Cybersecurity Basics",
    description: "Learn about phishing, strong passwords, and why you should care about your digital footprint. This activity includes a fake phishing email quiz where you have to spot the scam. Spoiler: the fake ones are sneakier than you think.",
    resource_type: "pdf",
    url: "resources/cybersecurity-basics.pdf",
    contributor_name: "Taylor Kim",
    tags: ["Cybersecurity", "Internet Safety", "Activity"],
    format: "activity",
    grade_level: "K-5",
    date_added: "2025-02-12"
  },
  {
    id: "007",
    title: "My Journey: From 'I Can't Code' to App Developer",
    description: "Two years ago I thought coding was only for math geniuses. Now I have two apps on the App Store. This is my honest story — including all the times I wanted to quit — and what finally made it click for me. I hope it helps you keep going.",
    resource_type: "link",
    url: "https://example.com/my-journey",
    contributor_name: "Destiny Williams",
    tags: ["Confidence", "StudyTips", "Inspiration", "Careers"],
    format: "inspiration",
    grade_level: "6-8",
    date_added: "2025-02-13"
  },
  {
    id: "008",
    title: "Sorting Algorithms Explained with Dance Moves",
    description: "Bubble sort, selection sort, and insertion sort — but instead of numbers, we're sorting people by height. Each algorithm gets its own set of dance-like instructions. This video makes a topic that sounds boring into something you'll actually remember.",
    resource_type: "video",
    url: "https://www.youtube.com/watch?v=example",
    contributor_name: "Marcus Johnson",
    tags: ["Algorithms", "Sorting", "Python", "Visual"],
    format: "mini-lecture",
    grade_level: "6-8",
    date_added: "2025-02-14"
  }
];

// Tag color mapping for visual variety
const TAG_COLORS = {
  "Scratch":       "#FF6B6B",
  "Python":        "#4ECDC4",
  "Internet":      "#45B7D1",
  "AI":            "#96CEB4",
  "Cybersecurity": "#FFEAA7",
  "Loops":         "#DDA0DD",
  "Algorithms":    "#98D8C8",
  "Careers":       "#F7DC6F",
  "Confidence":    "#FF8C94",
  "StudyTips":     "#A8D8EA",
  "Games":         "#FF6B6B",
  "Beginner":      "#B8E0D2",
  "Networking":    "#45B7D1",
  "Inspiration":   "#FFD3B6",
  "Machine Learning": "#96CEB4",
  "Activity":      "#FFAAA5",
  "Internet Safety": "#FFD3B6",
  "Visual":        "#D4A5A5",
  "Art":           "#FF8C94",
  "Sorting":       "#98D8C8",
  "How It Works":  "#A8D8EA"
};

function getTagColor(tag) {
  return TAG_COLORS[tag] || "#E0E0E0";
}

const FORMAT_ICONS = {
  "mini-lecture": "🎓",
  "activity": "🛠️",
  "inspiration": "✨"
};

const FORMAT_LABELS = {
  "mini-lecture": "Mini-Lecture",
  "activity": "Activity",
  "inspiration": "Inspiration"
};

const TYPE_ICONS = {
  "video": "▶️",
  "pdf": "📄",
  "doc": "📝",
  "link": "🔗"
};
