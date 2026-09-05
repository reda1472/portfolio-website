// TechCraft Hub - Core Application Engine
(function () {
  'use strict';

  // State
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

  // Sandbox Templates
  const SANDBOX_TEMPLATES = {
    bento: `<style>
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #090d16;
    font-family: system-ui, sans-serif;
  }
  .card {
    position: relative;
    background: rgba(18, 24, 38, 0.7);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 30px;
    color: #fff;
    max-width: 320px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.5);
    transition: transform 0.3s ease;
  }
  .card:hover {
    transform: translateY(-5px);
    border-color: rgba(99, 102, 241, 0.5);
  }
  .badge {
    background: rgba(6, 182, 212, 0.15);
    color: #06b6d4;
    padding: 4px 12px;
    border-radius: 99px;
    font-size: 12px;
    font-weight: 700;
  }
  h3 { margin: 15px 0 8px; font-size: 18px; }
  p { color: #94a3b8; font-size: 14px; line-height: 1.5; }
</style>
<div class="card">
  <span class="badge">BENTO GLASS</span>
  <h3>Architectural Component</h3>
  <p>Live rendered CSS Glassmorphism with adaptive optical backdrop blur and gradient boundary.</p>
</div>`,

    glow: `<style>
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #07090e;
    font-family: system-ui, sans-serif;
  }
  .glow-btn {
    position: relative;
    background: linear-gradient(135deg, #06b6d4, #6366f1);
    color: #ffffff;
    border: none;
    padding: 14px 32px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 0 25px rgba(99, 102, 241, 0.5);
    transition: all 0.3s ease;
  }
  .glow-btn:hover {
    box-shadow: 0 0 40px rgba(99, 102, 241, 0.85);
    transform: scale(1.05);
  }
</style>
<button class="glow-btn">⚡ Deploy Blueprint</button>`,

    modal: `<style>
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #090d16;
    font-family: system-ui, sans-serif;
  }
  .dialog {
    background: rgba(14, 20, 34, 0.85);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 18px;
    padding: 24px;
    max-width: 340px;
    color: #f8fafc;
    text-align: center;
  }
  .icon { font-size: 32px; margin-bottom: 10px; }
  h4 { margin: 0 0 8px; font-size: 18px; }
  p { color: #94a3b8; font-size: 13px; margin-bottom: 18px; }
  .btn {
    background: #6366f1;
    color: #fff;
    border: none;
    padding: 8px 18px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
  }
</style>
<div class="dialog">
  <div class="icon">🚀</div>
  <h4>System Initialized</h4>
  <p>Microservice cluster connected successfully with low-latency event broker.</p>
  <button class="btn">Acknowledge</button>
</div>`
  };

  // DOM Elements
  let elGrid, elFilters, elSearch, elDifficulty, elFavToggle, elCount;
  let elModal, elModalTitle, elModalBody, elTabs;
  let elSandboxTextarea, elSandboxFrame;

  // Initialize
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
    elTabs = document.querySelectorAll('.modal-tab-btn');

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

    // Update all text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      const text = t(k);
      if (text) el.textContent = text;
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const k = el.getAttribute('data-i18n-placeholder');
      const text = t(k);
      if (text) el.placeholder = text;
    });

    // Update language toggle button label
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
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  }

  function bindEvents() {
    // Language Toggle
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        applyLanguage(state.lang === 'ar' ? 'en' : 'ar');
      });
    }

    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
      });
    }

    // Search input
    if (elSearch) {
      elSearch.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.toLowerCase().trim();
        renderBlueprints();
      });
    }

    // Keyboard shortcut for search (Ctrl+K or /)
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        elSearch && elSearch.focus();
      }
      if (e.key === 'Escape') {
        closeTutorialModal();
      }
    });

    // Difficulty Filter
    if (elDifficulty) {
      elDifficulty.addEventListener('change', (e) => {
        state.difficulty = e.target.value;
        renderBlueprints();
      });
    }

    // Favorites Filter
    if (elFavToggle) {
      elFavToggle.addEventListener('click', () => {
        state.favoritesOnly = !state.favoritesOnly;
        elFavToggle.classList.toggle('active', state.favoritesOnly);
        renderBlueprints();
      });
    }

    // Modal Close Button
    const modalCloseBtn = document.getElementById('modal-close-btn');
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeTutorialModal);
    }

    // Modal Backdrop click outside
    if (elModal) {
      elModal.addEventListener('click', (e) => {
        if (e.target === elModal) closeTutorialModal();
      });
    }

    // Modal Tabs
    elTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        elTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        state.activeTab = tab.getAttribute('data-tab');
        switchModalTab(state.activeTab);
      });
    });

    // Sandbox Controls
    document.querySelectorAll('.template-pill-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.template-pill-btn').forEach((b) => b.classList.remove('active'));
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
        const activeTplBtn = document.querySelector('.template-pill-btn.active');
        const tplKey = activeTplBtn ? activeTplBtn.getAttribute('data-template') : 'bento';
        initSandbox(tplKey);
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
      btn.className = `chip-btn ${state.category === cat.id ? 'active' : ''}`;
      const labelText = cat.label[state.lang] || cat.label.en;
      btn.textContent = `${labelText} (${count})`;
      btn.addEventListener('click', () => {
        state.category = cat.id;
        document.querySelectorAll('.chip-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        renderBlueprints();
      });
      elFilters.appendChild(btn);
    });
  }

  function renderBlueprints() {
    if (!elGrid) return;
    elGrid.innerHTML = '';

    const filtered = TUTORIALS_DATA.filter((item) => {
      // Category match
      if (state.category !== 'all' && item.category !== state.category) return false;
      // Difficulty match
      if (state.difficulty !== 'all' && item.difficulty !== state.difficulty) return false;
      // Favorites filter
      if (state.favoritesOnly && !state.bookmarks.has(item.id)) return false;
      // Search query
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

    // Update count display
    if (elCount) {
      elCount.textContent = t('filter.results_count').replace('{count}', filtered.length);
    }

    if (filtered.length === 0) {
      elGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px dashed var(--border-medium);">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">${t('card.no_results_title')}</h3>
          <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 1.5rem;">${t('card.no_results_desc')}</p>
          <button id="reset-all-filters-btn" class="btn btn-secondary">${t('card.reset_filters')}</button>
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
      card.className = 'blueprint-card';

      const title = item.title[state.lang] || item.title.en;
      const summary = item.summary[state.lang] || item.summary.en;
      const badgeText = item.badge[state.lang] || item.badge.en;

      card.innerHTML = `
        <div class="card-top-meta">
          <span class="badge-tag badge-${item.category}">
            <span class="pulse-dot"></span> ${badgeText}
          </span>
          <div class="card-meta-right">
            <span class="read-time-pill">
              ⏱️ ${item.readTime} ${t('card.read_time')}
            </span>
            <button class="btn-bookmark ${isSaved ? 'bookmarked' : ''}" data-id="${item.id}" title="${isSaved ? t('card.saved') : t('card.save')}" aria-label="${t('card.save')}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
            </button>
          </div>
        </div>

        <h3 class="card-title">${title}</h3>
        <p class="card-summary">${summary}</p>

        <div class="card-stats-row">
          ${item.stats.map(s => `
            <div>
              <div class="card-stat-val">${s.value}</div>
              <div class="card-stat-lbl">${s.label[state.lang] || s.label.en}</div>
            </div>
          `).join('')}
        </div>

        <div class="card-tags-list">
          ${item.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>

        <div class="card-actions-bar">
          <button class="btn btn-primary btn-card-open" data-open-tutorial="${item.id}">
            📖 ${t('card.open_tutorial')}
          </button>
        </div>
      `;

      // Bookmark action
      const bookmarkBtn = card.querySelector('.btn-bookmark');
      bookmarkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleBookmark(item.id, bookmarkBtn);
      });

      // Open tutorial action
      const openBtn = card.querySelector('[data-open-tutorial]');
      openBtn.addEventListener('click', () => {
        openTutorialModal(item.id);
      });

      elGrid.appendChild(card);
    });
  }

  function toggleBookmark(id, btn) {
    if (state.bookmarks.has(id)) {
      state.bookmarks.delete(id);
      btn.classList.remove('bookmarked');
      btn.querySelector('svg').setAttribute('fill', 'none');
    } else {
      state.bookmarks.add(id);
      btn.classList.add('bookmarked');
      btn.querySelector('svg').setAttribute('fill', 'currentColor');
    }
    localStorage.setItem('techcraft_bookmarks', JSON.stringify([...state.bookmarks]));
    if (state.favoritesOnly) {
      renderBlueprints();
    }
  }

  function openTutorialModal(id) {
    const item = TUTORIALS_DATA.find((p) => p.id === id);
    if (!item) return;
    state.activeTutorial = item;
    state.activeTab = 'overview';

    // Reset tabs
    elTabs.forEach((tab) => {
      tab.classList.toggle('active', tab.getAttribute('data-tab') === 'overview');
    });

    renderModalContent(item);
    elModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeTutorialModal() {
    if (!elModal) return;
    elModal.classList.remove('open');
    document.body.style.overflow = '';
    state.activeTutorial = null;
  }

  function switchModalTab(tabKey) {
    document.querySelectorAll('.tab-panel').forEach((panel) => {
      panel.classList.toggle('active', panel.id === `tab-panel-${tabKey}`);
    });
  }

  function renderModalContent(item) {
    if (!elModalTitle || !elModalBody) return;

    const title = item.title[state.lang] || item.title.en;
    elModalTitle.textContent = title;

    const archDesc = item.architecture[state.lang] || item.architecture.en;
    const diagramSteps = item.diagramSteps || [];

    elModalBody.innerHTML = `
      <!-- Tab 1: Overview & Architecture -->
      <div id="tab-panel-overview" class="tab-panel active">
        <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--accent-cyan);">
          🏗️ ${t('modal.tab_overview')}
        </h4>
        <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">
          ${archDesc}
        </p>

        <h5 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-primary);">
          ${t('modal.flow_title')}
        </h5>
        <div class="flow-diagram-container">
          ${diagramSteps.map((s, idx) => `
            <div class="flow-step-pill">${s[state.lang] || s.en}</div>
            ${idx < diagramSteps.length - 1 ? '<div class="flow-arrow">➔</div>' : ''}
          `).join('')}
        </div>

        <h5 style="font-size: 0.95rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.75rem; color: var(--text-primary);">
          ${t('modal.metrics_title')}
        </h5>
        <div class="card-stats-row" style="background: var(--bg-base); padding: 1.25rem;">
          ${item.stats.map(s => `
            <div>
              <div class="card-stat-val" style="font-size: 1.25rem;">${s.value}</div>
              <div class="card-stat-lbl" style="font-size: 0.8rem;">${s.label[state.lang] || s.label.en}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tab 2: Step-by-Step Blueprint -->
      <div id="tab-panel-steps" class="tab-panel">
        <div class="tutorial-steps-list">
          ${item.steps.map((st) => `
            <div class="step-card">
              <div class="step-title">${st.title[state.lang] || st.title.en}</div>
              <div class="step-content">${st.content[state.lang] || st.content.en}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tab 3: Production Code -->
      <div id="tab-panel-code" class="tab-panel">
        <div class="code-viewer-container">
          <div class="code-viewer-header">
            <span class="code-lang-label">PRODUCTION SOURCE</span>
            <button id="modal-copy-code-btn" class="btn-copy-code">
              📋 <span>${t('modal.copy_code')}</span>
            </button>
          </div>
          <pre class="code-block"><code>${escapeHtml(item.codeSnippet || '// Code architecture sample')}</code></pre>
        </div>
      </div>

      <!-- Tab 4: Interactive Sandbox -->
      <div id="tab-panel-sandbox" class="tab-panel">
        <div style="padding: 1rem; background: var(--bg-elevated); border-radius: var(--radius-md); border: 1px solid var(--border-subtle); text-align: center;">
          <p style="color: var(--text-secondary); margin-bottom: 1rem;">
            ${t('sandbox.subtitle')}
          </p>
          <a href="#sandbox-section" class="btn btn-primary" onclick="TechCraft.closeModal();">
            ⚡ ${t('hero.cta_sandbox')}
          </a>
        </div>
      </div>
    `;

    // Bind Copy button
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

  // Public API
  window.TechCraft = {
    closeModal: closeTutorialModal
  };

  // Launch on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
