# DevQuest — Your Coding Career Command Center

> A comprehensive, 3D animated developer career platform featuring ARIA — an AI robot assistant

![DevQuest](https://img.shields.io/badge/Version-1.0.0-00f5ff?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production_Ready-00ff88?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-a855f7?style=for-the-badge)

---

## ✨ Features

### 🤖 ARIA — AI Robot Assistant
- Fully animated 3D-styled robot with blinking eyes, floating animation, and typing effects
- Interactive chat panel with contextual responses about career topics
- Quick prompts for common queries (50 LPA roadmap, hackathons, DSA, companies)
- Speech bubble with auto-cycling tips

### 🎮 3D Visual Experience
- Rotating 3D CSS cube with code symbols on all 6 faces
- Animated orbital rings and particles
- Particle network with 100+ connected particles
- Glitch text effects on hero title
- Cyberpunk-inspired color palette with neon glow effects

### 📚 Programming Languages Database (13+ languages)
- Python, JavaScript, TypeScript, Java, C++, Go, Rust, Kotlin, Swift, SQL, React, Dart/Flutter, C#
- Click any card to open a detailed modal with:
  - Complete overview & history
  - Syntax examples with color-coded code blocks
  - Primary use cases
  - Key ecosystem/frameworks
  - Salary ranges in India
  - Top hiring companies
- Filter by category: Web, Systems, Data/ML, Mobile

### 🗺️ Salary Roadmap (₹5L → ₹50L+)
- 5-stage visual roadmap on an animated timeline
- Each stage includes: skills required, action items, target companies, timeline
- Color-coded by level with connecting visual line

### 🔢 DSA (Data Structures & Algorithms)
- 3 tabs: Data Structures, Algorithms, Patterns
- Difficulty badges (Easy/Medium/Hard)
- Key topics for each category
- 15+ topics covering everything needed for FAANG

### 🏢 Companies Database (20+ companies)
- FAANG: Google, Meta, Amazon, Microsoft
- Unicorns: Flipkart, Razorpay, Zomato, Swiggy, CRED
- Fintech: PhonePe, Zerodha, Paytm, Goldman Sachs
- SaaS: Freshworks, Zoho
- Each card shows salary range, hiring focus, role tags

### 🏆 Hackathons (18+ events)
- India: SIH, HackWithInfy, Flipkart Grid, ETHIndia, and more
- Global: Google Code Jam, MIT Reality Hack, HackMIT, Imagine Cup
- Prize information, organizer details, and description

### 💼 Interview Prep (4 categories)
- Technical: OOP, DSA, OS, Networking, Databases, Cloud/DevOps
- HR / Behavioral: STAR method, common questions, strategies
- System Design: URL Shortener, WhatsApp, Netflix, Rate Limiter, Twitter Feed
- Coding Round: Array, String, Tree, DP problems

---

## 🚀 Getting Started

### No Build Required!
This is a pure HTML/CSS/JS project with zero dependencies.

```bash
# Clone or unzip the project
cd devquest

# Open in browser (any of these)
open index.html                          # macOS
xdg-open index.html                      # Linux
start index.html                         # Windows

# Or use a local server for best experience
npx serve .                              # Node.js
python3 -m http.server 3000              # Python
php -S localhost:3000                     # PHP
```

Then open `http://localhost:3000` in your browser.

---

## 📁 File Structure

```
devquest/
├── index.html          # Main HTML — all sections and structure
├── css/
│   └── style.css       # Complete styles (3D, animations, layout)
├── js/
│   ├── data.js         # Complete database (languages, companies, etc.)
│   ├── robot.js        # ARIA robot AI and chat system
│   ├── particles.js    # Canvas particle network animation
│   └── app.js          # Main app logic (rendering, tabs, modals)
└── README.md           # This file
```

---

## 🎨 Design System

| Variable | Value | Usage |
|----------|-------|-------|
| `--accent-cyan` | `#00f5ff` | Primary accent, borders, glow |
| `--accent-green` | `#00ff88` | Success, active states |
| `--accent-orange` | `#ff6b35` | Warnings, highlights |
| `--accent-purple` | `#a855f7` | Secondary accent |
| `--accent-gold` | `#ffd700` | Premium/prizes |
| `--bg-primary` | `#030712` | Main background |
| `--font-display` | Orbitron | Headings, titles |
| `--font-mono` | Share Tech Mono | Code, labels, tags |
| `--font-body` | Rajdhani | Body text |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure and semantic markup |
| CSS3 | Animations, 3D transforms, custom properties |
| Vanilla JavaScript | App logic, DOM manipulation |
| Canvas API | Particle network background |
| CSS `perspective` + `transform-style: preserve-3d` | 3D cube |
| CSS `@keyframes` | 20+ animations |
| Intersection Observer API | Scroll-triggered reveals |
| Google Fonts | Orbitron, Share Tech Mono, Rajdhani |

---

## 📱 Responsive Support

- ✅ Desktop (1400px+) — Full layout with 3D scene
- ✅ Tablet (768px–1024px) — Adapted hero, vertical roadmap
- ✅ Mobile (< 768px) — Compact nav, full-width chat panel

---

## 🔧 Customization

### Add a New Language
In `js/data.js`, add to the `languages` array:
```javascript
{
  id: "mylang",
  name: "My Language",
  icon: "🚀",
  type: "web",           // web | systems | data | mobile
  category: ["web"],
  tagline: "...",
  accent: "#hexcolor",
  tags: ["Tag1", "Tag2"],
  desc: "Short description",
  overview: "Detailed overview...",
  uses: ["Use case 1", "Use case 2"],
  syntax: `// code example`,
  ecosystem: ["Framework1", "Tool2"],
  salary: "₹XL – ₹YL+",
  topCompanies: ["Company1", "Company2"]
}
```

### Train ARIA on Custom Responses
In `js/robot.js`, extend the `knowledgeBase` object:
```javascript
"your keyword": `Your response text here\nWith line breaks\n• And bullet points`
```

---

## 📊 Database Stats

| Section | Count |
|---------|-------|
| Programming Languages | 13 |
| Roadmap Stages | 5 |
| DSA Topics | 21 |
| Companies | 20 |
| Hackathons | 18 |
| Interview Question Sets | 15 |
| ARIA Knowledge Topics | 8 |

---

## 🌟 Performance Notes

- Zero external dependencies (no jQuery, no frameworks)
- Fonts loaded via Google Fonts CDN
- Particle count auto-scales to viewport size (max 120)
- Smooth 60fps animations using `requestAnimationFrame`
- Intersection Observer for lazy-reveal animations
- CSS `will-change` and `transform` for GPU acceleration

---

## 📄 License

MIT License — Free to use, modify, and distribute.

---

## 🤝 Contributing

1. Fork the repo
2. Add new languages, companies, or hackathons to `js/data.js`
3. Improve ARIA's knowledge base in `js/robot.js`
4. Submit a pull request!

---

*Built with ⚡ for the developer community — from first syntax to ₹50L+ packages.*
