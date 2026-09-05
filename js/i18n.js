// TechCraft Hub - Bilingual Internationalization Dictionary (English & Arabic)
const TRANSLATIONS = {
  en: {
    // Branding & Header
    "brand.name": "TechCraft Hub",
    "brand.tagline": "Architectural Blueprints & Interactive Tutorials",
    "nav.blueprints": "Blueprints & Guides",
    "nav.sandbox": "Interactive Sandbox",
    "nav.roadmaps": "Tech Roadmaps",
    "nav.about": "Platform Concept",
    "nav.search_hint": "Search (Ctrl + K)",
    
    // Hero Section
    "hero.badge": "Curated Engineering Knowledge Platform",
    "hero.title_start": "Master Modern Engineering With",
    "hero.title_highlight": "Deep Architectural Blueprints",
    "hero.title_end": "& Production Tutorials",
    "hero.subtitle": "Explore production-grade technical guides, interactive system diagrams, and copy-ready code architectures curated for modern software engineers. No superficial tutorials — pure architectural depth.",
    "hero.cta_explore": "Explore All Blueprints",
    "hero.cta_sandbox": "Try Live Sandbox",
    "hero.search_placeholder": "Search tutorials, technologies, architecture (e.g. AI, Kafka, Bento Grid)...",
    
    // Stats
    "stat.blueprints": "Deep Architectural Guides",
    "stat.code": "Production Ready Code",
    "stat.bilingual": "Zero-Lag Bilingual RTL",
    "stat.design": "SaaS Showcase Standard",

    // Filters & Controls
    "filter.category_all": "All Blueprints",
    "filter.category_ai": "AI & Smart Agents",
    "filter.category_web": "Modern Web & UI",
    "filter.category_cloud": "Cloud & Systems",
    "filter.category_devtools": "DevTools & Automation",
    "filter.level_all": "All Difficulties",
    "filter.level_beginner": "Beginner",
    "filter.level_intermediate": "Intermediate",
    "filter.level_advanced": "Advanced",
    "filter.favorites": "My Saved Guides",
    "filter.results_count": "Showing {count} engineering blueprints",
    
    // Blueprint Cards
    "card.read_time": "read",
    "card.open_tutorial": "Explore Tutorial",
    "card.live_demo": "Live Preview",
    "card.save": "Bookmark",
    "card.saved": "Bookmarked",
    "card.no_results_title": "No Blueprints Match Your Query",
    "card.no_results_desc": "Try adjusting your search terms or clearing your difficulty filter to explore other guides.",
    "card.reset_filters": "Reset All Filters",
    
    // Tutorial Modal
    "modal.tab_overview": "Architecture & Concept",
    "modal.tab_steps": "Step-by-Step Blueprint",
    "modal.tab_code": "Production Code",
    "modal.tab_sandbox": "Interactive Demo",
    "modal.close": "Close Guide",
    "modal.copy_code": "Copy Snippet",
    "modal.copied": "Copied to Clipboard!",
    "modal.metrics_title": "Key Engineering Metrics",
    "modal.flow_title": "System Information Flow Diagram",
    
    // Interactive Sandbox Section
    "sandbox.badge": "Hands-On Engineering Lab",
    "sandbox.title": "Interactive Live Component Sandbox",
    "sandbox.subtitle": "Modify CSS parameters, test modern UI components, and observe real-time glassmorphism and grid rendering directly in your browser.",
    "sandbox.template_bento": "Bento Glass Card",
    "sandbox.template_glow": "Neon Aurora Button",
    "sandbox.template_modal": "Backdrop Blur Modal",
    "sandbox.run": "Re-render Preview",
    "sandbox.reset": "Reset Code",
    
    // Roadmaps Section
    "roadmaps.badge": "Curriculum & Engineering Tracks",
    "roadmaps.title": "Engineering Mastery Tracks 2026",
    "roadmaps.subtitle": "Structured architectural paths designed to guide you from foundational concepts to mission-critical distributed systems.",
    "track.ai_title": "AI & Agentic Systems Engineer",
    "track.ai_desc": "From token embeddings and prompt routing to multi-agent state machines, tool calling, and deterministic self-correction.",
    "track.web_title": "High-Performance Frontend Architect",
    "track.web_desc": "Mastering Core Web Vitals, zero-runtime CSS logical properties, micro-interactions, and accessible internationalization.",
    "track.cloud_title": "Cloud Distributed Systems Architect",
    "track.cloud_desc": "High-throughput event streaming with Kafka, ACID vs Saga transactions, distributed caching, and container orchestration.",
    
    // About / Mission Section
    "about.badge": "Why TechCraft Hub?",
    "about.title": "Engineered for Clarity, Independence & Depth",
    "about.p1": "TechCraft Hub is a dedicated knowledge showcase created to solve a pervasive problem: generic, superficial programming tutorials that ignore production realities.",
    "about.p2": "Every guide here is crafted as an architectural blueprint — detailing real-world bottlenecks, database normalization, system diagrams, and zero-dependency implementation techniques.",
    
    // Footer
    "footer.title": "TechCraft Hub",
    "footer.desc": "Independent Open Engineering Knowledge & Architecture Showcase.",
    "footer.rights": "© 2026 TechCraft Hub. Crafted with modern web standards.",
    "footer.deploy_hint": "Optimized for instant Netlify and edge hosting."
  },
  
  ar: {
    // Branding & Header
    "brand.name": "تيك كرافت هاب",
    "brand.tagline": "منصة الشروحات والمعماريات الهندسية",
    "nav.blueprints": "الشروحات والمعماريات",
    "nav.sandbox": "الساندبوكس التفاعلي",
    "nav.roadmaps": "مسارات التعلم",
    "nav.about": "عن المنصة",
    "nav.search_hint": "بحث (Ctrl + K)",
    
    // Hero Section
    "hero.badge": "منصة المعرفة والمشاريع الهندسية 2026",
    "hero.title_start": "احترف الهندسة البرمجية مع",
    "hero.title_highlight": "شروحات معمارية ومشاريع متقدمة",
    "hero.title_end": "بأعلى معايير الإنتاج",
    "hero.subtitle": "استكشف أدلة هندسية إنتاجية، مخططات معمارية تفاعلية، وأكواد جاهزة للبناء المباشر في الذكاء الاصطناعي والويب والسحابة. شروحات حقيقية تخاطب عقل المهندس.",
    "hero.cta_explore": "استكشف كافة الشروحات",
    "hero.cta_sandbox": "جرب الساندبوكس التفاعلي",
    "hero.search_placeholder": "ابحث في الشروحات، التقنيات، المعماريات (مثلاً: ذكاء اصطناعي، كافكا، بينتو جريد)...",
    
    // Stats
    "stat.blueprints": "شرح معماري وتطبيقي",
    "stat.code": "أكواد برمجية جاهزة",
    "stat.bilingual": "تبديل فوري عربي/إنجليزي",
    "stat.design": "تصميم عالمي بمعايير SaaS",

    // Filters & Controls
    "filter.category_all": "كافة الشروحات والمشاريع",
    "filter.category_ai": "الذكاء الاصطناعي والوكلاء",
    "filter.category_web": "الويب وتجربة المستخدم",
    "filter.category_cloud": "السحابة والأنظمة الموزعة",
    "filter.category_devtools": "أدوات المطورين والأتمتة",
    "filter.level_all": "كافة المستويات",
    "filter.level_beginner": "مبتدئ",
    "filter.level_intermediate": "متوسط",
    "filter.level_advanced": "متقدم",
    "filter.favorites": "شروحاتي المحفوظة",
    "filter.results_count": "عرض {count} من المخططات والشروحات الهندسية",
    
    // Blueprint Cards
    "card.read_time": "قراءة",
    "card.open_tutorial": "عرض الشرح الكامل",
    "card.live_demo": "معاينة حية",
    "card.save": "حفظ في المفضلة",
    "card.saved": "محفوظ بالمفضلة",
    "card.no_results_title": "لم يتم العثور على شروحات مطابقة",
    "card.no_results_desc": "جرب تعديل كلمات البحث أو إلغاء تصفية الصعوبة لاستكشاف الشروحات الأخرى.",
    "card.reset_filters": "إعادة ضبط الفلاتر",
    
    // Tutorial Modal
    "modal.tab_overview": "المعمارية ونظرة عامة",
    "modal.tab_steps": "خطوات البناء والتنفيذ",
    "modal.tab_code": "الأكواد البرمجية",
    "modal.tab_sandbox": "تجربة تفاعلية مباشرة",
    "modal.close": "إغلاق الشرح",
    "modal.copy_code": "نسخ الكود",
    "modal.copied": "تم النسخ للحافظة!",
    "modal.metrics_title": "مؤشرات الأداء الهندسية",
    "modal.flow_title": "مخطط تدفق البيانات والمعلومات",
    
    // Interactive Sandbox Section
    "sandbox.badge": "مختبر البرمجة المباشر",
    "sandbox.title": "الساندبوكس البرمجي التفاعلي المباشر",
    "sandbox.subtitle": "عدل خصائص CSS وجرب مكونات الواجهة الحديثة وتأثيرات الزجاج البلوري والتدرجات وشاهد النتيجة لحظياً في المتصفح.",
    "sandbox.template_bento": "بطاقة Bento زجاجية",
    "sandbox.template_glow": "زر نيون متوهج",
    "sandbox.template_modal": "نافذة زجاجية منبثقة",
    "sandbox.run": "إعادة تطبيق الكود",
    "sandbox.reset": "استعادة الكود الأصلي",
    
    // Roadmaps Section
    "roadmaps.badge": "مسارات التعلم والتخصص",
    "roadmaps.title": "مسارات الاحتراف الهندسي 2026",
    "roadmaps.subtitle": "مسارات معمارية منظمة تأخذ بيدك من المفاهيم التأسيسية إلى بناء الأنظمة الموزعة والذكية المعقدة.",
    "track.ai_title": "مهندس أنظمة ووكلاء الذكاء الاصطناعي",
    "track.ai_desc": "من تضمين المتجهات وتوجيه الأوامر إلى وكلاء الذكاء الاصطناعي متعددي المهام واستدعاء الأدوات والتصحيح الذاتي.",
    "track.web_title": "معماري واجهات الويب فائقة الأداء",
    "track.web_desc": "إتقان مؤشرات Core Web Vitals، خصائص CSS المنطقية، الحركات الدقيقة، والتعريب الخالي من العيوب.",
    "track.cloud_title": "معماري الأنظمة السحابية والموزعة",
    "track.cloud_desc": "إدارة تدفق الأحداث مع Kafka، معاملات الـ Saga الموزعة، التخزين المؤقت عبر Redis، وبوابات المايكروسيرفيس.",
    
    // About / Mission Section
    "about.badge": "لماذا تيك كرافت هاب؟",
    "about.title": "صُممت من أجل العمق المعماري والاستقلالية",
    "about.p1": "تم إنشاء تيك كرافت هاب كمعرض معرفي وهندسي لحل مشكلة متكررة: الشروحات البرمجية السطحية التي تتجاهل واقع الأنظمة الحقيقية والإنتاج الفعلي.",
    "about.p2": "كل شرح هنا مكتوب كمخطط معماري حقيقي — يشرح التحديات الفعلية، تصميم قواعد البيانات، تدفق البيانات، وطرق التنفيذ بدون مكتبات ثقيلة غير ضرورية.",
    
    // Footer
    "footer.title": "تيك كرافت هاب",
    "footer.desc": "منصة هندسية ومعرفية مستقلة ومفتوحة للشروحات والمشاريع التقنية.",
    "footer.rights": "© 2026 تيك كرافت هاب. مبنية بأحدث معايير الويب العالمية.",
    "footer.deploy_hint": "مهيأة بالكامل للنشر الفوري على Netlify والخوادم السحابية."
  }
};
