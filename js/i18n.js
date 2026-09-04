/**
 * Bilingual (EN/AR) Translation & Direction Engine
 * Reda Mohamed Salah Portfolio
 * Truthful, verifiable, and strictly aligned with confirmed experience.
 */

const I18N = (function () {
  'use strict';

  const STORAGE_KEY = 'rms_lang_pref';
  const LANG_EN = 'en';
  const LANG_AR = 'ar';

  const translations = {
    en: {
      // Navigation
      "nav.home": "Home",
      "nav.featured": "Featured Systems",
      "nav.projects": "All 13 Projects",
      "nav.dualtrack": "Background",
      "nav.skills": "Competencies",
      "nav.verify": "Verification",
      "nav.services": "Services",
      "nav.blog": "Engineering Notes",
      "nav.cv": "Curriculum Vitae",
      "nav.contact": "Contact",

      // Hero Section
      "hero.verifiedBadge": "Verified Software Portfolio • Cairo, Egypt",
      "hero.greeting": "Hello, I am",
      "hero.name": "Reda Mohamed Salah",
      "hero.title": "Web Developer & Systems Builder",
      "hero.lead": "7 years of hands-on programming practice engineering practical commercial web applications, business operations dashboards, relational database architectures (3NF MySQL), and high-precision Arabic RTL interfaces.",
      "hero.cta.featured": "Explore Flagship Systems",
      "hero.cta.projects": "Browse All 13 Projects",
      "hero.cta.github": "GitHub Profile",
      "hero.cta.linkedin": "LinkedIn",
      "hero.cta.cv": "View Verified CV",
      "hero.stat.exp": "Years Hands-on Practice",
      "hero.stat.systems": "Public Deployed Systems",
      "hero.stat.focus": "Arabic RTL Specialist",
      "hero.stat.quality": "100% Truthful Credentials",

      // Value Proposition / Strengths
      "strengths.tag": "Engineering Principles",
      "strengths.title": "How I Build Systems",
      "strengths.subtitle": "A pragmatic software engineering approach focused on business utility, performance, and long-term maintainability.",
      "strengths.s1.title": "Business-First Architecture",
      "strengths.s1.desc": "Designing software to solve tangible operational bottlenecks: inventory drift, sales pipeline visibility, and billing overhead.",
      "strengths.s2.title": "Relational Data Integrity",
      "strengths.s2.desc": "Strict Third Normal Form (3NF) relational database modeling in MySQL with foreign key constraints, indexes, and audit logs.",
      "strengths.s3.title": "Native Arabic RTL Engineering",
      "strengths.s3.desc": "Zero-glitch bidirectional layouts built purely with CSS Logical Properties and optical typography balance for Cairo and Inter.",
      "strengths.s4.title": "Zero Runtime Overhead",
      "strengths.s4.desc": "Avoiding fragile third-party framework dependencies in favor of clean semantic HTML5, modern CSS tokens, and vanilla JavaScript.",

      // Featured Work (Flagship Case Studies)
      "featured.tag": "Flagship Case Studies",
      "featured.title": "Featured Engineering Systems",
      "featured.subtitle": "In-depth case studies into complex business management, CRM pipelines, logistics hubs, and open-source tooling.",
      "featured.openCaseStudy": "View Case Study & Architecture",
      "featured.viewLive": "Live Demonstration",
      "featured.viewCode": "Source Code on GitHub",

      // Case Study Modal
      "casestudy.badge": "System Case Study",
      "casestudy.problem": "The Operational Problem",
      "casestudy.solution": "Technical Solution & Architecture",
      "casestudy.architecture": "Data Model & System Design",
      "casestudy.features": "Key Operational Capabilities",
      "casestudy.techStack": "Confirmed Technologies Used",
      "casestudy.metricsTitle": "System Performance & Metrics",
      "casestudy.openDemo": "Open Live Demonstration ↗",
      "casestudy.viewGithub": "Inspect Source Code on GitHub ↗",
      "casestudy.close": "Close Case Study (Esc)",

      // All Projects Section
      "projects.tag": "Complete Portfolio",
      "projects.title": "All 13 Deployed Systems",
      "projects.subtitle": "Explore the complete verified ecosystem with category filters and live demonstrations.",
      "projects.viewCode": "Source Code",
      "projects.viewLive": "Live Demo",
      "projects.viewDetails": "Case Study Details",
      "projects.highlightsTitle": "Key Technical Highlights:",
      "projects.syntheticNotice": "Notice: All retail and business demonstration applications operate on 100% fictional/synthetic data models.",

      // Category Filters
      "filter.all": "All Projects (13)",
      "filter.retail": "Retail Tech & VM (4)",
      "filter.business": "Operations & Dashboards (2)",
      "filter.crm": "CRM & Sales (1)",
      "filter.logistics": "Logistics & Warehouse (1)",
      "filter.finance": "Finance & Billing (1)",
      "filter.tools": "Tools & Open Source (2)",
      "filter.ecommerce": "E-Commerce (1)",
      "filter.frontend": "Portfolio & Web (1)",

      // Professional Dual-Track Background
      "dualtrack.tag": "Professional Career",
      "dualtrack.title": "Authentic Career & Engineering Practice",
      "dualtrack.subtitle": "A transparent distinction between official enterprise employment and independent software engineering practice.",
      "dualtrack.emp.title": "Official Employment",
      "dualtrack.emp.role": "Visual Merchandiser / Display Coordinator",
      "dualtrack.emp.company": "AL NASSER (Faisal Al Rasheed Group)",
      "dualtrack.emp.location": "Egypt • Major Branch Network (Cairo, Mansoura, Tanta, Damanhour)",
      "dualtrack.emp.p1": "Coordinating physical store presentations, architectural storefront window displays (#WindowDisplay), and seasonal campaigns (Winter Collections, Back to School) across high-volume retail branches.",
      "dualtrack.emp.p2": "Synergy with Software: Bringing physical spatial discipline, eye-flow direction, optical balance, and category density management directly into digital UI layouts and dashboard architectures.",
      "dualtrack.dev.title": "Independent Software Engineering Practice",
      "dualtrack.dev.role": "Web Developer & Systems Builder",
      "dualtrack.dev.company": "7 Years Hands-on Programming Experience",
      "dualtrack.dev.location": "Cairo, Egypt",
      "dualtrack.dev.p1": "Seven continuous years of practical software engineering using Python, PHP, JavaScript, HTML5, CSS3, and MySQL.",
      "dualtrack.dev.p2": "Independently designed, architected, and deployed 13 complete web systems including 3NF relational database models, enterprise CRM Kanban pipelines, and open-source Arabic RTL components.",

      // Skills Section
      "skills.tag": "Core Competencies",
      "skills.title": "Confirmed Technical Stack",
      "skills.subtitle": "Technologies and engineering disciplines verified and utilized across my projects (categorized without fake percentage bars).",

      // Verification Section
      "verify.tag": "Public Transparency",
      "verify.title": "Verification for Recruiters & Institutions",
      "verify.subtitle": "Every claim, project, and architecture is backed by public source code on GitHub and live deployments.",
      "verify.card1.title": "1. Source Code Inspection",
      "verify.card1.desc": "Every project is hosted in a public GitHub repository. Reviewers can inspect commit histories, code conventions, and project structures.",
      "verify.card1.btn": "View GitHub Profile (reda1472)",
      "verify.card2.title": "2. Live Functional Testing",
      "verify.card2.desc": "All 13 projects are deployed and accessible on GitHub Pages. Test POS checkouts, conflict engines, Kanban pipelines, and barcode simulators directly.",
      "verify.card2.btn": "Browse Deployed Systems",
      "verify.card3.title": "3. Professional Identity",
      "verify.card3.desc": "Connect and cross-verify employment and professional background through my official LinkedIn profile with 4,200+ followers.",
      "verify.card3.btn": "Connect on LinkedIn",

      // Services Section
      "services.tag": "What I Build",
      "services.title": "Professional Services & Capabilities",
      "services.subtitle": "Practical digital services and development capabilities I provide to businesses and technical teams.",

      // Blog Section
      "blog.tag": "Engineering Notes",
      "blog.title": "Technical Articles & Guides",
      "blog.subtitle": "Practical write-ups documenting real technical decisions, RTL architecture, and database strategies.",
      "blog.readArticle": "Read Article",
      "blog.backToList": "Back to all articles",

      // CV Section
      "cv.tag": "Curriculum Vitae",
      "cv.title": "Verified Professional Record",
      "cv.subtitle": "A transparent record of official employment, technical competencies, and software projects ready for review and printing.",
      "cv.btn.print": "Print Official CV / Save as PDF",
      "cv.sec.summary": "Professional Summary",
      "cv.sec.experience": "Work & Technical Experience",
      "cv.sec.skills": "Verified Technical Skills",
      "cv.sec.projects": "Featured Technical Projects",
      "cv.sec.education": "Background & Information",

      // Contact Section
      "contact.tag": "Let's Build Something Useful",
      "contact.title": "Get in Touch",
      "contact.subtitle": "Have an engineering inquiry, business system requirement, or professional collaboration opportunity? Reach out directly.",
      "contact.emailLabel": "Verified Email Address",
      "contact.copyEmail": "Copy Email Address",
      "contact.copied": "Copied to clipboard!",
      "contact.locationLabel": "Location",
      "contact.locationVal": "Cairo, Egypt (Open to Global Remote / Relocation Opportunities)",
      "contact.form.name": "Your Name",
      "contact.form.namePlaceholder": "e.g. John Doe / Technical Recruiter",
      "contact.form.email": "Your Email",
      "contact.form.emailPlaceholder": "e.g. john@company.com",
      "contact.form.subject": "Subject",
      "contact.form.subjectPlaceholder": "e.g. System Development Inquiry / Employment Opportunity",
      "contact.form.message": "Message",
      "contact.form.messagePlaceholder": "Describe your system requirements or inquiry...",
      "contact.form.send": "Send Message via Email Client",

      // Footer
      "footer.rights": "All rights reserved.",
      "footer.tagline": "Crafted with pure HTML5, modern CSS tokens, and JavaScript. 100% verified engineering practice."
    },

    ar: {
      // Navigation
      "nav.home": "الرئيسية",
      "nav.featured": "الأنظمة الكبرى",
      "nav.projects": "المشاريع الـ 13",
      "nav.dualtrack": "المسار المهني",
      "nav.skills": "المهارات والتقنيات",
      "nav.verify": "التوثيق والتحقق",
      "nav.services": "الخدمات",
      "nav.blog": "المدونة التقنية",
      "nav.cv": "السيرة الذاتية",
      "nav.contact": "تواصل معي",

      // Hero Section
      "hero.verifiedBadge": "معرض برمجي موثق رسمياً • القاهرة، مصر",
      "hero.greeting": "مرحباً، أنا",
      "hero.name": "رضا محمد صلاح",
      "hero.title": "مطور ويب ومهندس أنظمة رقمية",
      "hero.lead": "7 سنوات من الممارسة البرمجية التطبيقية في هندسة وتطوير أنظمة الويب التجارية، لوحات التحكم التشغيلية، تصميم قواعد البيانات العلائقية (3NF MySQL)، وبناء الواجهات العربية ثنائية الاتجاه (RTL/LTR) بأعلى درجات الدقة.",
      "hero.cta.featured": "استعراض الأنظمة الكبرى",
      "hero.cta.projects": "تصفح المشاريع الـ 13",
      "hero.cta.github": "بروفايل GitHub",
      "hero.cta.linkedin": "لينكد إن",
      "hero.cta.cv": "السيرة الذاتية الموثقة",
      "hero.stat.exp": "سنوات خبرة برمجية تطبيقية",
      "hero.stat.systems": "أنظمة برمجية حية منشورة",
      "hero.stat.focus": "متخصص في الواجهات العربية RTL",
      "hero.stat.quality": "بيانات ومشاريع موثقة 100%",

      // Value Proposition / Strengths
      "strengths.tag": "المبادئ الهندسية",
      "strengths.title": "منهجيتي في بناء البرمجيات",
      "strengths.subtitle": "نهج هندسي عملي يركز على خدمة أهداف الأعمال، سرعة الأداء، وسهولة الصيانة طويلة المدى.",
      "strengths.s1.title": "معمارية موجهة للأعمال (Business-First)",
      "strengths.s1.desc": "بناء برمجيات تحل اختناقات تشغيلية حقيقية: ضبط عجز المخزون، وضوح مراحل المبيعات، وأتمتة الفواتير اليومية.",
      "strengths.s2.title": "سلامة قواعد البيانات العلائقية",
      "strengths.s2.desc": "تطبيق معيار التطبيع الثالث (3NF) لقواعد بيانات MySQL مع المفاتيح الأجنبية والفهارس وسجلات تدقيق العمليات.",
      "strengths.s3.title": "هندسة الواجهات العربية (RTL الأصيل)",
      "strengths.s3.desc": "واجهات ثنائية الاتجاه مبنية كلياً بخصائص CSS المنطقية مع مراعاة الإيقاع الطباعي لخط Cairo العربي المتزن.",
      "strengths.s4.title": "أداء نقي بدون بطء أو حزم زائدة",
      "strengths.s4.desc": "الابتعاد عن الاعتماديات الزائدة والتركيز على كود نقي (HTML5 / Modern CSS / Vanilla JS) يعمل في أجزاء من الثانية.",

      // Featured Work (Flagship Case Studies)
      "featured.tag": "دراسات الحالة الكبرى",
      "featured.title": "الأنظمة البرمجية الرئيسية المميزة",
      "featured.subtitle": "استعراض هندسي متعمق للمعمارية البرمجية ومسارات العمل لأبرز الأنظمة التشغيلية والمخزنية ومكتبات الأكواد.",
      "featured.openCaseStudy": "دراسة الحالة والمعمارية الهندسية",
      "featured.viewLive": "المعاينة الحية المباشرة",
      "featured.viewCode": "الكود على GitHub",

      // Case Study Modal
      "casestudy.badge": "دراسة حالة النظام",
      "casestudy.problem": "المشكلة والهدف التشغيلي",
      "casestudy.solution": "الحل الهندسي والتنفيذ البرمجي",
      "casestudy.architecture": "المعمارية وهيكلة البيانات",
      "casestudy.features": "أبرز الخصائص والقدرات التشغيلية",
      "casestudy.techStack": "التقنيات المؤكدة المستخدمة",
      "casestudy.metricsTitle": "مؤشرات الأداء والمعايير الهندسية",
      "casestudy.openDemo": "فتح المعاينة الحية المباشرة ↗",
      "casestudy.viewGithub": "فحص الكود المصدري على GitHub ↗",
      "casestudy.close": "إغلاق النافذة (Esc)",

      // All Projects Section
      "projects.tag": "المنظومة الكاملة",
      "projects.title": "كافة المشاريع والأنظمة (13 مشروعاً)",
      "projects.subtitle": "تصفح كافة مشاريع المنظومة مع الفلاتر التفاعلية المباشرة وروابط التحقق الحية.",
      "projects.viewCode": "الكود المصدري",
      "projects.viewLive": "المعاينة المباشرة",
      "projects.viewDetails": "تفاصيل دراسة الحالة",
      "projects.highlightsTitle": "أبرز الخصائص التقنية:",
      "projects.syntheticNotice": "ملاحظة: كافة التطبيقات التجارية والتجريبية تستخدم بيانات اصطناعية وافتراضية بنسبة 100%.",

      // Category Filters
      "filter.all": "عرض الكل (13)",
      "filter.retail": "تكنولوجيا المتاجر والعرض البصري (4)",
      "filter.business": "إدارة الأعمال والتشغيل (2)",
      "filter.crm": "إدارة العملاء والمبيعات (1)",
      "filter.logistics": "المخازن واللوجستيات (1)",
      "filter.finance": "الأنظمة المالية والفواتير (1)",
      "filter.tools": "أدوات برمجية ومفتوحة المصدر (2)",
      "filter.ecommerce": "المتاجر الإلكترونية (1)",
      "filter.frontend": "المعرض البرمجي والتوثيق (1)",

      // Professional Dual-Track Background
      "dualtrack.tag": "المسار المهني والتطبيقي",
      "dualtrack.title": "المسار المهني الشفاف والممارسة البرمجية",
      "dualtrack.subtitle": "فصل شفاف وصادق بين الوظيفة الرسمية الحالية والممارسة البرمجية المستقلة الممتدة لـ 7 سنوات.",
      "dualtrack.emp.title": "الوظيفة الرسمية الحالية",
      "dualtrack.emp.role": "منسق عروض بصرية وفاترينات (Visual Merchandiser)",
      "dualtrack.emp.company": "شركة النصر — AL NASSER (مجموعة فيصل الرشيد)",
      "dualtrack.emp.location": "مصر • كبرى الفروع (القاهرة التجمع، المنصورة، طنطا، دمنهور)",
      "dualtrack.emp.p1": "تنسيق عروض المتاجر، هندسة واجهات وفاترينات العرض الخارجية (#WindowDisplay)، والحملات الموسمية (تشكيلات الشتاء، العودة للمدارس) في شبكة المعارض الكبرى.",
      "dualtrack.emp.p2": "التكامل مع البرمجة: نقل الانضباط المكاني البصري، توجيه حركة العين، التوازن البصري، وكثافة عرض الأصناف مباشرة إلى تصميم وتخطيط واجهات الأنظمة واللوحات الرقمية.",
      "dualtrack.dev.title": "الممارسة البرمجية المستقلة",
      "dualtrack.dev.role": "مطور ويب ومهندس أنظمة رقمية",
      "dualtrack.dev.company": "خبرة برمجية تطبيقية تمتد لـ 7 سنوات",
      "dualtrack.dev.location": "القاهرة، مصر",
      "dualtrack.dev.p1": "سبع سنوات متواصلة من الممارسة البرمجية الذاتية وكتابة الأكواد باستخدام Python وPHP وJavaScript وHTML5 وCSS3 وMySQL.",
      "dualtrack.dev.p2": "تصميم وتطوير ونشر 13 نظاماً برمجياً متكاملاً بشكل مستقل يشمل قواعد بيانات MySQL 3NF، لوحات تحكم، أنظمة كانبان للمبيعات، ومكتبة مكونات عربية مفتوحة المصدر.",

      // Skills Section
      "skills.tag": "الكفاءات البرمجية",
      "skills.title": "التقنيات المؤكدة والمعتمدة",
      "skills.subtitle": "التقنيات والممارسات الهندسية المؤكدة والمستخدمة فعلياً في بناء الأنظمة (مصنفة بدون أشرطة نسب مئوية وهمية).",

      // Verification Section
      "verify.tag": "الشفافية الكاملة",
      "verify.title": "دليل التحقق للشركات وجهات التوظيف والسفارات",
      "verify.subtitle": "كل نظام، مؤشر رقمي، أو مخطط قاعدة بيانات معروض هنا مدعوم بأكواد مصدرية مفتوحة ومعاينات حية ومباشرة.",
      "verify.card1.title": "1. فحص الكود المصدري",
      "verify.card1.desc": "كل مشروع يمتلك مستودعاً مفتوحاً على GitHub. يمكن فحص سجل التعديلات (Commit history)، وتناسق الأكواد، والبنية المعمارية.",
      "verify.card1.btn": "زيارة بروفايل GitHub (reda1472)",
      "verify.card2.title": "2. التجربة الحية المباشرة",
      "verify.card2.desc": "جميع المشاريع الـ 13 منشورة وتعمل مباشرة عبر GitHub Pages. اختبر نقطة البيع، محاكي الباركود، لوحة كانبان، ونظام حجز المواعيد بنفسك.",
      "verify.card2.btn": "استكشاف الأنظمة المنشورة",
      "verify.card3.title": "3. الهوية والتوثيق المهني",
      "verify.card3.desc": "تواصل وتأكد من السيرة والخبرات المهنية عبر حسابي الرسمي على LinkedIn الذي يضم أكثر من 4,200 متابع.",
      "verify.card3.btn": "التواصل عبر LinkedIn",

      // Services Section
      "services.tag": "ما أقدمه",
      "services.title": "الخدمات المهنية والتقنية",
      "services.subtitle": "حلول رقمية عملية وخدمات برمجية دقيقة أقدمها للأنشطة التجارية والشركات التقنية.",

      // Blog Section
      "blog.tag": "أوراق وملاحظات هندسية",
      "blog.title": "المقالات والأدلة التقنية",
      "blog.subtitle": "مقالات توثق قرارات تقنية حقيقية، هندسة الواجهات العربية (RTL)، واستراتيجيات قواعد البيانات.",
      "blog.readArticle": "قراءة المقال",
      "blog.backToList": "العودة لقائمة المقالات",

      // CV Section
      "cv.tag": "الملف المهني الموثق",
      "cv.title": "السيرة الذاتية الرسمية (CV)",
      "cv.subtitle": "سجل مهني شفاف وموثوق للخبرات العملية والوظيفية والمهارات البرمجية المعتمدة، جاهز للطباعة والحفظ.",
      "cv.btn.print": "طباعة السيرة الذاتية / حفظ كملف PDF",
      "cv.sec.summary": "الملخص المهني",
      "cv.sec.experience": "الخبرات العملية والتطوير البرمجي",
      "cv.sec.skills": "المهارات التقنية المؤكدة",
      "cv.sec.projects": "المشاريع البرمجية المختارة",
      "cv.sec.education": "البيانات والمعلومات الأساسية",

      // Contact Section
      "contact.tag": "تواصل مهني موثق",
      "contact.title": "بدء التواصل والتعاون",
      "contact.subtitle": "هل لديك استفسار تقني، مشروع ترغب في تنفيذه، أو فرصة عمل وتعاون مؤسسي؟ يسعدني تواصلك المباشر.",
      "contact.emailLabel": "البريد الإلكتروني المعتمد",
      "contact.copyEmail": "نسخ البريد الإلكتروني",
      "contact.copied": "تم نسخ البريد بنجاح!",
      "contact.locationLabel": "الموقع الجغرافي",
      "contact.locationVal": "القاهرة، مصر (متاح للعمل عن بُعد ولفرص الانتقال الدولية)",
      "contact.form.name": "الاسم الكامل",
      "contact.form.namePlaceholder": "مثال: أحمد محمد / مسؤول التوظيف",
      "contact.form.email": "البريد الإلكتروني",
      "contact.form.emailPlaceholder": "مثال: ahmed@company.com",
      "contact.form.subject": "الموضوع",
      "contact.form.subjectPlaceholder": "مثال: استفسار عن مشروع برمجي / فرصة عمل",
      "contact.form.message": "تفاصيل الرسالة",
      "contact.form.messagePlaceholder": "اكتب متطلبات النظام أو الاستفسار...",
      "contact.form.send": "إرسال الرسالة عبر البريد",

      // Footer
      "footer.rights": "جميع الحقوق محفوظة.",
      "footer.tagline": "تم البناء باستخدام HTML5 ومعايير CSS الحديثة وجافاسكريبت نقية. ممارسة برمجية حقيقية وموثقة 100%."
    }
  };

  let currentLang = localStorage.getItem(STORAGE_KEY) || LANG_EN;

  function setLanguage(lang) {
    if (lang !== LANG_EN && lang !== LANG_AR) lang = LANG_EN;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === LANG_AR ? 'rtl' : 'ltr';

    if (lang === LANG_AR) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }

    applyTranslations();

    // Notify app if initialized
    if (window.App && typeof window.App.renderDynamicContent === 'function') {
      window.App.renderDynamicContent();
    }

    // Dispatch event
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
  }

  function applyTranslations() {
    const dict = translations[currentLang] || translations[LANG_EN];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key]) {
        el.setAttribute('title', dict[key]);
      }
    });

    const langToggleBtn = document.querySelector('[data-lang-toggle]');
    if (langToggleBtn) {
      langToggleBtn.textContent = currentLang === LANG_EN ? 'عربي' : 'English';
      langToggleBtn.setAttribute('aria-label', currentLang === LANG_EN ? 'Switch to Arabic' : 'التحويل للإنجليزية');
    }
  }

  function t(key) {
    const dict = translations[currentLang] || translations[LANG_EN];
    return dict[key] || key;
  }

  function getLang() {
    return currentLang;
  }

  function toggleLanguage() {
    setLanguage(currentLang === LANG_EN ? LANG_AR : LANG_EN);
  }

  function init() {
    setLanguage(currentLang);
    const toggleBtn = document.querySelector('[data-lang-toggle]');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleLanguage);
    }
  }

  return {
    init: init,
    t: t,
    getLang: getLang,
    setLanguage: setLanguage,
    toggleLanguage: toggleLanguage
  };
})();

if (typeof window !== 'undefined') {
  window.I18N = I18N;
}
