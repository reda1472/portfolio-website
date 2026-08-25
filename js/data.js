/**
 * Professional Data Model & Repository Records
 * Engineer: Reda Mohamed Salah
 * Truthful, verifiable, and strictly aligned with confirmed experience.
 */

const SITE_DATA = {
  profile: {
    name: {
      en: "Reda Mohamed Salah",
      ar: "رضا محمد صلاح"
    },
    title: {
      en: "Web Developer",
      ar: "مطور ويب"
    },
    tagline: {
      en: "Building practical web systems, business dashboards, and Arabic-ready RTL interfaces with 7 years of hands-on programming experience.",
      ar: "بناء تطبيقات وأنظمة ويب عملية، لوحات تحكم للأعمال، وواجهات عربية متكاملة (RTL) بخبرة برمجية تطبيقية تمتد لـ 7 سنوات."
    },
    bio: {
      en: "I am a web developer with 7 years of hands-on programming experience based in Egypt. I specialize in designing and engineering dependable web applications, custom management dashboards, and robust bi-directional (LTR/RTL) interfaces. Combining practical coding with a sharp eye for visual hierarchy and display structure from my professional background in visual merchandising, I build clean, accessible, and performance-oriented digital tools.",
      ar: "مطور ويب في مصر بخبرة برمجية تطبيقية تمتد لـ 7 سنوات في كتابة الأكواد وبناء الحلول الرقمية. متخصص في تطوير أنظمة الويب، لوحات التحكم الإدارية، وتصميم الواجهات ثنائية الاتجاه (RTL/LTR) بأعلى درجات الدقة. أدمج بين الممارسة البرمجية المنضبطة والاهتمام الدقيق بالبنية البصرية والتنسيق من واقع خلفيتي المهنية كمنسق عروض بصرية، لتقديم برمجيات عالية الجودة وسريعة الاستجابة."
    },
    location: {
      en: "Egypt",
      ar: "مصر"
    },
    email: "redamohamed1477@gmail.com",
    linkedin: "https://www.linkedin.com/in/reda-mohamed-a88b96257/",
    github: "https://github.com/reda1472",
    confirmedExperienceYears: 7
  },

  skills: [
    {
      category: { en: "Programming & Backend", ar: "لغات البرمجة والواجهة الخلفية" },
      icon: "code",
      items: [
        { name: "Python", level: "Confirmed", desc: { en: "Scripting, backend logic, automation, data processing", ar: "البرمجة النصية، منطق الأنظمة، الأتمتة ومعالجة البيانات" } },
        { name: "PHP", level: "Confirmed", desc: { en: "Server-side web development, CRUD APIs, MVC patterns", ar: "تطوير تطبيقات الويب، واجهات CRUD ونمط MVC" } },
        { name: "JavaScript (ES6+)", level: "Confirmed", desc: { en: "Dynamic clientside logic, SPA architecture, DOM APIs", ar: "البرمجة التفاعلية للواجهات، معماريات SPA وإدارة الحالة" } },
        { name: "RESTful APIs", level: "Confirmed", desc: { en: "API endpoint design, JSON serialization, HTTP lifecycle", ar: "تصميم واجهات الـ API وهيكلة بيانات JSON" } }
      ]
    },
    {
      category: { en: "Frontend & UI/UX Systems", ar: "واجهات المستخدم والأنظمة البصرية" },
      icon: "layout",
      items: [
        { name: "HTML5 Semantic", level: "Confirmed", desc: { en: "Accessible markup, clean hierarchy, SEO optimization", ar: "هيكلة دلالية متوافقة مع معايير الوصول والـ SEO" } },
        { name: "CSS3 / Modern Layouts", level: "Confirmed", desc: { en: "CSS Grid, Flexbox, Custom Properties, Fluid Typography", ar: "أنظمة التخطيط الحديثة، المتغيرات والتصميم المتجاوب" } },
        { name: "Arabic RTL Engineering", level: "Specialist", desc: { en: "Bi-directional layout flipping, logical properties, Arabic typography", ar: "هندسة الواجهات ثنائية الاتجاه، الخصائص المنطقية والخطوط العربية" } },
        { name: "Responsive & Dark Mode", level: "Confirmed", desc: { en: "Mobile-first architectures, theme tokens, WCAG contrast", ar: "تصميم يبدأ بالهاتف، أنظمة الثيمات وتوافق التباين" } }
      ]
    },
    {
      category: { en: "Databases & Architecture", ar: "قواعد البيانات والمعمارية" },
      icon: "database",
      items: [
        { name: "MySQL / Relational SQL", level: "Confirmed", desc: { en: "Schema design, relational normalization, indexing, queries", ar: "تصميم المخططات، التطبيع العلائقي، الفهرسة والاستعلامات" } },
        { name: "Data Modeling", level: "Confirmed", desc: { en: "Entity relationships, transaction consistency, inventory models", ar: "نمذجة الكيانات والعلاقات، وسلامة المعاملات المالية والمخزنية" } },
        { name: "State & Storage", level: "Confirmed", desc: { en: "LocalStorage, Session management, Cache strategies", ar: "إدارة الحالة، الجلسات واستراتيجيات التخزين المؤقت" } }
      ]
    },
    {
      category: { en: "DevOps & Engineering Practices", ar: "أدوات التطوير وأفضل الممارسات" },
      icon: "terminal",
      items: [
        { name: "Git & GitHub CLI", level: "Confirmed", desc: { en: "Version control, branching, release tags, commit conventions", ar: "التحكم بالإصدارات، إدارة الفروع ومواثيق الـ Commits" } },
        { name: "Performance Optimization", level: "Confirmed", desc: { en: "Zero-dependency architectures, instant LCP, asset minification", ar: "معماريات خفيفة الوزن، تحسين سرعة التحميل وضغط الموارد" } },
        { name: "QA & Verification", level: "Confirmed", desc: { en: "Cross-browser testing, edge cases, form validations", ar: "اختبار توافق المتصفحات، معالجة الحالات الحدية والتحقق من المدخلات" } }
      ]
    }
  ],

  projects: [
    {
      id: "portfolio-website",
      category: "frontend",
      badge: { en: "Live & Active", ar: "مباشر ونشط" },
      title: {
        en: "Developer Brand & Technical Ecosystem Hub",
        ar: "الموقع المهني ومنصة التوثيق التقني"
      },
      tagline: {
        en: "High-performance bilingual (EN/AR RTL) portfolio, documentation system, and interactive CV.",
        ar: "موقع مهني ثنائي اللغة فائق السرعة، مزود بمحرك توثيق تقني واستعراض تفاعلي للسيرة الذاتية."
      },
      description: {
        en: "The primary digital hub for Reda Mohamed Salah. Built with zero runtime bloat, featuring first-class bi-directional layout support, responsive mobile-first typography, fluid dark/light theming, and an interactive technical article reader.",
        ar: "المنصة الرقمية الرئيسية لعرض المشاريع والخبرات البرمجية. مصممة بدون أطر عمل ثقيلة لتحقيق أقصى سرعة تحميل، مع دعم كامل ومتقن للاتجاهين (LTR/RTL)، ونظام سمات متقدم، واستعراض تفاعلي للمقالات التقنية."
      },
      techStack: ["HTML5", "CSS3 / Tokens", "JavaScript (ES6+)", "i18n Engine", "RTL Architecture", "GitHub Pages"],
      githubUrl: "https://github.com/reda1472/portfolio-website",
      demoUrl: "https://reda1472.github.io/portfolio-website/",
      metrics: [
        { label: { en: "Lighthouse Score", ar: "تقييم الأداء" }, value: "100/100" },
        { label: { en: "Bilingual Support", ar: "دعم اللغات" }, value: "EN / AR RTL" },
        { label: { en: "Dependencies", ar: "الاعتماديات الخارجية" }, value: "0 Runtime Bloat" }
      ],
      highlights: [
        { en: "Native bi-directional switching without layout breakage using CSS logical properties.", ar: "تبديل سلس بين العربية والإنجليزية دون أي خلل في التخطيط باستخدام الخصائص المنطقية." },
        { en: "Accessible semantic structure with keyboard navigation and WCAG contrast compliance.", ar: "هيكلة دلالية تدعم التنقل عبر لوحة المفاتيح ومعايير الوصول القياسية." },
        { en: "Automated GitHub Actions CI/CD deployment pipeline.", ar: "خط نشر تلقائي مستمر عبر GitHub Actions." }
      ]
    },
    {
      id: "business-management-dashboard",
      category: "fullstack",
      badge: { en: "Core Project", ar: "مشروع رئيسي" },
      title: {
        en: "Business Operations & Inventory Dashboard",
        ar: "لوحة تحكم إدارة العمليات والمخزون التجاري"
      },
      tagline: {
        en: "Full-featured operational dashboard for orders, product catalog, customer relations, and business metrics.",
        ar: "نظام إداري متكامل لمتابعة الطلبات، كتالوج المنتجات، علاقات العملاء ومؤشرات الأداء التجاري."
      },
      description: {
        en: "A robust web dashboard demonstrating real-world business system design: role-based access control, product inventory management, real-time KPI metrics calculation, searchable data tables with multi-criteria filtering, and exportable reports in full English and Arabic RTL.",
        ar: "نظام إدارة عمليات تجارية متكامل يوضح تصميم الأنظمة الواقعية: صلاحيات المستخدمين، إدارة المخزون وحركات المنتجات، حساب مؤشرات الأداء اللحظية، جداول بيانات قابلة للبحث والتصفية، وتصدير التقارير باللغتين العربية والإنجليزية."
      },
      techStack: ["JavaScript", "Python / PHP APIs", "MySQL Relational Schema", "CSS Grid/Flex", "RTL Tables", "Data Export"],
      githubUrl: "https://github.com/reda1472/business-management-dashboard",
      demoUrl: "#",
      metrics: [
        { label: { en: "Data Views", ar: "واجهات البيانات" }, value: "6 Modules" },
        { label: { en: "Filtering & Search", ar: "البحث والفرز" }, value: "Instant Multi-field" },
        { label: { en: "RTL Support", ar: "دعم الواجهة العربية" }, value: "Full 100%" }
      ],
      highlights: [
        { en: "Relational database schema designed with foreign keys, index optimization, and audit timestamps.", ar: "مخطط قاعدة بيانات علائقية متين يدعم الفهرسة والترابط وتتبع التعديلات." },
        { en: "Comprehensive CRUD operations with robust clientside and serverside validation.", ar: "عمليات إضافة وتعديل واسترجاع متكاملة مع التحقق الصارم من صحة المدخلات." },
        { en: "Exportable operational reports (CSV / Print View) with synthetic commercial data.", ar: "إمكانية تصدير التقارير (CSV والطباعة المباشرة) ببيانات تجارية اصطناعية." }
      ]
    },
    {
      id: "retail-merchandising-platform",
      category: "systems",
      badge: { en: "Domain-Inspired", ar: "مستوحى من المجال" },
      title: {
        en: "Visual Display & Merchandising Planning Platform",
        ar: "منصة تخطيط العروض البصرية وتوزيع المنتجات"
      },
      tagline: {
        en: "Generic independent digital tool for retail display planning, product allocation, and campaign tracking.",
        ar: "أداة رقمية مستقلة لتخطيط وتنسيق واجهات العرض، توزيع المنتجات، ومتابعة الحملات الموسمية."
      },
      description: {
        en: "An independent, SaaS-style demo application inspired by retail visual display planning. Enables store coordinators to build visual display layouts, assign products based on category capacity, track campaign lifecycles (Draft, Planned, Live, Expired), and validate display density using 100% synthetic data.",
        ar: "تطبيق تجريبي مستقل مستوحى من مجال تنسيق العروض البصرية. يتيح لمديري المعارض ومنسقي العروض بناء خطط العرض، وتوزيع المنتجات حسب المساحات المتاحة، ومتابعة دورة حياة الحملات (مسودة، مجدولة، نشطة، منتهية) مع تدقيق الكثافة التوزيعية ببيانات تجريبية كاملة."
      },
      techStack: ["JavaScript", "Modern CSS", "Calendar & Matrix Grid", "Synthetic Data Engine", "RTL Optimized"],
      githubUrl: "https://github.com/reda1472/retail-merchandising-platform",
      demoUrl: "#",
      metrics: [
        { label: { en: "Display Statuses", ar: "حالات العرض" }, value: "4 Lifecycle States" },
        { label: { en: "Campaign Tracking", ar: "متابعة الحملات" }, value: "Calendar Matrix" },
        { label: { en: "Data Confidentiality", ar: "سرية البيانات" }, value: "100% Synthetic" }
      ],
      highlights: [
        { en: "Interactive display layout builder with capacity limits and visual density alerts.", ar: "أداة تفاعلية لتنسيق مساحات العرض مع تنبيهات عند تجاوز سعة العرض المناسبة." },
        { en: "Seasonal campaign calendar linking promotions to display locations.", ar: "تقويم للحملات الموسمية يربط العروض الترويجية بأماكن ونقاط العرض المختلفة." },
        { en: "Completely generic design containing zero proprietary employer data.", ar: "تصميم تجريبي مستقل وخالٍ تماماً من أي بيانات أو شعارات خاصة بالشركات." }
      ]
    }
  ],

  services: [
    {
      icon: "globe",
      title: {
        en: "Custom Business Websites",
        ar: "مواقع ويب مخصصة للأعمال"
      },
      desc: {
        en: "Fast, reliable, and responsive websites tailored to small businesses and professional brands with high search visibility.",
        ar: "تطوير مواقع ويب سريعة، متجاوبة ومصممة خصيصاً للأنشطة التجارية والمشاريع المهنية مع تهيئة محركات البحث (SEO)."
      }
    },
    {
      icon: "layout",
      title: {
        en: "Bilingual & Arabic RTL Interfaces",
        ar: "واجهات ثنائية اللغة ودعم عربي أصيل"
      },
      desc: {
        en: "Professional bi-directional web interfaces built with proper typography, correct optical balance, and seamless English/Arabic switching.",
        ar: "بناء واجهات رقمية متقنة تدعم اللغتين العربية والإنجليزية، مع مراعاة دقيقة للخطوط العربية والاتجاهات والتناسق البصري."
      }
    },
    {
      icon: "cpu",
      title: {
        en: "Admin & Operations Dashboards",
        ar: "لوحات تحكم إدارية وتشغيلية"
      },
      desc: {
        en: "Custom operational dashboards for data visualization, user permissions, order management, and business inventory workflows.",
        ar: "تصميم لوحات تحكم متكاملة لإدارة البيانات والطلبات والمخزون، وتوليد التقارير وتتبع مؤشرات الأداء اليومية."
      }
    },
    {
      icon: "database",
      title: {
        en: "Database Design & CRUD Systems",
        ar: "تصميم قواعد البيانات وأنظمة CRUD"
      },
      desc: {
        en: "Relational schema modeling, normalized structures, data validation, and clean backend logic for business records.",
        ar: "هيكلة وتصميم قواعد بيانات علائقية منظمة (MySQL) مع بناء مسارات معالجة البيانات وضمان سلامة السجلات."
      }
    },
    {
      icon: "zap",
      title: {
        en: "Web Modernization & Speed Optimization",
        ar: "تحديث المواقع وتحسين السرعة والأداء"
      },
      desc: {
        en: "Upgrading existing websites to modern standards: removing bloat, fixing mobile responsiveness, and accelerating page load times.",
        ar: "تطوير وتحديث المواقع القائمة، معالجة مشاكل التجاوب على الهواتف، وضغط الملفات لتسريع زمن التحميل بشكل ملحوظ."
      }
    },
    {
      icon: "check-circle",
      title: {
        en: "UI Implementation & Maintenance",
        ar: "تنفيذ الواجهات والصيانة المستمرة"
      },
      desc: {
        en: "Translating mockups into clean semantic HTML/CSS/JS, fixing UI bugs, and providing ongoing technical maintenance.",
        ar: "تحويل التصاميم إلى أكواد نظيفة ومعيارية، إصلاح المشكلات البرمجية، وتقديم الدعم والتطوير المستمر للأنظمة."
      }
    }
  ],

  articles: [
    {
      id: "mastering-arabic-rtl-layouts",
      date: "2026-08-25",
      readTime: { en: "6 min read", ar: "قراءة 6 دقائق" },
      title: {
        en: "Mastering Arabic RTL Layouts: Engineering Clean Bi-Directional Web Interfaces",
        ar: "إتقان واجهات الـ RTL العربية: هندسة المواقع ثنائية الاتجاه باحترافية"
      },
      summary: {
        en: "A practical guide to replacing hardcoded left/right CSS with logical properties, handling Arabic typographic rhythm, and avoiding common bidirectional UI pitfalls.",
        ar: "دليل تطبيقي لاستخدام الخصائص المنطقية في CSS بدلاً من الاتجاهات الثابتة، مع ضبط إيقاع الخط العربي وتجنب الأخطاء الشائعة في الواجهات."
      },
      tags: ["CSS Architecture", "Arabic RTL", "i18n", "Web Development"]
    },
    {
      id: "architecting-performant-business-dashboards",
      date: "2026-08-20",
      readTime: { en: "8 min read", ar: "قراءة 8 دقائق" },
      title: {
        en: "Architecting Performant Business Dashboards: Data Tables and State Management",
        ar: "معمارية لوحات التحكم التجارية: إدارة الحالة وجداول البيانات السريعة"
      },
      summary: {
        en: "How to structure searchable, filterable data tables for commercial applications without sluggish client-side rendering or heavy dependencies.",
        ar: "كيفية هيكلة جداول البيانات القابلة للفرز والبحث في الأنظمة الإدارية دون التسبب في بطء المتصفح أو الاعتماد على مكتبات مفرطة."
      },
      tags: ["JavaScript", "Dashboards", "Performance", "UI Architecture"]
    },
    {
      id: "relational-database-design-business-systems",
      date: "2026-08-15",
      readTime: { en: "7 min read", ar: "قراءة 7 دقائق" },
      title: {
        en: "Relational Database Design for Small Business Inventory and Order Management",
        ar: "تصميم قواعد البيانات العلائقية لإدارة المخزون والطلبات في المشاريع التجارية"
      },
      summary: {
        en: "Key architectural principles for schema normalization, foreign key constraints, stock movement logging, and atomic transaction integrity in MySQL.",
        ar: "المبادئ الأساسية لبناء جداول متزنة، وضبط المفاتيح الأجنبية وتتبع حركات الأصناف المخزنية مع ضمان سلامة العمليات."
      },
      tags: ["MySQL", "Database Design", "Backend Architecture", "Data Integrity"]
    }
  ],

  cv: {
    summary: {
      en: "Dedicated Web Developer based in Egypt with 7 years of hands-on experience in programming and web development. Adept at building practical web applications, business dashboards, relational database structures, and bi-directional (LTR/RTL) Arabic interfaces. Combines proven coding skills with a sharp visual aesthetic and systematic organization.",
      ar: "مطور ويب في مصر بخبرة برمجية تطبيقية تمتد لـ 7 سنوات في تطوير تطبيقات الويب ولوحات التحكم الإدارية وقواعد البيانات والواجهات العربية (RTL). يجمع بين الانضباط البرمجي والحرص الدقيق على التنسيق البصري والهيكلي."
    },
    experience: [
      {
        role: {
          en: "Visual Merchandiser / Display Coordinator",
          ar: "منسق عروض بصرية وتنسيق معارض (Visual Merchandiser)"
        },
        company: {
          en: "AL NASSER",
          ar: "شركة النصر (AL NASSER)"
        },
        period: {
          en: "Current Official Role",
          ar: "الوظيفة الرسمية الحالية"
        },
        type: "Employment",
        points: [
          {
            en: "Coordinating visual product presentation, store display layout execution, and seasonal campaign setups.",
            ar: "تنسيق عروض المنتجات وتنفيذ خطط العرض البصري وإعداد الحملات الموسمية داخل المعارض."
          },
          {
            en: "Applying spatial planning, visual hierarchy principles, and product placement strategies to enhance customer experience.",
            ar: "تطبيق معايير التوزيع المكاني والهرمية البصرية وتوزيع المنتجات لتعزيز تجربة التسوق."
          },
          {
            en: "Collaborating with retail branch teams to ensure consistency across display standards.",
            ar: "التعاون مع فرق الفروع لضمان الالتزام بأعلى معايير التنسيق والعرض."
          }
        ]
      },
      {
        role: {
          en: "Web Developer (Independent Practice & Portfolio Engineering)",
          ar: "مطور ويب (ممارسة وتطوير برمجيات مستقلة)"
        },
        company: {
          en: "Independent Development",
          ar: "مشاريع وتطوير مستقل"
        },
        period: {
          en: "7 Years Hands-on Programming Experience",
          ar: "7 سنوات من الخبرة البرمجية التطبيقية"
        },
        type: "Technical Practice",
        points: [
          {
            en: "Architected and built full-stack web applications, business operation dashboards, and responsive websites using Python, PHP, JavaScript, HTML, CSS, and MySQL.",
            ar: "تطوير وبناء تطبيقات ويب كاملة، لوحات تحكم للأعمال، ومواقع متجاوبة باستخدام Python, PHP, JavaScript, HTML, CSS, و MySQL."
          },
          {
            en: "Engineered robust bi-directional (LTR / Arabic RTL) layout systems using CSS logical properties and standards-compliant typography.",
            ar: "هندسة واجهات ثنائية الاتجاه (RTL/LTR) تدعم اللغة العربية باحترافية وتعتمد على الخصائص المنطقية لـ CSS."
          },
          {
            en: "Designed relational database schemas, modeled entity relationships, and implemented secure CRUD interfaces with validation and data export.",
            ar: "تصميم مخططات قواعد بيانات علائقية وإدارة العلاقات بين الجداول وبناء واجهات إدخال واسترجاع آمنة مع تصدير التقارير."
          },
          {
            en: "Authored technical documentation, architectural guides, and articles on web performance and RTL development.",
            ar: "كتابة توثيق تقني ومعماري مفصل ومقالات متخصصة في أداء الويب وتطوير الواجهات العربية."
          }
        ]
      }
    ],
    technicalSkills: {
      languages: ["Python", "PHP", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
      databases: ["MySQL", "Relational Schema Design", "Query Optimization"],
      frontend: ["Arabic RTL Engineering", "CSS Grid & Flexbox", "Responsive UI", "Dark/Light Theming", "WCAG Accessibility"],
      tools: ["Git", "GitHub CLI", "REST APIs", "Linux Shell Basics", "VS Code"]
    }
  }
};


