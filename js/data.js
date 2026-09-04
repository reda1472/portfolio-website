/**
 * Professional Data Model & Engineering Repository Records
 * Engineer: Reda Mohamed Salah
 * Strictly verified, truthful, and aligned with confirmed technical background.
 */

const SITE_DATA = {
  profile: {
    name: {
      en: "Reda Mohamed Salah",
      ar: "رضا محمد صلاح"
    },
    title: {
      en: "Web Developer & Systems Builder",
      ar: "مطور ويب ومهندس أنظمة رقمية"
    },
    tagline: {
      en: "7 years of hands-on programming practice building practical commercial web applications, business operations dashboards, and high-precision Arabic RTL/LTR interfaces.",
      ar: "7 سنوات من الممارسة البرمجية التطبيقية في بناء أنظمة الويب التجارية، لوحات التحكم التشغيلية، وهندسة الواجهات ثنائية الاتجاه (RTL/LTR) بأعلى درجات الدقة."
    },
    bio: {
      en: "I am a web developer with 7 years of hands-on programming experience based in Cairo, Egypt. I specialize in designing and engineering dependable web applications, custom management dashboards, relational database architectures, and robust bi-directional (LTR/RTL) interfaces. Combining disciplined coding with a sharp eye for visual hierarchy, spatial balance, and presentation structure from my professional background as a Visual Merchandiser at AL NASSER, I build clean, accessible, performance-oriented digital tools with zero runtime bloat.",
      ar: "مطور ويب في القاهرة بخبرة برمجية تطبيقية تمتد لـ 7 سنوات في كتابة الأكواد وبناء الحلول الرقمية المستقلة. متخصص في تطوير أنظمة الويب التجارية، لوحات التحكم الإدارية، وتصميم قواعد البيانات العلائقية والواجهات ثنائية الاتجاه (RTL/LTR). أدمج بين الممارسة البرمجية المنضبطة والاهتمام الدقيق بالبنية البصرية والتنسيق من واقع خلفيتي المهنية كمنسق عروض بصرية بشركة النصر، لتقديم برمجيات تجارية عالية الكفاءة والموثوقية."
    },
    location: {
      en: "Cairo, Egypt",
      ar: "القاهرة، مصر"
    },
    email: "redamohamed1477@gmail.com",
    linkedin: "https://www.linkedin.com/in/reda-mohamed-a88b96257/",
    github: "https://github.com/reda1472",
    portfolioUrl: "https://reda1472.github.io/portfolio-website/",
    confirmedExperienceYears: 7,
    officialEmployment: {
      role: {
        en: "Visual Merchandiser / Display Coordinator",
        ar: "منسق عروض بصرية وفاترينات"
      },
      company: "AL NASSER (Faisal Al Rasheed Group)",
      location: {
        en: "Egypt (Cairo & Delta Branches)",
        ar: "مصر (فروع القاهرة والدلتا)"
      },
      synergy: {
        en: "Applies spatial planning, category density, color theory, and customer visual navigation directly to digital layouts, UI hierarchies, and system interfaces.",
        ar: "تطبيق قواعد التخطيط المكاني، تناغم الألوان، وكثافة العرض وتوجيه مسار المستخدم مباشرة في بناء واجهات الأنظمة واللوحات الرقمية."
      }
    }
  },

  categories: [
    { id: "all", label: { en: "All Projects (13)", ar: "عرض الكل (13)" }, count: 13 },
    { id: "retail", label: { en: "Retail Tech & VM (4)", ar: "تكنولوجيا المتاجر والعرض البصري (4)" }, count: 4, desc: { en: "Display staging canvases, lighting simulators, branch compliance suites, and merchandising planograms.", ar: "منصات تنسيق المعروضات، محاكيات الإضاءة، أنظمة تدقيق الفروع، وتخطيط البلانوجرام." } },
    { id: "business", label: { en: "Operations & Dashboards (2)", ar: "إدارة الأعمال والتشغيل (2)" }, count: 2, desc: { en: "Commercial operations hubs, normalized relational databases (3NF), and appointment booking platforms.", ar: "لوحات تحكم تشغيلية متكاملة، قواعد بيانات علائقية 3NF، وأنظمة حجز المواعيد." } },
    { id: "crm", label: { en: "CRM & Sales Pipeline (1)", ar: "إدارة العملاء والمبيعات (1)" }, count: 1, desc: { en: "Enterprise sales stage management with visual Kanban tracking and interaction audit logs.", ar: "متابعة مسارات الصفقات بلوحة كانبان التفاعلية وسجلات تدقيق أنشطة التواصل." } },
    { id: "logistics", label: { en: "Logistics & Inventory (1)", ar: "المخازن واللوجستيات (1)" }, count: 1, desc: { en: "Multi-facility inventory tracking, inter-depot transfers, and Code 128 barcode simulation.", ar: "تتبع المخزون عبر منشآت متعددة، تنفيذ التحويلات البينية، ومحاكي الباركود." } },
    { id: "finance", label: { en: "Finance & Billing (1)", ar: "الأنظمة المالية والفواتير (1)" }, count: 1, desc: { en: "Dynamic tax invoicing, VAT calculations, printable A4 layouts, and real-time P&L reporting.", ar: "إصدار الفواتير الضريبية، حساب القيمة المضافة، وقوائم الأرباح والخسائر الفورية." } },
    { id: "tools", label: { en: "Tools & Open Source (2)", ar: "أدوات برمجية ومفتوحة المصدر (2)" }, count: 2, desc: { en: "Production-grade Arabic RTL design system and zero-dependency Python data automation CLI.", ar: "مكتبة واجهات عربية بخصائص CSS المنطقية، وأداة بايثون لمعالجة البيانات والإحصاء." } },
    { id: "ecommerce", label: { en: "E-Commerce (1)", ar: "المتاجر الإلكترونية (1)" }, count: 1, desc: { en: "Consumer storefronts with reactive cart drawer, promotional engines, and checkout wizard.", ar: "متاجر تجزئة بسلة جانبية تفاعلية، محرك كوبونات خصم، ومعالج إتمام الشراء." } },
    { id: "frontend", label: { en: "Portfolio & Docs (1)", ar: "المعرض البرمجي (1)" }, count: 1, desc: { en: "High-performance bilingual developer showcase with verified CV and engineering guides.", ar: "المعرض البرمجي الشخصي والسيرة الذاتية التفاعلية والأوراق الهندسية المتخصصة." } }
  ],

  projects: [
    {
      id: "business-management-dashboard",
      isFeatured: true,
      featuredOrder: 1,
      category: "business",
      badge: { en: "Flagship • Operations", ar: "مشروع رئيسي • إدارة عمليات" },
      title: {
        en: "Commercial Operations Hub",
        ar: "لوحة تحكم إدارية وتشغيلية متكاملة"
      },
      tagline: {
        en: "Commercial management system with 3NF relational MySQL architecture, 3-tier RBAC, POS checkout, and CSV reporting.",
        ar: "منظومة تشغيل تجارية بقواعد بيانات علائقية 3NF MySQL، صلاحيات ثلاثية المستويات RBAC، نقطة بيع، وتصدير التقارير."
      },
      description: {
        en: "A robust commercial operations system engineered to handle inventory tracking, order lifecycles, role-based view restrictions, point-of-sale checkouts, and financial exports using 100% synthetic commercial data.",
        ar: "نظام تشغيلي متكامل يدير حركة المخزون، دورة حياة الطلبات، قيود العرض بحسب الصلاحيات، نقطة بيع فورية (POS)، وتصدير التقارير التحليلية ببيانات تجريبية كاملة."
      },
      problem: {
        en: "Small and medium commercial businesses often struggle with fragmented spreadsheets, lack of role permissions, stock discrepancies during POS checkout, and sluggish reporting tools.",
        ar: "تواجه الأنشطة التجارية تشتت البيانات في جداول إكسيل غير متصلة، غياب صلاحيات المستخدمين، حدوث فروقات في المخزون أثناء البيع، وبطء استخراج التقارير اليومية."
      },
      solution: {
        en: "Engineered a normalized 3NF MySQL database structure with strict integrity constraints, paired with a reactive clientside dashboard supporting role-based UI guards (Admin, Manager, Cashier) and an automated POS stock-decrementing engine.",
        ar: "بناء هيكل قاعدة بيانات MySQL علائقية معيارية (3NF) مع قيود السلامة، وتطوير لوحة تحكم تفاعلية تفرض حواجز الصلاحيات (مدير، مشرف، كاشير) ومحرك نقطة بيع يخصم المخزون آلياً."
      },
      architecture: {
        en: "Normalized 3NF relational database schema (Users, Roles, Products, Categories, Orders, OrderItems, AuditLogs), reactive client-side state store, strict Role-Based Access Control, and dynamic CSV serialization.",
        ar: "مخطط قاعدة بيانات 3NF علائقي (المستخدمون، الأدوار، المنتجات، التصنيفات، الطلبات، بنود الطلبات، سجل التدقيق)، إدارة حالة تفاعلية، وتحكم صارم بالصلاحيات."
      },
      keyFeatures: [
        { en: "Role-Based Access Control (Admin, Manager, Cashier) with strict view guards.", ar: "مصفوفة صلاحيات وظيفية (مدير، مشرف، كاشير) تضمن خصوصية كل شاشة." },
        { en: "Live POS checkout terminal decrementing stock balances in real-time.", ar: "محطة نقطة بيع تفاعلية تخصم الكميات تلقائياً وتصدر إيصالات فورية." },
        { en: "Comprehensive 3NF SQL schema script with foreign keys, indexes, and triggers.", ar: "ملف SQL معياري جاهز للتنفيذ يشتمل على المفاتيح الأجنبية والفهارس وسجلات التدقيق." },
        { en: "One-click CSV data export for accounting analysis and executive reporting.", ar: "تصدير فوري للبيانات بصيغة CSV للتحليل المحاسبي وإعداد التقارير." }
      ],
      techStack: ["JavaScript (ES6+)", "3NF Relational MySQL", "Role-Based Access (RBAC)", "POS Simulation", "CSV Export", "Arabic RTL"],
      githubUrl: "https://github.com/reda1472/business-management-dashboard",
      demoUrl: "https://reda1472.github.io/business-management-dashboard/",
      metrics: [
        { label: { en: "Database Entities", ar: "جداول علائقية" }, "value": "6 Core Tables" },
        { label: { en: "Role Guard Tiers", ar: "مستويات الصلاحيات" }, "value": "3 RBAC Roles" },
        { label: { en: "POS Checkout", ar: "سرعة نقطة البيع" }, "value": "Instant Stock Sync" }
      ],
      highlights: [
        { en: "Normalized 3NF relational schema in pure SQL with foreign keys and audit triggers.", ar: "مخطط قاعدة بيانات علائقي 3NF بمفاتيح أجنبية وقيود سلامة وسجلات تدقيق." },
        { en: "Role-Based Access Control enforcing dynamic UI views based on user permissions.", ar: "نظام صلاحيات متقدم يتحكم ديناميكياً في الواجهات والعمليات المتاحة لكل مستخدم." },
        { en: "Interactive POS terminal reducing stock quantities in real-time with instant receipts.", ar: "نقطة بيع تفاعلية تخصم الكميات وتصدر إيصالات مع تحديث المخزون لحظياً." }
      ]
    },
    {
      id: "crm-sales-pipeline",
      isFeatured: true,
      featuredOrder: 2,
      category: "crm",
      badge: { en: "Flagship • Enterprise CRM", ar: "مشروع رئيسي • إدارة المبيعات" },
      title: {
        en: "Enterprise Sales CRM",
        ar: "منصة إدارة علاقات العملاء وخط سير المبيعات"
      },
      tagline: {
        en: "Interactive CRM platform with Kanban-style sales stages, automated activity audit logging, and conversion analytics.",
        ar: "منصة مبيعات متكاملة بلوحة كانبان تفاعلية لنقل الصفقات وتتبع سجلات التواصل وتحليلات الإغلاق."
      },
      description: {
        en: "An enterprise CRM solution demonstrating interactive sales stages (New Leads, Qualified, Proposal, Negotiation, Closed Won), automated activity audit logging, deal value summaries per column, and conversion analytics in full English and Arabic RTL.",
        ar: "نظام إدارة علاقات عملاء متكامل يوضح مراحل المبيعات التفاعلية عبر لوحة كانبان، التوثيق الآلي لسجلات المتابعة والاتصالات، وحساب القيمة التقديرية ومعدلات الإغلاق باللغتين العربية والإنجليزية."
      },
      problem: {
        en: "Sales teams lose revenue when deal progression is invisible, client interaction history is scattered across inboxes, and pipeline value cannot be aggregated by stage.",
        ar: "تفقد فرق المبيعات فرص الإغلاق نتيجة غياب الرؤية البصرية لمراحل الصفقات وتشتت سجلات التواصل وعدم القدرة على حساب قيمة الصفقات المتوقعة في كل مرحلة."
      },
      solution: {
        en: "Built an interactive Kanban deal pipeline with seamless column transitions, live monetary aggregation per stage, automatic chronologic activity audit logs, and sales win-rate calculations.",
        ar: "تصميم لوحة كانبان تفاعلية لمراحل المبيعات مع تحديث فوري لإجمالي قيمة الصفقات بكل مرحلة، وسجل آلي لتوثيق اتصالات واجتماعات العملاء، ومحرك لحساب نسب الإغلاق."
      },
      architecture: {
        en: "Client-side reactive store modeling Deal entities, Contact records, Stage transition states, activity chronologies, and financial aggregation algorithms.",
        ar: "مخزن حالة تفاعلي يدير كيانات الصفقات وبيانات الاتصال وحالات الانتقال بين الأعمدة وسجلات النشاط الزمنية ومعادلات التجميع المالي."
      },
      keyFeatures: [
        { en: "Interactive 5-stage Kanban board with visual deal lifecycle tracking.", ar: "لوحة كانبان تفاعلية بخمس مراحل بيعية مع تتبع مسار الصفقات." },
        { en: "Automated activity feed recording calls, notes, and stage transitions with timestamps.", ar: "شريط أنشطة آلي يوثق المكالمات والملاحظات وتغييرات المراحل بالوقت والتاريخ." },
        { en: "Real-time pipeline valuation and win-rate percentage metrics.", ar: "حساب فوري لقيمة الصفقات الإجمالية ومعدلات نجاح إغلاق المبيعات." },
        { en: "Full bilingual support with natural Arabic RTL typography and optical balance.", ar: "دعم كامل للغتين مع توجيه بصري متقن للواجهة العربية (RTL)." }
      ],
      techStack: ["JavaScript (ES6+)", "Visual Kanban Board", "Reactive CRM Store", "Activity Audit Log", "Arabic RTL"],
      githubUrl: "https://github.com/reda1472/crm-sales-pipeline",
      demoUrl: "https://reda1472.github.io/crm-sales-pipeline/",
      metrics: [
        { label: { en: "Pipeline Stages", ar: "مراحل المبيعات" }, "value": "5 Kanban Stages" },
        { label: { en: "Activity Feed", ar: "سجل الأنشطة" }, "value": "Real-Time Audit" },
        { label: { en: "Win Rate Math", ar: "معدل الإغلاق" }, "value": "Live Analytics" }
      ],
      highlights: [
        { en: "Interactive visual Kanban board with drag-and-drop style deal stage transitions.", ar: "لوحة كانبان تفاعلية لنقل الصفقات عبر مراحل البيع المختلفة بسلاسة." },
        { en: "Automated activity audit log recording deal stage shifts, timestamps, and notes.", ar: "توثيق آلي لسجل الأنشطة وحركات الصفقات مع توقيتاتها الدقيقة وملاحظاتها." },
        { en: "Real-time deal volume and pipeline conversion metrics in English and Arabic RTL.", "ar: "حساب فوري لقيمة الصفقات ومعدلات التحويل باللغتين العربية والإنجليزية." }
      ]
    },
    {
      id: "warehouse-inventory-system",
      isFeatured: true,
      featuredOrder: 3,
      category: "logistics",
      badge: { en: "Flagship • Logistics", ar: "مشروع رئيسي • المخازن واللوجستيات" },
      title: {
        en: "Multi-Hub Inventory Platform",
        ar: "نظام إدارة المخازن المتعددة وحركات البضائع والباركود"
      },
      tagline: {
        en: "Multi-facility inventory platform with inter-hub stock transfers, location bin coordinates, and Code 128 barcode simulation.",
        ar: "نظام لوجستي لإدارة المخازن عبر منشآت متعددة، تنفيذ التحويلات البينية، وتتبع مواقع الأرفف ومسح الباركود."
      },
      description: {
        en: "An industrial-grade warehouse management system demonstrating stock distribution across 3 physical facilities (Cairo, Alexandria, Giza), real-time inter-hub transfers, inbound/outbound transactions, location bin tracking, and barcode lookup simulations in full English and Arabic RTL.",
        "ar": "نظام إدارة مستودعات متكامل يوضح توزيع المخزون عبر 3 فروع رئيسية (القاهرة، الإسكندرية، الجيزة)، تنفيذ التحويلات البينية بين المخازن، حركات الوارد والمنصرف، وتتبع ممرات وأرفف البضائع ومحاكي الباركود باللغتين العربية والإنجليزية."
      },
      problem: {
        en: "Multi-branch retail networks experience stock imbalances, lost items during transit between depots, and inventory reconciliation delays due to lack of bin-level tracking.",
        ar: "تعاني شبكات التجزئة متعددة الفروع من اختلال توازن المخزون وفقدان السلع أثناء النقل الداخلي وصعوبة الجرد بسبب غياب تتبع مواقع الأرفف والممرات."
      },
      solution: {
        en: "Engineered a unified multi-facility inventory ledger managing stock across 3 regional depots, supporting verified inter-depot transfers, location coordinates (Aisle-Shelf-Bin), and an interactive Code 128 barcode scanner simulator.",
        ar: "تطوير نظام موحد لإدارة 3 مستودعات إقليمية يدير عمليات التحويل الداخلي المؤكدة، وتحديد إحداثيات التخزين الدقيقة (ممر-رف-صندوق) ومحاكي مسح الباركود Code 128."
      },
      architecture: {
        en: "Multi-hub entity model with Facility segregation, Inventory ledger balance tracking, SKU indexing, Location bin matrix, and simulated Code 128 optical rendering.",
        ar: "معمارية متعددة المستودعات تفصل أرصدة المنشآت وتتبع حركات البضائع وفهرسة الأكواد وتحديد مصفوفة مواقع التخزين ورسم الباركود بصرياً."
      },
      keyFeatures: [
        { en: "Multi-facility stock tracking across Cairo Central, Alexandria Depot, and Giza Facility.", ar: "تتبع المخزون اللوجستي عبر 3 مستودعات (القاهرة، الإسكندرية، الجيزة)." },
        { en: "Inter-hub transfer workflow verifying stock decrement in source and increment in destination.", ar: "مسار تحويل بيني مؤكد يخصم من المخزن المصدر ويضيف للمخزن المستلم بدقة." },
        { en: "Location bin mapping (Aisle-Rack-Shelf) for rapid physical warehouse picking.", ar: "تحديد دقيق لمواقع التخزين لتسهيل وتوجيه عمليات الجمع والترتيب بالمستودع." },
        { en: "Code 128 barcode generator and instant search lookup simulation.", ar: "توليد أكواد باركود Code 128 والبحث الفوري عن المنتجات بالمحاكي." }
      ],
      techStack: ["JavaScript (ES6+)", "Multi-Hub Logistics", "Inter-Hub Transfer Engine", "Barcode Simulator", "Arabic RTL"],
      githubUrl: "https://github.com/reda1472/warehouse-inventory-system",
      demoUrl: "https://reda1472.github.io/warehouse-inventory-system/",
      metrics: [
        { label: { en: "Depot Network", ar: "شبكة المستودعات" }, "value": "3 Regional Hubs" },
        { label: { en: "Stock Balancing", ar: "التحويلات البينية" }, "value": "Zero Discrepancy" },
        { label: { en: "Optical Lookup", ar: "مسح الباركود" }, "value": "Code 128 Engine" }
      ],
      highlights: [
        { en: "Multi-facility inventory tracking across Cairo Central, Alexandria Depot, and Giza Facility.", ar: "تتبع المخزون اللوجستي عبر 3 مستودعات (القاهرة، الإسكندرية، الجيزة)." },
        { en: "Inter-hub transfer engine with real-time stock balances and transaction ledger.", ar: "محرك تحويل بيني للبضائع مع تحديث فوري للأرصدة وسجل الحركات اللوجستية." },
        { en: "Interactive barcode scanner simulator with Code 128 rendering and bin locations.", ar: "محاكي مسح الباركود (Code 128) وتحديد مواقع وتوزيع الأرفف والممرات." }
      ]
    },
    {
      id: "invoice-expense-management",
      isFeatured: true,
      featuredOrder: 4,
      category: "finance",
      badge: { en: "Flagship • Finance", ar: "مشروع رئيسي • الأنظمة المالية" },
      title: {
        en: "Commercial Ledger & Invoicing",
        ar: "منصة الفواتير التجارية وإدارة المصروفات وتقارير P&L"
      },
      tagline: {
        en: "Commercial invoicing and expense management suite with configurable VAT calculations, printable A4 tax receipts, and real-time P&L reporting.",
        ar: "منظومة مالية متكاملة لإنشاء الفواتير الضريبية وتتبع المصروفات التشغيلية واستخراج قوائم الأرباح والخسائر الفورية."
      },
      description: {
        en: "An enterprise financial ledger showcasing dynamic commercial invoice generation, VAT calculations, printable A4 tax invoice formatting, expense categorisation, and instant Profit & Loss (P&L) statements in full English and Arabic RTL.",
        "ar": "نظام مالي تجاري متكامل يوضح إصدار الفواتير الضريبية وحساب القيمة المضافة، نموذج الفاتورة القابل للطباعة، تصنيف المصروفات التشغيلية، وحساب قائمة الأرباح والخسائر الفورية باللغتين العربية والإنجليزية."
      },
      problem: {
        en: "Businesses frequently struggle with generating professional tax-compliant invoices, tracking ad-hoc operational expenses, and understanding true net margins without hiring complex external accounting software.",
        ar: "تجد المنشآت صعوبة في توليد فواتير ضريبية رسمية متوافقة، وحصر المصروفات النثرية والتشغيلية، واستبيان صافي الربح الفعلي دون تكبد تكاليف برامج محاسبية معقدة."
      },
      solution: {
        en: "Created a financial ledger with customizable line items, dynamic VAT calculations (0%, 5%, 14%), ready-to-print official A4 invoice templates, categorized overhead tracking, and a real-time Profit & Loss calculation engine.",
        ar: "تطوير منظومة مالية ذكية ببنود متغيرة، احتساب فوري لضريبة القيمة المضافة، تصميم فاتورة A4 رسمي قابل للطباعة، وتبويب المصروفات وحساب قائمة الدخل لحظياً."
      },
      architecture: {
        en: "Financial ledger domain model featuring Invoice entities, LineItem math, Tax logic modules, Expense categorization bins, and an instant Profit & Loss aggregation pipeline.",
        ar: "معمارية مالية دقيقة تدير فواتير المبيعات وبنودها، معادلات حساب الضرائب، تصنيف المصروفات، وتجميع قائمة الأرباح والخسائر الصافية."
      },
      keyFeatures: [
        { en: "Commercial tax invoice builder with dynamic line items and automated tax math.", ar: "منشئ فواتير ضريبية مرن مع بنود متعددة وحساب آلي للضرائب والإجماليات." },
        { en: "Printable official A4 tax invoice layout with professional company header.", ar: "نموذج فاتورة ضريبية رسمي مقاس A4 جاهز للطباعة والتصدير كـ PDF." },
        { en: "Expense classification system (Rent, Salaries, Utilities, Marketing, Logistics).", ar: "تبويب دقيق للمصروفات التشغيلية (إيجارات، رواتب، مرافق، تسويق، نقل)." },
        { en: "Instant Profit & Loss (P&L) statement calculating gross and net operating margins.", ar: "قائمة أرباح وخسائر فورية توضح مجمل وصافي الربح وهامش التشغيل." }
      ],
      techStack: ["JavaScript (ES6+)", "Financial Calculation Engine", "Tax & VAT Logic", "Printable Invoicing", "Arabic RTL"],
      githubUrl: "https://github.com/reda1472/invoice-expense-management",
      demoUrl: "https://reda1472.github.io/invoice-expense-management/",
      metrics: [
        { label: { en: "Invoice Standards", ar: "معيار الفاتورة" }, "value": "A4 Tax Ready" },
        { label: { en: "Tax Precision", ar: "حساب الضريبة" }, "value": "Configurable VAT %" },
        { label: { en: "Financial Insight", ar: "التقرير المالي" }, "value": "Instant P&L Margin" }
      ],
      highlights: [
        { en: "Commercial tax invoice builder with dynamic line items and customizable VAT rates.", ar: "منظومة فواتير تجارية ذكية مع بنود ديناميكية وحساب تلقائي لضريبة القيمة المضافة." },
        { en: "Printable A4 tax invoice formatting with invoice number generator and client records.", ar: "نموذج فاتورة ضريبية رسمي متوافق مع مقاس A4 قابل للطباعة والحفظ." },
        { en: "Operating expense classifier and real-time Profit & Loss (P&L) income statement.", ar: "تصنيف المصروفات التشغيلية وحساب فوري لقوائم الأرباح والخسائر وهامش الربح." }
      ]
    },
    {
      id: "store-window-display-planner",
      isFeatured: true,
      featuredOrder: 5,
      category: "retail",
      badge: { en: "Flagship • Retail Tech", ar: "مشروع رئيسي • واجهات المتاجر" },
      title: {
        en: "Window Planner Pro",
        ar: "نظام تخطيط وتصميم واجهات المتاجر ومحاكاة الإضاءة"
      },
      tagline: {
        en: "Storefront window staging platform with simulated glass reflections, photometric Kelvin lighting (2700K-5500K), dynamic BOM cost ledger, and CAD-ready blueprints.",
        ar: "منصة هندسية لتخطيط فاترينات المتاجر ومحاكاة الإضاءة بدرجات كلفن وانعكاسات الزجاج وحساب جدول تكاليف المواد (BOM)."
      },
      description: {
        en: "Architectural visual merchandising tool for designing retail window displays. Features Kelvin color temperature adjustments (2700K-5500K), dynamic spotlight cones, seasonal backdrop arches, live Bill of Materials (BOM) cost ledger, and printable blueprints.",
        ar: "أداة هندسية لتصميم فاترينات وواجهات المتاجر الخارجية، تدعم محاكاة درجات حرارة الإضاءة (كلفن)، وتركيب الديكورات الموسمية، وحساب جدول تكاليف المواد (BOM)، وطباعة المخطط الإنشائي."
      },
      problem: {
        en: "Retail store windows are designed on paper or ad-hoc in stores, leading to costly fixture fabrication errors, mismatched lighting temperatures, and unapproved budget overruns across branch networks.",
        ar: "يتم تخطيط فاترينات المتاجر ورقياً أو ارتجالياً بالفروع، مما يؤدي لأخطاء في تصنيع الديكورات، وتفاوت درجات حرارة الإضاءة، وتجاوز الميزانيات المعتمدة للمواد."
      },
      solution: {
        en: "Developed a virtual window staging canvas with adjustable color temperatures (2700K Warm to 5500K Cool White), spotlight intensity cones, glass reflection overlays, real-time Bill of Materials costing, and printable execution blueprints.",
        ar: "بناء منصة محاكاة بصرية لفاترينات العرض مع التحكم في حرارة الإضاءة (2700K دافئ إلى 5500K أبيض)، وتوجيه مخاريط السبوت لايت، وحساب فوري لتكلفة الخامات وطباعة المخطط الهندسي."
      },
      architecture: {
        en: "CSS 3D perspective stage model, Photometric color temperature interpolation algorithm (Kelvin to RGB), real-time Bill of Materials cost aggregator, and printable architectural blueprint export.",
        ar: "نموذج فاترينة ثلاثي الأبعاد بخصائص CSS، خوارزمية محاكاة درجات حرارة الإضاءة (تحويل كلفن إلى ألوان RGB)، وحاسبة تكاليف المواد والمخططات الهندسية."
      },
      keyFeatures: [
        { en: "3D perspective storefront staging box with simulated glass reflection and depth.", ar: "منصة فاترينة ثلاثية الأبعاد تحاكي انعكاسات الزجاج والعمق البصري للمتجر." },
        { en: "Photometric lighting temperature control across 2700K Warm White to 5500K Cool Daylight.", ar: "محاكي إضاءة فوتومتري دقيق من 2700K دافئ إلى 5500K نهار بارد." },
        { en: "Real-time Bill of Materials (BOM) ledger tallying fixture and prop costs.", ar: "جدول تكاليف تفاعلي (BOM) يحسب أسعار الخامات والمجسمات لحظياً." },
        { en: "Printable technical blueprint with exact dimensional guidelines for carpenters and electricians.", ar: "مخطط إنشائي قابل للطباعة يتضمن المقاسات وتوزيع الإضاءة للفرق الفنية." }
      ],
      techStack: ["JavaScript (ES6+)", "Photometric Lighting Engine", "Storefront Facade Grid", "BOM Cost Calculator", "Bilingual RTL"],
      githubUrl: "https://github.com/reda1472/store-window-display-planner",
      demoUrl: "https://reda1472.github.io/store-window-display-planner/",
      metrics: [
        { label: { en: "Lighting Spectrum", ar: "نطاق الإضاءة" }, "value": "2700K - 5500K" },
        { label: { en: "Cost Estimator", ar: "حساب التكاليف" }, "value": "Live BOM Ledger" },
        { label: { en: "Execution Plan", ar: "مخطط التنفيذ" }, "value": "CAD Blueprint" }
      ],
      highlights: [
        { en: "3D window facade staging box with simulated glass reflections and seasonal backdrops.", ar: "منصة هندسية لتصميم فاترينات المتاجر مع انعكاسات الزجاج والديكورات الموسمية." },
        { en: "Photometric lighting simulator for color temperature (Kelvin) and spotlight beam intensity.", ar: "محاكي إضاءة متقدم لدرجات حرارة الألوان وتركيز إضاءة السبوت لايت." },
        { en: "Dynamic Bill of Materials (BOM) cost estimator and printable construction blueprints.", ar: "حساب فوري لتكلفة خامات ومواد العرض وطباعة المخططات الهندسية للفاترينة." }
      ]
    },
    {
      id: "arabic-rtl-components",
      isFeatured: true,
      featuredOrder: 6,
      category: "tools",
      badge: { en: "Flagship • Open Source", ar: "مشروع رئيسي • مفتوح المصدر" },
      title: {
        en: "Sanad UI: Arabic RTL Component Library",
        ar: "مكتبة سند (Sanad UI) لمكونات الويب العربية RTL"
      },
      tagline: {
        en: "Production-ready, zero-dependency Arabic RTL UI design system engineered with CSS Logical Properties and interactive playground.",
        ar: "مكتبة مكونات ويب عربية نقية مفتوحة المصدر بدون أي حزم خارجية مبنية بخصائص CSS المنطقية وتدعم التضمين الفوري."
      },
      description: {
        en: "An open-source Arabic RTL UI component library providing buttons, form controls, modals, badges, data tables, and alerts. Engineered entirely with CSS Logical Properties for zero-glitch bidirectional (RTL & LTR) web applications and instant CDN integration.",
        ar: "مكتبة مكونات ويب عربية مفتوحة المصدر توفر أزراراً ونماذج إدخال ونوافذ منبثقة وجداول بيانات وتنبيهات. تم بناؤها بالكامل بخصائص CSS المنطقية لضمان التوافق السلس بين الاتجاهين العربي والإنجليزي والتضمين المباشر عبر الـ CDN."
      },
      problem: {
        en: "Most international web component frameworks treat Arabic Right-to-Left (RTL) support as a superficial afterthought, causing broken margins, misaligned icons, inverted text rhythms, and reliance on heavy override stylesheets.",
        ar: "تتعامل معظم مكتبات الواجهات العالمية مع دعم اللغة العربية (RTL) كإجراء شكلي لاحق، مما يسبب تشوه الهوامش وانقلاب الأيقونات وخلل الإيقاع الطباعي والاعتماد على ملفات تنسيق ثقيلة."
      },
      solution: {
        en: "Architected a zero-dependency design system built exclusively on CSS Logical Properties (margin-inline, inset-inline, padding-inline), optical typography tuning for Cairo font, and an interactive documentation playground with one-click code copy.",
        ar: "بناء نظام تصميم متكامل يعتمد كلياً على خصائص CSS المنطقية مع ضبط النسب البصرية لخط Cairo العربي وبيئة توثيق تفاعلية لنسخ الأكواد بضغطة زر."
      },
      architecture: {
        en: "CSS Custom Properties token hierarchy (Colors, Spacing, Elevation, Typography), CSS Logical Properties layout system, accessible ARIA attributes, and zero external npm/pip dependencies.",
        ar: "شجرة متغيرات CSS منظمة (ألوان، مسافات، ظلال، طباعة)، معمارية تخطيط منطقية، وتوافق كامل مع معايير الوصول (a11y) بدون أي حزم خارجية."
      },
      keyFeatures: [
        { en: "Engineered exclusively with CSS Logical Properties for seamless bidirectional flipping.", ar: "مبنية بخصائص CSS المنطقية لعكس الاتجاه العربي والإنجليزي تلقائياً بسلاسة." },
        { en: "Comprehensive suite: Buttons, Form Controls, Modals, Badges, Data Tables, and Alerts.", ar: "حزمة متكاملة: أزرار، حقول إدخال، نوافذ منبثقة، شارات، جداول بيانات، وتنبيهات." },
        { en: "Interactive documentation playground with live RTL/LTR and Dark/Light toggles.", ar: "بيئة توثيق حية لتجربة المكونات وتحويل الاتجاه والثيم لحظياً." },
        { en: "Zero external dependencies: ultra-lightweight and immediately CDN ready.", ar: "خفيفة الوزن تماماً وصفر اعتمادات خارجية وجاهزة للتضمين الفوري." }
      ],
      techStack: ["CSS Logical Properties", "Vanilla JavaScript", "Design Systems", "Arabic Typography (Cairo)", "Open Source"],
      githubUrl: "https://github.com/reda1472/arabic-rtl-components",
      demoUrl: "https://reda1472.github.io/arabic-rtl-components/",
      metrics: [
        { label: { en: "Runtime Overhead", ar: "الاعتماديات" }, "value": "0 External Pkgs" },
        { label: { en: "Component Library", ar: "المكونات الجاهزة" }, "value": "8+ Production UI" },
        { label: { en: "Architecture Type", ar: "نوع المعمارية" }, "value": "Pure CSS Logical" }
      ],
      highlights: [
        { en: "Engineered exclusively with CSS Logical Properties for zero-glitch bidirectional apps.", ar: "مبنية بالكامل بخصائص CSS المنطقية لضمان عمل الواجهات العربية والإنجليزية بسلاسة." },
        { en: "Interactive documentation playground with live RTL/LTR and dark/light toggles.", ar: "بيئة توثيق تفاعلية لمعاينة وتجربة المكونات مع زر لنسخ الأكواد بضغطة واحدة." },
        { en: "Zero external dependencies, accessible keyboard navigation, and Cairo font rhythm.", ar: "خفيفة الوزن، متوافقة مع معايير الوصول، ومضبوطة وفق إيقاع خط Cairo العربي الأصيل." }
      ]
    },
    {
      id: "fashion-mannequin-stylist",
      isFeatured: false,
      category: "retail",
      badge: { en: "Retail & Fashion Tech", ar: "ريتيل وعرض بصري" },
      title: {
        en: "Mannequin Studio Pro",
        ar: "أستوديو تنسيق مانيكانات المتاجر وتوزيع العرض البصري"
      },
      tagline: {
        en: "Interactive multi-mannequin staging canvas with color harmony scoring and branch SOP guideline generation.",
        ar: "منصة ويب تفاعلية لتنسيق منصات المانيكانات وفحص تناغم الألوان واستخراج دليل التنسيق التشغيلي للفروع."
      },
      description: {
        en: "A domain-driven visual merchandising application built for store display coordinators. Features 3-mannequin and 5-mannequin podium staging, dynamic outfit layering (outerwear, tops, bottoms, accessories), color theory balance evaluation, and printable branch SOP sheets.",
        ar: "تطبيق متخصص في العرض البصري وهندسة المتاجر، يتيح تنسيق منصات المانيكانات المتعددة، وتركيب طبقات الملابس، وحساب مؤشر تناغم الألوان، وتوليد دليل التشغيل الموحد (SOP) لفروع المتاجر."
      },
      problem: {
        en: "Store coordinators spend hours styling physical mannequins only to discover clashing color palettes or lack of stock, causing delays in seasonal campaign rollouts across retail branches.",
        ar: "يستغرق منسقو العرض ساعات لتنسيق المانيكانات في الفروع ليكتشفوا لاحقاً تعارض الألوان أو نقص بضائع الأطقم، مما يعطل إطلاق الحملات الموسمية في الوقت المحدد."
      },
      solution: {
        en: "Engineered a virtual podium staging canvas supporting Single, Trio, and 5-mannequin layouts, multi-layer garment stacking, an algorithmic Color Harmony scoring engine, and printable branch execution SOPs.",
        ar: "بناء أستوديو رقمي لمنصات العرض الفردية والثلاثية والخماسية مع تركيب طبقات الملابس وحساب مؤشر التناسق اللوني وتوليد دليل تشغيل الفروع."
      },
      architecture: {
        en: "Multi-mannequin stage renderer, Layered z-index outfit composition model, Color balance evaluator (Complementary/Analogous theory), and printable SOP document generator.",
        ar: "محرك رسم منصات العرض، نموذج تركيب طبقات الملابس، خوارزمية قياس تناغم الألوان، ونظام توليد دليل التشغيل الموحد للفروع."
      },
      keyFeatures: [
        { en: "Interactive multi-mannequin staging canvas (Single, Trio, and 5-mannequin groups).", ar: "أستوديو تفاعلي لتنسيق منصات المانيكانات (فردي، ثلاثي، وخماسي)." },
        { en: "Layered garment outfitting engine across Menswear, Womenswear, and Kidswear.", ar: "محرك تركيب طبقات الملابس للأقسام الرجالي والحريمي والأطفال." },
        { en: "Algorithmic Color Harmony score validator assessing palette synergy.", ar: "خوارزمية حساب مؤشر تناغم الألوان لتقييم التناسق البصري للأطقم." },
        { en: "Automated branch SOP guideline sheet generation for retail store teams.", ar: "توليد آلي لدليل التنسيق القياسي القابل للطباعة لفرق العمل بالفروع." }
      ],
      techStack: ["JavaScript (ES6+)", "Retail Staging Canvas", "Color Theory Algorithm", "SOP Guideline Generator", "Bilingual RTL"],
      githubUrl: "https://github.com/reda1472/fashion-mannequin-stylist",
      demoUrl: "https://reda1472.github.io/fashion-mannequin-stylist/",
      metrics: [
        { label: { en: "Podium Staging", ar: "منصات العرض" }, "value": "5-Mannequins" },
        { label: { en: "Color Harmony", ar: "تناغم الألوان" }, "value": "96% Balance" },
        { label: { en: "Branch SOP", ar: "دليل التشغيل" }, "value": "Printable PDF" }
      ],
      highlights: [
        { en: "Interactive multi-mannequin staging canvas (Single, Trio, and 5-mannequin group displays).", ar: "أستوديو تفاعلي لتنسيق منصات المانيكانات (فردي، ثلاثي، ومجموعات 5 مانيكانات)." },
        { en: "Layered garment outfitting engine across Menswear, Womenswear, and Kidswear.", ar: "محرك تركيب طبقات الملابس لأقسام الرجالي، الحريمي، وملابس الأطفال." },
        { en: "Automated branch SOP guideline sheet generation for store execution teams.", ar: "توليد آلي لدليل التنسيق القياسي القابل للطباعة لفرق العمل بالفروع." }
      ]
    },
    {
      id: "branch-vm-audit-system",
      isFeatured: false,
      category: "retail",
      badge: { en: "Retail Operations", ar: "إدارة العمليات" },
      title: {
        en: "Retail VM Auditor",
        ar: "نظام تدقيق وتقييم الامتثال البصري لفروع المتاجر"
      },
      tagline: {
        en: "Store inspection and audit platform across branch networks with weighted compliance scoring and action ticketing.",
        ar: "منصة تدقيق وفحص العرض البصري لفروع المتاجر بحساب أوزان التقييم وإدارة المهام التصحيحية."
      },
      description: {
        en: "Multi-branch store inspection platform covering Cairo, Mansoura, Tanta, and Damanhour locations. Evaluates window displays, entrance tables, wall folding standards, and lighting with real-time Pass/Partial/Fail checklist toggles and printable executive audit reports.",
        ar: "نظام فحص وتقييم الامتثال البصري لشبكة فروع المتاجر (القاهرة، المنصورة، طنطا، دمنهور)، يحلل معايير الواجهات ومداخل المتاجر وتطبيق الملابس والإضاءة مع تقارير تنفيذية شاملة."
      },
      problem: {
        en: "Multi-branch retail chains suffer from inconsistent brand presentation across regional cities, subjective inspection feedback, and zero tracking of corrective action items.",
        ar: "تعاني سلاسل المتاجر من تباين جودة العرض بين فروع المحافظات، واعتماد التفتيش على الآراء الشخصية وغياب متابعة المهام التصحيحية لمديري الفروع."
      },
      solution: {
        en: "Engineered an objective weighted inspection framework (Windows 25%, Entrance 20%, Wall Displays 30%, Lighting 15%, POS 10%) with interactive status toggles, action ticketing, and executive audit reports.",
        ar: "بناء منظومة فحص موضوعية بأوزان معيارية (الواجهات 25%، المدخل 20%، الجدران 30%، الإضاءة 15%، ونقاط البيع 10%) مع إدارة التذاكر التصحيحية والتقارير التنفيذية."
      },
      architecture: {
        en: "Multi-branch store matrix, Weighted scoring algorithm, Interactive status toggle state engine, Action item registry, and printable audit certificate generator.",
        ar: "مصفوفة بيانات الفروع، خوارزمية التقييم المرجح، محرك تبديل حالات التدقيق، وسجل إدارة المهام التصحيحية وطباعة التقارير المعتمدة."
      },
      keyFeatures: [
        { en: "Multi-branch matrix covering Cairo, Mansoura (1,2,3), Tanta, and Damanhour.", ar: "مصفوفة تدقيق شاملة لفروع القاهرة، المنصورة، طنطا، ودمنهور." },
        { en: "Standardized 5-tier weighted compliance formula eliminating subjective bias.", ar: "معادلة تقييم خماسية الأوزان تضمن دقة ونزاهة التفتيش الميداني." },
        { en: "Interactive Pass / Partial / Fail status toggles for every physical checkpoint.", ar: "قائمة فحص تفاعلية بحالات الاجتياز والتنبيه والملاحظات لكل قسم." },
        { en: "Action item ticketing tracking corrective deadline and assigned branch manager.", ar: "نظام تذاكر تصحيحية يربط كل ملاحظة بمدير الفرع مع تحديد مهلة المعالجة." }
      ],
      techStack: ["JavaScript (ES6+)", "Weighted Audit Engine", "Branch Matrix", "Executive Reporting", "Bilingual RTL"],
      githubUrl: "https://github.com/reda1472/branch-vm-audit-system",
      demoUrl: "https://reda1472.github.io/branch-vm-audit-system/",
      metrics: [
        { label: { en: "Branch Network", ar: "شبكة الفروع" }, "value": "5 Key Hubs" },
        { label: { en: "Audit Scoring", ar: "معايير التقييم" }, "value": "5 Weighted Areas" },
        { label: { en: "Executive Report", ar: "تقرير معتمد" }, "value": "Instant Print" }
      ],
      highlights: [
        { en: "Multi-branch store inspection matrix covering Cairo, Mansoura, Tanta, and Damanhour networks.", ar: "مصفوفة فحص وتقييم شاملة لفروع القاهرة، المنصورة (1، 2، 3)، طنطا، ودمنهور." },
        { en: "Weighted scoring algorithm evaluating windows (25%), entrance (20%), and wall fold standards (30%).", ar: "معادلة تقييم مرجحة تحلل الواجهات، مداخل المعارض، وتطبيق وترتيب الملابس بالجدران." },
        { en: "Interactive Pass/Partial/Fail checklist toggles and action item ticketing system.", ar: "قائمة تدقيق تفاعلية بحالات النجاح والتنبيه مع متابعة المهام التصحيحية." }
      ]
    },
    {
      id: "retail-merchandising-platform",
      isFeatured: false,
      category: "retail",
      badge: { en: "Visual Merchandising", ar: "العرض البصري" },
      title: {
        en: "Retail Display Planner",
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
      problem: {
        en: "Retail floor displays often get overcrowded, leading to visual clutter, poor product discovery, and unorganized promotional campaigns across store departments.",
        ar: "تتعرض مساحات العرض داخل المعارض للتكدس البصري، مما يضعف تجربة التسوق ويؤدي لتزاحم المنتجات وغياب التناسق في إطلاق الحملات الترويجية."
      },
      solution: {
        en: "Built an interactive layout builder enforcing capacity thresholds per fixture, integrated with a promotional campaign calendar matrix and visual density alert warnings.",
        ar: "بناء أداة لتنسيق مساحات العرض تفرض حدوداً لسعة كل استاند، مربوطة بتقويم زمني للحملات ونظام تنبيه عند تجاوز الكثافة المثالية."
      },
      architecture: {
        en: "Spatial density validation math, Campaign state machine (Draft, Planned, Live, Expired), Visual calendar matrix, and 100% synthetic retail data generator.",
        ar: "خوارزمية فحص الكثافة المكانية، آلة حالات دورة حياة الحملات، مصفوفة التقويم البصري، ومولد بيانات تجريبية مستقل بالكامل."
      },
      keyFeatures: [
        { en: "Interactive floor layout builder with fixture capacity constraints.", ar: "أداة تفاعلية لتنسيق مساحات العرض مع حدود السعة لكل وحدة عرض." },
        { en: "Visual planogram density auditor alerting against over-merchandising.", ar: "مدقق بلانوجرام للتنبيه الفوري عند تكدس المنتجات على الأرفف." },
        { en: "Seasonal promotional campaign calendar matrix.", ar: "مصفوفة تقويم زمني لجدولة الحملات الموسمية ومتابعتها." },
        { en: "100% generic synthetic data with zero proprietary corporate information.", ar: "بيانات تجريبية وافتراضية 100% بدون أي بيانات تجارية خاصة." }
      ],
      techStack: ["JavaScript", "Modern CSS", "Calendar & Matrix Grid", "Synthetic Data Engine", "RTL Optimized"],
      githubUrl: "https://github.com/reda1472/retail-merchandising-platform",
      demoUrl: "https://reda1472.github.io/retail-merchandising-platform/",
      metrics: [
        { label: { en: "Display Statuses", ar: "حالات العرض" }, "value": "4 Lifecycle States" },
        { label: { en: "Campaign Tracking", ar: "متابعة الحملات" }, "value": "Calendar Matrix" },
        { label: { en: "Data Confidentiality", ar: "سرية البيانات" }, "value": "100% Synthetic" }
      ],
      highlights: [
        { en: "Interactive display layout builder with capacity limits and visual density alerts.", ar: "أداة تفاعلية لتنسيق مساحات العرض مع تنبيهات عند تجاوز سعة العرض المناسبة." },
        { en: "Seasonal campaign calendar linking promotions to display locations.", ar: "تقويم للحملات الموسمية يربط العروض الترويجية بأماكن ونقاط العرض المختلفة." },
        { en: "Completely generic design containing zero proprietary employer data.", ar: "تصميم تجريبي مستقل وخالٍ تماماً من أي بيانات أو شعارات خاصة بالشركات." }
      ]
    },
    {
      id: "booking-appointment-system",
      isFeatured: false,
      category: "business",
      badge: { en: "Booking Platform", ar: "نظام الحجوزات" },
      title: {
        en: "Service Booking Platform",
        ar: "منظومة حجز المواعيد والخدمات وجدولة الاستشارات"
      },
      tagline: {
        en: "Multi-step booking wizard with real-time slot conflict prevention, service catalog, and printable digital passes.",
        ar: "معالج حجز مواعيد متعدد الخطوات مع منع التضارب الزمني، كتالوج الخدمات، وتذاكر رقمية قابلة للطباعة."
      },
      description: {
        en: "A professional service scheduling and appointment management system. Features an interactive 4-step booking wizard, dynamic staff availability matrix, real-time conflict prevention, appointment ledger management, and printable digital confirmation passes in both English and Arabic RTL.",
        ar: "منظومة متكاملة لحجز المواعيد والخدمات المهنية، تتميز بمعالج حجز تفاعلي من 4 خطوات، مصفوفة مواعيد ذكية لمنع التعارض الزمني، وإدارة سجل الحجوزات، مع استخراج تذاكر تأكيد الحجز الرقمية الجاهزة للطباعة."
      },
      problem: {
        en: "Service-based businesses and consultants lose appointments through double-booking errors, messy WhatsApp confirmations, and no verifiable customer booking tickets.",
        ar: "تفقد الأنشطة الخدمية المواعيد بسبب التضارب المزدوج في الحجوزات والاعتماد على التأكيد العشوائي وغياب التذاكر الرقمية الموثقة للعميل."
      },
      solution: {
        en: "Engineered a conflict-proof scheduling engine that locks time slots in real time, guides users through a 4-step wizard, and produces an instant printable digital booking pass.",
        ar: "تطوير محرك حجز ذكي يمنع التعارض الزمني لحظياً، ويوجه العميل عبر معالج تفاعلي من 4 خطوات، ويصدر تذكرة حجز رقمية مؤكدة."
      },
      architecture: {
        en: "Time-slot matrix conflict engine, Staff allocation scheduler, Booking wizard state machine, and printable digital confirmation pass generator.",
        ar: "محرك فض التعارض الزمني، جدول توزيع الأخصائيين، آلة حالات معالج الحجز، ونظام توليد بطاقات تأكيد الحجز الرقمية."
      },
      keyFeatures: [
        { en: "Interactive 4-step wizard: Service selection, Staff choice, Date/Time slot, and Customer details.", ar: "معالج حجز من 4 خطوات: اختيار الخدمة، المختص، الموعد، وتأكيد البيانات." },
        { en: "Conflict-prevention engine disabling already reserved or capacity-exceeded time slots.", ar: "محرك ذكي يغلق المواعيد المحجوزة آلياً لمنع التضارب نهائياً." },
        { en: "Printable digital confirmation pass with verification details.", ar: "تذكرة حجز رقمية مؤكدة قابلة للطباعة وتتضمن بيانات الخدمة والعميل." },
        { en: "Back-office appointment ledger with status filters (Confirmed, Pending, Completed).", ar: "سجل إدارة للمواعيد يتيح للإدارة فلترة ومتابعة الحالات المختلفة." }
      ],
      techStack: ["JavaScript (ES6+)", "Booking Wizard", "Slot Conflict Engine", "Digital Confirmation Pass", "Arabic RTL"],
      githubUrl: "https://github.com/reda1472/booking-appointment-system",
      demoUrl: "https://reda1472.github.io/booking-appointment-system/",
      metrics: [
        { label: { en: "Conflict Guard", ar: "منع التضارب" }, "value": "Zero Overlap" },
        { label: { en: "Booking Flow", ar: "معالج الحجز" }, "value": "4 Interactive Steps" },
        { label: { en: "Confirmation Pass", ar: "تذكرة التأكيد" }, "value": "Printable Digital" }
      ],
      highlights: [
        { en: "Interactive 4-step booking wizard with service selection and staff allocation.", ar: "معالج حجز تفاعلي من 4 خطوات يشمل اختيار الخدمة والأخصائي والموعد." },
        { en: "Real-time calendar matrix with slot conflict prevention and capacity guards.", ar: "تقويم تفاعلي ذكي يمنع التعارض المزدوج بين المواعيد ويدير السعة التشغيلية." },
        { en: "Printable digital confirmation pass with verification details and status tracking.", ar: "توليد تذاكر تأكيد حجز رقمية جاهزة للطباعة مع سجل إدارة ومتابعة الحجوزات." }
      ]
    },
    {
      id: "ecommerce-platform",
      isFeatured: false,
      category: "ecommerce",
      badge: { en: "E-Commerce Storefront", ar: "متجر إلكتروني" },
      title: {
        en: "Consumer E-Commerce Storefront",
        ar: "منصة تجارة إلكترونية ومتجر متكامل"
      },
      tagline: {
        en: "Bilingual commercial storefront with reactive cart drawer, promo code discounts, and simulated multi-step checkout.",
        ar: "متجر تجاري متكامل ثنائي اللغة، سلة شراء جانبية تفاعلية، محرك كوبونات خصم، وإتمام طلبات متكامل."
      },
      description: {
        en: "A modern consumer e-commerce storefront featuring interactive product browsing, multi-criteria filtering, a reactive sliding cart drawer with live subtotal/tax calculations, a dynamic coupon code discount engine, and simulated checkout flow in full English and Arabic RTL.",
        ar: "متجر إلكتروني استهلاكي حديث يتيح تصفح المنتجات وفلترتها المتقدمة، سلة مشتريات جانبية تفاعلية تحسب الضرائب والشحن لحظياً، محرك كوبونات خصم مرن، ونظام متكامل لمحاكاة إتمام الطلب باللغتين العربية والإنجليزية."
      },
      problem: {
        en: "Online stores often suffer from bloated third-party plugins that degrade mobile checkout speeds and introduce cart calculation bugs during promotional coupon campaigns.",
        ar: "تعاني المتاجر الإلكترونية من بطء التحميل بسبب الحزم الزائدة وحدوث أخطاء حسابية في سلة الشراء عند إدخال كوبونات التخفيض المئوية."
      },
      solution: {
        en: "Built a zero-dependency reactive storefront with instant cart drawer updates, dual coupon logic (percentage off and threshold vouchers), and a streamlined 3-step checkout simulation.",
        ar: "تطوير واجهة متجر تفاعلية خفيفة الوزن مع تحديث فوري للسلة، ومحرك كوبونات يدعم الخصومات المئوية والمبالغ الثابتة ومعالج شراء مبسط."
      },
      architecture: {
        en: "Reactive cart state manager, Dynamic coupon validation engine, Multi-attribute product filtering pipeline, and order confirmation simulation.",
        ar: "إدارة تفاعلية لحالة السلة، محرك التحقق من صلاحية الكوبونات، تصفية متقدمة للمنتجات، ومحاكاة دورة إتمام الشراء."
      },
      keyFeatures: [
        { en: "Reactive sliding cart drawer with live subtotal, shipping, and tax recalculation.", ar: "سلة جانبية منزلقة تحسب الإجمالي الفرعي والشحن والضريبة لحظياً." },
        { en: "Promotional coupon engine supporting % discounts and minimum-spend vouchers.", ar: "محرك خصومات يدعم الكوبونات المئوية وقسائم الشراء المشروطة بالحد الأدنى." },
        { en: "Product catalog filtering by department, price spectrum, and stock availability.", ar: "تصفية المنتجات حسب الأقسام ونطاق الأسعار وحالة توفر السلعة بالمخزون." },
        { en: "Streamlined 3-step checkout modal with customer summary and digital order receipt.", ar: "نموذج إتمام شراء من 3 خطوات مع ملخص الطلب وإيصال رقمي فوري." }
      ],
      techStack: ["JavaScript (ES6+)", "Modern CSS Tokens", "Reactive Cart Drawer", "Promo Code Engine", "Arabic RTL"],
      githubUrl: "https://github.com/reda1472/ecommerce-platform",
      demoUrl: "https://reda1472.github.io/ecommerce-platform/",
      metrics: [
        { label: { en: "Cart State", ar: "إدارة السلة" }, "value": "Reactive Drawer" },
        { label: { en: "Coupon Engine", ar: "محرك الخصومات" }, "value": "Dynamic % & Fixed" },
        { label: { en: "Checkout Flow", ar: "إتمام الشراء" }, "value": "3-Step Wizard" }
      ],
      highlights: [
        { en: "Reactive sliding cart drawer with real-time subtotal, shipping, and tax math.", ar: "سلة تسوق جانبية تفاعلية تحسب الإجمالي، الشحن، والضريبة لحظياً." },
        { en: "Promotional discount engine supporting percentage coupons and threshold vouchers.", ar: "محرك خصومات ترويجي يدعم كوبونات التخفيض المئوية والمبالغ الثابتة." },
        { en: "Comprehensive product filtering by category, price, search, and stock status.", ar: "تصفية متقدمة للمنتجات حسب الأقسام، الأسعار، وحالة توفر المخزون." }
      ]
    },
    {
      id: "python-automation-reporter",
      isFeatured: false,
      category: "tools",
      badge: { en: "Python CLI & Web", ar: "أداة بايثون وويب" },
      title: {
        en: "PyReport Auto",
        ar: "أداة بايثون لمعالجة البيانات والإحصاء وتوليد التقارير"
      },
      tagline: {
        en: "Production-grade Python automation CLI and web app for processing commercial datasets and generating standalone executive reports.",
        ar: "أداة بايثون برمجية متقدمة وواجهة ويب لمعالجة ملفات البيانات الضخمة وحساب الإحصائيات وتوليد التقارير التنفيذية."
      },
      description: {
        en: "A robust Python automation utility and interactive web dashboard engineered for parsing CSV/JSON business records, computing core statistical metrics (mean, median, min, max, standard deviation), and generating standalone HTML, JSON, and text analytical reports with 0 external dependencies.",
        ar: "أداة برمجية متكاملة بلغة بايثون وواجهة ويب تفاعلية لمعالجة ملفات البيانات التجارية CSV/JSON، وحساب المؤشرات الإحصائية الدقيقة (المتوسط، الوسيط، الانحراف المعياري)، وتوليد تقارير تنفيذية قائمة بذاتها بصيغ HTML وJSON وText بدون أي مكتبات خارجية."
      },
      problem: {
        en: "Data analysts and managers frequently need to process commercial CSV records and generate clean HTML/JSON reports on servers where installing heavy third-party packages is prohibited.",
        ar: "يحتاج مسؤولو الأنظمة والمحللون لمعالجة ملفات بيانات CSV وتوليد تقارير HTML أنيقة على خوادم لا تسمح بتثبيت مكتبات بايثون الخارجية الضخمة."
      },
      solution: {
        en: "Created a pure Python CLI utility relying strictly on Python 3 standard library modules (csv, json, math, argparse), backed by comprehensive unit tests (`unittest`), generating clean standalone HTML and JSON analytical summaries.",
        ar: "تطوير أداة CLI نقية بلغة بايثون تعتمد كلياً على المكتبة القياسية مع اختبارات برمجية شاملة (unittest) وتوليد تقارير تنفيذية مستقلة."
      },
      architecture: {
        en: "Modular Python CLI package structure, Stream-based CSV parser, Mathematical statistics engine (mean, median, variance, std dev), HTML templating generator, and automated test suite.",
        ar: "بنية حزم بايثون معيارية، معالج تدفق لملفات CSV، محرك العمليات الرياضية والإحصائية، ومولد قوالب HTML مدمج مع حزمة اختبارات كاملة."
      },
      keyFeatures: [
        { en: "100% Python Standard Library implementation with 0 pip dependencies.", ar: "اعتماد كامل على مكتبة بايثون القياسية بدون أي مكتبات خارجية." },
        { en: "Comprehensive statistical calculations: Mean, Median, Min, Max, and Standard Deviation.", ar: "حسابات إحصائية دقيقة تشمل المتوسط والوسيط والانحراف المعياري." },
        { en: "Multiple export formats: Clean Text summary, structured JSON, and styled standalone HTML.", ar: "تصدير التقارير بثلاث صيغ: نصي منسق، JSON مهيكل، وتقرير HTML تنفيذي." },
        { en: "Interactive web analytics hub providing live data table filtering and CLI command runner.", ar: "واجهة ويب تفاعلية لمعاينة البيانات وتشغيل محاكي الأوامر وتوليد التقارير." }
      ],
      techStack: ["Python 3 (Standard Library)", "Data Processing & CSV", "Unit Testing (unittest)", "HTML Report Templating", "Web Analytics Hub"],
      githubUrl: "https://github.com/reda1472/python-automation-reporter",
      demoUrl: "https://reda1472.github.io/python-automation-reporter/",
      metrics: [
        { label: { en: "Dependencies", ar: "حزم خارجية" }, "value": "0 Pkg (Stdlib)" },
        { label: { en: "Report Formats", ar: "صيغ التقارير" }, "value": "Text, JSON, HTML" },
        { label: { en: "Unit Tests", ar: "الاختبارات" }, "value": "unittest Suite" }
      ],
      highlights: [
        { en: "Pure Python CLI core using standard modules (csv, json, math, argparse) with 0 external pip deps.", ar: "أداة CLI نقية بلغة بايثون بدون أي مكتبات خارجية اعتماداً على حزم بايثون القياسية." },
        { en: "Statistical calculations: mean, median, min, max, variance, and standard deviation.", ar: "حساب المؤشرات الإحصائية المتقدمة: المتوسط، الوسيط، الانحراف المعياري، والتجميعات." },
        { en: "Interactive web analytics hub providing CSV inspection, terminal preview, and HTML reports.", ar: "واجهة ويب تفاعلية لمعاينة البيانات وتشغيل محاكي الأوامر وتوليد التقارير التنفيذية." }
      ]
    },
    {
      id: "portfolio-website",
      isFeatured: false,
      category: "frontend",
      badge: { en: "Developer Portfolio", ar: "المعرض الشخصي" },
      title: {
        en: "Engineering Portfolio Hub",
        ar: "المعرض البرمجي الشخصي والسيرة الذاتية التفاعلية"
      },
      tagline: {
        en: "Fast, accessible, and bilingual developer portfolio with interactive CV, technical publications, and zero runtime bloat.",
        ar: "موقع شخصي ومعرض أعمال متكامل ثنائي اللغة، سيرة ذاتية تفاعلية، ومدونة تقنية بدون أي بطء أو حزم زائدة."
      },
      description: {
        en: "The central developer portfolio and professional engineering ecosystem for Reda Mohamed Salah. Features full bi-directional (English LTR and Arabic RTL) localization, dark and light theme tokens, an interactive project showcase, a printable curriculum vitae view, and practical engineering guides.",
        ar: "المعرض البرمجي والواجهة الرئيسية لمنظومة المطور رضا محمد صلاح. يدعم اللغتين العربية والإنجليزية بشكل أصيل (RTL/LTR)، ومزود بوضع ليلي وفاتح، عرض تفاعلي لـ 13 مشروعاً برمجياً، وسيرة ذاتية قابلة للطباعة والحفظ كملف PDF ومقالات برمجية متخصصة."
      },
      problem: {
        en: "Engineers often present portfolios with broken mobile responsiveness, missing project verification links, and bloated frameworks that take seconds to load.",
        ar: "غالباً ما تعاني مواقع المطورين من عدم التجاوب مع الهواتف وغياب روابط التحقق المباشرة من الكود، والاعتماد على أطر عمل ثقيلة تبطئ التصفح."
      },
      solution: {
        en: "Engineered a production-ready portfolio using pure semantic HTML5, modern CSS tokens, and vanilla JavaScript that achieves instant LCP, complete Arabic RTL optical rhythm, and verified GitHub integration.",
        ar: "بناء موقع برمجي نقي فائق السرعة بمعايير HTML5 وCSS الحديثة يدعم العربية والإنجليزية أصلياً ويوفر توثيقاً لكافة المشاريع والخبرات."
      },
      architecture: {
        en: "Vanilla JavaScript modular application pattern, CSS Logical Properties token system, LocalStorage preference state, and dynamic I18N localization engine.",
        ar: "معمارية جافاسكريبت معيارية نقية، نظام متغيرات CSS المنطقية، حفظ تفضيلات المستخدم، ومحرك ترجمة ثنائي اللغة فوري."
      },
      keyFeatures: [
        { en: "100% native Arabic RTL and English LTR layouts with Cairo and Inter typography.", ar: "دعم أصيل للغتين العربية والإنجليزية بخطي Cairo وInter." },
        { en: "Verified Interactive CV section with print-to-PDF formatting.", ar: "سيرة ذاتية تفاعلية معتمدة جاهزة للطباعة المباشرة والتصدير كـ PDF." },
        { en: "Deep case study explorer modal for all 13 production systems.", ar: "نافذة استعراض دراسات الحالة المتعمقة لكافة المشاريع الـ 13." },
        { en: "Sub-300ms load time with zero framework bloat and accessible WCAG contrast.", ar: "سرعة تحميل فائقة في أقل من 300 مللي ثانية وتباين لوني متوافق مع معايير الوصول." }
      ],
      techStack: ["Semantic HTML5", "Modern CSS Tokens", "Vanilla JavaScript (ES6+)", "Arabic RTL Design", "Web Components"],
      githubUrl: "https://github.com/reda1472/portfolio-website",
      demoUrl: "https://reda1472.github.io/portfolio-website/",
      metrics: [
        { label: { en: "Localization", ar: "الترجمة" }, "value": "100% RTL & LTR" },
        { label: { en: "Runtime Bloat", ar: "أداء الموقع" }, "value": "0ms Framework Lag" },
        { label: { en: "Live Systems", ar: "مشاريع حية" }, "value": "13 Repositories" }
      ],
      highlights: [
        { en: "Complete bilingual design with English and native Arabic RTL typography (Cairo & Inter).", ar: "تصميم متكامل ثنائي اللغة يدعم العربية والإنجليزية بخطي Cairo وInter." },
        { en: "Interactive CV view, filterable projects showcase, and technical blog reader.", ar: "سيرة ذاتية تفاعلية، معرض مشاريع مفلتر، ومدونة تقنية للمقالات الهندسية." },
        { en: "Custom theme switcher (Dark / Light) and contact modal with clipboard integration.", ar: "محول ثيمات تفاعلي (داكن وفاتح) ونموذج تواصل ذكي مع نسخ البريد بضغطة واحدة." }
      ]
    }
  ],

  services: [
    {
      icon: "globe",
      title: {
        en: "Custom Commercial Web Systems",
        ar: "أنظمة وتطبيقات الويب التجارية"
      },
      desc: {
        en: "Fast, reliable, and responsive web applications tailored to businesses with clear workflows, data integrity, and high search visibility.",
        ar: "تطوير تطبيقات وأنظمة ويب سريعة وعملية مخصصة للأنشطة التجارية، مع ضبط مسارات العمل وسلامة البيانات وتهيئة الـ SEO."
      }
    },
    {
      icon: "layout",
      title: {
        en: "Bilingual & Arabic RTL Engineering",
        ar: "هندسة الواجهات العربية ثنائية الاتجاه"
      },
      desc: {
        en: "Professional bi-directional web interfaces built with CSS Logical Properties, optical alignment balance, and native Arabic Cairo typography rhythm.",
        ar: "بناء واجهات رقمية متقنة تدعم اللغتين العربية والإنجليزية، مبنية بالكامل بخصائص CSS المنطقية ومضبوطة وفق الخط العربي الأصيل."
      }
    },
    {
      icon: "cpu",
      title: {
        en: "Operations & Admin Dashboards",
        ar: "لوحات تحكم إدارية وتشغيلية"
      },
      desc: {
        en: "Custom operational dashboards for data visualization, Role-Based Access Control (RBAC), inventory tracking, and POS workflows.",
        ar: "تصميم لوحات تحكم متكاملة لإدارة البيانات والطلبات والمخزون، وتحديد الصلاحيات ونقاط البيع وتتبع مؤشرات الأداء."
      }
    },
    {
      icon: "database",
      title: {
        en: "Relational Database Design (3NF MySQL)",
        ar: "تصميم قواعد البيانات العلائقية (MySQL 3NF)"
      },
      desc: {
        en: "Normalized relational schema modeling, foreign key constraints, indexing strategies, and clean data integrity validation.",
        ar: "هيكلة وتصميم قواعد بيانات علائقية منظمة وفق معايير 3NF مع المفاتيح الأجنبية والفهارس وضمان سلامة السجلات والمعاملات."
      }
    },
    {
      icon: "zap",
      title: {
        en: "Retail Technology & Floor Display Systems",
        ar: "حلول تكنولوجيا المتاجر وتنسيق العروض"
      },
      desc: {
        en: "Specialized tools bridging physical visual merchandising with software: lighting simulators, mannequin staging canvases, and audit suites.",
        ar: "برمجيات متخصصة تدمج بين التنسيق البصري الميداني والتقنية: محاكيات الإضاءة، منصات العرض، وأنظمة فحص وتدقيق الفروع."
      }
    },
    {
      icon: "check-circle",
      title: {
        en: "Performance & Code Cleanliness Audits",
        ar: "تحسين الأداء وإزالة الاعتماديات الزائدة"
      },
      desc: {
        en: "Modernizing existing web tools, stripping unnecessary npm/pip bloat, speeding up load times, and ensuring accessibility compliance.",
        ar: "تحديث الأنظمة الحالية، التخلص من المكتبات الزائدة، تسريع زمن التحميل إلى أقصى حد، وضمان التوافق مع معايير الوصول والويب الحديث."
      }
    }
  ],

  articles: [
    {
      id: "mastering-arabic-rtl-layouts",
      date: "August 2026",
      readTime: { en: "7 min read", ar: "قراءة 7 دقائق" },
      title: {
        en: "Mastering Arabic RTL Layouts: Engineering Clean Bi-Directional Web Interfaces",
        ar: "احتراف الواجهات العربية (RTL): هندسة التطبيقات ثنائية الاتجاه بدون أخطاء"
      },
      summary: {
        en: "A comprehensive guide on leveraging CSS Logical Properties, handling optical alignment balance, and managing dual-language web architecture with zero framework overhead.",
        ar: "دليل تطبيقي متكامل حول استخدام خصائص CSS المنطقية، ومراعاة التوازن البصري للخطوط العربية، وبناء معماريات ويب ثنائية الاتجاه خفيفة الوزن."
      },
      tags: ["CSS Logical Properties", "Arabic RTL", "Typography", "Performance"],
      content: {
        en: `<h3>Why CSS Logical Properties Matter</h3><p>Traditionally, developers handled Arabic RTL by creating separate stylesheets or using cumbersome directional classes like <code>.text-left</code> and <code>.text-right</code>. This approach is brittle, hard to maintain, and prone to visual regression.</p><p>By transitioning to <strong>CSS Logical Properties</strong> (such as <code>margin-inline-start</code>, <code>padding-inline-end</code>, and <code>inset-inline</code>), a single CSS declaration cleanly adapts to both English LTR and Arabic RTL directions without duplicating rules.</p><h3>Typography and Optical Balance</h3><p>Arabic typography carries distinct vertical metrics and baseline behaviors compared to Latin typefaces. Combining <strong>Cairo</strong> for Arabic and <strong>Inter</strong> for Latin scripts requires careful optical margin calibration to ensure buttons and navigation items appear optically centered across both directions.</p>`,
        ar: `<h3>لماذا تعتبر خصائص CSS المنطقية ثورة في تطوير الواجهات العربية؟</h3><p>اعتاد المطورون لعقود على معالجة الاتجاه العربي عبر إنشاء ملفات CSS منفصلة أو تكرار القواعد بكتابة كلاسات خاصة لليمين واليسار. هذا الأسلوب يسبب تضخم الأكواد وصعوبة صيانتها وظهور أخطاء مستمرة عند التبديل بين اللغات.</p><p>من خلال الاعتماد الكامل على <strong>خصائص CSS المنطقية</strong> (مثل <code>margin-inline-start</code> و<code>padding-inline-end</code>)، يصبح الكود البرمجي الواحد قادراً على عكس نفسه تلقائياً بدقة هندسية مطلقة بمجرد تغيير سمة <code>dir="rtl"</code> في وسم الـ HTML.</p><h3>الإيقاع الطباعي والتوازن البصري</h3><p>تتميز الحروف العربية بمساراتها الأفقية المترابطة وارتفاعاتها المختلفة عن الحروف اللاتينية. إن دمج خط <strong>Cairo</strong> للنصوص العربية مع خط <strong>Inter</strong> للإنجليزية يتطلب ضبطاً دقيقاً للمسافات الرأسية وهوامش الأزرار لتبدو العناصر متزنة بصرياً في كلا اللغتين.</p>`
      }
    },
    {
      id: "architecting-performant-business-dashboards",
      date: "August 2026",
      readTime: { en: "6 min read", ar: "قراءة 6 دقائق" },
      title: {
        en: "Architecting Performant Business Dashboards: State Stores & Role-Based UI",
        ar: "هندسة لوحات التحكم الإدارية: إدارة الحالة وحماية الصلاحيات الوظيفية"
      },
      summary: {
        en: "Best practices for designing commercial dashboards with Role-Based Access Control (RBAC), client-side reactivity, and sub-second rendering speeds without bulky frontend dependencies.",
        ar: "أفضل الممارسات البرمجية لبناء لوحات تحكم تشغيلية تدعم صلاحيات الأدوار (RBAC)، وإدارة الحالة التفاعلية وسرعة استجابة فائقة بدون أطر عمل معقدة."
      },
      tags: ["System Design", "RBAC", "Dashboard Architecture", "Vanilla JS"],
      content: {
        en: `<h3>The Single Responsibility Principle in Business UIs</h3><p>Enterprise dashboards often suffer from tight coupling between data queries and presentation layers. Structuring the application around isolated state stores and view controllers prevents unauthorized data exposure across user roles.</p><h3>Implementing Resilient Role-Based Access Control (RBAC)</h3><p>Every view and mutation must be guarded by strict role definitions. In our <strong>Business Management Dashboard</strong>, users with the 'Cashier' role can only execute POS transactions and view current stock, whereas 'Admins' hold full visibility over margins, supplier records, and audit log inspection.</p>`,
        ar: `<h3>مبدأ المسؤولية الواحدة في واجهات الأنظمة التشغيلية</h3><p>تعاني لوحات التحكم في كثير من الشركات من تداخل كود معالجة البيانات مع عناصر الواجهة، مما يجعل النظام هشاً وصعب التطوير. إن فصل منطق البيانات في مخزن مركزي (State Store) يضمن سلامة المعلومات وسهولة تحديثها.</p><h3>بناء نظام صلاحيات وظيفية صارم (RBAC)</h3><p>يجب أن تخضع كل شاشة وزر في لوحة التحكم لقيود الصلاحيات. على سبيل المثال، في مشروع <strong>Business Management Dashboard</strong>، يمتلك دور الكاشير حق تسجيل المبيعات وفحص المخزون فقط، بينما يمتلك المدير صلاحية الاطلاع على هوامش الأرباح وتعديل الأسعار وفحص سجلات التدقيق.</p>`
      }
    },
    {
      id: "relational-database-design-business-systems",
      date: "August 2026",
      readTime: { en: "8 min read", ar: "قراءة 8 دقائق" },
      title: {
        en: "Relational Database Design for Retail & Business Systems",
        ar: "تصميم قواعد البيانات العلائقية لأنظمة التجزئة والأعمال التجارية"
      },
      summary: {
        en: "A deep dive into Third Normal Form (3NF) relational schema design, foreign key constraints, index strategies, and inventory integrity for commercial web applications.",
        ar: "دراسة معمارية متعمقة لتصميم قواعد بيانات MySQL العلائقية وفق معيار 3NF، وسلامة المفاتيح الأجنبية، واستراتيجيات الفهرسة وتدقيق حركة المخزون."
      },
      tags: ["MySQL", "3NF Normalization", "Database Architecture", "Data Integrity"],
      content: {
        en: `<h3>Achieving Third Normal Form (3NF)</h3><p>In retail and business systems, redundancy is the primary source of financial and stock calculation errors. A properly normalized 3NF database ensures that every non-key column is strictly dependent on the primary key, preventing duplicate records and inconsistent order histories.</p><h3>Audit Logging and Transactional Safety</h3><p>Every inventory decrement and stage shift must leave a traceable fingerprint. By implementing dedicated audit log tables linked via foreign keys and timestamps, organizations maintain complete transparency across operational events.</p>`,
        ar: `<h3>تحقيق الشكل المعياري الثالث (3NF)</h3><p>في أنظمة التجزئة والمخازن، يمثل تكرار البيانات السبب الأول للأخطاء الحسابية والمخزنية. إن تطبيق معيار التطبيع الثالث (3NF) يضمن عدم اعتماد أي عمود إلا على المفتاح الأساسي، مما يقضي على البيانات المكررة ويحافظ على اتساق السجلات المالية.</p><h3>سجلات التدقيق وأمان المعاملات</h3><p>يجب أن تترك كل حركة مخزنية أو تحويل مالي أثراً رقمياً دقيقاً. من خلال جداول سجلات التدقيق (Audit Logs) المرتبطة بالمفاتيح الأجنبية وتوقيتات النظام، تضمن المنشأة الشفافية الكاملة لكافة العمليات التشغيلية.</p>`
      }
    }
  ],

  cvData: {
    summary: {
      en: "Web Developer and Systems Builder with 7 years of hands-on programming experience. Specializes in building practical commercial web applications, operations dashboards, relational database architectures (3NF MySQL), and high-precision Arabic RTL interfaces. Currently employed as a Visual Merchandiser / Display Coordinator at AL NASSER, actively applying disciplined visual hierarchy, optical balance, and presentation structure to digital systems.",
      ar: "مطور ويب ومهندس أنظمة رقمية بخبرة برمجية تطبيقية تمتد لـ 7 سنوات في بناء أنظمة وتطبيقات الويب التجارية، لوحات التحكم التشغيلية، تصميم قواعد البيانات العلائقية (3NF MySQL)، وهندسة الواجهات العربية ثنائية الاتجاه (RTL/LTR). أعمل حالياً كمنسق عروض بصرية وفاترينات بشركة النصر، وأطبق مبادئ التنسيق البصري والهيكلة المكانية في تصميم البرمجيات."
    },
    experience: [
      {
        role: { en: "Visual Merchandiser / Display Coordinator", ar: "منسق عروض بصرية وفاترينات" },
        company: "AL NASSER (Faisal Al Rasheed Group)",
        period: { en: "Ongoing", ar: "مستمر حتى الآن" },
        location: { en: "Egypt (Cairo & Delta Branches)", ar: "مصر (فروع القاهرة والدلتا)" },
        points: [
          { en: "Coordinating store display layouts, storefront window staging, and seasonal campaigns across major branch networks (Cairo Tagamo, Mansoura, Tanta, and Damanhour).", ar: "تنسيق واجهات وفاترينات المتاجر وتوزيع العروض والحملات الموسمية عبر كبرى الفروع (القاهرة، المنصورة، طنطا، دمنهور)." },
          { en: "Overseeing visual hierarchy, product density standards, color harmony, and customer navigation flow within retail spaces.", ar: "الإشراف على التناسق البصري، كثافة عرض المنتجات، وتناغم الألوان ومسارات حركة العملاء داخل المعارض." },
          { en: "Bringing physical spatial discipline, eye-flow direction, and optical balance directly into software UI architecture.", ar: "نقل الانضباط المعماري البصري والتوزيع المتزن للمساحات مباشرة إلى تصميم واجهات النظم والبرمجيات." }
        ]
      },
      {
        role: { en: "Independent Web Developer & Systems Builder", ar: "مطور برمجيات وأنظمة ويب مستقل" },
        company: "Engineering Portfolio & Technical Practice",
        period: { en: "7 Years Hands-on Practice", ar: "7 سنوات من الممارسة التطبيقية" },
        location: { en: "Egypt", ar: "مصر" },
        points: [
          { en: "Architected and deployed 13 complete, publicly verifiable web systems and applications with live GitHub Pages demos.", ar: "تطوير ونشر 13 نظاماً برمجياً متكاملاً وموثقاً بالكامل على GitHub مع روابط معاينة حية ومباشرة." },
          { en: "Engineered commercial business dashboards, CRM Kanban pipelines, and multi-hub inventory logistics platforms.", ar: "برمجة لوحات تحكم تجارية، أنظمة مبيعات كانبان، ومنصات إدارة المخازن اللوجستية المتعددة." },
          { en: "Designed normalized 3NF MySQL relational schemas with integrity constraints and audit logs.", ar: "تصميم وهيكلة قواعد بيانات MySQL علائقية معيارية (3NF) مع سجلات تدقيق العمليات." },
          { en: "Authored Sanad UI: an open-source Arabic RTL design system built purely with CSS Logical Properties.", ar: "تطوير مكتبة سند (Sanad UI): نظام تصميم مفتوح المصدر للواجهات العربية مبني بخصائص CSS المنطقية." }
        ]
      }
    ],
    technicalSkills: [
      { name: "Programming Languages", value: "Python 3, PHP, JavaScript (ES6+)" },
      { name: "Frontend & UI Systems", value: "HTML5 Semantic, CSS3 Tokens, CSS Logical Properties, Arabic RTL, Cairo & Inter Typography" },
      { name: "Databases & Storage", value: "MySQL Relational (3NF Normalization, Foreign Keys, Indexes, Triggers, Views)" },
      { name: "Software Architecture", value: "SPA State Stores, Role-Based Access Control (RBAC), Event Delegation, POS Workflows, REST APIs" },
      { name: "Tooling & QA", value: "Git, GitHub CLI, Linux Terminal, Python unittest, Performance Optimization" }
    ],
    education: [
      {
        degree: { en: "Secondary Education / Technical Foundation", ar: "التعليم الأساسي والتدريب التقني" },
        institution: { en: "Egypt", ar: "مصر" },
        period: { en: "Completed", ar: "مكتمل" },
        note: { en: "7 years of dedicated, continuous self-directed software development and practical systems building.", ar: "7 سنوات من الممارسة البرمجية المستمرة والتطوير الذاتي التطبيقي للأنظمة." }
      }
    ]
  }
};

// Export for browser environment
if (typeof window !== 'undefined') {
  window.SITE_DATA = SITE_DATA;
}
