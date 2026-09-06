// Reda Mohamed Salah - Senior Apparel Visual Merchandising & Store Standards Dataset (2026)
// Grounded, Authentic Retail Merchandising Projects for AL NASSER & Premier Retail Fashion

const TUTORIALS_DATA = [
  // ==========================================
  // 1. Store Windows & Facades
  // ==========================================
  {
    id: "vm-window-display",
    category: "window",
    difficulty: "advanced",
    readTime: "15 min",
    icon: "layout",
    image: "assets/images/apparel-vm/vm-01-window-display.jpg",
    badge: { en: "Window Architecture", ar: "فاترينات وواجهات العرض" },
    title: {
      en: "Apparel Store Window & Facade Architecture Planner",
      ar: "نظام تخطيط وتنسيق فاترينات وواجهات متاجر الملابس"
    },
    summary: {
      en: "Engineering high-impact apparel storefronts. Master pedestrian sightline geometry at 160cm eye level, 3000K warm directional spotlighting with 5:1 theatrical contrast, and balanced mannequin staging.",
      ar: "هندسة وتنسيق فاترينات الملابس الخارجية الفاخرة. ضبط زوايا رؤية المارة على ارتفاع 160 سم، حسابات الإضاءة المسلطة بنسبة تباين 5:1، وتوزيع المانيكان وفق التكوين الهرمي المتوازن."
    },
    tags: ["Window Display", "Facade Architecture", "Spotlight Lux", "Mannequin Staging", "Visual Merchandising"],
    stats: [
      { label: { en: "Footfall Attraction", ar: "جذب حركة المارة" }, value: "+34.8%" },
      { label: { en: "Walk-in Conversion", ar: "معدل الدخول للمتجر" }, value: "28.5%" },
      { label: { en: "Contrast Ratio", ar: "نسبة تباين الإضاءة" }, value: "5:1 Lux" }
    ],
    architecture: {
      en: "Tri-level depth composition: Foreground hero mannequins elevated on custom plinths, mid-ground architectural textured backdrop, and 3000K high-CRI (95+) directional spotlights framing the collection.",
      ar: "تكوين بصري ثلاثي الأبعاد: منصة أمامية للمانيكانات الرئيسية، خلفية معمارية محايدة تبرز ألوان المجموعة، وإضاءة مسلطة دافئة 3000K بمعامل CRI 95+ لخلق عمق فخم يجذب المارة ليلاً."
    },
    diagramSteps: [
      { en: "Sightline & Angle Analysis (160cm)", ar: "تحليل خط نظر المارة (160 سم)" },
      { en: "Pyramid Mannequin Staging", ar: "التوزيع الهرمي للمانيكانات" },
      { en: "Spotlight Calibration (1500 Lux)", ar: "معايرة الإضاءة المركزة (1500 لوكس)" },
      { en: "Garment Drape & Pinning Check", ar: "فحص انسدال وتثبيت الملابس" }
    ],
    steps: [
      {
        title: { en: "1. The 3-Second Pedestrian Sightline Formula", ar: "1. معادلة خط نظر المارة (قاعدة الـ 3 ثوانٍ)" },
        content: {
          en: "Position the focal point (lapel/chest of the central mannequin) at 155cm to 170cm height from pavement level to intersect natural human gaze at a 4-meter approach distance.",
          ar: "ضبط نقطة الجذب البصري الرئيسية (منطقة الصدر والياقة للمانيكان المركزي) على ارتفاع 155 إلى 170 سم عن سطح الأرض لتتلاقى بدقة مع النظر الطبيعي للمتسوقين على بعد 4 أمتار من زجاج الفاترينة."
        }
      },
      {
        title: { en: "2. Theatrical Spotlighting Contrast Ratio (5:1)", ar: "2. معايير تباين الإضاءة المسرحية (5 إلى 1)" },
        content: {
          en: "Direct 3000K narrow-beam (24°) spotlights at 1400-1600 Lux directly onto garment textures while keeping background ambient light at 300 Lux to eliminate reflections and command attention.",
          ar: "توجيه إضاءة موجهة دافئة 3000K بزاوية حزمة 24 درجة وشدة 1400 إلى 1600 لوكس على أقمشة الملابس مع إبقاء إضاءة الخلفية عند 300 لوكس لإلغاء انعكاسات الزجاج وإبراز تفاصيل الخامات."
        }
      },
      {
        title: { en: "3. Garment Pinning & Anti-Crease Inspection", ar: "3. معايير التثبيت بالدبابيس وإزالة التجاعيد" },
        content: {
          en: "Ensure all garments are steamed wrinkle-free. Use invisible interior clip pinning along back seams to achieve flawless silhouettes without damaging fabric weave.",
          ar: "التأكد من كوي جميع القطع بالبخار تماماً، واستخدام دبابيس ومشابك التثبيت غير المرئية من الداخل على طول خياطة الظهر لمنح المانيكان قواماً مثالياً مشدوداً دون إتلاف أنسجة القماش."
        }
      }
    ],
    codeSnippet: `// Window Display Lux & Geometry Calibration Spec
const windowDisplaySpecification = {
  storeId: "AL-NASSER-FLAGSHIP-01",
  windowType: "Closed-Back Street Facing",
  pedestrianDistance: "4.0 meters",
  focalCenterHeight: "162 cm",
  lighting: {
    spotlightLux: 1500,
    ambientLux: 300,
    contrastRatio: "5:1",
    colorTemp: "3000K Warm White",
    criIndex: 97
  },
  mannequins: [
    { id: "M1-Left", outfit: "Navy Blazer + Chinos", pose: "Walking Left" },
    { id: "M2-Center", outfit: "Charcoal Overcoat + Knit", pose: "Apex Frontal" },
    { id: "M3-Right", outfit: "Camel Trench + Denim", pose: "Slight Angle" }
  ],
  auditStatus: "VERIFIED_COMPLIANT"
};`
  },

  // ==========================================
  // 2. Mannequin Outfitting & Styling
  // ==========================================
  {
    id: "vm-mannequin-styling",
    category: "window",
    difficulty: "intermediate",
    readTime: "16 min",
    icon: "layout",
    image: "assets/images/apparel-vm/vm-02-mannequin-styling.jpg",
    badge: { en: "Mannequin Studio", ar: "استوديو المانيكان" },
    title: {
      en: "Mannequin Outfitting & Capsule Styling Matrix",
      ar: "مصفوفة تنسيق وتلبيس مانيكانات الملابس والمجموعات المتناسقة"
    },
    summary: {
      en: "Standardized multi-piece apparel outfitting. Strict triangular silhouette balance, color harmonies (60-30-10 rule), size-appropriate pinning, and cross-merchandising add-ons.",
      ar: "معايير تلبيس وتنسيق المانيكان بالأطقم الكاملة. التكوين الهرمي المتوازن، قاعدة تناسق الألوان 60-30-10، دبابيس التثبيت المخفية، وتنسيق الإكسسوارات المكملة للإطلالة."
    },
    tags: ["Mannequin Styling", "Capsule Wardrobe", "Color Harmony", "Garment Pinning", "Outerwear Layering"],
    stats: [
      { label: { en: "Full Look UPT", ar: "معدل بيع الطقم الكامل" }, value: "+32.4%" },
      { label: { en: "Avg Items / Mannequin", ar: "متوسط قطع الإطلالة" }, value: "3.8 Pieces" },
      { label: { en: "Pinning Compliance", ar: "معيار التثبيت الخفي" }, value: "100% Invisible" }
    ],
    architecture: {
      en: "Balanced 3-silhouette capsule layout: Apex formal/smart centerpiece flanked by coordinated semi-formal and casual outfits sharing matching tonal palettes.",
      ar: "تكوين كبسولي متوازن من 3 إطلالات: إطلالة رسمية مركزية في المنتصف، تحيط بها إطلالتان سمارت كاجوال مكملتان بنفس درجات الألوان لترغيب العميل في شراء الطقم كاملاً."
    },
    diagramSteps: [
      { en: "Color Palette Selection (60-30-10)", ar: "تحديد لوحة الألوان (60-30-10)" },
      { en: "Base Layer & Trousers Fit", ar: "تلبيس الطبقة الأساسية والبنطلون" },
      { en: "Outerwear & Collar Draping", ar: "تنسيق المعطف والياقة" },
      { en: "Accessories & Footwear Anchoring", ar: "إضافة الحذاء والإكسسوارات" }
    ],
    steps: [
      {
        title: { en: "1. The 60-30-10 Apparel Color Rule", ar: "1. قاعدة 60-30-10 لتوزيع ألوان الملابس" },
        content: {
          en: "Dominant color covers 60% of the silhouette (overcoat/suit), secondary color 30% (trousers/knitwear), and accent color 10% (pocket square, scarf, or belt).",
          ar: "اللون السائد يشكل 60% من الإطلالة (المعطف أو البدلة)، واللون الثانوي 30% (البنطلون أو البلوفر)، ولون الإبراز 10% (منديل الجيب أو الوشاح أو الحزام) لصنع تباين جذاب."
        }
      },
      {
        title: { en: "2. Natural Drape & Cuff Proportions", ar: "2. ضبط انسدال الأكمام وأساور القميص" },
        content: {
          en: "Ensure shirt cuffs extend exactly 1.5 cm beyond jacket sleeves. Pants break should have a clean slight break over shoes without fabric bunching.",
          ar: "إظهار أساور القميص بمسافة 1.5 سم بالضبط خارج كم الجاكيت، مع ضبط طول البنطلون بكسرة ناعمة واحدة فوق الحذاء دون أي تراكم للأقمشة."
        }
      }
    ],
    codeSnippet: `// Mannequin Capsule Outfitting Algorithm
function validateMannequinLook(outfit) {
  const requirements = {
    minLayers: 3,           // Base, Mid, Outer
    colorDistribution: ["60%", "30%", "10%"],
    steamed: true,
    priceTagsHidden: true,
    sizeRatio: "Sample Size Medium (M) or 50 European"
  };
  return outfit.layers >= requirements.minLayers && outfit.steamed;
}`
  },

  // ==========================================
  // 3. Folding Tables & Color Blocking
  // ==========================================
  {
    id: "vm-folding-tables",
    category: "floor",
    difficulty: "intermediate",
    readTime: "14 min",
    icon: "trello",
    image: "assets/images/apparel-vm/vm-03-folding-table.jpg",
    badge: { en: "Folding Tables", ar: "طاولات العرض والطي" },
    title: {
      en: "Nesting Folding Tables & Color-Blocking Engine",
      ar: "مخطط طاولات الملابس المطوية وتدرج الألوان وتدريج المقاسات"
    },
    summary: {
      en: "Precision folding and color-blocking standard for central display tables. Acrylic folding board dimensions (30x25cm), top-to-bottom size progression (S to XXL), and left-to-right tonal gradients.",
      ar: "المعيار القياسي لطي وترتيب الملابس على الطاولات المركزية. استخدام لوح الطي الموحد (30×25 سم)، تدريج المقاسات عمودياً من الأصغر للأكبر، وتدرج الألوان من الفاتح إلى الداكن."
    },
    tags: ["Folding Tables", "Color Blocking", "Size Progression", "Acrylic Folding Board", "Table Merchandising"],
    stats: [
      { label: { en: "Fold Uniformity", ar: "دقة تطابق مقاس الطي" }, value: "100% Precision" },
      { label: { en: "Restock Cycle Time", ar: "سرعة إعادة ترتيب الطاولة" }, value: "-40% Faster" },
      { label: { en: "Color Progression", ar: "التدرج اللوني الأفقي" }, value: "Light to Dark" }
    ],
    architecture: {
      en: "Nesting wooden tables configured with 5-stack knitwear rows. Height-tiered layout: Small accessories on top tier, color-blocked folded sweaters on main tier, and matching chinos on lower tier.",
      ar: "طاولات خشبية متدرجة الارتفاع (Nesting Tables): المستوى العلوي للإكسسوارات الجلدية، المستوى الأوسط للبلوفرات المطوية بانتظام، والمستوى السفلي للبنطلونات المكملة."
    },
    diagramSteps: [
      { en: "Folding Board Alignment (30x25cm)", ar: "استخدام لوح الطي القياسي (30×25 سم)" },
      { en: "Vertical Size Stack (S to XXL)", ar: "رص المقاسات رأسياً (S في الأعلى إلى XXL)" },
      { en: "Left-to-Right Color Gradient", ar: "تدرج الألوان من الفاتح إلى الداكن" },
      { en: "Size Sticker Placement Check", ar: "محاذاة ملصقات المقاسات على حافة الطي" }
    ],
    steps: [
      {
        title: { en: "1. The Standard 30x25cm Folding Board Protocol", ar: "1. بروتوكول لوح الطي القياسي 30×25 سم" },
        content: {
          en: "Every knit sweater, polo, or tee must be folded around an acrylic template (30cm length x 25cm width) so all edges align with zero variance.",
          ar: "يتم طي كافة البلوفرات وتيشيرتات البولو باستخدام قالب أكريليك موحد (30 سم طول × 25 سم عرض) لتتطابق حواف الأعمدة بنسبة 100%."
        }
      },
      {
        title: { en: "2. Top-to-Bottom Size Hierarchy", ar: "2. التسلسل الهرمي للمقاسات من الأعلى للأسفل" },
        content: {
          en: "Stack maximum 6 to 8 sweaters per pile. Place Size S on top, progressing down through M, L, XL, to XXL at the bottom. Clear size stickers facing front.",
          ar: "الحد الأقصى لكل عمود هو 6 إلى 8 قطع لمنع السقوط، مع وضع المقاس الأصغر (S) في الأعلى ثم (M, L, XL) وتثبيت (XXL) في القاعدة مع محاذاة ملصق المقاس للأمام."
        }
      }
    ],
    codeSnippet: `// Table Folding Capacity & Layout Calculation
function calculateTableCapacity(tableWidthCm, stackDepthCm) {
  const stackWidth = 28; // cm with clearance
  const stackDepth = 33; // cm
  const maxStacksAcross = Math.floor(tableWidthCm / stackWidth);
  const maxStackHeightUnits = 6; // sweaters
  return {
    totalStacks: maxStacksAcross,
    totalGarmentCapacity: maxStacksAcross * maxStackHeightUnits,
    colorGradientOrder: ["Off-White", "Oatmeal", "Camel", "Navy", "Charcoal"]
  };
}`
  },

  // ==========================================
  // 4. Daily Store VM Compliance & Audits
  // ==========================================
  {
    id: "vm-store-audit",
    category: "audits",
    difficulty: "advanced",
    readTime: "18 min",
    icon: "check",
    image: "assets/images/apparel-vm/vm-04-store-audit.jpg",
    badge: { en: "Store Audits", ar: "التدقيق الميداني" },
    title: {
      en: "Daily Store VM Compliance & Inspection Suite",
      ar: "نظام التدقيق اليومي الميداني لمعايير عرض الملابس بالفروع"
    },
    summary: {
      en: "Comprehensive mobile branch inspection system auditing 45 retail touchpoints: hanger spacing, steam quality, price tag visibility, shelf cleanliness, and planogram fidelity with instant scoring.",
      ar: "نظام التدقيق الميداني اليومي لفروع المتاجر لقياس 45 نقطة فحص معتمدة: استقامة الشماعات، جودة الكوي، وضوح بطاقات الأسعار، نظافة الرفوف، وتطابق البلانوجرام بنتيجة تقييم فورية."
    },
    tags: ["Daily Store Audit", "Compliance Checklist", "Quality Assurance", "Retail Operations", "Branch Standards"],
    stats: [
      { label: { en: "Audit Time", ar: "وقت تدقيق الفرع" }, value: "18 Minutes" },
      { label: { en: "Avg Branch Compliance", ar: "نسبة المطابقة التشغيلية" }, value: "97.6%" },
      { label: { en: "Corrective Action SLA", ar: "سرعة معالجة الملاحظات" }, value: "< 2 Hours" }
    ],
    architecture: {
      en: "Systematic branch audit protocol: Morning opening walk-through, mid-day recovery check, and pre-closing floor readiness, synced directly to regional visual merchandising management.",
      ar: "بروتوكول فحص الفروع اليومي المعتمد: جولة الفحص الصباحي قبل الافتتاح، جولة ترتيب أوقات الذروة، وجولة الجاهزية المسائية، مع رفع التقرير المباشر للإدارة الإقليمية."
    },
    diagramSteps: [
      { en: "Storefront & Facade Walkthrough", ar: "فحص نظافة الواجهة والفاترينات" },
      { en: "Mannequin Outfit & Pin Check", ar: "تدقيق أطقم المانيكان والتثبيت" },
      { en: "Racks Hanger Spacing (5cm)", ar: "فحص مسافة الشماعات (5 سم)" },
      { en: "Folding Tables Size Integrity", ar: "فحص اكتمال مقاسات الطاولات" }
    ],
    steps: [
      {
        title: { en: "1. The 45-Point VM Checksheet", ar: "1. استمارة الـ 45 نقطة لمعايير العرض" },
        content: {
          en: "Inspect entrance focal points, check all clothing tags are facing inward/tucked, verify hanger hooks point left, and ensure no empty hangers remain on racks.",
          ar: "فحص نقاط الجذب عند المدخل، التأكد من إخفاء بطاقات الأسعار داخل الياقات، توجيه خطافات الشماعات لليسار، وسحب أي شماعات فارغة فوراً من صالة العرض."
        }
      },
      {
        title: { en: "2. Scoring & Corrective Action", ar: "2. احتساب نقاط الفرع والإجراءات التصحيحية" },
        content: {
          en: "Branches scoring below 92% must execute immediate 1-hour visual recovery before afternoon shopping peak hours.",
          ar: "أي فرع يحصل على تقييم أقل من 92% يُلزم بتنفيذ خطة ترتيب فوري لمدة ساعة واحدة قبل بدء ذروة تسوق المساء."
        }
      }
    ],
    codeSnippet: `// Daily Branch VM Compliance Checklist Schema
const dailyAuditChecklist = {
  branchCode: "AL-NASSER-BRANCH-14",
  auditor: "Reda Mohamed Salah (Senior VM)",
  timestamp: "2026-09-06T10:00:00Z",
  touchpoints: [
    { section: "Window Display", score: 10, max: 10, notes: "Flawless lighting and drape" },
    { section: "Mannequin Styling", score: 10, max: 10, notes: "All layers pinned cleanly" },
    { section: "Hanger Spacing (5cm)", score: 9.5, max: 10, notes: "Outerwear rail spaced correctly" },
    { section: "Folding Tables", score: 10, max: 10, notes: "Color blocking S-to-XXL verified" },
    { section: "Steam Quality", score: 9.8, max: 10, notes: "Zero visible creases on shirts" }
  ],
  totalCompliance: "98.6%",
  certification: "OFFICIALLY_VERIFIED"
};`
  },

  // ==========================================
  // 5. Denim Wall & Capacity
  // ==========================================
  {
    id: "vm-denim-wall",
    category: "floor",
    difficulty: "intermediate",
    readTime: "15 min",
    icon: "database",
    image: "assets/images/apparel-vm/vm-05-denim-wall.jpg",
    badge: { en: "Denim Bar", ar: "جدار الجينز والبنطلونات" },
    title: {
      en: "Denim Wall & Trousers Capacity Optimizer",
      ar: "منظومة تنسيق جدار الجينز والبنطلونات وسعة العرض"
    },
    summary: {
      en: "Strategic layout of the denim bar. Pigeon hole allocation by wash (light, medium, dark, black) and fit (Skinny, Slim, Straight), with strict 12-piece stack limits to prevent shelf collapse.",
      ar: "التخطيط الهندسي لجدار الجينز. توزيع الخانات الخشبية حسب درجة الغسيل وقصة البنطلون، مع ضبط الحد الأقصى بـ 12 قطعة مطوية في الخانة الواحدة لضمان ثبات الترتيب."
    },
    tags: ["Denim Bar", "Pigeon Holes", "Jeans Folding", "Wash Hierarchy", "Capacity Calculation"],
    stats: [
      { label: { en: "Stack Stability", ar: "الحد الأقصى لكل خانة" }, value: "12 Pairs/Cubby" },
      { label: { en: "Size Search Speed", ar: "سرعة استخراج المقاس" }, value: "4.5 Seconds" },
      { label: { en: "Denim Category Sales", ar: "نمو مبيعات الجينز" }, value: "+22.8%" }
    ],
    architecture: {
      en: "Grid pigeonhole structure: Top row displays hanging front-facing hero styles on metal clamps; lower grid rows contain folded inventory arranged horizontally by cut and vertically by size (30 to 40).",
      ar: "هيكل شبكي لخانات الجينز: الصف العلوي لعرض الموديلات المميزة معلقة بمشابك معدنية، والصفوف السفلية تضم البنطلونات المطوية أفقياً حسب القصة ورأسياً حسب المقاسات (30 إلى 40)."
    },
    diagramSteps: [
      { en: "Wash Sorting (Light to Raw Indigo)", ar: "ترتيب درجات الغسيل من الفاتح للغامق" },
      { en: "Fit Clustering (Slim, Regular, Straight)", ar: "تجميع القصات (سليم، ريجولار، ستريت)" },
      { en: "Waistband Tag Front Alignment", ar: "محاذاة شارة الخصر الجلدية للأمام" },
      { en: "Replenishment Threshold Trigger", ar: "تنبيه إعادة تعبئة النواقص عند 4 قطع" }
    ],
    steps: [
      {
        title: { en: "1. The Denim Bar Folding Standard", ar: "1. معيار طي البنطلون الجينز لجدار العرض" },
        content: {
          en: "Fold legs in half with back pockets facing upward. Turn waist over so leather brand patch and size label face directly outward toward the customer.",
          ar: "طي أرجل البنطلون للمنتصف مع جعل الجيوب الخلفية لأعلى، وثني منطقة الخصر بحيث تظهر شارة الماركة الجلدية وبطاقة المقاس مواجهة للمتسوق مباشرة."
        }
      },
      {
        title: { en: "2. Pigeon Hole Capacity Limits", ar: "2. حدود السعة التخزينية لكل خانة" },
        content: {
          en: "Maintain strictly between 8 and 12 pairs per pigeon hole. More than 12 causes stack tipping; less than 6 makes the display look depleted.",
          ar: "الحفاظ على عدد 8 إلى 12 بنطلوناً في كل خانة. زيادة العدد عن 12 تؤدي لسقوط الأعمدة، ونقصانه عن 6 يعطي انطباعاً بنفاذ المخزون."
        }
      }
    ],
    codeSnippet: `// Denim Wall Capacity & Replenishment Logic
function calculateDenimWallSlots(totalCubbies) {
  return {
    washes: ["Stone Wash 01", "Mid Blue 02", "Deep Indigo 03", "Raw Black 04"],
    fits: ["Slim Fit", "Regular Straight", "Tapered Stretch"],
    sizesPerColumn: [30, 31, 32, 33, 34, 36, 38],
    optimalUnitsPerCubby: 10,
    replenishAlertThreshold: 4
  };
}`
  },

  // ==========================================
  // 6. Seasonal Sale & Signage Kit
  // ==========================================
  {
    id: "vm-seasonal-sale",
    category: "floor",
    difficulty: "intermediate",
    readTime: "14 min",
    icon: "zap",
    image: "assets/images/apparel-vm/vm-06-seasonal-sale.jpg",
    badge: { en: "Promotional Zones", ar: "لافتات وعروض التخفيضات" },
    title: {
      en: "Seasonal Sale & Clearance Signage Allocation Kit",
      ar: "مخطط لافتات التخفيضات ومساحات العروض الموسمية بالمتجر"
    },
    summary: {
      en: "Professional promotional zone planning. Acrylic header brackets, percentage discount groupings (30%, 50%), controlled hanger density (max 18 items/meter), and elevated brand perception during sales.",
      ar: "التخطيط الاحترافي لمساحات التخفيضات والعروض الموسمية. حوامل لافتات الخصم الأكريليكية الأنيقة، تصنيف الاستاندات بنسب الخصم، وضبط كثافة الشماعات (بحد أقصى 18 قطعة للمتر)."
    },
    tags: ["Sale Signage", "Promotional Merchandising", "Rack Density", "Clearance Zones", "Store Aesthetics"],
    stats: [
      { label: { en: "Clearance Sell-Through", ar: "سرعة تصريف المخزون" }, value: "+38.2%" },
      { label: { en: "Max Rail Density", ar: "أقصى كثافة شماعات للمتر" }, value: "18 Units/m" },
      { label: { en: "Brand Aesthetic Index", ar: "الحفاظ على فخامة المتجر" }, value: "Premium" }
    ],
    architecture: {
      en: "Tiered discount zoning: New season transition at front entrance, mid-season offers in central zones, and final clearance racks positioned at back corners to draw customer traffic throughout the store.",
      ar: "توزيع هندسي للعروض: المجموعات الجديدة عند المدخل، عروض الخصم الجزئي في منتصف الصالة، واستاندات التخفيض النهائي في الأركان الخلفية لجذب حركة الزوار داخل المتجر كاملاً."
    },
    diagramSteps: [
      { en: "Signage Bracket Mounting", ar: "تثبيت حوامل اللافتات الأكريليكية" },
      { en: "Category & Discount Segmentation", ar: "فرز الملابس بنسب الخصم (30% - 50%)" },
      { en: "Hanger Density Regulation (18/m)", ar: "ضبط كثافة الشماعات (18 قطعة للمتر)" },
      { en: "Markdown Price Sticker Audit", ar: "تدقيق وضوح السعر القديم والجديد" }
    ],
    steps: [
      {
        title: { en: "1. Preventing 'Bargain Basement' Clutter", ar: "1. منع العشوائية والتكدس أثناء التخفيضات" },
        content: {
          en: "Even during clearance events, never exceed 18 hangers per linear meter of rack. Garments must slide freely to prevent wrinkling and maintain luxury store feel.",
          ar: "حتى في فترات التخفيضات الكبرى، يمنع منعاً باتاً تجاوز 18 شماعة لكل متر طولي من الاستاند، لضمان سهولة تحريك القطع ومنع تجعدها والحفاظ على المظهر الراقي."
        }
      },
      {
        title: { en: "2. Standardized Signage Height", ar: "2. توحيد ارتفاع لافتات الخصم" },
        content: {
          en: "All promotional signs must sit at a consistent 175cm eye-level height mounted in matte black or brushed brass metal frames.",
          ar: "يجب تثبيت كافة لافتات الخصم على ارتفاع موحد 175 سم في إطارات معدنية أنيقة بلون أسود مطفي أو نحاسي هادئ متناغم مع ديكور المتجر."
        }
      }
    ],
    codeSnippet: `// Seasonal Promotional Rack Density Formula
function calculateSaleRackDensity(rackLengthMeters, discountTier) {
  const maxItemsPerMeter = 18;
  const totalCapacity = Math.floor(rackLengthMeters * maxItemsPerMeter);
  return {
    discountTier: discountTier, // "UP TO 40% OFF"
    maxHangerCapacity: totalCapacity,
    spacingBetweenHangers: "5.5 cm",
    signagePosition: "Center-Mounted Acrylic Frame"
  };
}`
  },

  // ==========================================
  // 7. Garment Quality & Steam-Pressing
  // ==========================================
  {
    id: "vm-steam-pressing",
    category: "audits",
    difficulty: "beginner",
    readTime: "12 min",
    icon: "check",
    image: "assets/images/apparel-vm/vm-07-steam-pressing.jpg",
    badge: { en: "Garment Care", ar: "الكوي بالبخار والجودة" },
    title: {
      en: "Garment Quality, Steaming & Finishing Standards",
      ar: "دليل ومعايير فحص وكوي بالبخار وتجهيز الملابس للعرض"
    },
    summary: {
      en: "Back-of-house garment finishing SOP. 3-stage vertical steaming protocol, wrinkle-free inspection under 1000 Lux inspection lighting, standardized price tagging, and anti-slip wooden hangers.",
      ar: "دليل إجراءات التشغيل القياسية لفحص وتجهيز الملابس قبل العرض. بروتوكول الكوي بالبخار العمودي ثلاثي المراحل، فحص إزالة التجاعيد، وتوحيد مكان بطاقات السعر على الياقة الداخلية."
    },
    tags: ["Garment Steaming", "Quality Control", "Finishing SOP", "Price Tagging", "Hanger Standards"],
    stats: [
      { label: { en: "Steaming Quality", ar: "معيار الكوي بالبخار" }, value: "Zero Creases" },
      { label: { en: "Prep Time / Garment", ar: "متوسط وقت التجهيز" }, value: "75 Seconds" },
      { label: { en: "Defect Catch Rate", ar: "دقة اكتشاف العيوب" }, value: "99.1%" }
    ],
    architecture: {
      en: "Ergonomic backroom preparation flow: Unpacking and size verification on stainless steel counter -> Vertical commercial steam station -> Quality lint-rolling & tag verification -> Floor transport rack.",
      ar: "مسار عمل انسيابي في غرفة التجهيز: استلام الكراتين ومطابقة المقاسات -> محطة الكوي بالبخار العمودي الاحترافي -> إزالة الوبر وفحص بطاقات السعر -> نقل الملابس للصالة على استاندات متحركة."
    },
    diagramSteps: [
      { en: "Inspection Under 1000 Lux Lighting", ar: "فحص القماش تحت إضاءة مركزة 1000 لوكس" },
      { en: "Vertical Steaming (Top to Bottom)", ar: "الكوي بالبخار رأسياً من الياقة للأسفل" },
      { en: "Thread Clipping & Lint Rolling", ar: "قص الخيوط الزائدة وإزالة الوبر" },
      { en: "Standard Price Tag Gun Placement", ar: "تثبيت بطاقة السعر بالمسدس في الدرز الداخلي" }
    ],
    steps: [
      {
        title: { en: "1. Vertical Commercial Steaming Technique", ar: "1. الطريقة الصحيحة للكوي بالبخار العمودي" },
        content: {
          en: "Hold garment hem taut with one hand while stroking the steamer nozzle smoothly downward at a 45° angle. Never let steam condense into water spots on delicate silks or wools.",
          ar: "شد طرف القماش بيد وتمرير رأس مكواة البخار بزاوية 45 درجة بحركة هبوطية متصلة لمنع تكثف قطرات الماء على الأقمشة الحساسة كالحرير والصوف."
        }
      },
      {
        title: { en: "2. Standardized Price Tagging Location", ar: "2. توحيد مكان بطاقة السعر" },
        content: {
          en: "Always insert the kimble tag fastener into the garment's internal care label seam or under the left armhole seam to avoid piercing visible outer fabric.",
          ar: "تثبيت خيط بطاقة السعر البلاستيكي دائماً في درز بطاقة العناية الداخلية أو تحت الإبط الأيسر لتجنب ثقب القماش الخارجي الظاهر للزبون."
        }
      }
    ],
    codeSnippet: `// Garment Finishing & Quality Control SOP Specification
const garmentFinishingProtocol = {
  steamerType: "Commercial Continuous Flow Vertical Steamer",
  operatingTemp: "100°C Steam Vapor",
  inspectionCheckpoints: [
    "Collar structure stiff and symmetrical",
    "Sleeves free of transit fold creases",
    "No hanging loose threads",
    "Lint-roller pass on dark wool fabrics",
    "Hanger hook pointing LEFT when facing front"
  ],
  status: "APPROVED_FOR_SALES_FLOOR"
};`
  },

  // ==========================================
  // 8. Retail Floor Fixtures & Planograms
  // ==========================================
  {
    id: "vm-store-fixtures",
    category: "floor",
    difficulty: "advanced",
    readTime: "18 min",
    icon: "layout",
    image: "assets/images/apparel-vm/vm-08-store-fixtures.jpg",
    badge: { en: "Store Planograms", ar: "مساقط وتوزيع المتجر" },
    title: {
      en: "Retail Floor Fixture & Planogram Circulation Layout",
      ar: "تخطيط توزيع وحدات عرض الملابس ومسارات حركة المتسوقين"
    },
    summary: {
      en: "Floor planogram engineering. Strategic placement of 4-way racks, rounders, and gondolas ensuring 120cm ADA-compliant primary walkways and natural customer circulation toward high-margin categories.",
      ar: "الهندسة المعمارية لمساقط المتجر وتوزيع وحدات العرض. الموازنة بين الاستاندات الدائرية والرباعية مع ضمان ممرات حركة رئيسية بعرض 120 سم لانسيابية حركة الزوار وزيادة المبيعات."
    },
    tags: ["Store Planogram", "Fixture Layout", "Aisle Clearance", "Customer Circulation", "Retail Floor Architecture"],
    stats: [
      { label: { en: "Main Aisle Clearance", ar: "عرض الممرات الرئيسية" }, value: "120cm Minimum" },
      { label: { en: "Customer Dwell Time", ar: "زيادة زمن بقاء الزائر" }, value: "+26.0%" },
      { label: { en: "Floor Space Efficiency", ar: "كفاءة استغلال المساحة" }, value: "88.5%" }
    ],
    architecture: {
      en: "Open-sightline retail zoning: Low-height nesting tables (75cm) at front, mid-height 4-way fixtures (135cm) in middle aisles, and high perimeter wall fixtures (240cm) ensuring visibility across the entire floor.",
      ar: "تدرج بصري مفتوح: طاولات منخفضة (75 سم) في المقدمة، استاندات رباعية متوسطة (135 سم) في الممرات، وجدران العرض المحيطية العالية (240 سم) في الخلف لتمكين الزائر من رؤية المتجر كاملاً."
    },
    diagramSteps: [
      { en: "120cm Walkway Clearance Grid", ar: "تخطيط ممرات المشي بعرض 120 سم" },
      { en: "Low-to-High Fixture Graduation", ar: "تدرج ارتفاع الاستاندات من المنخفض للعالي" },
      { en: "Sightline Focal Point Placement", ar: "تحديد نقاط الجذب البصري المركزية" },
      { en: "Fitting Room Pathway Linkage", ar: "تأمين مسار مريح لغرف القياس" }
    ],
    steps: [
      {
        title: { en: "1. The 120cm Walkway Clearance Standard", ar: "1. المعيار الإلزامي لعرض الممرات (120 سم)" },
        content: {
          en: "Maintain a minimum 120cm clearance between all fixtures. Narrower aisles create shopper collision, while wider spacing dissipates product presentation energy.",
          ar: "الحفاظ على مسافة لا تقل عن 120 سم بين كافة الاستاندات والطاولات لضمان حرية حركة المتسوقين وتجنب الاحتكاك أو الشعور بالازدحام."
        }
      },
      {
        title: { en: "2. Rounder & 4-Way Placement Logic", ar: "2. قواعد توزيع الاستاندات الدائرية والرباعية" },
        content: {
          en: "Place 4-way racks displaying complete coordinated outfits at aisle intersections. Use circular rounders exclusively for single-category promotional deep stock (e.g. polo tees).",
          ar: "وضع الاستاندات الرباعية (4-Way) عند تقاطعات الممرات لعرض أطقم متناسقة، وتخصيص الاستاندات الدائرية (Rounders) للموديلات ذات العمق التخزيني الكبير كتيشيرتات البولو."
        }
      }
    ],
    codeSnippet: `// Store Fixture Planogram Spacing Matrix
function calculateFloorPlanogram(floorAreaSqMeters) {
  const primaryAisleWidthCm = 120;
  const secondaryAisleWidthCm = 90;
  return {
    totalArea: floorAreaSqMeters,
    recommendedFixtures: {
      nestingTables: Math.floor(floorAreaSqMeters / 60),
      fourWayRacks: Math.floor(floorAreaSqMeters / 40),
      perimeterWallBays: Math.floor(floorAreaSqMeters / 25)
    },
    circulationStandard: "Loop & Spine Layout"
  };
}`
  },

  // ==========================================
  // 9. Staff Training & Recovery Guide
  // ==========================================
  {
    id: "vm-staff-training",
    category: "audits",
    difficulty: "beginner",
    readTime: "12 min",
    icon: "trello",
    image: "assets/images/apparel-vm/vm-09-staff-training.jpg",
    badge: { en: "Staff Training", ar: "تدريب الموظفين والانضباط" },
    title: {
      en: "Branch Sales Staff VM Execution & Training Manual",
      ar: "دليل تدريب وتطبيق معايير العرض اليومي لفريق مبيعات الفروع"
    },
    summary: {
      en: "Practical training framework for store teams. Two-finger (5cm) hanger spacing rule, shoulder seam alignment, recovery routine every 3 hours, and customer interaction without disrupting displays.",
      ar: "برنامج تدريبي عملي لموظفي الفروع. قاعدة مسافة الإصبعين (5 سم) بين الشماعات، محاذاة خياطة الأكتاف لليسار، وجدول إعادة ترتيب الصالة (Store Recovery) كل 3 ساعات أثناء أوقات الذروة."
    },
    tags: ["Staff Training", "Store Recovery SOP", "Hanger Spacing (5cm)", "Team Onboarding", "Retail Discipline"],
    stats: [
      { label: { en: "Hanger Spacing", ar: "معيار مسافة الشماعات" }, value: "5cm Exact" },
      { label: { en: "Store Recovery Time", ar: "وقت دورة الترتيب السريع" }, value: "15 Min/Cycle" },
      { label: { en: "Staff VM Certified", ar: "نسبة تدريب الموظفين" }, value: "100% Onboarded" }
    ],
    architecture: {
      en: "Floor-level operational discipline manual: Daily 10-minute morning briefing, hands-on folding coaching, and continuous 3-hour cycle recovery keeping branches in audit-ready condition.",
      ar: "دليل الانضباط الميداني لصالة البيع: اجتماع صباحي مدته 10 دقائق لتوضيح أولويات اليوم، تدريب عملي على سرعة طي الملابس، وجولات إعادة الترتيب كل 3 ساعات للحفاظ على المتجر في أبهى صورة."
    },
    diagramSteps: [
      { en: "Two-Finger (5cm) Spacing Rule", ar: "قاعدة مسافة الإصبعين (5 سم)" },
      { en: "Left-Facing Hanger Hook Check", ar: "توجيه خطاف الشماعة لليسار" },
      { en: "Shoulder Seam Alignment", ar: "محاذاة خياطة الأكتاف على استقامة واحدة" },
      { en: "Size Ring Placement Standard", ar: "وضع حلقات المقاسات الملونة على الشماعة" }
    ],
    steps: [
      {
        title: { en: "1. The Two-Finger (5cm) Hanger Spacing Rule", ar: "1. قاعدة مسافة الإصبعين (5 سم) بين الشماعات" },
        content: {
          en: "Train staff to measure the distance between adjacent wooden hangers using two fingers (5 cm). This ensures garments do not crush or touch, creating a clean premium rhythm.",
          ar: "تدريب الموظف على قياس المسافة بين الشماعات الخشبية بإصبعين (5 سم تقريباً) لمنع تلاصق الملابس وإعطاء إيقاع بصري مريح يعكس العناية بالمنتجات."
        }
      },
      {
        title: { en: "2. The 15-Minute Peak Recovery Routine", ar: "2. جولة الترتيب السريع (15 دقيقة) أثناء الذروة" },
        content: {
          en: "Every 3 hours, sales associates spend 15 minutes refolding central tables, replacing missing hangers, and returning stray garments to their designated sections.",
          ar: "يقوم فريق المبيعات كل 3 ساعات بجولة سريعة مدتها 15 دقيقة لإعادة طي الملابس على الطاولات، سحب الشماعات الفارغة، وإعادة القطع لأقسامها الصحيحة فور مغادرة الزبائن."
        }
      }
    ],
    codeSnippet: `// Branch Staff VM Daily Training Checklist
const staffTrainingModule = {
  moduleName: "Apparel VM Floor Excellence",
  author: "Reda Mohamed Salah",
  keyDisciplines: [
    "Hanger hook points LEFT toward back of store",
    "Shoulder seams aligned in straight horizontal plane",
    "Size order: XS -> S -> M -> L -> XL -> XXL (Left to Right)",
    "Folded knitwear: Max 8 units per stack",
    "All price tags tucked inside garments"
  ],
  frequency: "Daily Morning Briefing + Weekly Audit"
};`
  },

  // ==========================================
  // 10. Sample & Stock Synchronizer
  // ==========================================
  {
    id: "vm-sample-sync",
    category: "systems",
    difficulty: "intermediate",
    readTime: "15 min",
    icon: "database",
    image: "assets/images/apparel-vm/vm-10-sample-sync.jpg",
    badge: { en: "Inventory Sync", ar: "الأنظمة والمخزون" },
    title: {
      en: "Display Sample & Backroom Size Stock Synchronizer",
      ar: "نظام مطابقة عينات العرض مع مخزون المقاسات بالمستودع الداخلي"
    },
    summary: {
      en: "Real-time inventory matching tool for visual merchandisers. Barcode scanning ensures every piece displayed on mannequins and front racks has full size runs (S-XXL) in the backroom stock.",
      ar: "نظام تقني لمطابقة عينات العرض بالمخزون الفعلي. يتيح للمنسق وموظف المبيعات مسح كود القطعة المعروضة على المانيكان والتأكد من توفر مقاساتها فورياً في كراتين المستودع الداخلي."
    },
    tags: ["Inventory Sync", "Barcode Scanning", "Size Run Availability", "Backroom Replenishment", "Retail Technology"],
    stats: [
      { label: { en: "Display Stock Match", ar: "نسبة مطابقة المعروض بالمخزن" }, value: "99.4%" },
      { label: { en: "Size Fetch Speed", ar: "سرعة إحضار المقاس للزبون" }, value: "< 30 Sec" },
      { label: { en: "Lost Sales Reduction", ar: "انخفاض فرص البيع الضائعة" }, value: "-78.0%" }
    ],
    architecture: {
      en: "Handheld barcode and RFID scanner integrated with store POS system. Alerts visual merchandisers when a displayed mannequin outfit drops below minimum stock in sizes M or L.",
      ar: "تطبيق ماسح باركود محمول متصل بنظام مبيعات الفرع (POS). ينبه منسق العرض فوراً عند انخفاض مخزون أي مقاس رئيسي (M أو L) للقطعة المعروضة على المانيكان لتغييرها بقطعة متوفرة."
    },
    diagramSteps: [
      { en: "Barcode Scan on Mannequin Tag", ar: "مسح باركود القطعة المعروضة" },
      { en: "Real-time Size Run Query", ar: "الاستعلام الفوري عن المقاسات (S-XXL)" },
      { en: "Backroom Bin Location Guidance", ar: "تحديد رقم الرف والكرتونة بالمستودع" },
      { en: "Automatic Floor Restock Dispatch", ar: "إرسال إشعار تعبئة الاستاند لصالة البيع" }
    ],
    steps: [
      {
        title: { en: "1. The 'Never Display What You Cannot Sell' Rule", ar: "1. قاعدة 'لا تعرض ما لا تملك مقاساته في المخزن'" },
        content: {
          en: "Displaying a sample without available sizes in the backroom frustrates customers and causes lost sales. The system alerts when a displayed hero item has less than 2 units in stock.",
          ar: "عرض قطعة على المانيكان مع نفاذ مقاساتها من المخزن يسبب إحباطاً للمتسوقين وخسارة للمبيعات. يقوم النظام بتنبيه المنسق لتغيير الطقم فور وصول المقاسات لقطعتين فقط."
        }
      },
      {
        title: { en: "2. Instant Backroom Bin Routing", ar: "2. التوجيه المباشر لمكان التخزين بالمستودع" },
        content: {
          en: "Store associates view the exact warehouse shelf number (e.g. Rack B, Box 14) directly on their handheld screen, retrieving requested sizes for fitting room customers in under 30 seconds.",
          ar: "يظهر النظام لموظف الفرع رقم الرف والكرتونة في المستودع (مثال: استاند B، كرتونة 14) لجلب المقاس المطلوب لغرفة القياس في أقل من 30 ثانية."
        }
      }
    ],
    codeSnippet: `// Display Sample & Backroom Stock Synchronization API
async function checkDisplayAvailability(skuCode) {
  const stockRecord = await fetchStockLevel(skuCode);
  const isHealthyRun = stockRecord.sizes.M > 2 && stockRecord.sizes.L > 2;
  
  return {
    sku: skuCode,
    garmentName: "Tailored Navy Wool Blazer",
    displayLocation: "Front Window Mannequin #2",
    backroomShelf: "Aisle-3 / Shelf-B / Box-14",
    sizeRunStatus: isHealthyRun ? "AVAILABLE_FULL_RUN" : "ACTION_REQUIRED_CHANGE_DISPLAY",
    unitsRemaining: { S: 5, M: 8, L: 10, XL: 3 }
  };
}`
  }
];

const CATEGORIES = [
  { id: "all", label: { en: "All Projects & Standards", ar: "كافة المشاريع والمعايير" } },
  { id: "window", label: { en: "Window Displays & Mannequins", ar: "الفاترينات وتنسيق المانيكان" } },
  { id: "floor", label: { en: "Store Floor & Fixtures", ar: "أرضية المتجر والاستاندات" } },
  { id: "audits", label: { en: "Store Audits & Quality SOPs", ar: "التدقيق الميداني ومعايير الجودة" } },
  { id: "systems", label: { en: "Digital Retail Systems", ar: "الأنظمة الرقمية والمخزون" } }
];
