// ============================================================
//  Byte Buddies — Resource Data
//  To add a new resource, copy one object and fill it in!
//  See README.md for full instructions.
// ============================================================

const RESOURCES = [
  {
    id: "001",
    title: "Sorting Algorithms Explained with Dance Moves",
    description: "Quick sort — but instead of numbers, we're sorting people. This video makes a topic that sounds boring into something you'll actually remember.",
    resource_type: "video",
    url: "https://www.youtube.com/watch?v=BD8QLnsp5mo",
    contributor_name: "Taki se kanal",
    tags: ["Algorithms", "Sorting", "Visual"],
    format: "mini-lecture",
    grade_level: "6-8",
    date_added: "2025-02-15"
  },
  {
    id: "002",
    title: "AI-Powered Personalized Learning Platforms",
    description: "A slide deck that tells you about one cool application of emerging technologies.",
    resource_type: "pdf",
    url: "/resources/AI-Powered Personalized Learning Platforms.pdf",
    contributor_name: "P. Y.",
    tags: ["AI", "How It Works"],
    format: "mini-lecture",
    grade_level: "6-8",
    date_added: "2025-02-15"
  },
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
