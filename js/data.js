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
      "id": "fashion-mannequin-stylist",
      "category": "retail",
      "badge": {
            "en": "Retail & Fashion Tech",
            "ar": "ريتيل وعرض بصري"
      },
      "title": {
            "en": "Mannequin Studio Pro: Retail Styling & Outfitting Platform",
            "ar": "أستوديو تنسيق مانيكانات المتاجر وتوزيع العرض البصري"
      },
      "tagline": {
            "en": "Interactive multi-mannequin staging canvas with color harmony scoring and branch SOP guideline generation.",
            "ar": "منصة ويب تفاعلية لتنسيق منصات المانيكانات وفحص تناغم الألوان واستخراج دليل التنسيق التشغيلي للفروع."
      },
      "description": {
            "en": "A domain-driven visual merchandising application built for store display coordinators. Features 3-mannequin and 5-mannequin podium staging, dynamic outfit layering (outerwear, tops, bottoms, accessories), color theory balance evaluation, and printable branch SOP sheets.",
            "ar": "تطبيق متخصص في العرض البصري وهندسة المتاجر، يتيح تنسيق منصات المانيكانات المتعددة، وتركيب طبقات الملابس، وحساب مؤشر تناغم الألوان، وتوليد دليل التشغيل الموحد (SOP) لفروع المتاجر."
      },
      "techStack": [
            "JavaScript (ES6+)",
            "Retail Staging Canvas",
            "Color Theory Algorithm",
            "SOP Guideline Generator",
            "Bilingual RTL"
      ],
      "githubUrl": "https://github.com/reda1472/fashion-mannequin-stylist",
      "demoUrl": "https://reda1472.github.io/fashion-mannequin-stylist/",
      "metrics": [
            {
                  "label": {
                        "en": "Podium Staging",
                        "ar": "منصات العرض"
                  },
                  "value": "5-Mannequins"
            },
            {
                  "label": {
                        "en": "Color Harmony",
                        "ar": "تناغم الألوان"
                  },
                  "value": "96% Balance"
            },
            {
                  "label": {
                        "en": "Branch SOP",
                        "ar": "دليل التشغيل"
                  },
                  "value": "Printable PDF"
            }
      ],
      "highlights": [
            {
                  "en": "Interactive multi-mannequin staging canvas (Single, Trio, and 5-mannequin group displays).",
                  "ar": "أستوديو تفاعلي لتنسيق منصات المانيكانات (فردي، ثلاثي، ومجموعات 5 مانيكانات)."
            },
            {
                  "en": "Layered garment outfitting engine across Menswear, Womenswear, and Kidswear.",
                  "ar": "محرك تركيب طبقات الملابس لأقسام الرجالي، الحريمي، وملابس الأطفال."
            },
            {
                  "en": "Automated branch SOP guideline sheet generation for store execution teams.",
                  "ar": "توليد آلي لدليل التنسيق القياسي القابل للطباعة لفرق العمل بالفروع."
            }
      ]
},
    {
      "id": "store-window-display-planner",
      "category": "retail",
      "badge": {
            "en": "Retail Architecture",
            "ar": "واجهات المتاجر"
      },
      "title": {
            "en": "Window Planner Pro: Store Facade Staging & Lighting Simulator",
            "ar": "نظام تخطيط وتصميم واجهات المتاجر ومحاكاة الإضاءة"
      },
      "tagline": {
            "en": "Storefront window staging platform with simulated glass reflections, directional spotlighting, and BOM estimation.",
            "ar": "منصة هندسية لتخطيط وتصميم فاترينات المتاجر ومحاكاة الإضاءة الموجهة وحساب تكلفة خامات العرض."
      },
      "description": {
            "en": "Architectural visual merchandising tool for designing retail window displays. Features Kelvin color temperature adjustments (2700K-5500K), dynamic spotlight cones, seasonal backdrop arches, live Bill of Materials (BOM) cost ledger, and printable blueprints.",
            "ar": "أداة هندسية لتصميم فاترينات وواجهات المتاجر الخارجية، تدعم محاكاة درجات حرارة الإضاءة (كلفن)، وتركيب الديكورات الموسمية، وحساب جدول تكاليف المواد (BOM)، وطباعة المخطط الإنشائي."
      },
      "techStack": [
            "JavaScript (ES6+)",
            "Photometric Lighting Engine",
            "Storefront Facade Grid",
            "BOM Cost Calculator",
            "Bilingual RTL"
      ],
      "githubUrl": "https://github.com/reda1472/store-window-display-planner",
      "demoUrl": "https://reda1472.github.io/store-window-display-planner/",
      "metrics": [
            {
                  "label": {
                        "en": "Lighting Temp",
                        "ar": "حرارة الإضاءة"
                  },
                  "value": "2700K-5500K"
            },
            {
                  "label": {
                        "en": "BOM Costing",
                        "ar": "تكلفة الخامات"
                  },
                  "value": "Real-Time Math"
            },
            {
                  "label": {
                        "en": "Store Blueprint",
                        "ar": "مخطط إنشائي"
                  },
                  "value": "Printable CAD"
            }
      ],
      "highlights": [
            {
                  "en": "3D window facade staging box with simulated glass reflections and seasonal backdrops.",
                  "ar": "منصة هندسية لتصميم فاترينات المتاجر مع انعكاسات الزجاج والديكورات الموسمية."
            },
            {
                  "en": "Photometric lighting simulator for color temperature (Kelvin) and spotlight beam intensity.",
                  "ar": "محاكي إضاءة متقدم لدرجات حرارة الألوان وتركيز إضاءة السبوت لايت."
            },
            {
                  "en": "Dynamic Bill of Materials (BOM) cost estimator and printable construction blueprints.",
                  "ar": "حساب فوري لتكلفة خامات ومواد العرض وطباعة المخططات الهندسية للفاترينة."
            }
      ]
},
    {
      "id": "branch-vm-audit-system",
      "category": "retail",
      "badge": {
            "en": "Retail Operations",
            "ar": "إدارة العمليات"
      },
      "title": {
            "en": "Retail VM Auditor: Multi-Branch Compliance Suite",
            "ar": "نظام تدقيق وتقييم الامتثال البصري لفروع المتاجر"
      },
      "tagline": {
            "en": "Store inspection and audit platform across branch networks with weighted compliance scoring and action ticketing.",
            "ar": "منصة تدقيق وفحص العرض البصري لفروع المتاجر بحساب أوزان التقييم وإدارة المهام التصحيحية."
      },
      "description": {
            "en": "Multi-branch store inspection platform covering Cairo, Mansoura, Tanta, and Damanhour locations. Evaluates window displays, entrance tables, wall folding standards, and lighting with real-time Pass/Partial/Fail checklist toggles and printable executive audit reports.",
            "ar": "نظام فحص وتقييم الامتثال البصري لشبكة فروع المتاجر (القاهرة، المنصورة، طنطا، دمنهور)، يحلل معايير الواجهات ومداخل المتاجر وتطبيق الملابس والإضاءة مع تقارير تنفيذية شاملة."
      },
      "techStack": [
            "JavaScript (ES6+)",
            "Weighted Audit Engine",
            "Branch Matrix",
            "Executive Reporting",
            "Bilingual RTL"
      ],
      "githubUrl": "https://github.com/reda1472/branch-vm-audit-system",
      "demoUrl": "https://reda1472.github.io/branch-vm-audit-system/",
      "metrics": [
            {
                  "label": {
                        "en": "Branch Network",
                        "ar": "شبكة الفروع"
                  },
                  "value": "5 Key Hubs"
            },
            {
                  "label": {
                        "en": "Audit Scoring",
                        "ar": "معايير التقييم"
                  },
                  "value": "5 Weighted Areas"
            },
            {
                  "label": {
                        "en": "Executive Report",
                        "ar": "تقرير معتمد"
                  },
                  "value": "Instant Print"
            }
      ],
      "highlights": [
            {
                  "en": "Multi-branch store inspection matrix covering Cairo, Mansoura, Tanta, and Damanhour networks.",
                  "ar": "مصفوفة فحص وتقييم شاملة لفروع القاهرة، المنصورة (1، 2، 3)، طنطا، ودمنهور."
            },
            {
                  "en": "Weighted scoring algorithm evaluating windows (25%), entrance (20%), and wall fold standards (30%).",
                  "ar": "معادلة تقييم مرجحة تحلل الواجهات، مداخل المعارض، وتطبيق وترتيب الملابس بالجدران."
            },
            {
                  "en": "Interactive Pass/Partial/Fail checklist toggles and action item ticketing system.",
                  "ar": "قائمة تدقيق تفاعلية بحالات النجاح والتنبيه مع متابعة المهام التصحيحية."
            }
      ]
},
    {
      "id": "retail-merchandising-platform",
      "category": "retail",
      "badge": {
            "en": "Visual Merchandising",
            "ar": "العرض البصري"
      },
      "title": {
            "en": "Retail Merchandising & Floor Capacity Platform",
            "ar": "منصة تخطيط العروض البصرية وتوزيع المنتجات"
      },
      "tagline": {
            "en": "Generic independent digital tool for retail display planning, product allocation, and campaign tracking.",
            "ar": "أداة رقمية مستقلة لتخطيط وتنسيق واجهات العرض، توزيع المنتجات، ومتابعة الحملات الموسمية."
      },
      "description": {
            "en": "An independent, SaaS-style demo application inspired by retail visual display planning. Enables store coordinators to build visual display layouts, assign products based on category capacity, track campaign lifecycles (Draft, Planned, Live, Expired), and validate display density using 100% synthetic data.",
            "ar": "تطبيق تجريبي مستقل مستوحى من مجال تنسيق العروض البصرية. يتيح لمديري المعارض ومنسقي العروض بناء خطط العرض، وتوزيع المنتجات حسب المساحات المتاحة، ومتابعة دورة حياة الحملات (مسودة، مجدولة، نشطة، منتهية) مع تدقيق الكثافة التوزيعية ببيانات تجريبية كاملة."
      },
      "techStack": [
            "JavaScript",
            "Modern CSS",
            "Calendar & Matrix Grid",
            "Synthetic Data Engine",
            "RTL Optimized"
      ],
      "githubUrl": "https://github.com/reda1472/retail-merchandising-platform",
      "demoUrl": "https://reda1472.github.io/retail-merchandising-platform/",
      "metrics": [
            {
                  "label": {
                        "en": "Display Statuses",
                        "ar": "حالات العرض"
                  },
                  "value": "4 Lifecycle States"
            },
            {
                  "label": {
                        "en": "Campaign Tracking",
                        "ar": "متابعة الحملات"
                  },
                  "value": "Calendar Matrix"
            },
            {
                  "label": {
                        "en": "Data Confidentiality",
                        "ar": "سرية البيانات"
                  },
                  "value": "100% Synthetic"
            }
      ],
      "highlights": [
            {
                  "en": "Interactive display layout builder with capacity limits and visual density alerts.",
                  "ar": "أداة تفاعلية لتنسيق مساحات العرض مع تنبيهات عند تجاوز سعة العرض المناسبة."
            },
            {
                  "en": "Seasonal campaign calendar linking promotions to display locations.",
                  "ar": "تقويم للحملات الموسمية يربط العروض الترويجية بأماكن ونقاط العرض المختلفة."
            },
            {
                  "en": "Completely generic design containing zero proprietary employer data.",
                  "ar": "تصميم تجريبي مستقل وخالٍ تماماً من أي بيانات أو شعارات خاصة بالشركات."
            }
      ]
},
    {
      "id": "business-management-dashboard",
      "category": "systems",
      "badge": {
            "en": "Full-Stack / Operations",
            "ar": "عمليات وتشغيل"
      },
      "title": {
            "en": "Business Management & Operations Hub",
            "ar": "لوحة تحكم إدارية وتشغيلية متكاملة"
      },
      "tagline": {
            "en": "Multi-role operations dashboard with inventory tracking, relational MySQL schema, POS orders, and CSV export.",
            "ar": "لوحة تحكم تشغيلية متكاملة لإدارة المخزون، قواعد بيانات MySQL، المبيعات ونقاط البيع مع تصدير التقارير."
      },
      "description": {
            "en": "A business management platform demonstrating relational data modeling (3NF MySQL schema), role-based access control (Admin, Manager, Staff), simulated POS terminal checkout, dynamic inventory replenishment triggers, and analytical CSV exports built entirely with synthetic retail data.",
            "ar": "نظام تشغيلي متكامل يوضح تصميم قواعد البيانات العلائقية (مخطط MySQL معياري 3NF)، نظام صلاحيات متقدم (مدير، مشرف، موظف)، محطة نقطة بيع (POS) تفاعلية، تنبيهات تلقائية لإعادة ملء المخزون، وتصدير التقارير الإدارية ببيانات تجريبية كاملة."
      },
      "techStack": [
            "JavaScript (ES6+)",
            "3NF Relational MySQL",
            "Role-Based Access (RBAC)",
            "POS Simulation",
            "CSV Engine",
            "Arabic RTL"
      ],
      "githubUrl": "https://github.com/reda1472/business-management-dashboard",
      "demoUrl": "https://reda1472.github.io/business-management-dashboard/",
      "metrics": [
            {
                  "label": {
                        "en": "Relational Tables",
                        "ar": "جداول علائقية"
                  },
                  "value": "6 Core Entities"
            },
            {
                  "label": {
                        "en": "Access Matrix",
                        "ar": "مصفوفة الأدوار"
                  },
                  "value": "3 RBAC Tiers"
            },
            {
                  "label": {
                        "en": "Reporting",
                        "ar": "توليد التقارير"
                  },
                  "value": "Live CSV Export"
            }
      ],
      "highlights": [
            {
                  "en": "Normalized 3NF relational schema in pure SQL with foreign keys, constraints, and audit log triggers.",
                  "ar": "مخطط قاعدة بيانات علائقي 3NF بمفاتيح أجنبية وقيود سلامة البيانات وسجلات العمليات."
            },
            {
                  "en": "Role-Based Access Control enforcing dynamic UI views and action guardrails based on user permissions.",
                  "ar": "نظام صلاحيات متقدم يتحكم ديناميكياً في الواجهات والعمليات المتاحة لكل دور وظيفي."
            },
            {
                  "en": "Interactive POS terminal reducing stock quantities in real-time with instant receipt generation.",
                  "ar": "نقطة بيع تفاعلية تخصم الكميات تلقائياً وتصدر إيصالات فورية مع تحديث المخزون."
            }
      ]
},
    {
      "id": "crm-sales-pipeline",
      "category": "systems",
      "badge": {
            "en": "Enterprise CRM",
            "ar": "إدارة العملاء"
      },
      "title": {
            "en": "Enterprise Sales Pipeline & CRM System",
            "ar": "منصة إدارة علاقات العملاء وخط سير المبيعات"
      },
      "tagline": {
            "en": "Interactive visual Kanban board with stage transition tracking, communication feeds, and sales analytics.",
            "ar": "لوحة كانبان تفاعلية لمتابعة مراحل الصفقات وتتبع التواصل مع العملاء وتحليلات الأداء البيعي."
      },
      "description": {
            "en": "An enterprise CRM solution demonstrating interactive sales stages (New Leads, Qualified, Proposal, Negotiation, Closed Won), automated activity audit logging, deal value summaries per column, and conversion analytics in full English and Arabic RTL.",
            "ar": "نظام إدارة علاقات عملاء متكامل يوضح مراحل المبيعات التفاعلية عبر لوحة كانبان، التوثيق الآلي لسجلات المتابعة والاتصالات، وحساب القيمة التقديرية ومعدلات الإغلاق باللغتين العربية والإنجليزية."
      },
      "techStack": [
            "JavaScript (ES6+)",
            "Visual Kanban Board",
            "Reactive CRM Store",
            "Activity Audit Log",
            "Arabic RTL"
      ],
      "githubUrl": "https://github.com/reda1472/crm-sales-pipeline",
      "demoUrl": "https://reda1472.github.io/crm-sales-pipeline/",
      "metrics": [
            {
                  "label": {
                        "en": "Sales Pipeline",
                        "ar": "مراحل المبيعات"
                  },
                  "value": "5 Kanban Stages"
            },
            {
                  "label": {
                        "en": "Activity Tracking",
                        "ar": "سجل الأنشطة"
                  },
                  "value": "Real-Time Audit"
            },
            {
                  "label": {
                        "en": "Win Rate Math",
                        "ar": "معدل الإغلاق"
                  },
                  "value": "Live Analytics"
            }
      ],
      "highlights": [
            {
                  "en": "Interactive visual Kanban board with drag-and-drop style deal stage transitions.",
                  "ar": "لوحة كانبان تفاعلية لنقل الصفقات عبر مراحل البيع المختلفة بسلاسة."
            },
            {
                  "en": "Automated activity audit log recording deal stage shifts, timestamps, and notes.",
                  "ar": "توثيق آلي لسجل الأنشطة وحركات الصفقات مع توقيتاتها الدقيقة وملاحظاتها."
            },
            {
                  "en": "Real-time deal volume and pipeline conversion metrics in English and Arabic RTL.",
                  "ar": "حساب فوري لقيمة الصفقات ومعدلات التحويل باللغتين العربية والإنجليزية."
            }
      ]
},
    {
      "id": "booking-appointment-system",
      "category": "systems",
      "badge": {
            "en": "Booking Platform",
            "ar": "نظام الحجوزات"
      },
      "title": {
            "en": "Service Appointment & Scheduling Platform",
            "ar": "منظومة حجز المواعيد والخدمات وجدولة الاستشارات"
      },
      "tagline": {
            "en": "Multi-step booking wizard with real-time slot conflict prevention, service catalog, and printable digital passes.",
            "ar": "معالج حجز مواعيد متعدد الخطوات مع منع التضارب الزمني، كتالوج الخدمات، وتذاكر رقمية قابلة للطباعة."
      },
      "description": {
            "en": "A professional service scheduling and appointment management system. Features an interactive 4-step booking wizard, dynamic staff availability matrix, real-time conflict prevention, appointment ledger management, and printable digital confirmation passes in both English and Arabic RTL.",
            "ar": "منظومة متكاملة لحجز المواعيد والخدمات المهنية، تتميز بمعالج حجز تفاعلي من 4 خطوات، مصفوفة مواعيد ذكية لمنع التعارض الزمني، وإدارة سجل الحجوزات، مع استخراج تذاكر تأكيد الحجز الرقمية الجاهزة للطباعة."
      },
      "techStack": [
            "JavaScript (ES6+)",
            "Booking Wizard",
            "Slot Conflict Engine",
            "Digital Confirmation Pass",
            "Arabic RTL"
      ],
      "githubUrl": "https://github.com/reda1472/booking-appointment-system",
      "demoUrl": "https://reda1472.github.io/booking-appointment-system/",
      "metrics": [
            {
                  "label": {
                        "en": "Conflict Guard",
                        "ar": "منع التضارب"
                  },
                  "value": "Zero Overlap"
            },
            {
                  "label": {
                        "en": "Booking Flow",
                        "ar": "معالج الحجز"
                  },
                  "value": "4 Interactive Steps"
            },
            {
                  "label": {
                        "en": "Confirmation Pass",
                        "ar": "تذكرة التأكيد"
                  },
                  "value": "Printable Digital"
            }
      ],
      "highlights": [
            {
                  "en": "Interactive 4-step booking wizard with service selection and staff allocation.",
                  "ar": "معالج حجز تفاعلي من 4 خطوات يشمل اختيار الخدمة والأخصائي والموعد."
            },
            {
                  "en": "Real-time calendar matrix with slot conflict prevention and capacity guards.",
                  "ar": "تقويم تفاعلي ذكي يمنع التعارض المزدوج بين المواعيد ويدير السعة التشغيلية."
            },
            {
                  "en": "Printable digital confirmation pass with verification details and status tracking.",
                  "ar": "توليد تذاكر تأكيد حجز رقمية جاهزة للطباعة مع سجل إدارة ومتابعة الحجوزات."
            }
      ]
},
    {
      "id": "ecommerce-platform",
      "category": "systems",
      "badge": {
            "en": "E-Commerce Storefront",
            "ar": "متجر إلكتروني"
      },
      "title": {
            "en": "Modern Consumer E-Commerce Storefront",
            "ar": "منصة تجارة إلكترونية ومتجر متكامل"
      },
      "tagline": {
            "en": "Bilingual commercial storefront with reactive cart drawer, promo code discounts, and simulated multi-step checkout.",
            "ar": "متجر تجاري متكامل ثنائي اللغة، سلة شراء جانبية تفاعلية، محرك كوبونات خصم، وإتمام طلبات متكامل."
      },
      "description": {
            "en": "A modern consumer e-commerce storefront featuring interactive product browsing, multi-criteria filtering, a reactive sliding cart drawer with live subtotal/tax calculations, a dynamic coupon code discount engine, and simulated checkout flow in full English and Arabic RTL.",
            "ar": "متجر إلكتروني استهلاكي حديث يتيح تصفح المنتجات وفلترتها المتقدمة، سلة مشتريات جانبية تفاعلية تحسب الضرائب والشحن لحظياً، محرك كوبونات خصم مرن، ونظام متكامل لمحاكاة إتمام الطلب باللغتين العربية والإنجليزية."
      },
      "techStack": [
            "JavaScript (ES6+)",
            "Modern CSS Tokens",
            "Reactive Cart Drawer",
            "Promo Code Engine",
            "Arabic RTL"
      ],
      "githubUrl": "https://github.com/reda1472/ecommerce-platform",
      "demoUrl": "https://reda1472.github.io/ecommerce-platform/",
      "metrics": [
            {
                  "label": {
                        "en": "Cart State",
                        "ar": "إدارة السلة"
                  },
                  "value": "Reactive Drawer"
            },
            {
                  "label": {
                        "en": "Coupon Engine",
                        "ar": "محرك الخصومات"
                  },
                  "value": "Dynamic % & Fixed"
            },
            {
                  "label": {
                        "en": "Checkout Flow",
                        "ar": "إتمام الشراء"
                  },
                  "value": "3-Step Wizard"
            }
      ],
      "highlights": [
            {
                  "en": "Reactive sliding cart drawer with real-time subtotal, shipping, and tax math.",
                  "ar": "سلة تسوق جانبية تفاعلية تحسب الإجمالي، الشحن، والضريبة لحظياً."
            },
            {
                  "en": "Promotional discount engine supporting percentage coupons and threshold vouchers.",
                  "ar": "محرك خصومات ترويجي يدعم كوبونات التخفيض المئوية والمبالغ الثابتة."
            },
            {
                  "en": "Comprehensive product filtering by category, price, search, and stock status.",
                  "ar": "تصفية متقدمة للمنتجات حسب الأقسام، الأسعار، وحالة توفر المخزون."
            }
      ]
},
    {
      "id": "warehouse-inventory-system",
      "category": "logistics",
      "badge": {
            "en": "Logistics & Inventory",
            "ar": "المخازن واللوجستيات"
      },
      "title": {
            "en": "Multi-Hub Inventory & Warehouse System",
            "ar": "نظام إدارة المخازن المتعددة وحركات البضائع والباركود"
      },
      "tagline": {
            "en": "Logistics stock management platform with inter-hub transfers, barcode scanning simulator, and location bins.",
            "ar": "نظام لوجستي لإدارة المخازن المتعددة وتنفيذ التحويلات بين الفروع ومحاكي مسح الباركود."
      },
      "description": {
            "en": "An industrial-grade warehouse management system demonstrating stock distribution across 3 physical facilities (Cairo, Alexandria, Giza), real-time inter-hub transfers, inbound/outbound transactions, location bin tracking, and barcode lookup simulations in full English and Arabic RTL.",
            "ar": "نظام إدارة مستودعات متكامل يوضح توزيع المخزون عبر 3 فروع رئيسية (القاهرة، الإسكندرية، الجيزة)، تنفيذ التحويلات البينية بين المخازن، حركات الوارد والمنصرف، وتتبع ممرات وأرفف البضائع ومحاكي الباركود باللغتين العربية والإنجليزية."
      },
      "techStack": [
            "JavaScript (ES6+)",
            "Multi-Hub Logistics",
            "Inter-Hub Transfer Engine",
            "Barcode Simulator",
            "Arabic RTL"
      ],
      "githubUrl": "https://github.com/reda1472/warehouse-inventory-system",
      "demoUrl": "https://reda1472.github.io/warehouse-inventory-system/",
      "metrics": [
            {
                  "label": {
                        "en": "Storage Network",
                        "ar": "شبكة المخازن"
                  },
                  "value": "3 Hub Facilities"
            },
            {
                  "label": {
                        "en": "Stock Transfers",
                        "ar": "التحويلات البينية"
                  },
                  "value": "Multi-Hub Sync"
            },
            {
                  "label": {
                        "en": "Barcode Lookup",
                        "ar": "مسح الباركود"
                  },
                  "value": "Code 128 Engine"
            }
      ],
      "highlights": [
            {
                  "en": "Multi-facility inventory tracking across Cairo Central, Alexandria Depot, and Giza Facility.",
                  "ar": "تتبع المخزون اللوجستي عبر 3 مستودعات (القاهرة، الإسكندرية، الجيزة)."
            },
            {
                  "en": "Inter-hub transfer engine with real-time stock balances and transaction ledger.",
                  "ar": "محرك تحويل بيني للبضائع مع تحديث فوري للأرصدة وسجل الحركات اللوجستية."
            },
            {
                  "en": "Interactive barcode scanner simulator with Code 128 rendering and bin locations.",
                  "ar": "محاكي مسح الباركود (Code 128) وتحديد مواقع وتوزيع الأرفف والممرات."
            }
      ]
},
    {
      "id": "invoice-expense-management",
      "category": "finance",
      "badge": {
            "en": "Finance & Accounting",
            "ar": "الأنظمة المالية"
      },
      "title": {
            "en": "Financial Invoicing, Expense & P&L System",
            "ar": "منصة الفواتير التجارية وإدارة المصروفات وتقارير P&L"
      },
      "tagline": {
            "en": "Bilingual financial management suite with dynamic tax invoices, overhead expense tracking, and real-time profit margins.",
            "ar": "منظومة مالية متكاملة لإنشاء الفواتير الضريبية وتتبع المصروفات التشغيلية وحساب هوامش الأرباح."
      },
      "description": {
            "en": "An enterprise financial ledger showcasing dynamic commercial invoice generation, VAT calculations, printable A4 tax invoice formatting, expense categorisation, and instant Profit & Loss (P&L) statements in full English and Arabic RTL.",
            "ar": "نظام مالي تجاري متكامل يوضح إصدار الفواتير الضريبية وحساب القيمة المضافة، نموذج الفاتورة القابل للطباعة، تصنيف المصروفات التشغيلية، وحساب قائمة الأرباح والخسائر الفورية باللغتين العربية والإنجليزية."
      },
      "techStack": [
            "JavaScript (ES6+)",
            "Financial Calculation Engine",
            "Tax & VAT Logic",
            "Printable Invoicing",
            "Arabic RTL"
      ],
      "githubUrl": "https://github.com/reda1472/invoice-expense-management",
      "demoUrl": "https://reda1472.github.io/invoice-expense-management/",
      "metrics": [
            {
                  "label": {
                        "en": "Tax Format",
                        "ar": "صيغة الفاتورة"
                  },
                  "value": "A4 Official Print"
            },
            {
                  "label": {
                        "en": "Tax Logic",
                        "ar": "حساب الضريبة"
                  },
                  "value": "Dynamic VAT %"
            },
            {
                  "label": {
                        "en": "Financial Health",
                        "ar": "المؤشر المالي"
                  },
                  "value": "Real-Time P&L"
            }
      ],
      "highlights": [
            {
                  "en": "Commercial tax invoice builder with dynamic line items and customizable VAT rates.",
                  "ar": "منظومة فواتير تجارية ذكية مع بنود ديناميكية وحساب تلقائي لضريبة القيمة المضافة."
            },
            {
                  "en": "Printable A4 tax invoice formatting with invoice number generator and client records.",
                  "ar": "نموذج فاتورة ضريبية رسمي متوافق مع مقاس A4 قابل للطباعة والحفظ."
            },
            {
                  "en": "Operating expense classifier and real-time Profit & Loss (P&L) income statement.",
                  "ar": "تصنيف المصروفات التشغيلية وحساب فوري لقوائم الأرباح والخسائر وهامش الربح."
            }
      ]
},
    {
      "id": "arabic-rtl-components",
      "category": "tools",
      "badge": {
            "en": "Open Source UI",
            "ar": "مفتوح المصدر"
      },
      "title": {
            "en": "Sanad UI: Arabic RTL Component Library",
            "ar": "مكتبة مكونات سند (Sanad UI) لواجهات الويب العربية RTL"
      },
      "tagline": {
            "en": "Production-ready, zero-dependency Arabic RTL design system engineered with CSS Logical Properties.",
            "ar": "مكتبة تصميم ومكونات ويب عربية نقية مفتوحة المصدر بدون أي حزم خارجية مبنية بخصائص CSS المنطقية."
      },
      "description": {
            "en": "An open-source Arabic RTL UI component library providing buttons, form controls, modals, badges, data tables, and alerts. Engineered entirely with CSS Logical Properties for zero-glitch bidirectional (RTL & LTR) web applications and instant CDN integration.",
            "ar": "مكتبة مكونات ويب عربية مفتوحة المصدر توفر أزراراً ونماذج إدخال ونوافذ منبثقة وجداول بيانات وتنبيهات. تم بناؤها بالكامل بخصائص CSS المنطقية لضمان التوافق السلس بين الاتجاهين العربي والإنجليزي والتضمين المباشر عبر الـ CDN."
      },
      "techStack": [
            "CSS Logical Properties",
            "Vanilla JavaScript",
            "Design Systems",
            "Arabic Typography (Cairo)",
            "Open Source"
      ],
      "githubUrl": "https://github.com/reda1472/arabic-rtl-components",
      "demoUrl": "https://reda1472.github.io/arabic-rtl-components/",
      "metrics": [
            {
                  "label": {
                        "en": "Runtime Bloat",
                        "ar": "الاعتماديات"
                  },
                  "value": "0 External Pkgs"
            },
            {
                  "label": {
                        "en": "Components",
                        "ar": "مكونات معيارية"
                  },
                  "value": "8+ Ready Widgets"
            },
            {
                  "label": {
                        "en": "Architecture",
                        "ar": "المعمارية"
                  },
                  "value": "Pure CSS Logical"
            }
      ],
      "highlights": [
            {
                  "en": "Engineered exclusively with CSS Logical Properties for zero-glitch bidirectional apps.",
                  "ar": "مبنية بالكامل بخصائص CSS المنطقية لضمان عمل الواجهات العربية والإنجليزية بسلاسة."
            },
            {
                  "en": "Interactive documentation playground with live RTL/LTR and dark/light toggles.",
                  "ar": "بيئة توثيق تفاعلية لمعاينة وتجربة المكونات مع زر لنسخ الأكواد بضغطة واحدة."
            },
            {
                  "en": "Zero external dependencies, accessible keyboard navigation, and Cairo font rhythm.",
                  "ar": "خفيفة الوزن، متوافقة مع معايير الوصول، ومضبوطة وفق إيقاع خط Cairo العربي الأصيل."
            }
      ]
},
    {
      "id": "python-automation-reporter",
      "category": "tools",
      "badge": {
            "en": "Python CLI & Web",
            "ar": "أداة بايثون وويب"
      },
      "title": {
            "en": "PyReport Auto: Data Analytics & Report Generator",
            "ar": "أداة بايثون لمعالجة البيانات والإحصاء وتوليد التقارير"
      },
      "tagline": {
            "en": "Production-grade Python automation CLI and web app for processing commercial datasets and generating standalone executive reports.",
            "ar": "أداة بايثون برمجية متقدمة وواجهة ويب لمعالجة ملفات البيانات الضخمة وحساب الإحصائيات وتوليد التقارير التنفيذية."
      },
      "description": {
            "en": "A robust Python automation utility and interactive web dashboard engineered for parsing CSV/JSON business records, computing core statistical metrics (mean, median, min, max, standard deviation), and generating standalone HTML, JSON, and text analytical reports with 0 external dependencies.",
            "ar": "أداة برمجية متكاملة بلغة بايثون وواجهة ويب تفاعلية لمعالجة ملفات البيانات التجارية CSV/JSON، وحساب المؤشرات الإحصائية الدقيقة (المتوسط، الوسيط، الانحراف المعياري)، وتوليد تقارير تنفيذية قائمة بذاتها بصيغ HTML وJSON وText بدون أي مكتبات خارجية."
      },
      "techStack": [
            "Python 3 (Standard Library)",
            "Data Processing & CSV",
            "Unit Testing (unittest)",
            "HTML Report Templating",
            "Web Analytics Hub"
      ],
      "githubUrl": "https://github.com/reda1472/python-automation-reporter",
      "demoUrl": "https://reda1472.github.io/python-automation-reporter/",
      "metrics": [
            {
                  "label": {
                        "en": "Dependencies",
                        "ar": "حزم خارجية"
                  },
                  "value": "0 Pkg (Stdlib)"
            },
            {
                  "label": {
                        "en": "Report Formats",
                        "ar": "صيغ التقارير"
                  },
                  "value": "Text, JSON, HTML"
            },
            {
                  "label": {
                        "en": "Unit Tests",
                        "ar": "الاختبارات"
                  },
                  "value": "unittest Suite"
            }
      ],
      "highlights": [
            {
                  "en": "Pure Python CLI core using standard modules (csv, json, math, argparse) with 0 external pip deps.",
                  "ar": "أداة CLI نقية بلغة بايثون بدون أي مكتبات خارجية اعتماداً على حزم بايثون القياسية."
            },
            {
                  "en": "Statistical calculations: mean, median, min, max, variance, and standard deviation.",
                  "ar": "حساب المؤشرات الإحصائية المتقدمة: المتوسط، الوسيط، الانحراف المعياري، والتجميعات."
            },
            {
                  "en": "Interactive web analytics hub providing CSV inspection, terminal preview, and HTML reports.",
                  "ar": "واجهة ويب تفاعلية لمعاينة البيانات وتشغيل محاكي الأوامر وتوليد التقارير التنفيذية."
            }
      ]
},
    {
      "id": "portfolio-website",
      "category": "frontend",
      "badge": {
            "en": "Developer Portfolio",
            "ar": "المعرض الشخصي"
      },
      "title": {
            "en": "Personal Developer Portfolio & Engineering Hub",
            "ar": "المعرض البرمجي الشخصي والسيرة الذاتية التفاعلية"
      },
      "tagline": {
            "en": "Fast, accessible, and bilingual developer portfolio with interactive CV, technical publications, and zero runtime bloat.",
            "ar": "موقع شخصي ومعرض أعمال متكامل ثنائي اللغة، سيرة ذاتية تفاعلية، ومدونة تقنية بدون أي بطء أو حزم زائدة."
      },
      "description": {
            "en": "The central developer portfolio and professional engineering ecosystem for Reda Mohamed Salah. Features full bi-directional (English LTR and Arabic RTL) localization, dark and light theme tokens, an interactive project showcase, a printable curriculum vitae view, and practical engineering guides.",
            "ar": "المعرض البرمجي والواجهة الرئيسية لمنظومة المطور رضا محمد صلاح. يدعم اللغتين العربية والإنجليزية بشكل أصيل (RTL/LTR)، ومزود بوضع ليلي وفاتح، عرض تفاعلي لـ 13 مشروعاً برمجياً، وسيرة ذاتية قابلة للطباعة والحفظ كملف PDF ومقالات برمجية متخصصة."
      },
      "techStack": [
            "Semantic HTML5",
            "Modern CSS Tokens",
            "Vanilla JavaScript (ES6+)",
            "Arabic RTL Design",
            "Web Components"
      ],
      "githubUrl": "https://github.com/reda1472/portfolio-website",
      "demoUrl": "https://reda1472.github.io/portfolio-website/",
      "metrics": [
            {
                  "label": {
                        "en": "Localization",
                        "ar": "الترجمة"
                  },
                  "value": "100% RTL & LTR"
            },
            {
                  "label": {
                        "en": "Runtime Bloat",
                        "ar": "أداء الموقع"
                  },
                  "value": "0ms Framework Lag"
            },
            {
                  "label": {
                        "en": "Live Projects",
                        "ar": "مشاريع حية"
                  },
                  "value": "13 Repositories"
            }
      ],
      "highlights": [
            {
                  "en": "Complete bilingual design with English and native Arabic RTL typography (Cairo & Inter).",
                  "ar": "تصميم متكامل ثنائي اللغة يدعم العربية والإنجليزية بخطي Cairo وInter."
            },
            {
                  "en": "Interactive CV view, filterable projects showcase, and technical blog reader.",
                  "ar": "سيرة ذاتية تفاعلية، معرض مشاريع مفلتر، ومدونة تقنية للمقالات الهندسية."
            },
            {
                  "en": "Custom theme switcher (Dark / Light) and contact modal with clipboard integration.",
                  "ar": "محول ثيمات تفاعلي (داكن وفاتح) ونموذج تواصل ذكي مع نسخ البريد بضغطة واحدة."
            }
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










