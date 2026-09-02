/**
 * Bilingual (EN/AR) Translation & Direction Engine
 * Reda Mohamed Salah Portfolio
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
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.services": "Services",
      "nav.blog": "Technical Blog",
      "nav.cv": "Curriculum Vitae",
      "nav.contact": "Contact",

      // Hero Section
      "hero.badge": "Available for Select Web Projects",
      "hero.greeting": "Hello, I'm",
      "hero.name": "Reda Mohamed Salah",
      "hero.title": "Web Developer & Systems Builder",
      "hero.lead": "7 years of hands-on experience in programming and web development, building practical websites, business dashboards, and Arabic-ready RTL interfaces.",
      "hero.cta.projects": "Explore Projects",
      "hero.cta.contact": "Get in Touch",
      "hero.cta.cv": "View Full CV",
      "hero.stat.exp": "Years Hands-on Coding",
      "hero.stat.focus": "Arabic RTL Specialist",
      "hero.stat.quality": "Production-Grade Quality",

      // About Section
      "about.tag": "Profile & Background",
      "about.title": "Engineering Practical Web Solutions with Precision",
      "about.lead": "Bridging structured programming with a strong sense of visual hierarchy and order.",
      "about.p1": "I am a web developer with 7 years of hands-on programming practice based in Egypt. Over the years, I have built web applications, administrative dashboards, and database-driven business tools utilizing Python, PHP, JavaScript, HTML, CSS, and MySQL.",
      "about.p2": "In addition to independent software development, I currently work officially as a Visual Merchandiser / Display Coordinator at AL NASSER. This background provides me with an exceptional understanding of spatial arrangement, visual flow, attention to detail, and presentation consistency — principles that directly translate into clean user interfaces, intuitive navigation structures, and high-performance digital tools.",
      "about.p3": "I place immense value on authentic, verifiable craftsmanship: zero bloated dependencies, zero fake claims, and clean, maintainable code that solves real business problems.",
      "about.info.location": "Location",
      "about.info.location.val": "Egypt",
      "about.info.languages": "Languages",
      "about.info.languages.val": "Arabic (Native), English (Professional)",
      "about.info.employment": "Official Employment",
      "about.info.employment.val": "Visual Merchandiser / Display Coordinator at AL NASSER",
      "about.info.codeExp": "Programming Experience",
      "about.info.codeExp.val": "7 Years Hands-on Practice",

      // Skills Section
      "skills.tag": "Core Competencies",
      "skills.title": "Confirmed Technical Stack",
      "skills.subtitle": "Technologies and engineering disciplines verified and utilized across my projects.",

      // Projects Section
      "projects.tag": "Portfolio Repositories",
      "projects.title": "Featured Engineering Projects",
      "projects.subtitle": "Independent web systems built to demonstrate architectural discipline, code quality, and domain thinking.",
      "projects.viewCode": "Source Code",
      "projects.viewLive": "Live Demo",
      "projects.highlightsTitle": "Key Technical Highlights:",
      "projects.syntheticNotice": "Note: Retail & business demo applications use 100% fictional/synthetic data.",
      "filter.all": "All Projects (13)",
      "filter.retail": "Retail Tech & VM (4)",
      "filter.systems": "Operations & CRM (4)",
      "filter.logistics": "Logistics & Warehouse (1)",
      "filter.finance": "Finance & Billing (1)",
      "filter.tools": "Tools & Open Source (2)",
      "filter.frontend": "Portfolio (1)",

      // Services Section
      "services.tag": "What I Build",
      "services.title": "Professional Services",
      "services.subtitle": "Practical digital services and development capabilities I provide to businesses and individuals.",

      // Blog Section
      "blog.tag": "Engineering Notes",
      "blog.title": "Technical Articles & Guides",
      "blog.subtitle": "Practical write-ups documenting real technical decisions, RTL architecture, and database strategies.",
      "blog.readArticle": "Read Article",
      "blog.backToList": "Back to all articles",

      // CV Section
      "cv.tag": "Professional Profile",
      "cv.title": "Curriculum Vitae",
      "cv.subtitle": "Transparent, verifiable record of employment history, technical skills, and software development practice.",
      "cv.btn.print": "Print / Save as PDF",
      "cv.sec.summary": "Professional Summary",
      "cv.sec.experience": "Work & Technical Experience",
      "cv.sec.skills": "Verified Technical Skills",
      "cv.sec.projects": "Featured Technical Projects",
      "cv.sec.education": "Background & Information",

      // Contact Section
      "contact.tag": "Let's Connect",
      "contact.title": "Get in Touch",
      "contact.subtitle": "Have a project in mind, an inquiry, or want to discuss technical collaboration? Reach out directly.",
      "contact.emailLabel": "Email Address",
      "contact.copyEmail": "Copy Email",
      "contact.copied": "Copied to clipboard!",
      "contact.form.name": "Your Name",
      "contact.form.namePlaceholder": "e.g. John Doe",
      "contact.form.email": "Your Email",
      "contact.form.emailPlaceholder": "e.g. john@example.com",
      "contact.form.subject": "Subject",
      "contact.form.subjectPlaceholder": "e.g. Project Inquiry / Business Website",
      "contact.form.message": "Message",
      "contact.form.messagePlaceholder": "Tell me about your project or requirements...",
      "contact.form.send": "Send Message via Email Client",

      // Footer
      "footer.rights": "All rights reserved.",
      "footer.tagline": "Built with pure HTML, modern CSS, and JavaScript. 100% authentic engineering."
    },

    ar: {
      // Navigation
      "nav.home": "الرئيسية",
      "nav.about": "عن المطور",
      "nav.skills": "المهارات والتقنيات",
      "nav.projects": "المشاريع البرمجية",
      "nav.services": "الخدمات",
      "nav.blog": "المدونة التقنية",
      "nav.cv": "السيرة الذاتية",
      "nav.contact": "تواصل معي",

      // Hero Section
      "hero.badge": "متاح للمشاريع البرمجية المختارة",
      "hero.greeting": "مرحباً، أنا",
      "hero.name": "رضا محمد صلاح",
      "hero.title": "مطور ويب وبناء أنظمة رقمية",
      "hero.lead": "خبرة برمجية تطبيقية تمتد لـ 7 سنوات في برمجة وتطوير الويب، وبناء المواقع العملية، لوحات التحكم الإدارية، والواجهات العربية (RTL) المتكاملة.",
      "hero.cta.projects": "استعرض المشاريع",
      "hero.cta.contact": "تواصل معي",
      "hero.cta.cv": "السيرة الذاتية الكاملة",
      "hero.stat.exp": "سنوات خبرة برمجية تطبيقية",
      "hero.stat.focus": "متخصص في واجهات الـ RTL العربية",
      "hero.stat.quality": "معايير برمجية وإنتاجية عالية",

      // About Section
      "about.tag": "الملف والنبذة المهنية",
      "about.title": "هندسة حلول الويب العملية بأعلى درجات الدقة والترتيب",
      "about.lead": "الجمع بين البناء البرمجي المنضبط والحس البصري العالي في التنسيق والهيكلة.",
      "about.p1": "أنا مطور ويب مقيم في مصر، أمتلك خبرة برمجية عملية وتطبيقية تمتد لـ 7 سنوات. قمت خلالها ببناء وتطوير تطبيقات الويب، لوحات التحكم الإدارية، وأنظمة قواعد البيانات بالاعتماد على تقنيات Python, PHP, JavaScript, HTML, CSS, و MySQL.",
      "about.p2": "إلى جانب عملي البرمجي المستقل، أعمل حالياً بوظيفتي الرسمية كمنسق عروض بصرية وتنسيق معارض (Visual Merchandiser / Display Coordinator) في شركة النصر (AL NASSER). تمنحني هذه الخلفية المهنية فهماً استثنائياً للتوزيع المكاني، التناسق البصري، والانتباه الشديد للتفاصيل — وهي مبادئ أنقلها مباشرة إلى تصميم واجهات المستخدم وسلاسة التنقل وسرعة الاستجابة.",
      "about.p3": "أؤمن التزاماً كاملاً بالحرفية الصادقة والشفافة: لا أعتمد على أطر عمل متضخمة بلا داعٍ، ولا أستخدم إحصاءات أو ادعاءات غير حقيقية، بل أركز على كتابة كود نظيف وقابل للصيانة يحل مشاكل واقعية.",
      "about.info.location": "الموقع الجغرافي",
      "about.info.location.val": "مصر",
      "about.info.languages": "اللغات",
      "about.info.languages.val": "العربية (اللغة الأم)، الإنجليزية (مهنية)",
      "about.info.employment": "الوظيفة الرسمية الحالية",
      "about.info.employment.val": "منسق عروض بصرية (Visual Merchandiser) في شركة النصر",
      "about.info.codeExp": "الخبرة البرمجية",
      "about.info.codeExp.val": "7 سنوات من الممارسة البرمجية التطبيقية",

      // Skills Section
      "skills.tag": "المهارات والقدرات",
      "skills.title": "التقنيات المؤكدة والمعتمدة",
      "skills.subtitle": "التقنيات والممارسات الهندسية المؤكدة والمستخدمة فعلياً في المشاريع.",

      // Projects Section
      "projects.tag": "مستودعات المشاريع",
      "projects.title": "المشاريع البرمجية المميزة",
      "projects.subtitle": "أنظمة ويب مستقلة مبنية لإثبات الانضباط المعماري، جودة الكود، والتفكير البرمجي المتزن.",
      "projects.viewCode": "الكود المصدري",
      "projects.viewLive": "المعاينة المباشرة",
      "projects.highlightsTitle": "أبرز الخصائص التقنية:",
      "projects.syntheticNotice": "ملاحظة: المشاريع التجريبية والتجارية تستخدم بيانات اصطناعية وتجريبية بنسبة 100%.",
      "filter.all": "عرض الكل (13)",
      "filter.retail": "تكنولوجيا المتاجر والعرض البصري (4)",
      "filter.systems": "إدارة الأعمال والعملاء (4)",
      "filter.logistics": "المخازن واللوجستيات (1)",
      "filter.finance": "الأنظمة المالية والفواتير (1)",
      "filter.tools": "أدوات برمجية ومفتوحة المصدر (2)",
      "filter.frontend": "المعرض البرمجي (1)",

      // Services Section
      "services.tag": "ما أقدمه",
      "services.title": "الخدمات المهنية والتقنية",
      "services.subtitle": "حلول رقمية عملية وخدمات برمجية دقيقة أقدمها للأنشطة التجارية والمشاريع المهنية.",

      // Blog Section
      "blog.tag": "أوراق وملاحظات هندسية",
      "blog.title": "المقالات والأدلة التقنية",
      "blog.subtitle": "مقالات توثق قرارات تقنية حقيقية، هندسة الواجهات العربية (RTL)، واستراتيجيات قواعد البيانات.",
      "blog.readArticle": "قراءة المقال",
      "blog.backToList": "العودة لقائمة المقالات",

      // CV Section
      "cv.tag": "الملف المهني الموثق",
      "cv.title": "السيرة الذاتية (CV)",
      "cv.subtitle": "سجل مهني شفاف وموثوق للخبرات العملية والوظيفية والمهارات البرمجية المعتمدة.",
      "cv.btn.print": "طباعة / حفظ كملف PDF",
      "cv.sec.summary": "الملخص المهني",
      "cv.sec.experience": "الخبرات العملية والتطوير البرمجي",
      "cv.sec.skills": "المهارات التقنية المؤكدة",
      "cv.sec.projects": "المشاريع البرمجية المختارة",
      "cv.sec.education": "البيانات والمعلومات الأساسية",

      // Contact Section
      "contact.tag": "تواصل معي",
      "contact.title": "بدء التواصل والتعاون",
      "contact.subtitle": "هل لديك استفسار، مشروع ترغب في تنفيذه، أو فرصة تعاون تقني؟ يسعدني تواصلك المباشر.",
      "contact.emailLabel": "البريد الإلكتروني",
      "contact.copyEmail": "نسخ البريد",
      "contact.copied": "تم نسخ البريد بنجاح!",
      "contact.form.name": "الاسم الكامل",
      "contact.form.namePlaceholder": "مثال: أحمد محمد",
      "contact.form.email": "البريد الإلكتروني",
      "contact.form.emailPlaceholder": "مثال: ahmed@example.com",
      "contact.form.subject": "موضوع الرسالة",
      "contact.form.subjectPlaceholder": "مثال: استفسار عن موقع تجاري",
      "contact.form.message": "نص الرسالة",
      "contact.form.messagePlaceholder": "اكتب تفاصيل مشروعك أو متطلباتك...",
      "contact.form.send": "إرسال عبر تطبيق البريد",

      // Footer
      "footer.rights": "جميع الحقوق محفوظة.",
      "footer.tagline": "مبني بأكواد HTML و CSS و JavaScript نقية، وبأعلى درجات الأصالة الهندسية."
    }
  };

  let currentLang = LANG_EN;

  function getPreferredLanguage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === LANG_EN || stored === LANG_AR) {
      return stored;
    }
    // Default to English as per Master Directive
    return LANG_EN;
  }

  function setLanguage(lang) {
    if (lang !== LANG_EN && lang !== LANG_AR) lang = LANG_EN;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === LANG_AR ? 'rtl' : 'ltr');

    updateStaticTranslations();
    updateLanguageButtons();

    // Trigger re-render of dynamic components (projects, skills, articles, cv, services)
    if (window.App && typeof window.App.renderDynamicContent === 'function') {
      window.App.renderDynamicContent();
    }
  }

  function t(key) {
    if (translations[currentLang] && translations[currentLang][key]) {
      return translations[currentLang][key];
    }
    if (translations[LANG_EN] && translations[LANG_EN][key]) {
      return translations[LANG_EN][key];
    }
    return key;
  }

  function updateStaticTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const translation = t(key);
      if (translation) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.hasAttribute('placeholder')) {
            el.setAttribute('placeholder', translation);
          }
        } else {
          el.textContent = translation;
        }
      }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = t(key);
      if (translation) {
        el.setAttribute('placeholder', translation);
      }
    });

    const titles = document.querySelectorAll('[data-i18n-title]');
    titles.forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      const translation = t(key);
      if (translation) {
        el.setAttribute('title', translation);
        el.setAttribute('aria-label', translation);
      }
    });
  }

  function updateLanguageButtons() {
    const buttons = document.querySelectorAll('[data-lang-toggle]');
    buttons.forEach((btn) => {
      const targetLang = currentLang === LANG_EN ? LANG_AR : LANG_EN;
      const label = currentLang === LANG_EN ? 'عربي' : 'English';
      btn.textContent = label;
      btn.setAttribute('aria-label', currentLang === LANG_EN ? 'تغيير اللغة إلى العربية' : 'Switch language to English');
    });
  }

  function init() {
    currentLang = getPreferredLanguage();
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === LANG_AR ? 'rtl' : 'ltr');

    document.addEventListener('DOMContentLoaded', () => {
      updateStaticTranslations();
      updateLanguageButtons();

      const buttons = document.querySelectorAll('[data-lang-toggle]');
      buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const nextLang = currentLang === LANG_EN ? LANG_AR : LANG_EN;
          setLanguage(nextLang);
        });
      });
    });
  }

  init();

  return {
    t: t,
    getLang: () => currentLang,
    setLang: setLanguage,
    refresh: updateStaticTranslations
  };
})();
