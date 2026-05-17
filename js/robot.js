// =============================================
//   ARIA — AI Robot Assistant
// =============================================

const ARIA = {
  speeches: [
    "Hello! I'm ARIA — your AI dev assistant 🤖",
    "Ask me about DSA, salaries, or hackathons!",
    "Want the FAANG roadmap? Just ask!",
    "System online. Ready to assist, developer.",
    "Tip: Solve 300+ LeetCode to crack FAANG!",
    "Top skill to learn right now: System Design",
    "Did you know? Go engineers earn ₹20L+ easily!",
    "Hackathons → Projects → Offers. The formula.",
  ],

  knowledgeBase: {
    "50 lpa": `🎯 ROADMAP TO ₹50L+:\n\n1️⃣ Master DSA — Solve 300+ LeetCode (100 Hard)\n2️⃣ System Design — Grokking, DDIA book\n3️⃣ Target: Google, Meta, Amazon, Microsoft India\n4️⃣ Build real products used by thousands\n5️⃣ Timeline: 5-8 years of strategic growth\n6️⃣ Ace the full interview loop (4-6 rounds)\n\nKey skills: Distributed systems, ML basics, Leadership`,

    "hackathon": `🏆 TOP HACKATHONS:\n\n🇮🇳 India:\n• Smart India Hackathon (SIH) — Govt backed, massive\n• HackWithInfy — PPO opportunity\n• Flipkart Grid — Internship prizes\n• ETHIndia — $100K+ in bounties\n\n🌐 Global:\n• Google Code Jam — $15K prize\n• MIT Reality Hack — XR focused\n• HackMIT — $30K prizes\n• Microsoft Imagine Cup — $100K\n\nTip: SIH + college hackathons are best for beginners!`,

    "dsa": `📊 DSA LEARNING PATH:\n\nWeek 1-4: Arrays, Strings, HashMap\nWeek 5-8: Stacks, Queues, Linked Lists\nWeek 9-12: Trees, Recursion, Backtracking\nWeek 13-16: Graphs (BFS/DFS, Dijkstra)\nWeek 17-20: DP (Memoization → Tabulation)\nWeek 21-24: Advanced Topics + Mock Interviews\n\n🎯 Target: 250-300 LeetCode problems\nFocus: Medium × 60%, Hard × 30%`,

    "company": `🏢 TOP HIRING COMPANIES (India):\n\n💎 FAANG: Google, Meta, Amazon, Microsoft\n₹25L-₹1Cr+\n\n🦄 Unicorns: Flipkart, Razorpay, CRED, Zomato\n₹15L-₹60L\n\n💰 Fintech: PhonePe, Zerodha, Paytm, Goldman\n₹15L-₹60L\n\n🚀 Startups: Hundreds hiring 5-20L range\n\n📌 Fresher targets: Zoho, Freshworks, TCS Digital`,

    "python": `🐍 PYTHON ROADMAP:\n\nBeginner: Syntax, OOP, File I/O, Exceptions\nIntermediate: Decorators, Generators, Context Managers\nAdvanced: Metaclasses, Async/Await, C Extensions\n\nFor Data Science: NumPy → Pandas → Matplotlib → Sklearn → TF/PyTorch\nFor Backend: FastAPI/Django → SQLAlchemy → Docker\nFor Automation: Selenium, BeautifulSoup, Scrapy\n\n💼 Salary: ₹5L (fresher) to ₹40L+ (ML Engineer)`,

    "system design": `🏗️ SYSTEM DESIGN PREP:\n\n📚 Resources:\n• Grokking System Design (Educative)\n• System Design Interview (Alex Xu) — MUST READ\n• DDIA (Designing Data-Intensive Applications)\n\n🔑 Key Concepts:\n• CAP Theorem, ACID vs BASE\n• Load Balancing, CDN, Caching strategies\n• Database sharding and replication\n• Message queues (Kafka, RabbitMQ)\n• Microservices vs Monolith\n\n🎯 Practice: Design Twitter, Netflix, Uber, WhatsApp`,

    "interview": `💼 INTERVIEW STRATEGY:\n\n1️⃣ DSA Round: Clarify → Brute Force → Optimize → Code\n2️⃣ System Design: Requirements → Estimates → Design → Bottlenecks\n3️⃣ HR Round: Use STAR method for behavioral\n4️⃣ Coding: Think aloud, edge cases first\n\n🚨 Common Mistakes:\n• Not clarifying requirements\n• Jumping to code without algorithm\n• Ignoring edge cases\n• Not testing your solution\n\n✅ Tools: LeetCode, Pramp, InterviewBit`,

    "fresher": `🎓 FRESHER ROADMAP (0-1 years):\n\n1. Pick ONE language deeply (Python/Java/JS)\n2. Learn DSA basics (Arrays, Trees, Graphs)\n3. Build 3 projects (1 full-stack, 1 API, 1 unique)\n4. Solve 100+ LeetCode (Easy+Medium)\n5. Learn Git + basics of cloud\n6. Apply to: Zoho, Freshworks, TCS, Infosys\n7. Target ₹5-12 LPA package\n\n⏱️ Timeline: 6-12 months of focused preparation`,

    "default": `🤖 Hi! I'm ARIA, your dev career guide!\n\nI can help you with:\n• 💰 Salary roadmaps (₹5L → ₹50L+)\n• 🏆 Hackathon recommendations\n• 📊 DSA learning paths\n• 🏢 Company-specific prep\n• 💼 Interview strategies\n• 🚀 Career advice\n\nTry asking:\n"How to crack Google interview?"\n"Best DSA resources?"\n"Top hackathons in India?"`
  },

  currentSpeechIndex: 0,
  speechInterval: null,

  init() {
    this.setupRobot();
    this.setupChat();
    this.startSpeechCycle();
  },

  startSpeechCycle() {
    const speech = document.getElementById('robot-speech');
    const text = document.getElementById('robot-text');
    
    const showSpeech = (msg) => {
      speech.classList.remove('hidden');
      text.textContent = '';
      let i = 0;
      const type = () => {
        if (i < msg.length) {
          text.textContent += msg[i++];
          setTimeout(type, 40);
        }
      };
      type();
      setTimeout(() => speech.classList.add('hidden'), 4000);
    };

    showSpeech(this.speeches[0]);
    this.speechInterval = setInterval(() => {
      this.currentSpeechIndex = (this.currentSpeechIndex + 1) % this.speeches.length;
      showSpeech(this.speeches[this.currentSpeechIndex]);
    }, 7000);
  },

  setupRobot() {
    const robot = document.getElementById('robot');
    const toggle = document.getElementById('robot-toggle');
    const chatPanel = document.getElementById('chat-panel');

    robot.addEventListener('click', () => this.toggleChat());
    toggle.addEventListener('click', () => this.toggleChat());
  },

  toggleChat() {
    const panel = document.getElementById('chat-panel');
    if (panel.classList.contains('hidden')) {
      panel.classList.remove('hidden');
      if (document.getElementById('chat-messages').children.length === 0) {
        this.addMessage('aria', this.knowledgeBase['default']);
      }
    } else {
      panel.classList.add('hidden');
    }
  },

  setupChat() {
    const input = document.getElementById('chat-input');
    const send = document.getElementById('chat-send');
    const close = document.getElementById('close-chat');

    send.addEventListener('click', () => this.sendMessage());
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
    close.addEventListener('click', () => {
      document.getElementById('chat-panel').classList.add('hidden');
    });

    document.querySelectorAll('.qp').forEach(btn => {
      btn.addEventListener('click', () => {
        document.getElementById('chat-input').value = btn.dataset.q;
        this.sendMessage();
        document.getElementById('chat-panel').classList.remove('hidden');
      });
    });
  },

  sendMessage() {
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    if (!msg) return;

    this.addMessage('user', msg);
    input.value = '';

    setTimeout(() => {
      const response = this.getResponse(msg);
      this.addMessage('aria', response);
    }, 600);
  },

  getResponse(msg) {
    const lower = msg.toLowerCase();
    
    if (lower.includes('50 lpa') || lower.includes('50l') || lower.includes('roadmap') || lower.includes('salary')) return this.knowledgeBase['50 lpa'];
    if (lower.includes('hackathon') || lower.includes('competition') || lower.includes('contest')) return this.knowledgeBase['hackathon'];
    if (lower.includes('dsa') || lower.includes('data structure') || lower.includes('algorithm') || lower.includes('leetcode')) return this.knowledgeBase['dsa'];
    if (lower.includes('compan') || lower.includes('hiring') || lower.includes('job') || lower.includes('placement')) return this.knowledgeBase['company'];
    if (lower.includes('python')) return this.knowledgeBase['python'];
    if (lower.includes('system design') || lower.includes('design interview')) return this.knowledgeBase['system design'];
    if (lower.includes('interview') || lower.includes('crack') || lower.includes('prepare')) return this.knowledgeBase['interview'];
    if (lower.includes('fresher') || lower.includes('beginner') || lower.includes('student') || lower.includes('start')) return this.knowledgeBase['fresher'];
    
    return this.knowledgeBase['default'];
  },

  addMessage(sender, text) {
    const container = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = `chat-msg ${sender === 'user' ? 'user' : 'aria'}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'chat-avatar';
    avatar.textContent = sender === 'user' ? '👤' : '🤖';
    
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.style.whiteSpace = 'pre-line';
    bubble.textContent = text;
    
    div.appendChild(avatar);
    div.appendChild(bubble);
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }
};
