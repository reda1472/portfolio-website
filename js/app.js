/**
 * Application Controller & Dynamic UI Renderer
 * Reda Mohamed Salah — Professional Developer Portfolio
 */

const App = (function () {
  'use strict';

  // SVG Icon Templates
  const ICONS = {
    code: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    layout: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
    database: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
    terminal: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
    globe: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    cpu: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>',
    zap: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    checkCircle: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    externalLink: '<svg class="btn-icon arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
    github: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
    arrowRight: '<svg class="btn-icon arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'
  };

  function getLang() {
    return window.I18N ? window.I18N.getLang() : 'en';
  }

  // Render Skills
  function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    const lang = getLang();

    container.innerHTML = SITE_DATA.skills.map(cat => `
      <div class="skill-card">
        <div class="skill-card-header">
          <div class="skill-card-icon">${ICONS[cat.icon] || ICONS.code}</div>
          <h3>${cat.category[lang]}</h3>
        </div>
        <div class="skill-list">
          ${cat.items.map(item => `
            <div class="skill-item">
              <div class="skill-item-header">
                <span class="skill-name">${item.name}</span>
                <span class="badge badge-primary">${item.level}</span>
              </div>
              <span class="skill-desc">${item.desc[lang]}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  let activeProjectFilter = 'all';

  // Render Projects
  function renderProjects(filterCategory) {
    if (filterCategory !== undefined) {
      activeProjectFilter = filterCategory;
    }
    const container = document.getElementById('projects-container');
    if (!container) return;
    const lang = getLang();

    const filtered = activeProjectFilter === 'all'
      ? SITE_DATA.projects
      : SITE_DATA.projects.filter(p => p.category === activeProjectFilter);

    // Update filter buttons UI state
    document.querySelectorAll('.filter-btn').forEach(btn => {
      if (btn.getAttribute('data-filter') === activeProjectFilter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    container.innerHTML = filtered.map(proj => `
      <article class="project-card">
        <div class="project-card-body">
          <div class="project-header-row">
            <span class="badge badge-emerald"><span class="pulse-dot"></span>${proj.badge ? (proj.badge[lang] || proj.badge.en || '') : ''}</span>
            <span class="tech-pill font-mono">${(proj.category || 'PROJECT').toUpperCase()}</span>
          </div>

          <h3 class="project-title">${proj.title ? (proj.title[lang] || proj.title.en) : ''}</h3>
          <p class="project-tagline">${proj.tagline ? (proj.tagline[lang] || proj.tagline.en) : ''}</p>
          <p class="project-desc">${proj.description ? (proj.description[lang] || proj.description.en) : ''}</p>

          <div class="tech-pills">
            ${(proj.techStack || []).map(t => `<span class="tech-pill">${t}</span>`).join('')}
          </div>

          ${Array.isArray(proj.metrics) && proj.metrics.length ? `
            <div class="project-metrics-grid">
              ${proj.metrics.map(m => `
                <div class="metric-item">
                  <span class="metric-val metric-number">${m.value}</span>
                  <span class="metric-lbl">${m.label ? (m.label[lang] || m.label.en || m.label) : ''}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}

          ${Array.isArray(proj.highlights) && proj.highlights.length ? `
            <div class="highlights-list">
              <strong style="font-size: 0.9rem; color: var(--text-primary);">${I18N.t('projects.highlightsTitle')}</strong>
              ${proj.highlights.map(h => `
                <div class="highlight-item">
                  <span class="highlight-bullet">✔</span>
                  <span>${h[lang] || h.en || h}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}

          <div class="project-actions">
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              ${ICONS.github} ${I18N.t('projects.viewCode')}
            </a>
            ${proj.demoUrl && proj.demoUrl !== '#' ? `
              <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                ${ICONS.externalLink} ${I18N.t('projects.viewLive')}
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `).join('') + `
      <p class="synthetic-notice">${I18N.t('projects.syntheticNotice')}</p>
    `;
  }

  // Render Services
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

  // Render Articles
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

    // Attach click handlers to open article modal
    document.querySelectorAll('.article-card').forEach(card => {
      card.addEventListener('click', () => {
        const artId = card.getAttribute('data-article-id');
        openArticleModal(artId);
      });
    });
  }

  // Full Article Content
  const ARTICLE_CONTENTS = {
    "mastering-arabic-rtl-layouts": {
      en: `
        <h2>Mastering Arabic RTL Layouts: Engineering Clean Bi-Directional Web Interfaces</h2>
        <p class="text-muted">Published on August 25, 2026 • 6 min read</p>
        <hr style="border-color: var(--border-subtle); margin-block: 1rem;">
        
        <h3>The Problem with Traditional Direction Handling</h3>
        <p>Historically, web developers created RTL stylesheets by duplicating CSS rules and manually flipping properties like <code>margin-left</code> to <code>margin-right</code> and <code>float: left</code> to <code>float: right</code>. This approach is error-prone, doubles maintenance overhead, and frequently introduces subtle visual bugs.</p>
        
        <h3>Solution: CSS Logical Properties</h3>
        <p>Modern CSS introduces logical properties that dynamically adapt to the writing mode and document direction without requiring separate stylesheets:</p>
        <pre><code>/* Instead of hardcoded directions */
margin-left: 1.5rem;
padding-right: 2rem;
border-left: 2px solid var(--primary);

/* Use modern logical properties */
margin-inline-start: 1.5rem;
padding-inline-end: 2rem;
border-inline-start: 2px solid var(--primary);</code></pre>

        <h3>Typographic Rhythm in Arabic</h3>
        <p>Arabic typography differs fundamentally from Latin typography. Arabic scripts require approximately <strong>15–20% higher line-height</strong> for optimal legibility and must never use Latin-style letter-spacing (tracking), which breaks the cursive script connections.</p>
        
        <h3>Key Takeaways</h3>
        <ul>
          <li>Always set <code>dir="rtl"</code> at the document root (<code>&lt;html&gt;</code>).</li>
          <li>Build 100% of your layout with logical properties (<code>margin-inline</code>, <code>padding-inline</code>, <code>inset-inline</code>).</li>
          <li>Only flip directional icons (arrows, chevrons); never flip non-directional iconography (magnifiers, shopping carts).</li>
        </ul>
      `,
      ar: `
        <h2>إتقان واجهات الـ RTL العربية: هندسة المواقع ثنائية الاتجاه باحترافية</h2>
        <p class="text-muted">تاريخ النشر: 25 أغسطس 2026 • وقت القراءة: 6 دقائق</p>
        <hr style="border-color: var(--border-subtle); margin-block: 1rem;">
        
        <h3>المشكلة في الطرق التقليدية لدعم الواجهات العربية</h3>
        <p>تقليدياً، كان المطورون يلجأون إلى إنشاء ملفات CSS منفصلة وتكرار القواعد مع عكس <code>margin-left</code> إلى <code>margin-right</code> يدوياً. ينتج عن هذا التكرار صعوبة في الصيانة وزيادة احتمالية الأخطاء البصرية عند كل تحديث في التصميم.</p>
        
        <h3>الحل الحديث: الخصائص المنطقية (CSS Logical Properties)</h3>
        <p>توفر مواصفات CSS الحديثة خصائص منطقية تتكيف تلقائياً مع اتجاه المستند دون الحاجة لأي كود مكرر:</p>
        <pre><code>/* بدلاً من استخدام الاتجاهات الثابتة */
margin-left: 1.5rem;
padding-right: 2rem;
border-left: 2px solid var(--primary);

/* نستخدم الخصائص المنطقية */
margin-inline-start: 1.5rem;
padding-inline-end: 2rem;
border-inline-start: 2px solid var(--primary);</code></pre>

        <h3>الإيقاع الطباعي والخط العربي</h3>
        <p>يحتاج الخط العربي إلى زيادة في ارتفاع السطر (<code>line-height</code>) بنسبة تتراوح بين <strong>15% إلى 20%</strong> مقارنة بالخطوط اللاتينية لضمان وضوح الحركات والتشكيل، مع الحذر التام من استخدام تباعد الحروف (<code>letter-spacing</code>) الذي قد يتسبب في تفكيك الحروف المتصلة.</p>
        
        <h3>أهم القواعد العملية:</h3>
        <ul>
          <li>تحديد سمة <code>dir="rtl"</code> على العنصر الجذر (<code>&lt;html&gt;</code>).</li>
          <li>الاعتماد الكامل على الخصائص المنطقية في الهوامش والحدود.</li>
          <li>عكس الأيقونات الموجهة فقط (كالأسهم ومؤشرات الخطوات)، مع الإبقاء على الأيقونات المحايدة كما هي.</li>
        </ul>
      `
    },
    "architecting-performant-business-dashboards": {
      en: `
        <h2>Architecting Performant Business Dashboards: Data Tables and State Management</h2>
        <p class="text-muted">Published on August 20, 2026 • 8 min read</p>
        <hr style="border-color: var(--border-subtle); margin-block: 1rem;">
        <p>Enterprise dashboards often suffer from performance degradation due to massive unpaginated DOM trees, excessive reactivity overhead, and unoptimized search algorithms. This guide outlines how to build lightning-fast, zero-dependency commercial tables capable of filtering and paginating thousands of records with sub-millisecond responsiveness.</p>
      `,
      ar: `
        <h2>معمارية لوحات التحكم التجارية: إدارة الحالة وجداول البيانات السريعة</h2>
        <p class="text-muted">تاريخ النشر: 20 أغسطس 2026 • وقت القراءة: 8 دقائق</p>
        <hr style="border-color: var(--border-subtle); margin-block: 1rem;">
        <p>غالباً ما تعاني لوحات التحكم الإدارية من البطء بسبب تحميل آلاف العناصر دفعة واحدة في الـ DOM. في هذا المقال نستعرض كيفية هيكلة جداول بيانات سريعة تعتمد على الفرز والبحث الفوري والترقيم الذكي بدون الاعتماد على مكتبات ضخمة تعيق المتصفح.</p>
      `
    },
    "relational-database-design-business-systems": {
      en: `
        <h2>Relational Database Design for Small Business Inventory and Order Management</h2>
        <p class="text-muted">Published on August 15, 2026 • 7 min read</p>
        <hr style="border-color: var(--border-subtle); margin-block: 1rem;">
        <p>Designing relational database schemas for commercial businesses requires strict normalization (3NF) to avoid data redundancy, proper index placement on frequently queried foreign keys, and atomic transaction design to ensure inventory stock levels remain 100% consistent across simultaneous orders.</p>
      `,
      ar: `
        <h2>تصميم قواعد البيانات العلائقية لإدارة المخزون والطلبات في المشاريع التجارية</h2>
        <p class="text-muted">تاريخ النشر: 15 أغسطس 2026 • وقت القراءة: 7 دقائق</p>
        <hr style="border-color: var(--border-subtle); margin-block: 1rem;">
        <p>يتطلب تصميم قواعد البيانات التجارية اتباع قواعد التطبيع (Normalization) لمنع تكرار البيانات، وضبط الفهارس على المفاتيح الأجنبية، واعتماد المعاملات الذرية (Transactions) لضمان دقة أرصدة المخزون وعدم حدوث أي تضارب عند تسجيل الطلبات المتزامنة.</p>
      `
    }
  };

  function openArticleModal(id) {
    const modal = document.getElementById('article-modal');
    const modalBody = document.getElementById('article-modal-body');
    if (!modal || !modalBody) return;
    const lang = getLang();

    const content = ARTICLE_CONTENTS[id] ? ARTICLE_CONTENTS[id][lang] : '<p>Article not found.</p>';
    modalBody.innerHTML = content;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeArticleModal() {
    const modal = document.getElementById('article-modal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Render CV
  function renderCV() {
    const container = document.getElementById('cv-content-container');
    if (!container) return;
    const lang = getLang();
    const cv = SITE_DATA.cv;

    container.innerHTML = `
      <div class="cv-container cv-printable">
        <div class="cv-header-row">
          <div>
            <h2 style="font-size: 2rem;">${SITE_DATA.profile.name[lang]}</h2>
            <p class="text-primary-accent" style="font-weight: 600; font-size: 1.1rem;">${SITE_DATA.profile.title[lang]}</p>
            <p class="text-muted">${SITE_DATA.profile.location[lang]} • ${SITE_DATA.profile.email}</p>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="window.print()">
            ${ICONS.cpu} ${I18N.t('cv.btn.print')}
          </button>
        </div>

        <div class="cv-section-block">
          <h3 class="cv-section-title">${I18N.t('cv.sec.summary')}</h3>
          <p class="lead-text" style="font-size: 1rem;">${cv.summary[lang]}</p>
        </div>

        <div class="cv-section-block">
          <h3 class="cv-section-title">${I18N.t('cv.sec.experience')}</h3>
          ${cv.experience.map(exp => `
            <div class="cv-exp-item">
              <div class="cv-exp-header">
                <span class="cv-exp-role">${exp.role[lang]}</span>
                <span class="cv-exp-period">${exp.period[lang]}</span>
              </div>
              <span class="cv-exp-company">${exp.company[lang]}</span>
              <ul class="cv-exp-bullets">
                ${exp.points.map(p => `<li>${p[lang]}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <div class="cv-section-block">
          <h3 class="cv-section-title">${I18N.t('cv.sec.skills')}</h3>
          <div class="grid grid-2 gap-2">
            <div>
              <strong style="font-size: 0.9rem;">Programming & Languages:</strong>
              <p class="text-secondary font-mono" style="font-size: 0.85rem; margin-top: 0.25rem;">
                ${cv.technicalSkills.languages.join(' • ')}
              </p>
            </div>
            <div>
              <strong style="font-size: 0.9rem;">Databases & Architecture:</strong>
              <p class="text-secondary font-mono" style="font-size: 0.85rem; margin-top: 0.25rem;">
                ${cv.technicalSkills.databases.join(' • ')}
              </p>
            </div>
            <div>
              <strong style="font-size: 0.9rem;">Frontend & UI Engineering:</strong>
              <p class="text-secondary font-mono" style="font-size: 0.85rem; margin-top: 0.25rem;">
                ${cv.technicalSkills.frontend.join(' • ')}
              </p>
            </div>
            <div>
              <strong style="font-size: 0.9rem;">DevOps & Tooling:</strong>
              <p class="text-secondary font-mono" style="font-size: 0.85rem; margin-top: 0.25rem;">
                ${cv.technicalSkills.tools.join(' • ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderDynamicContent() {
    renderSkills();
    renderProjects();
    renderServices();
    renderArticles();
    renderCV();
  }

  function setupEventListeners() {
    // Project Category Filters
    const filterContainer = document.getElementById('project-filters');
    if (filterContainer) {
      filterContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (btn) {
          const cat = btn.getAttribute('data-filter');
          renderProjects(cat);
        }
      });
    }

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

    // Modal Close Triggers
    const modal = document.getElementById('article-modal');
    const closeBtn = document.getElementById('article-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeArticleModal);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeArticleModal();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeArticleModal();
    });

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
    openArticle: openArticleModal,
    closeArticle: closeArticleModal
  };
})();

window.App = App;
