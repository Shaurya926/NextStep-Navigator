// =============================================
//   DEVQUEST — MAIN APP
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  ARIA.init();
  initNavbar();
  renderLanguages();
  renderRoadmap();
  renderDSA('ds');
  renderCompanies();
  renderHackathons();
  renderInterviews('technical');
  initCounters();
  initScrollReveal();
  initFilters();
  initTabs();
  initModal();
});

// ========== NAVBAR ==========
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  document.querySelectorAll('.nav-a').forEach(link => {
    link.addEventListener('click', (e) => {
      document.querySelectorAll('.nav-a').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });
    document.querySelectorAll('.nav-a').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });
}

// ========== LANGUAGE CARDS ==========
function renderLanguages(filter = 'all') {
  const grid = document.getElementById('lang-grid');
  const langs = filter === 'all'
    ? DB.languages
    : DB.languages.filter(l => l.category.includes(filter));

  grid.innerHTML = langs.map(lang => `
    <div class="lang-card reveal" style="--card-accent: ${lang.accent}" data-id="${lang.id}" data-category="${lang.category.join(',')}">
      <div class="lang-card-icon">${lang.icon}</div>
      <div class="lang-card-name">${lang.name}</div>
      <div class="lang-card-type">${lang.type}</div>
      <div class="lang-card-desc">${lang.desc}</div>
      <div class="lang-card-tags">
        ${lang.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // Attach click handlers
  grid.querySelectorAll('.lang-card').forEach(card => {
    card.addEventListener('click', () => openLangModal(card.dataset.id));
  });

  triggerReveal();
}

// ========== FILTERS ==========
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderLanguages(btn.dataset.filter);
    });
  });
}

// ========== LANGUAGE MODAL ==========
function initModal() {
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('lang-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lang-modal')) closeModal();
  });
}

function openLangModal(id) {
  const lang = DB.languages.find(l => l.id === id);
  if (!lang) return;

  const modal = document.getElementById('lang-modal');
  const content = document.getElementById('modal-content');

  content.innerHTML = `
    <div class="modal-lang-icon">${lang.icon}</div>
    <div class="modal-lang-name" style="color:${lang.accent}">${lang.name}</div>
    <div class="modal-lang-tagline">${lang.tagline}</div>

    <div class="modal-section">
      <h3>// Overview</h3>
      <p>${lang.overview}</p>
    </div>

    <div class="modal-section">
      <h3>// Primary Use Cases</h3>
      <ul>${lang.uses.map(u => `<li>${u}</li>`).join('')}</ul>
    </div>

    <div class="modal-section">
      <h3>// Syntax Example</h3>
      <div class="code-block">${escapeHtml(lang.syntax)}</div>
    </div>

    <div class="modal-section">
      <h3>// Key Ecosystem</h3>
      <div class="lang-card-tags">
        ${lang.ecosystem.map(e => `<span class="tag">${e}</span>`).join('')}
      </div>
    </div>

    <div class="modal-section">
      <h3>// Salary Range (India)</h3>
      <p style="color: var(--accent-green); font-family: var(--font-display); font-size: 1.1rem">${lang.salary}</p>
    </div>

    <div class="modal-section">
      <h3>// Top Hiring Companies</h3>
      <div class="lang-card-tags">
        ${lang.topCompanies.map(c => `<span class="tag">${c}</span>`).join('')}
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('lang-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ========== ROADMAP ==========
function renderRoadmap() {
  const container = document.getElementById('roadmap-container');

  const html = `
    <div class="roadmap-line"></div>
    <div class="roadmap-steps">
      ${DB.roadmap.map((step, i) => `
        <div class="roadmap-step ${i % 2 === 0 ? 'left' : 'right'} reveal">
          <div class="roadmap-step-content">
            <div class="roadmap-salary" style="color:${step.color}">${step.salary}</div>
            <div class="roadmap-title">${step.title}</div>
            <div class="roadmap-desc">${step.desc}</div>
            <div class="roadmap-skills">
              ${step.skills.map(s => `<span class="skill-pill">${s}</span>`).join('')}
            </div>
            <div style="margin-top:12px;">
              <div style="font-family:var(--font-mono);font-size:0.72rem;color:var(--accent-green);margin-bottom:8px;letter-spacing:1px;">▸ ACTION ITEMS</div>
              ${step.actions.map(a => `<div style="font-size:0.85rem;color:var(--text-secondary);padding:3px 0;">✓ ${a}</div>`).join('')}
            </div>
            <div style="margin-top:12px;font-family:var(--font-mono);font-size:0.72rem;color:var(--text-muted);">
              ⏱ ${step.duration}
            </div>
          </div>
          <div class="roadmap-node" style="background:${step.color}15;border-color:${step.color};color:${step.color}">
            ${step.level}
          </div>
          <div class="roadmap-spacer"></div>
        </div>
      `).join('')}
    </div>
  `;

  container.innerHTML = html;
  triggerReveal();
}

// ========== DSA ==========
function renderDSA(tab) {
  const content = document.getElementById('dsa-content');
  const data = DB.dsa[tab];

  content.innerHTML = data.map(item => `
    <div class="dsa-card reveal">
      <div class="dsa-card-title">${item.title}</div>
      <span class="difficulty-badge diff-${item.difficulty}">${item.difficulty}</span>
      <div class="dsa-card-body">${item.desc}</div>
      <ul class="dsa-card-list">
        ${item.topics.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  triggerReveal();
}

// ========== COMPANIES ==========
function renderCompanies() {
  const grid = document.getElementById('company-grid');
  grid.innerHTML = DB.companies.map(co => `
    <div class="company-card reveal" style="--company-color:${co.color}">
      <div class="company-logo">${co.logo}</div>
      <div class="company-name">${co.name}</div>
      <div class="company-type">${co.type}</div>
      <div class="company-salary">${co.salary}</div>
      <div class="company-focus">${co.focus}</div>
      <div class="company-tags">
        ${co.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
  triggerReveal();
}

// ========== HACKATHONS ==========
function renderHackathons() {
  const grid = document.getElementById('hack-grid');
  grid.innerHTML = DB.hackathons.map(h => `
    <div class="hack-card reveal">
      <span class="hack-badge hack-${h.type}">${h.type === 'india' ? '🇮🇳 India' : '🌐 Global'}</span>
      <div class="hack-icon">${h.icon}</div>
      <div class="hack-name">${h.name}</div>
      <div class="hack-org">${h.org}</div>
      <div class="hack-desc">${h.desc}</div>
      <div class="hack-prize">🏆 ${h.prize}</div>
    </div>
  `).join('');
  triggerReveal();
}

// ========== INTERVIEWS ==========
function renderInterviews(tab) {
  const content = document.getElementById('interview-content');
  const data = DB.interviews[tab];

  content.innerHTML = data.map(item => `
    <div class="int-card reveal">
      <div class="int-card-title">${item.title}</div>
      <span class="difficulty-badge diff-${item.difficulty}">${item.difficulty}</span>
      <ul class="dsa-card-list" style="margin-top:12px;">
        ${item.questions.map(q => `<li>${q}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  triggerReveal();
}

// ========== TABS ==========
function initTabs() {
  document.querySelectorAll('.dsa-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.dsa-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderDSA(tab.dataset.tab);
    });
  });

  document.querySelectorAll('.int-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.int-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderInterviews(tab.dataset.tab);
    });
  });
}

// ========== COUNTERS ==========
function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { el.textContent = target; clearInterval(timer); }
          else el.textContent = Math.floor(current);
        }, 25);
        observer.unobserve(el);
      }
    });
  });
  counters.forEach(c => observer.observe(c));
}

// ========== SCROLL REVEAL ==========
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function triggerReveal() {
  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.05 });
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }, 50);
}
