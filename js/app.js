// TechCraft Hub - Master Engine & Futuristic Renderer (2026)
(function () {
  'use strict';

  // Master State
  const state = {
    lang: localStorage.getItem('techcraft_lang') || 'ar',
    theme: localStorage.getItem('techcraft_theme') || 'dark',
    category: 'all',
    difficulty: 'all',
    searchQuery: '',
    favoritesOnly: false,
    bookmarks: new Set(JSON.parse(localStorage.getItem('techcraft_bookmarks') || '[]')),
    activeTutorial: null,
    activeTab: 'overview'
  };

  // SVG Vector Icon Dictionary (Ultra-Crisp 24x24 Icons)
  const ICONS = {
    cpu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>`,
    brain: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"/></svg>`,
    layout: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
    server: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    database: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    terminal: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    zap: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    globe: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    trello: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><rect x="7" y="7" width="3" height="9"/><rect x="14" y="7" width="3" height="5"/></svg>`,
    clock: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    star: `<svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    arrow: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    copy: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
    check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
  };

  // Sandbox Templates
  const SANDBOX_TEMPLATES = {
    bento: `<style>
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #060911;
    font-family: system-ui, sans-serif;
  }
  .bento-card {
    position: relative;
    background: rgba(14, 21, 38, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    padding: 32px;
    max-width: 320px;
    color: #ffffff;
    box-shadow: 0 20px 50px rgba(0,0,0,0.6);
    transition: transform 0.3s ease;
  }
  .bento-card:hover {
    transform: translateY(-6px);
    border-color: #6366f1;
  }
  .pill {
    background: rgba(6, 182, 212, 0.15);
    color: #06b6d4;
    padding: 4px 12px;
    border-radius: 99px;
    font-size: 11px;
    font-weight: 800;
  }
  h3 { margin: 16px 0 8px; font-size: 19px; }
  p { color: #94a3b8; font-size: 14px; line-height: 1.6; }
</style>
<div class="bento-card">
  <span class="pill">BENTO ARCHITECTURE</span>
  <h3>Glassmorphism UI</h3>
  <p>Adaptive optical refraction, radiant neon border, and fluid responsive grid.</p>
</div>`,

    glow: `<style>
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #05070d;
    font-family: system-ui, sans-serif;
  }
  .neon-btn {
    background: linear-gradient(135deg, #06b6d4, #6366f1, #a855f7);
    color: #ffffff;
    border: none;
    padding: 16px 36px;
    border-radius: 14px;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 0 35px rgba(99, 102, 241, 0.6);
    transition: all 0.3s ease;
  }
  .neon-btn:hover {
    box-shadow: 0 0 50px rgba(6, 182, 212, 0.85);
    transform: scale(1.06);
  }
</style>
<button class="neon-btn">⚡ Deploy System</button>`,

    modal: `<style>
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #070a13;
    font-family: system-ui, sans-serif;
  }
  .dialog-box {
    background: rgba(14, 22, 40, 0.9);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    padding: 28px;
    max-width: 320px;
    color: #ffffff;
    text-align: center;
    box-shadow: 0 25px 60px rgba(0,0,0,0.7);
  }
  .badge-icon { font-size: 34px; margin-bottom: 12px; }
  h4 { margin: 0 0 8px; font-size: 20px; }
  p { color: #94a3b8; font-size: 14px; margin-bottom: 20px; }
  .btn-ack {
    background: #6366f1;
    color: #fff;
    border: none;
    padding: 10px 24px;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
  }
</style>
<div class="dialog-box">
  <div class="badge-icon">🪐</div>
  <h4>Cluster Online</h4>
  <p>Distributed microservice mesh authenticated with zero latency.</p>
  <button class="btn-ack">Acknowledge</button>
</div>`
  };

  // DOM Handles
  let elGrid, elFilters, elSearch, elDifficulty, elFavToggle, elCount;
  let elModal, elModalTitle, elModalBody, elTabs;
  let elSandboxTextarea, elSandboxFrame;

  function init() {
    cacheDom();
    applyTheme(state.theme);
    applyLanguage(state.lang);
    bindEvents();
    renderCategories();
    renderBlueprints();
    initSandbox('bento');
  }

  function cacheDom() {
    elGrid = document.getElementById('blueprints-grid');
    elFilters = document.getElementById('category-chips');
    elSearch = document.getElementById('search-input');
    elDifficulty = document.getElementById('difficulty-filter');
    elFavToggle = document.getElementById('fav-toggle-btn');
    elCount = document.getElementById('results-count');

    elModal = document.getElementById('tutorial-modal');
    elModalTitle = document.getElementById('modal-title');
    elModalBody = document.getElementById('modal-body-content');
    elTabs = document.querySelectorAll('.m-tab-btn');

    elSandboxTextarea = document.getElementById('sandbox-code-input');
    elSandboxFrame = document.getElementById('sandbox-preview-frame');
  }

  function t(key, fallback = '') {
    const dict = TRANSLATIONS[state.lang] || TRANSLATIONS.en;
    return dict[key] || fallback || key;
  }

  function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('techcraft_lang', lang);
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      const text = t(k);
      if (text) el.textContent = text;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const k = el.getAttribute('data-i18n-placeholder');
      const text = t(k);
      if (text) el.placeholder = text;
    });

    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.textContent = lang === 'ar' ? 'English' : 'عربي';
    }

    renderCategories();
    renderBlueprints();
    if (state.activeTutorial) {
      renderModalContent(state.activeTutorial);
    }
  }

  function applyTheme(theme) {
    state.theme = theme;
    localStorage.setItem('techcraft_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' 
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  }

  function bindEvents() {
    // Language switch
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        applyLanguage(state.lang === 'ar' ? 'en' : 'ar');
      });
    }

    // Theme switch
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
      });
    }

    // Search
    if (elSearch) {
      elSearch.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.toLowerCase().trim();
        renderBlueprints();
      });
    }

    // Shortcuts
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        elSearch && elSearch.focus();
      }
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    // Difficulty filter
    if (elDifficulty) {
      elDifficulty.addEventListener('change', (e) => {
        state.difficulty = e.target.value;
        renderBlueprints();
      });
    }

    // Favorites
    if (elFavToggle) {
      elFavToggle.addEventListener('click', () => {
        state.favoritesOnly = !state.favoritesOnly;
        elFavToggle.classList.toggle('active', state.favoritesOnly);
        renderBlueprints();
      });
    }

    // Modal close
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (elModal) {
      elModal.addEventListener('click', (e) => {
        if (e.target === elModal) closeModal();
      });
    }

    // Tabs
    elTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        elTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        state.activeTab = tab.getAttribute('data-tab');
        switchModalTab(state.activeTab);
      });
    });

    // Sandbox templates
    document.querySelectorAll('.tpl-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tpl-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        initSandbox(btn.getAttribute('data-template'));
      });
    });

    const runBtn = document.getElementById('sandbox-run-btn');
    if (runBtn) {
      runBtn.addEventListener('click', () => {
        if (elSandboxFrame && elSandboxTextarea) {
          elSandboxFrame.srcdoc = elSandboxTextarea.value;
        }
      });
    }

    const resetBtn = document.getElementById('sandbox-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const activeTpl = document.querySelector('.tpl-btn.active');
        const key = activeTpl ? activeTpl.getAttribute('data-template') : 'bento';
        initSandbox(key);
      });
    }
  }

  function renderCategories() {
    if (!elFilters) return;
    elFilters.innerHTML = '';

    CATEGORIES.forEach((cat) => {
      const count = cat.id === 'all' 
        ? TUTORIALS_DATA.length 
        : TUTORIALS_DATA.filter((p) => p.category === cat.id).length;

      const btn = document.createElement('button');
      btn.className = `cat-chip-btn ${state.category === cat.id ? 'active' : ''}`;
      
      const iconHtml = cat.id === 'ai' ? ICONS.brain 
        : cat.id === 'web' ? ICONS.layout 
        : cat.id === 'cloud' ? ICONS.server 
        : cat.id === 'devtools' ? ICONS.terminal 
        : ICONS.zap;

      btn.innerHTML = `${iconHtml} <span>${cat.label[state.lang] || cat.label.en} (${count})</span>`;
      btn.addEventListener('click', () => {
        state.category = cat.id;
        document.querySelectorAll('.cat-chip-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        renderBlueprints();
      });
      elFilters.appendChild(btn);
    });
  }

  // Generate Futuristic Card Visual Graphic Canvas
  function getVisualCanvasHtml(item) {
    if (item.image) {
      return `
        <div class="card-visual-image-wrapper" style="position:relative; height:220px; overflow:hidden; border-bottom:1px solid var(--border-subtle); background:#070a13;">
          <img src="${item.image}" alt="${item.title[state.lang] || item.title.en}" 
               style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);" 
               loading="lazy" class="card-hero-img">
          <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(5,7,13,0.1) 0%, rgba(5,7,13,0.75) 100%); pointer-events:none;"></div>
          <div style="position:absolute; bottom:12px; inset-inline-start:14px; font-family:var(--font-mono); font-size:10px; font-weight:700; color:#fff; background:rgba(6,8,14,0.75); padding:3px 10px; border-radius:99px; backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,0.15); display:flex; align-items:center; gap:5px;">
            <span style="width:6px; height:6px; border-radius:50%; background:#10b981; display:inline-block;"></span>
            <span>HIGH-RESOLUTION VM ARCHITECTURE</span>
          </div>
        </div>
      `;
    }

    const id = item.id;
    let canvasInner = '';

    if (id === 'ai-multi-agent-system') {
      canvasInner = `
        <div style="display:flex; align-items:center; justify-content:space-around; width:100%; gap:8px;">
          <div style="background:#111828; border:1px solid #06b6d4; padding:8px 12px; border-radius:10px; color:#06b6d4; font-family:var(--font-mono); font-size:11px; font-weight:700; box-shadow:0 0 15px rgba(6,182,212,0.3);">
            Planner
          </div>
          <div style="color:#06b6d4; font-size:14px;">➔</div>
          <div style="background:#111828; border:1px solid #6366f1; padding:8px 12px; border-radius:10px; color:#6366f1; font-family:var(--font-mono); font-size:11px; font-weight:700; box-shadow:0 0 15px rgba(99,102,241,0.3);">
            Worker
          </div>
          <div style="color:#6366f1; font-size:14px;">➔</div>
          <div style="background:#111828; border:1px solid #10b981; padding:8px 12px; border-radius:10px; color:#10b981; font-family:var(--font-mono); font-size:11px; font-weight:700; box-shadow:0 0 15px rgba(16,185,129,0.3);">
            Critic
          </div>
        </div>
      `;
    } else if (id === 'rag-semantic-search') {
      canvasInner = `
        <div style="width:90%; background:#0a0e1a; border:1px solid #1e293b; border-radius:12px; padding:12px;">
          <div style="display:flex; justify-content:space-between; font-size:11px; font-family:var(--font-mono); color:#94a3b8; margin-bottom:6px;">
            <span>VECTOR EMBEDDING MATCH</span>
            <span style="color:#06b6d4; font-weight:700;">98.2%</span>
          </div>
          <div style="width:100%; height:6px; background:#1e293b; border-radius:3px; overflow:hidden;">
            <div style="width:98.2%; height:100%; background:linear-gradient(90deg, #06b6d4, #10b981);"></div>
          </div>
          <div style="display:flex; gap:6px; margin-top:8px;">
            <span style="background:#1e293b; color:#94a3b8; font-size:10px; padding:2px 8px; border-radius:4px; font-family:var(--font-mono);">chunk_01</span>
            <span style="background:#1e293b; color:#94a3b8; font-size:10px; padding:2px 8px; border-radius:4px; font-family:var(--font-mono);">chunk_02</span>
            <span style="background:#06b6d422; color:#06b6d4; font-size:10px; padding:2px 8px; border-radius:4px; font-family:var(--font-mono);">chunk_top [cited]</span>
          </div>
        </div>
      `;
    } else if (id === 'bento-grid-saas-dashboard') {
      canvasInner = `
        <div style="display:grid; grid-template-columns:1.5fr 1fr; gap:8px; width:90%;">
          <div style="background:rgba(99,102,241,0.12); border:1px solid rgba(99,102,241,0.3); border-radius:10px; padding:10px; color:#fff;">
            <div style="font-size:10px; color:#06b6d4; font-family:var(--font-mono); font-weight:700;">ACTIVE TELEMETRY</div>
            <div style="font-size:18px; font-weight:900; margin-top:4px;">14,890 <span style="font-size:10px; color:#10b981;">+24%</span></div>
          </div>
          <div style="background:rgba(168,85,247,0.12); border:1px solid rgba(168,85,247,0.3); border-radius:10px; padding:10px; color:#fff;">
            <div style="font-size:10px; color:#a855f7; font-family:var(--font-mono); font-weight:700;">FPS METER</div>
            <div style="font-size:18px; font-weight:900; margin-top:4px;">60.0</div>
          </div>
        </div>
      `;
    } else if (id === 'zero-dependency-arabic-rtl') {
      canvasInner = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; width:90%; gap:8px;">
          <div style="font-size:24px; font-weight:900; color:#38bdf8; letter-spacing:0.05em; font-family:var(--font-ar);">
            خط وتصميم ذكي RTL
          </div>
          <div style="display:flex; align-items:center; gap:8px; font-family:var(--font-mono); font-size:11px; color:#94a3b8;">
            <span>LTR (en)</span>
            <span style="color:#6366f1; font-weight:800;">⇄</span>
            <span>RTL (ar)</span>
            <span style="color:#10b981; font-weight:800;">[Zero CSS Dup]</span>
          </div>
        </div>
      `;
    } else if (id === 'microservices-ecommerce-blueprint') {
      canvasInner = `
        <div style="width:90%; background:#090d18; border:1px solid #1e293b; border-radius:12px; padding:10px; font-family:var(--font-mono);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-size:10px; color:#a855f7; font-weight:700;">KAFKA EVENT STREAM</span>
            <span style="font-size:10px; color:#10b981;">50K req/s</span>
          </div>
          <div style="display:flex; gap:6px; font-size:10px;">
            <span style="background:#1e293b; padding:4px 8px; border-radius:6px; color:#cbd5e1;">OrderSvc</span>
            <span style="color:#a855f7;">➔</span>
            <span style="background:#1e293b; padding:4px 8px; border-radius:6px; color:#cbd5e1;">PaymentWorker</span>
          </div>
        </div>
      `;
    } else if (id === 'relational-3nf-database-design') {
      canvasInner = `
        <div style="display:flex; gap:8px; width:90%; font-family:var(--font-mono); font-size:10px;">
          <div style="flex:1; background:#0e1626; border:1px solid #334155; border-radius:8px; padding:8px;">
            <div style="color:#06b6d4; font-weight:700; border-bottom:1px solid #1e293b; padding-bottom:4px;">tbl_customers</div>
            <div style="color:#94a3b8; margin-top:4px;">* customer_id [PK]</div>
            <div style="color:#64748b;">email UNIQUE</div>
          </div>
          <div style="flex:1; background:#0e1626; border:1px solid #334155; border-radius:8px; padding:8px;">
            <div style="color:#6366f1; font-weight:700; border-bottom:1px solid #1e293b; padding-bottom:4px;">tbl_orders</div>
            <div style="color:#94a3b8; margin-top:4px;">* order_id [PK]</div>
            <div style="color:#10b981;">customer_id [FK]</div>
          </div>
        </div>
      `;
    } else if (id === 'python-automation-bot') {
      canvasInner = `
        <div style="width:90%; background:#05070e; border:1px solid #1e293b; border-radius:10px; padding:10px; font-family:var(--font-mono); font-size:11px;">
          <div style="color:#64748b; margin-bottom:4px;">$ python3 etl_reporter.py --daily</div>
          <div style="color:#10b981; font-weight:700;">[OK] Aggregated 48,200 rows in 3.2s</div>
          <div style="color:#38bdf8;">[PDF] Generated: executive_report.pdf</div>
        </div>
      `;
    } else if (id === 'web-vitals-performance-mastery') {
      canvasInner = `
        <div style="display:flex; align-items:center; justify-content:center; gap:16px; width:90%;">
          <div style="width:58px; height:58px; border-radius:50%; border:3px solid #10b981; display:flex; align-items:center; justify-content:center; font-family:var(--font-mono); font-size:18px; font-weight:900; color:#10b981; box-shadow:0 0 20px rgba(16,185,129,0.3);">
            100
          </div>
          <div style="font-family:var(--font-mono); font-size:11px; display:flex; flex-direction:column; gap:2px;">
            <span style="color:#10b981;">LCP: 0.72s [PERFECT]</span>
            <span style="color:#10b981;">CLS: 0.000 [ZERO]</span>
            <span style="color:#06b6d4;">INP: 42ms [RESPONSIVE]</span>
          </div>
        </div>
      `;
    } else {
      canvasInner = `
        <div style="display:flex; gap:8px; width:90%; font-family:var(--font-mono); font-size:11px;">
          <div style="flex:1; background:#0b1120; border:1px solid #1e293b; border-radius:8px; padding:8px; text-align:center;">
            <div style="color:#64748b; font-size:9px;">TODO</div>
            <div style="background:#1e293b; padding:4px; border-radius:4px; margin-top:4px; color:#cbd5e1;">Design</div>
          </div>
          <div style="flex:1; background:#0b1120; border:1px solid #06b6d4; border-radius:8px; padding:8px; text-align:center; box-shadow:0 0 15px rgba(6,182,212,0.2);">
            <div style="color:#06b6d4; font-size:9px;">IN PROGRESS</div>
            <div style="background:#06b6d422; padding:4px; border-radius:4px; margin-top:4px; color:#06b6d4;">Drag & Drop</div>
          </div>
          <div style="flex:1; background:#0b1120; border:1px solid #10b981; border-radius:8px; padding:8px; text-align:center;">
            <div style="color:#10b981; font-size:9px;">DONE</div>
            <div style="background:#10b98122; padding:4px; border-radius:4px; margin-top:4px; color:#10b981;">State Sync</div>
          </div>
        </div>
      `;
    }

    return `
      <div class="card-visual-canvas">
        <div class="canvas-glow-orb" style="background:${item.category === 'ai' ? '#06b6d4' : item.category === 'web' ? '#6366f1' : item.category === 'cloud' ? '#a855f7' : '#10b981'}"></div>
        <div class="canvas-illustration-box">
          ${canvasInner}
        </div>
      </div>
    `;
  }

  function renderBlueprints() {
    if (!elGrid) return;
    elGrid.innerHTML = '';

    const filtered = TUTORIALS_DATA.filter((item) => {
      if (state.category !== 'all' && item.category !== state.category) return false;
      if (state.difficulty !== 'all' && item.difficulty !== state.difficulty) return false;
      if (state.favoritesOnly && !state.bookmarks.has(item.id)) return false;
      if (state.searchQuery) {
        const q = state.searchQuery;
        const titleEn = item.title.en.toLowerCase();
        const titleAr = item.title.ar.toLowerCase();
        const summaryEn = item.summary.en.toLowerCase();
        const summaryAr = item.summary.ar.toLowerCase();
        const tags = item.tags.join(' ').toLowerCase();
        return titleEn.includes(q) || titleAr.includes(q) || summaryEn.includes(q) || summaryAr.includes(q) || tags.includes(q);
      }
      return true;
    });

    if (elCount) {
      elCount.textContent = t('filter.results_count').replace('{count}', filtered.length);
    }

    if (filtered.length === 0) {
      elGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 5rem 2rem; background: var(--bg-card); border-radius: var(--rad-xl); border: 1px dashed var(--border-medium);">
          <div style="font-size: 3rem; margin-bottom: 1.25rem;">🔍</div>
          <h3 style="font-size: 1.5rem; margin-bottom: 0.75rem; color: var(--text-pure);">${t('card.no_results_title')}</h3>
          <p style="color: var(--text-muted); max-width: 520px; margin: 0 auto 2rem;">${t('card.no_results_desc')}</p>
          <button id="reset-all-filters-btn" class="btn-futuristic btn-primary-grad">${t('card.reset_filters')}</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-all-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.category = 'all';
          state.difficulty = 'all';
          state.searchQuery = '';
          state.favoritesOnly = false;
          if (elSearch) elSearch.value = '';
          if (elDifficulty) elDifficulty.value = 'all';
          if (elFavToggle) elFavToggle.classList.remove('active');
          renderCategories();
          renderBlueprints();
        });
      }
      return;
    }

    filtered.forEach((item) => {
      const isSaved = state.bookmarks.has(item.id);
      const card = document.createElement('article');
      card.className = 'tech-card';

      const title = item.title[state.lang] || item.title.en;
      const summary = item.summary[state.lang] || item.summary.en;
      const badgeText = item.badge[state.lang] || item.badge.en;

      // Difficulty bar styling
      const dLvl = item.difficulty;
      const barsHtml = `
        <div class="diff-bars">
          <span class="d-bar ${dLvl === 'beginner' || dLvl === 'intermediate' || dLvl === 'advanced' ? (dLvl === 'beginner' ? 'active-green' : dLvl === 'intermediate' ? 'active-amber' : 'active-purple') : ''}"></span>
          <span class="d-bar ${dLvl === 'intermediate' || dLvl === 'advanced' ? (dLvl === 'intermediate' ? 'active-amber' : 'active-purple') : ''}"></span>
          <span class="d-bar ${dLvl === 'advanced' ? 'active-purple' : ''}"></span>
        </div>
      `;

      card.innerHTML = `
        ${getVisualCanvasHtml(item)}

        <div class="card-content-body">
          <div class="card-tag-row">
            <span class="cat-pill pill-${item.category}">
              ${item.category === 'ai' ? ICONS.brain : item.category === 'web' ? ICONS.layout : item.category === 'cloud' ? ICONS.server : ICONS.terminal}
              <span>${badgeText}</span>
            </span>

            <div class="card-top-right">
              <span class="time-badge">
                ${ICONS.clock} <span>${item.readTime}</span>
              </span>
              <button class="star-save-btn ${isSaved ? 'active' : ''}" data-id="${item.id}" aria-label="Bookmark">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </button>
            </div>
          </div>

          <h3 class="card-headline">${title}</h3>
          <p class="card-excerpt">${summary}</p>

          <div class="card-signal-row">
            <div class="difficulty-indicator">
              ${barsHtml}
              <span class="diff-text">${t(`filter.level_${item.difficulty}`)}</span>
            </div>

            <div class="card-stats-mini">
              ${item.stats.slice(0, 2).map(s => `
                <div class="mini-stat-item">
                  <span class="mini-val">${s.value}</span>
                  <span class="mini-lbl">${s.label[state.lang] || s.label.en}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="card-tags-cloud">
            ${item.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
          </div>

          <div class="card-bottom-cta">
            <button class="btn-futuristic btn-primary-grad btn-open-blueprint" data-open-tutorial="${item.id}">
              <span>${t('card.open_tutorial')}</span>
              ${ICONS.arrow}
            </button>
          </div>
        </div>
      `;

      // Save bookmark
      const starBtn = card.querySelector('.star-save-btn');
      starBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleBookmark(item.id, starBtn);
      });

      // Open tutorial
      const openBtn = card.querySelector('[data-open-tutorial]');
      openBtn.addEventListener('click', () => {
        openModal(item.id);
      });

      elGrid.appendChild(card);
    });
  }

  function toggleBookmark(id, btn) {
    if (state.bookmarks.has(id)) {
      state.bookmarks.delete(id);
      btn.classList.remove('active');
      btn.querySelector('svg').setAttribute('fill', 'none');
    } else {
      state.bookmarks.add(id);
      btn.classList.add('active');
      btn.querySelector('svg').setAttribute('fill', 'currentColor');
    }
    localStorage.setItem('techcraft_bookmarks', JSON.stringify([...state.bookmarks]));
    if (state.favoritesOnly) {
      renderBlueprints();
    }
  }

  function openModal(id) {
    const item = TUTORIALS_DATA.find((p) => p.id === id);
    if (!item) return;
    state.activeTutorial = item;
    state.activeTab = 'overview';

    elTabs.forEach((tab) => {
      tab.classList.toggle('active', tab.getAttribute('data-tab') === 'overview');
    });

    renderModalContent(item);
    elModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!elModal) return;
    elModal.classList.remove('open');
    document.body.style.overflow = '';
    state.activeTutorial = null;
  }

  function switchModalTab(tabKey) {
    document.querySelectorAll('.tab-pane-view').forEach((panel) => {
      panel.style.display = panel.id === `tab-pane-${tabKey}` ? 'block' : 'none';
    });
  }

  function renderModalContent(item) {
    if (!elModalTitle || !elModalBody) return;

    const title = item.title[state.lang] || item.title.en;
    elModalTitle.textContent = title;
    let imageBannerHtml = '';
    if (item.image) {
      imageBannerHtml = `
        <div style="position:relative; width:100%; height:280px; overflow:hidden; border-radius:var(--rad-lg); margin-bottom:2rem; box-shadow:0 20px 45px rgba(0,0,0,0.6); border:1px solid var(--border-medium);">
          <img src="${item.image}" alt="${title}" style="width:100%; height:100%; object-fit:cover; display:block;">
          <div style="position:absolute; inset:0; background:linear-gradient(180deg, transparent 40%, rgba(10,14,25,0.92) 100%);"></div>
          <div style="position:absolute; bottom:16px; inset-inline-start:20px; font-size:0.85rem; font-weight:800; color:#fff; background:rgba(6,8,14,0.85); padding:5px 14px; border-radius:99px; backdrop-filter:blur(12px); border:1px solid rgba(6,182,212,0.4); display:flex; align-items:center; gap:8px;">
            <span style="width:8px; height:8px; border-radius:50%; background:#06b6d4; display:inline-block; box-shadow:0 0 10px #06b6d4;"></span>
            <span>MASTER VISUAL MERCHANDISING SHOWCASE</span>
          </div>
        </div>
      `;
    }


    const archDesc = item.architecture[state.lang] || item.architecture.en;
    const diagramSteps = item.diagramSteps || [];

    elModalBody.innerHTML = `
      <!-- Tab 1: Overview -->
      <div id="tab-pane-overview" class="tab-pane-view">
        ${imageBannerHtml}
        <h4 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1rem; color: var(--neon-cyan);">
          ${t('modal.tab_overview')}
        </h4>
        <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 2rem;">
          ${archDesc}
        </p>

        <h5 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 1rem; color: var(--text-pure);">
          ${t('modal.flow_title')}
        </h5>
        <div style="display: flex; align-items: center; gap: 0.85rem; padding: 1.5rem; background: var(--bg-elevated); border-radius: var(--rad-lg); border: 1px solid var(--border-subtle); overflow-x: auto; margin-bottom: 2.5rem;">
          ${diagramSteps.map((s, idx) => `
            <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.25rem; border-radius: var(--rad-full); background: var(--bg-surface); border: 1px solid var(--border-medium); font-size: 0.9rem; font-weight: 700; white-space: nowrap; color: var(--text-pure);">
              ${s[state.lang] || s.en}
            </div>
            ${idx < diagramSteps.length - 1 ? '<div style="color: var(--neon-cyan); font-weight: 800;">➔</div>' : ''}
          `).join('')}
        </div>

        <h5 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 1rem; color: var(--text-pure);">
          ${t('modal.metrics_title')}
        </h5>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding: 1.5rem; background: var(--bg-deep); border-radius: var(--rad-lg); border: 1px solid var(--border-subtle);">
          ${item.stats.map(s => `
            <div style="text-align: center;">
              <div style="font-size: 1.4rem; font-weight: 900; color: var(--neon-cyan); font-family: var(--font-mono);">${s.value}</div>
              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem;">${s.label[state.lang] || s.label.en}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tab 2: Steps -->
      <div id="tab-pane-steps" class="tab-pane-view" style="display: none;">
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          ${item.steps.map((st) => `
            <div style="padding: 1.75rem; border-radius: var(--rad-lg); background: var(--bg-elevated); border: 1px solid var(--border-subtle);">
              <div style="font-size: 1.2rem; font-weight: 800; color: var(--neon-cyan); margin-bottom: 0.65rem;">${st.title[state.lang] || st.title.en}</div>
              <div style="font-size: 1rem; color: var(--text-muted); line-height: 1.75;">${st.content[state.lang] || st.content.en}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tab 3: Code -->
      <div id="tab-pane-code" class="tab-pane-view" style="display: none;">
        <div style="border-radius: var(--rad-lg); background: #070912; border: 1px solid var(--border-medium); overflow: hidden;">
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.5rem; background: #0c101d; border-bottom: 1px solid var(--border-subtle);">
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-faint); font-weight: 700;">PRODUCTION CODE BLUEPRINT</span>
            <button id="modal-copy-code-btn" class="icon-btn" style="width: auto; padding-inline: 0.85rem; font-size: 0.8rem; gap: 0.4rem;">
              ${ICONS.copy} <span>${t('modal.copy_code')}</span>
            </button>
          </div>
          <pre style="margin: 0; padding: 1.5rem; font-family: var(--font-mono); font-size: 0.9rem; line-height: 1.65; color: #e2e8f0; overflow-x: auto;"><code>${escapeHtml(item.codeSnippet || '// Blueprint source code')}</code></pre>
        </div>
      </div>

      <!-- Tab 4: Sandbox -->
      <div id="tab-pane-sandbox" class="tab-pane-view" style="display: none;">
        <div style="text-align: center; padding: 3rem; background: var(--bg-elevated); border-radius: var(--rad-xl); border: 1px solid var(--border-subtle);">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">⚡</div>
          <p style="color: var(--text-muted); font-size: 1.1rem; max-width: 500px; margin: 0 auto 1.5rem;">
            ${t('sandbox.subtitle')}
          </p>
          <a href="#sandbox-section" class="btn-futuristic btn-primary-grad" onclick="TechCraft.closeModal();">
            ${t('hero.cta_sandbox')}
          </a>
        </div>
      </div>
    `;

    // Bind copy button
    const copyBtn = document.getElementById('modal-copy-code-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(item.codeSnippet || '').then(() => {
          const span = copyBtn.querySelector('span');
          if (span) span.textContent = t('modal.copied');
          setTimeout(() => {
            if (span) span.textContent = t('modal.copy_code');
          }, 2000);
        });
      });
    }
  }

  function initSandbox(templateKey) {
    if (!elSandboxTextarea || !elSandboxFrame) return;
    const code = SANDBOX_TEMPLATES[templateKey] || SANDBOX_TEMPLATES.bento;
    elSandboxTextarea.value = code;
    elSandboxFrame.srcdoc = code;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  window.TechCraft = {
    closeModal: closeModal
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
