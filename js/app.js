/**
 * Production-Grade Application Controller & Case-Study Engine
 * Reda Mohamed Salah — Web Developer & Systems Builder
 */

const App = (function () {
  'use strict';

  // SVG Icon Registry
  const ICONS = {
    externalLink: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
    github: '<svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
    caseStudy: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
    code: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    layout: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
    database: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
    terminal: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
    cpu: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>',
    zap: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    globe: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    checkCircle: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    arrowRight: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'
  };

  let activeCategoryFilter = 'all';

  function getLang() {
    return (window.I18N && window.I18N.getLang) ? window.I18N.getLang() : 'en';
  }

  // 1. Render Featured Projects (Top Flagship Case Studies)
  function renderFeaturedProjects() {
    const container = document.getElementById('featured-projects-container');
    if (!container) return;
    const lang = getLang();

    const featuredList = SITE_DATA.projects
      .filter(p => p.isFeatured)
      .sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99));

    container.innerHTML = featuredList.map(proj => `
      <article class="flagship-card" data-project-id="${proj.id}">
        <div class="flagship-preview-pane">
          <div class="preview-mockup-frame">
            <div class="mockup-header-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
              <span class="mockup-header-title font-mono">${proj.id} • Production System</span>
            </div>
            <div class="mockup-body-canvas">
              <div class="canvas-grid-lines"></div>
              <div class="canvas-content-box">
                <div class="canvas-tag-badge font-mono">${(proj.category || 'SYSTEM').toUpperCase()} ARCHITECTURE</div>
                <h4 class="canvas-title">${proj.title[lang]}</h4>
                <div class="canvas-stat-pills">
                  ${(proj.metrics || []).map(m => `
                    <div class="canvas-stat-pill">
                      <span class="val font-mono">${m.value}</span>
                      <span class="lbl">${m.label[lang]}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flagship-details-pane">
          <div class="project-header-row">
            <span class="badge badge-emerald"><span class="pulse-dot"></span>${proj.badge[lang]}</span>
            <span class="tech-pill font-mono">${(proj.category || '').toUpperCase()}</span>
          </div>

          <h3 class="flagship-title">${proj.title[lang]}</h3>
          <p class="flagship-tagline">${proj.tagline[lang]}</p>
          <p class="flagship-description">${proj.description[lang]}</p>

          <div class="flagship-metrics-row">
            ${(proj.metrics || []).map(m => `
              <div class="flagship-metric-card">
                <span class="metric-number">${m.value}</span>
                <span class="metric-label">${m.label[lang]}</span>
              </div>
            `).join('')}
          </div>

          <div class="tech-pills">
            ${(proj.techStack || []).map(t => `<span class="tech-pill">${t}</span>`).join('')}
          </div>

          <div class="flagship-actions">
            <button type="button" class="btn btn-primary btn-case-study" data-open-case-study="${proj.id}">
              ${ICONS.caseStudy} ${I18N.t('featured.openCaseStudy')}
            </button>
            <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
              ${ICONS.externalLink} ${I18N.t('featured.viewLive')}
            </a>
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              ${ICONS.github} ${I18N.t('featured.viewCode')}
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  // 2. Render All Projects with Category Filtering
  function renderAllProjects(filterCategory) {
    if (filterCategory !== undefined) {
      activeCategoryFilter = filterCategory;
    }
    const container = document.getElementById('all-projects-container');
    if (!container) return;
    const lang = getLang();

    // Render filter buttons if container exists
    const filtersContainer = document.getElementById('category-filters-container');
    if (filtersContainer && SITE_DATA.categories) {
      filtersContainer.innerHTML = SITE_DATA.categories.map(cat => `
        <button type="button" 
          class="filter-btn ${cat.id === activeCategoryFilter ? 'active' : ''}" 
          data-filter="${cat.id}">
          ${cat.label[lang]}
        </button>
      `).join('');
    }

    const filtered = activeCategoryFilter === 'all'
      ? SITE_DATA.projects
      : SITE_DATA.projects.filter(p => p.category === activeCategoryFilter);

    container.innerHTML = filtered.map(proj => `
      <article class="project-card" data-project-id="${proj.id}">
        <div class="project-card-body">
          <div class="project-header-row">
            <span class="badge badge-emerald"><span class="pulse-dot"></span>${proj.badge ? proj.badge[lang] : ''}</span>
            <span class="tech-pill font-mono">${(proj.category || 'PROJECT').toUpperCase()}</span>
          </div>

          <h3 class="project-title">${proj.title ? proj.title[lang] : ''}</h3>
          <p class="project-tagline">${proj.tagline ? proj.tagline[lang] : ''}</p>
          <p class="project-desc">${proj.description ? proj.description[lang] : ''}</p>

          <div class="tech-pills">
            ${(proj.techStack || []).map(t => `<span class="tech-pill">${t}</span>`).join('')}
          </div>

          ${Array.isArray(proj.metrics) && proj.metrics.length ? `
            <div class="project-metrics-grid">
              ${proj.metrics.map(m => `
                <div class="metric-item">
                  <span class="metric-val metric-number">${m.value}</span>
                  <span class="metric-lbl">${m.label ? m.label[lang] : ''}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}

          <div class="project-actions">
            <button type="button" class="btn btn-secondary btn-sm" data-open-case-study="${proj.id}">
              ${ICONS.caseStudy} ${I18N.t('projects.viewDetails')}
            </button>
            <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              ${ICONS.externalLink} ${I18N.t('projects.viewLive')}
            </a>
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
              ${ICONS.github} ${I18N.t('projects.viewCode')}
            </a>
          </div>
        </div>
      </article>
    `).join('') + `
      <p class="synthetic-notice">${I18N.t('projects.syntheticNotice')}</p>
    `;
  }

  // 3. Case Study Modal Controller
  function openCaseStudyModal(projectId) {
    const proj = SITE_DATA.projects.find(p => p.id === projectId);
    if (!proj) return;
    const lang = getLang();

    const modal = document.getElementById('case-study-modal');
    const content = document.getElementById('case-study-modal-body');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="casestudy-modal-header">
        <div class="casestudy-meta-row">
          <span class="badge badge-emerald"><span class="pulse-dot"></span>${proj.badge[lang]}</span>
          <span class="tech-pill font-mono">${(proj.category || '').toUpperCase()}</span>
        </div>
        <h2 class="casestudy-headline">${proj.title[lang]}</h2>
        <p class="casestudy-subline">${proj.tagline[lang]}</p>
      </div>

      <div class="casestudy-actions-bar">
        <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          ${ICONS.externalLink} ${I18N.t('casestudy.openDemo')}
        </a>
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          ${ICONS.github} ${I18N.t('casestudy.viewGithub')}
        </a>
      </div>

      <div class="casestudy-grid-sections">
        <!-- Section: The Problem -->
        <div class="casestudy-block">
          <h4 class="casestudy-block-title">
            <span class="block-indicator">01</span> ${I18N.t('casestudy.problem')}
          </h4>
          <p class="casestudy-block-text">${proj.problem ? proj.problem[lang] : proj.description[lang]}</p>
        </div>

        <!-- Section: The Solution -->
        <div class="casestudy-block">
          <h4 class="casestudy-block-title">
            <span class="block-indicator">02</span> ${I18N.t('casestudy.solution')}
          </h4>
          <p class="casestudy-block-text">${proj.solution ? proj.solution[lang] : proj.description[lang]}</p>
        </div>

        <!-- Section: Architecture & Data Model -->
        <div class="casestudy-block full-width">
          <h4 class="casestudy-block-title">
            <span class="block-indicator">03</span> ${I18N.t('casestudy.architecture')}
          </h4>
          <p class="casestudy-block-text">${proj.architecture ? proj.architecture[lang] : proj.description[lang]}</p>
        </div>

        <!-- Section: Operational Capabilities -->
        <div class="casestudy-block full-width">
          <h4 class="casestudy-block-title">
            <span class="block-indicator">04</span> ${I18N.t('casestudy.features')}
          </h4>
          <ul class="casestudy-features-list">
            ${(proj.keyFeatures || proj.highlights || []).map(feat => `
              <li class="feature-item">
                <span class="feature-bullet">✔</span>
                <span>${feat[lang] || feat.en || feat}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Section: System Metrics -->
        <div class="casestudy-block full-width">
          <h4 class="casestudy-block-title">
            <span class="block-indicator">05</span> ${I18N.t('casestudy.metricsTitle')}
          </h4>
          <div class="flagship-metrics-row">
            ${(proj.metrics || []).map(m => `
              <div class="flagship-metric-card">
                <span class="metric-number">${m.value}</span>
                <span class="metric-label">${m.label[lang]}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Section: Tech Stack -->
        <div class="casestudy-block full-width">
          <h4 class="casestudy-block-title">
            <span class="block-indicator">06</span> ${I18N.t('casestudy.techStack')}
          </h4>
          <div class="tech-pills">
            ${(proj.techStack || []).map(t => `<span class="tech-pill">${t}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="casestudy-footer-actions">
        <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          ${ICONS.externalLink} ${I18N.t('casestudy.openDemo')}
        </a>
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          ${ICONS.github} ${I18N.t('casestudy.viewGithub')}
        </a>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseStudyModal() {
    const modal = document.getElementById('case-study-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // 4. Render Skills
  function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    const lang = getLang();

    container.innerHTML = SITE_DATA.skills.map(cat => `
      <div class="skill-category-card">
        <div class="skill-cat-header">
          <div class="skill-cat-icon">${ICONS[cat.icon] || ICONS.code}</div>
          <h3 class="skill-cat-title">${cat.category[lang]}</h3>
        </div>
        <div class="skill-items-list">
          ${cat.items.map(sk => `
            <div class="skill-item-row">
              <div class="skill-item-name-col">
                <span class="skill-item-name font-mono">${sk.name}</span>
                <span class="skill-item-level badge badge-sm badge-neutral">${sk.level}</span>
              </div>
              <p class="skill-item-desc">${sk.desc[lang]}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // 5. Render Services
  function renderServices() {
    const container = document.getElementById('services-container');
    if (!container) return;
    const lang = getLang();

    container.innerHTML = SITE_DATA.services.map(srv => `
      <div class="service-card">
        <div class="service-icon">${ICONS[srv.icon] || ICONS.globe}</div>
        <h3 class="service-title">${srv.title[lang]}</h3>
        <p class="service-desc">${srv.desc[lang]}</p>
      </div>
    `).join('');
  }

  // 6. Render Articles
  function renderArticles() {
    const container = document.getElementById('articles-container');
    if (!container) return;
    const lang = getLang();

    container.innerHTML = SITE_DATA.articles.map(art => `
      <div class="article-card" data-article-id="${art.id}">
        <div class="article-meta">
          <span>${art.date}</span>
          <span>•</span>
          <span>${art.readTime[lang]}</span>
        </div>
        <h3 class="article-title">${art.title[lang]}</h3>
        <p class="article-summary">${art.summary[lang]}</p>
        <div class="tech-pills">
          ${art.tags.map(t => `<span class="tech-pill">#${t}</span>`).join('')}
        </div>
        <div style="margin-top: auto; padding-top: 0.5rem;">
          <span class="text-primary-accent flex items-center gap-1" style="font-weight: 600; font-size: 0.9rem;">
            ${I18N.t('blog.readArticle')} ${ICONS.arrowRight}
          </span>
        </div>
      </div>
    `).join('');
  }

  // 7. Render CV
  function renderCV() {
    const cvContainer = document.getElementById('cv-content');
    if (!cvContainer) return;
    const lang = getLang();
    const cv = SITE_DATA.cvData;

    cvContainer.innerHTML = `
      <div class="cv-header">
        <div class="cv-name">${SITE_DATA.profile.name[lang]}</div>
        <div class="cv-title">${SITE_DATA.profile.title[lang]}</div>
        <div class="cv-contact-info">
          <span>${SITE_DATA.profile.location[lang]}</span> •
          <span>${SITE_DATA.profile.email}</span> •
          <span><a href="${SITE_DATA.profile.linkedin}" target="_blank" rel="noopener">LinkedIn Profile</a></span> •
          <span><a href="${SITE_DATA.profile.github}" target="_blank" rel="noopener">GitHub: reda1472</a></span>
        </div>
      </div>

      <div class="cv-section">
        <div class="cv-section-title">${I18N.t('cv.sec.summary')}</div>
        <p class="cv-summary-text">${cv.summary[lang]}</p>
      </div>

      <div class="cv-section">
        <div class="cv-section-title">${I18N.t('cv.sec.experience')}</div>
        ${cv.experience.map(exp => `
          <div class="cv-entry">
            <div class="cv-entry-header">
              <span class="cv-entry-role">${exp.role[lang]}</span>
              <span class="cv-entry-period">${exp.period[lang]}</span>
            </div>
            <div class="cv-entry-sub">${exp.company} • ${exp.location[lang]}</div>
            <ul class="cv-points-list">
              ${exp.points.map(pt => `<li>${pt[lang]}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div class="cv-section">
        <div class="cv-section-title">${I18N.t('cv.sec.skills')}</div>
        <div class="cv-skills-grid">
          ${cv.technicalSkills.map(sk => `
            <div class="cv-skill-row">
              <strong class="cv-skill-category">${sk.name}:</strong>
              <span class="cv-skill-value">${sk.value}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="cv-section">
        <div class="cv-section-title">${I18N.t('cv.sec.projects')}</div>
        <div class="cv-projects-list">
          ${SITE_DATA.projects.slice(0, 6).map(p => `
            <div class="cv-project-entry">
              <strong>${p.title[lang]}</strong>: ${p.tagline[lang]}
              <br><small class="text-muted font-mono">${p.githubUrl}</small>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="cv-section">
        <div class="cv-section-title">${I18N.t('cv.sec.education')}</div>
        ${cv.education.map(edu => `
          <div class="cv-entry">
            <div class="cv-entry-header">
              <span class="cv-entry-role">${edu.degree[lang]}</span>
              <span class="cv-entry-period">${edu.period[lang]}</span>
            </div>
            <div class="cv-entry-sub">${edu.institution[lang]}</div>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.25rem;">${edu.note[lang]}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Article Modal Open/Close
  function openArticleModal(artId) {
    const art = SITE_DATA.articles.find(a => a.id === artId);
    if (!art) return;
    const lang = getLang();

    const modal = document.getElementById('article-modal');
    const titleEl = document.getElementById('article-modal-title');
    const metaEl = document.getElementById('article-modal-meta');
    const bodyEl = document.getElementById('article-modal-body');

    if (modal && titleEl && metaEl && bodyEl) {
      titleEl.textContent = art.title[lang];
      metaEl.textContent = `${art.date} • ${art.readTime[lang]}`;
      bodyEl.innerHTML = art.content[lang];
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeArticleModal() {
    const modal = document.getElementById('article-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function renderDynamicContent() {
    renderFeaturedProjects();
    renderAllProjects();
    renderSkills();
    renderServices();
    renderArticles();
    renderCV();
  }

  function setupEventListeners() {
    // Case Study Modal Trigger Delegation (covers both featured and all projects)
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-open-case-study]');
      if (btn) {
        const pId = btn.getAttribute('data-open-case-study');
        openCaseStudyModal(pId);
      }
    });

    // Close Case Study Modal
    const csModal = document.getElementById('case-study-modal');
    const csCloseBtn = document.getElementById('case-study-modal-close');
    if (csCloseBtn) csCloseBtn.addEventListener('click', closeCaseStudyModal);
    if (csModal) {
      csModal.addEventListener('click', (e) => {
        if (e.target === csModal) closeCaseStudyModal();
      });
    }

    // Category Filter Buttons Delegation
    const filtersContainer = document.getElementById('category-filters-container');
    if (filtersContainer) {
      filtersContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (btn) {
          const cat = btn.getAttribute('data-filter');
          renderAllProjects(cat);
        }
      });
    }

    // Article Cards Click
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.article-card');
      if (card) {
        const artId = card.getAttribute('data-article-id');
        openArticleModal(artId);
      }
    });

    // Article Modal Close
    const artModal = document.getElementById('article-modal');
    const artCloseBtn = document.getElementById('article-modal-close');
    if (artCloseBtn) artCloseBtn.addEventListener('click', closeArticleModal);
    if (artModal) {
      artModal.addEventListener('click', (e) => {
        if (e.target === artModal) closeArticleModal();
      });
    }

    // Escape Key Handler for all modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCaseStudyModal();
        closeArticleModal();
      }
    });

    // Mobile Drawer Toggle
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    if (mobileBtn && drawer) {
      mobileBtn.addEventListener('click', () => {
        drawer.classList.toggle('open');
      });
      drawer.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => drawer.classList.remove('open'));
      });
    }

    // Copy Email to Clipboard
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyFeedback = document.getElementById('copy-feedback');
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(SITE_DATA.profile.email).then(() => {
          if (copyFeedback) {
            copyFeedback.style.display = 'inline-block';
            setTimeout(() => {
              copyFeedback.style.display = 'none';
            }, 3000);
          }
        });
      });
    }

    // Contact Form submission via mailto link
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const subject = document.getElementById('contact-subject').value;
        const msg = document.getElementById('contact-message').value;
        const mailtoUrl = `mailto:${SITE_DATA.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + "\n\n" + msg)}`;
        window.location.href = mailtoUrl;
      });
    }

    // Active navigation highlighter on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href*=${sectionId}]`);
        if (link) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    });
  }

  function init() {
    document.addEventListener('DOMContentLoaded', () => {
      renderDynamicContent();
      setupEventListeners();
    });
  }

  init();

  return {
    renderDynamicContent: renderDynamicContent,
    openCaseStudy: openCaseStudyModal,
    closeCaseStudy: closeCaseStudyModal,
    openArticle: openArticleModal,
    closeArticle: closeArticleModal
  };
})();

if (typeof window !== 'undefined') {
  window.App = App;
}
