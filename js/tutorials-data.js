// TechCraft Hub - Master Showcase & Visual Merchandising Engineering Dataset (2026)
const TUTORIALS_DATA = [
  // ==========================================
  // Visual Merchandising & Retail Design (10 Projects with AI Images)
  // ==========================================
  {
    id: "vm-luxstore-facade",
    category: "vm",
    difficulty: "advanced",
    readTime: "20 min",
    icon: "layout",
    image: "assets/images/vm/vm-01-facade.jpg",
    badge: { en: "Retail Architecture", ar: "هندسة واجهات ومتاجر" },
    title: {
      en: "LuxStore Facade & 3D Window Display Architecture",
      ar: "استوديو تصميم واجهات المتاجر ونوافذ العرض الفاخرة ثلاثية الأبعاد"
    },
    summary: {
      en: "Engineering high-end luxury storefronts and theatrical window displays. Master photometric sightlines, dramatic directional spotlights, and bespoke mannequin staging.",
      ar: "هندسة وتصميم واجهات المتاجر الفاخرة ونوافذ العرض السينمائية. دراسة زوايا الرؤية الخارجية، حسابات الإضاءة المسلطة، وتنسيق منصات المانيكان وفق أعلى معايير بيوت الأزياء العالمية."
    },
    tags: ["Window Display", "Facade Architecture", "Spotlight Lux", "Luxury Fashion", "Mannequin Staging"],
    stats: [
      { label: { en: "Visual Impact", ar: "قوة الجذب البصري" }, value: "+45%" },
      { label: { en: "Pedestrian Stop Rate", ar: "نسبة توقف المارة" }, value: "38.4%" },
      { label: { en: "Contrast Ratio", ar: "نسبة تباين الإضاءة" }, value: "5:1 Theatrical" }
    ],
    architecture: {
      en: "Multi-layered visual depth composition: Front focal plane featuring hero mannequins on brushed brass pedestals, mid-ground architectural arches, and high-CRI 95+ warm spotlighting.",
      ar: "تركيب بصري ثلاثي الطبقات: طبقة أمامية تضم المانيكانات الرئيسية على منصات نحاسية، طبقة وسطى من الأقواس المعمارية والرخام الداكن، وإضاءة مسلطة دافئة بمعامل CRI 95+."
    },
    diagramSteps: [
      { en: "Sightline & Angle Analysis", ar: "تحليل زوايا رؤية المارة" },
      { en: "Pyramid Mannequin Staging", ar: "التوزيع الهرمي للمانيكان" },
      { en: "Photometric Beam Alignment", ar: "توجيه حزم الإضاءة المركزة" },
      { en: "Prop & Material Contrast", ar: "موازنة المواد والرخام والنحاس" }
    ],
    steps: [
      {
        title: { en: "1. The 3-Second Pedestrian Sightline Formula", ar: "1. قاعدة الـ 3 ثوانٍ لخط رؤية المارة" },
        content: {
          en: "Align the primary focal point at 150cm to 170cm height from ground level to intersect natural human gaze at 4 meters distance from the glass window.",
          ar: "ضبط نقطة الجذب البصري الرئيسية على ارتفاع 150 إلى 170 سم من مستوى الأرض لتتلاقى مع النظر الطبيعي للمارة على بُعد 4 أمتار من زجاج الواجهة."
        }
      },
      {
        title: { en: "2. Theatrical Contrast Ratio (5:1)", ar: "2. نسبة التباين المسرحي (5 إلى 1)" },
        content: {
          en: "Direct concentrated 3000K warm spotlights at 1500 Lux onto the garments while keeping surrounding backdrop at 300 Lux to create dramatic perceived luxury.",
          ar: "تسليط إضاءة موجهة دافئة 3000K بشدة 1500 لوكس على الملابس مع إبقاء الخلفية المحيطة عند 300 لوكس لصنع تباين درامي فخم يخطف الأنظار ليلاً."
        }
      }
    ],
    codeSnippet: `/* CSS / Visual Calculation Matrix for Window Lux Distribution */
:root {
  --focal-lux: 1500;
  --ambient-lux: 300;
  --contrast-ratio: calc(var(--focal-lux) / var(--ambient-lux)); /* 5.0 Theatrical Ratio */
  --beam-angle-spotlight: 24deg;
  --color-temp-kelvin: 3000K;
  --cri-index: 97;
}

.window-display-spec {
  elevation-focal-center: 160cm;
  mannequin-spacing: 75cm;
  materials: "Nero Marquina Marble", "Brushed Champagne Brass";
}`
  },
  {
    id: "vm-mannequin-styling",
    category: "vm",
    difficulty: "intermediate",
    readTime: "16 min",
    icon: "layout",
    image: "assets/images/vm/vm-02-mannequin.jpg",
    badge: { en: "Styling Studio", ar: "استوديو المانيكان" },
    title: {
      en: "Haute Couture Mannequin Outfitting & Styling Studio",
      ar: "استوديو تنسيق وتلبيس المانيكان والأزياء الراقية"
    },
    summary: {
      en: "Master-level visual styling rules: Triangle and pyramid formations, fabric drape physics, silhouette balancing, and multi-piece capsule layering.",
      ar: "قواعد تنسيق وتلبيس المانيكان الاحترافية: التكوين الهرمي والمثلثي المتوازن، فيزياء انسدال الأقمشة الفاخرة، ومطابقة التدرجات اللونية للمجموعات الموسمية."
    },
    tags: ["Mannequin Styling", "Color Harmony", "Silhouette Balance", "Luxury Outfitting", "Visual Merchandising"],
    stats: [
      { label: { en: "Full Look Conversion", ar: "تحويل الطقم الكامل" }, value: "+32%" },
      { label: { en: "Layering Pieces", ar: "متوسط قطع الإطلالة" }, value: "3.8 items" },
      { label: { en: "Styling Hierarchy", ar: "التوازن الهرمي" }, value: "Triangle Rule" }
    ],
    architecture: {
      en: "Dynamic 3-point triangulation: Central apex mannequin in full editorial eveningwear flanked by two grounded supporting silhouettes creating visual rhythm.",
      ar: "تكوين مثلثي ثلاثي الأبعاد: مانيكان محوري في قمة التكوين بالإطلالة المسائية الرئيسية، تحيط به إطلالتان مكملتان متوازنتان لصنع إيقاع بصري سلس."
    },
    diagramSteps: [
      { en: "Silhouette & Proportion", ar: "تحديد القوام والنسب" },
      { en: "Base Outfit Layering", ar: "تلبيس الطبقة الأساسية" },
      { en: "Capsule Outerwear & Draping", ar: "تنسيق المعطف والانسدال" },
      { en: "Accessory Anchoring", ar: "إضافة الإكسسوارات والحقائب" }
    ],
    steps: [
      {
        title: { en: "1. The Triangle Formation Rule", ar: "1. قاعدة التكوين المثلثي المتوازن" },
        content: {
          en: "Always position the tallest or most visually complex mannequin at the center-rear apex, with flanking figures staggered 30cm forward and angled 15 degrees inward.",
          ar: "ضع المانيكان الأكثر تفصيلاً في قمة المثلث في الخلف، مع تقديم المانيكانين الجانبيين بمقدار 30 سم للأمام وتدويرهما 15 درجة نحو المركز لقيادة عين الزائر."
        }
      },
      {
        title: { en: "2. Pinning & Tailoring Tension", ar: "2. شد وقص وخياطة التثبيت غير المرئي" },
        content: {
          en: "Garments must fit as if custom bespoke: use hidden interior dressmaker pins along seam lines to eliminate wrinkles and sculpt ideal drape.",
          ar: "يجب أن تظهر القطع وكأنها خياطة خاصة ومفصلة: استخدم دبابيس التثبيت المخفية على طول خطوط الخياطة الداخلية لإبراز القوام بدون أي تجاعيد غير مقصودة."
        }
      }
    ],
    codeSnippet: `// Mannequin Styling Proportion Rules
const STYLING_RULES = {
  formation: "Dynamic Triangle",
  apexMannequin: { heightOffset: "+15cm", angle: "0deg", role: "Hero Statement" },
  leftFlank: { offsetZ: "-30cm", angle: "+15deg", role: "Complementary Monochromatic" },
  rightFlank: { offsetZ: "-30cm", angle: "-15deg", role: "Casual Tailored" },
  colorPalette: ["Midnight Navy", "Forest Green", "Champagne Silk", "Charcoal Cashmere"]
};`
  },
  {
    id: "vm-planogram-density",
    category: "vm",
    difficulty: "advanced",
    readTime: "22 min",
    icon: "layout",
    image: "assets/images/vm/vm-03-planogram.jpg",
    badge: { en: "Spatial Engineering", ar: "هندسة المساحات" },
    title: {
      en: "Spatial Density & 3D Planogram Layout Optimizer",
      ar: "محرك تخطيط البلانوجرام وكثافة المساحات والتوزيع الهندسي"
    },
    summary: {
      en: "Algorithmic floor space and capacity allocation for flagship department stores. Prevent visual clutter, optimize aisle clearance, and maximize linear meter ROI.",
      ar: "محرك حساب الكثافة المكانية للأرفف وطاولات العرض لمنع التكدس البصري، وتنسيق ممرات المشي المريحة، وتحقيق أعلى عائد مالي لكل متر طولي من العرض."
    },
    tags: ["Planogram 3D", "Floor Layout", "Capacity Planning", "Retail Density", "Visual Merchandising"],
    stats: [
      { label: { en: "Space Utilization", ar: "استغلال المساحة" }, value: "94.2%" },
      { label: { en: "Aisle Comfort Clearance", ar: "عرض ممرات التسوق" }, value: "1.8 Meters" },
      { label: { en: "Basket Lift", ar: "ارتفاع قيمة السلة" }, value: "+26%" }
    ],
    architecture: {
      en: "Bi-symmetric floor layout with central low-profile folding display islands flanked by perimeter floating wall shelving units.",
      ar: "تخطيط متماثل ثنائي المحور: جزر منخفضة في قلب الصالة لعرض الملابس المطوية مع جدران محيطية معلقة تمنح شعوراً بالاتساع والرحابة."
    },
    diagramSteps: [
      { en: "Floor Blueprint Grid", ar: "رسم شبكة أبعاد المتجر" },
      { en: "Aisle Clearance Buffer", ar: "تحديد ممرات الحركة المريحة" },
      { en: "Fixture Density Balancing", ar: "موازنة كثافة الأرفف والشماعات" },
      { en: "Color Wave Execution", ar: "تنفيذ التموج اللوني المنسق" }
    ],
    steps: [
      {
        title: { en: "1. Linear Density per Meter Metric", ar: "1. معيار كثافة القطع لكل متر طولي" },
        content: {
          en: "Luxury standards mandate maximum 12-14 hanging items per linear meter on display rails to preserve individual garment prestige and breathing room.",
          ar: "المعايير العالمية للمتاجر الفاخرة تشترط ألا يزيد عدد القطع المعلقة عن 12 إلى 14 قطعة لكل متر طولي لمنح كل تصميم قيمته ومنع التزاحم."
        }
      },
      {
        title: { en: "2. Color Wave Sequencing", ar: "2. تسلسل التموج اللوني (Color Wave)" },
        content: {
          en: "Organize hanging garments from light to dark (White -> Camel -> Forest -> Navy -> Black) to guide natural reading direction.",
          ar: "ترتيب القطع المعلقة من الفاتح إلى الداكن (أبيض، كاميل، أخضر، كحلي، أسود) ليتماشى مع اتجاه القراءة البصرية الطبيعية للعين."
        }
      }
    ],
    codeSnippet: `// Linear Merchandising Density Calculator
function calculateOptimalDensity(railLengthMeters, luxuryTier = "PREMIUM") {
  const maxItemsPerMeter = luxuryTier === "ULTRA_LUXURY" ? 10 : 14;
  const targetItems = Math.floor(railLengthMeters * maxItemsPerMeter);
  const spacingBetweenHangersCm = (railLengthMeters * 100) / targetItems;
  
  return {
    targetCapacity: targetItems,
    hangerSpacing: \`\${spacingBetweenHangersCm.toFixed(1)} cm\`,
    visualClutterIndex: "OPTIMAL_BREATHING_ROOM"
  };
}`
  },
  {
    id: "vm-ai-audit",
    category: "vm",
    difficulty: "advanced",
    readTime: "25 min",
    icon: "cpu",
    image: "assets/images/vm/vm-04-ai-audit.jpg",
    badge: { en: "AI & Computer Vision", ar: "ذكاء اصطناعي وتدقيق" },
    title: {
      en: "AI Computer Vision Visual Merchandising Compliance Suite",
      ar: "منظومة الذكاء الاصطناعي لتدقيق هوية الفروع ومعايير العرض"
    },
    summary: {
      en: "Autonomous computer vision system that audits store photographs against golden planograms. Detects missing SKUs, misaligned hangers, and wrong color orders instantly.",
      ar: "منظومة ذكاء اصطناعي ورؤية حاسوبية تفحص صور الفروع ومقارنتها تلقائياً بالبلانوجرام المعتمد واكتشاف أي انحراف في ترتيب الألوان أو مسافات الشماعات في ثوانٍ."
    },
    tags: ["AI Vision", "Multi-Branch Audit", "Compliance Score", "Planogram Verification", "Automated Detection"],
    stats: [
      { label: { en: "Audit Accuracy", ar: "دقة الفحص الآلي" }, value: "98.9%" },
      { label: { en: "Audit Speed", ar: "سرعة التدقيق" }, value: "1.2 seconds" },
      { label: { en: "Brand Uniformity", ar: "مطابقة هوية الفروع" }, value: "99.4%" }
    ],
    architecture: {
      en: "Edge tablet camera stream fed to YOLO-based object detection model segmenting individual display bays, bounding hanger spacing, and validating SKU color codes.",
      ar: "التقاط صور العرض عبر الأجهزة اللوحية وتحليلها بنموذج ذكاء اصطناعي يحدد مربعات الفحص لكل رف ويقيس المسافات ويطابق رموز الألوان مع المعايير."
    },
    diagramSteps: [
      { en: "Photo Capture", ar: "التقاط صورة واجهة العرض" },
      { en: "Bay & Shelf Segmentation", ar: "تحديد الأرفف والأقسام" },
      { en: "SKU & Spacing Analysis", ar: "مطابقة المنتجات والمسافات" },
      { en: "Instant Compliance Score", ar: "توليد نسبة الامتثال الفورية" }
    ],
    steps: [
      {
        title: { en: "1. Bounding Box Alignment", ar: "1. تحديد مربعات المحاذاة الذكية" },
        content: {
          en: "The vision model detects shelf boundaries and calculates variance in hanger gaps, flagging any deviations exceeding 2cm threshold in red overlay.",
          ar: "يقوم النموذج بتحديد حدود الأرفف وحساب المسافات بين الشماعات بدقة، ويبرز أي انحراف يتجاوز 2 سم بلون أحمر تحذيري لمعالجته فوراً."
        }
      }
    ],
    codeSnippet: `# AI Computer Vision Planogram Inspector
import cv2
import numpy as np

def verify_display_compliance(image_path: str, reference_planogram_sku_order: list):
    img = cv2.imread(image_path)
    detected_items = model.detect_garments(img)
    
    compliance_score = 100.0
    anomalies = []
    
    for idx, expected_sku in enumerate(reference_planogram_sku_order):
        actual_sku = detected_items[idx]
        if actual_sku.code != expected_sku:
            compliance_score -= 10.0
            anomalies.append(f"Mismatched SKU at pos {idx}: expected {expected_sku}")
            
    return {"compliance_percentage": compliance_score, "anomalies": anomalies}`
  },
  {
    id: "vm-lighting-lux",
    category: "vm",
    difficulty: "intermediate",
    readTime: "18 min",
    icon: "zap",
    image: "assets/images/vm/vm-05-lighting.jpg",
    badge: { en: "Lighting Engineering", ar: "هندسة الإضاءة واللوكس" },
    title: {
      en: "Photometric Lighting & Lumens Visualizer for Boutiques",
      ar: "نظام محاكاة الإضاءة البصرية وحسابات اللوكس وتركيز البقع الضوئية"
    },
    summary: {
      en: "Architectural lighting engineering for high-end luxury stores. Balance 15° to 36° narrow beam accents, 3000K Kelvin warmth, and 98 CRI color rendering index.",
      ar: "هندسة الإضاءة المعمارية للمتاجر الراقية. موازنة زوايا الحزم الضوئية الضيقة (15° إلى 36°)، درجة الحرارة الكلفنية 3000K، ومعامل نقاء الألوان 98 CRI."
    },
    tags: ["Photometrics", "Beam Angle", "Lux Calculations", "Theatrical Retail Lighting", "CRI 98"],
    stats: [
      { label: { en: "Focal Lux", ar: "شدة إضاءة النقطة البؤرية" }, value: "2,200 Lux" },
      { label: { en: "Color Rendering (CRI)", ar: "معامل نقاء الألوان" }, value: "98 Ra" },
      { label: { en: "Energy Efficiency", ar: "توفير الطاقة LED" }, value: "65% Saved" }
    ],
    architecture: {
      en: "Multi-circuit ceiling track matrix with precision DALI dimming, isolating key pedestals with sharp elliptical spotlights while bathing perimeter in soft 400 Lux ambient.",
      ar: "شبكة مسارات سقف متعددة الدوائر مع تحكم رقمي DALI، تسلط بقعاً ضوئية بيضاوية دقيقة على المنتجات البطلة مع إضاءة محيطية ناعمة لباقي المتجر."
    },
    diagramSteps: [
      { en: "Ceiling Grid Map", ar: "تخطيط مسارات الإضاءة في السقف" },
      { en: "Beam Angle Selection", ar: "اختيار زوايا الحزم الضوئية" },
      { en: "Lux Ratio Calculation", ar: "حساب نسب تباين اللوكس" },
      { en: "Glare Elimination Shielding", ar: "حجب الوهج المباشر عن المتسوق" }
    ],
    steps: [
      {
        title: { en: "1. Beam Angle Focus Formula", ar: "1. معادلة زاوية الحزمة الضوئية" },
        content: {
          en: "A 24-degree spot at 3.2m ceiling height yields an illuminated circle of exactly 1.35m diameter on display pedestals, perfectly framing hero accessories.",
          ar: "كشاف بزاوية حزمة 24 درجة على ارتفاع سقف 3.2 متر ينتج دائرة ضوئية قطرها 1.35 متر على منصة العرض، مما يبرز القطعة الذهبية بإحكام تام."
        }
      }
    ],
    codeSnippet: `// Photometric Illumination Math
function calculateBeamDiameter(beamAngleDegrees, mountingHeightMeters) {
  const radians = (beamAngleDegrees * Math.PI) / 180;
  const beamDiameterMeters = 2 * mountingHeightMeters * Math.tan(radians / 2);
  const targetAreaSqMeters = Math.PI * Math.pow(beamDiameterMeters / 2, 2);
  
  return {
    beamDiameter: \`\${beamDiameterMeters.toFixed(2)} meters\`,
    coverageArea: \`\${targetAreaSqMeters.toFixed(2)} m²\`,
    opticalClassification: "HERO_FOCAL_BEAM"
  };
}`
  },
  {
    id: "vm-perfumery-display",
    category: "vm",
    difficulty: "intermediate",
    readTime: "15 min",
    icon: "layout",
    image: "assets/images/vm/vm-06-perfumery.jpg",
    badge: { en: "Sensory Merchandising", ar: "العرض الحسي الفاخر" },
    title: {
      en: "Luxury Perfumery & Cosmetics Display Architecture",
      ar: "معرض ومنظومة عرض العطور ومستحضرات التجميل الفاخرة"
    },
    summary: {
      en: "Display engineering for prestige fragrances, cosmetics, and jewelry. Backlit fluted glass shelves, brass trims, and ergonomic testing riser tiers.",
      ar: "هندسة العرض الحسي للعطور ومستحضرات التجميل والمجوهرات. أرفف زجاجية مثلجة مضيئة خلفياً، حواف نحاسية فاخرة، ومدرجات عرض مخملية مريحة للمعاينة."
    },
    tags: ["Fragrance Display", "Backlit Acrylic", "Ergonomic Shelving", "Sensory Merchandising", "Luxury Retail"],
    stats: [
      { label: { en: "Tester Engagement", ar: "معدل تجربة العطور" }, value: "+54%" },
      { label: { en: "Backlight Uniformity", ar: "تجانس الإضاءة الخلفية" }, value: "99.5%" },
      { label: { en: "Dwell Time", ar: "متوسط وقت التوقف" }, value: "4.8 mins" }
    ],
    architecture: {
      en: "Radial island counter with 360-degree perimeter circulation, integrated scent testing blotter slots, and concealed warm LED diffuser channels.",
      ar: "منصة دائرية تتيح حركة حرة 360 درجة، مع قنوات إضاءة LED مخفية وأماكن مدمجة لشرائط التجربة وسلال المهملات النحاسية الفاخرة."
    },
    diagramSteps: [
      { en: "Radial Island Blueprint", ar: "تصميم المنصة الدائرية" },
      { en: "Backlit Fluted Glass Tier", ar: "تركيب الزجاج المضلع المضيء" },
      { en: "Velvet Riser Ergonomics", ar: "تنسيق مدرجات العرض المخملية" },
      { en: "Tester Bottle Placement", ar: "توزيع زجاجات التجربة الأمامية" }
    ],
    steps: [
      {
        title: { en: "1. Backlit Refraction Engineering", ar: "1. انكسار الضوء عبر الزجاج المضلع" },
        content: {
          en: "Direct 3500K edge-lit acrylic light guides behind fluted glass to transmit soft luminous gradients through crystal perfume bottles without creating heat.",
          ar: "استخدام موجهات ضوء أكريليك 3500K خلف الزجاج المضلع لتمرير الضوء عبر زجاجات الكريستال الفاخرة دون توليد أي حرارة تؤثر على العطر."
        }
      }
    ],
    codeSnippet: `/* Luxury Backlit Fragrance Shelf */
.perfume-shelf-tier {
  background: linear-gradient(180deg, #161e2e, #0c121e);
  border: 1px solid rgba(212, 175, 55, 0.3); /* Champagne Gold */
  backdrop-filter: blur(20px);
  padding: 18px 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 25px rgba(212, 175, 55, 0.15);
}`
  },
  {
    id: "vm-shopper-heatmap",
    category: "vm",
    difficulty: "advanced",
    readTime: "24 min",
    icon: "zap",
    image: "assets/images/vm/vm-07-heatmap.jpg",
    badge: { en: "Retail Analytics", ar: "تحليلات مسار المتسوق" },
    title: {
      en: "Shopper Foot-Traffic Heatmap & Journey Studio",
      ar: "نظام الخرائط الحرارية لمسار الزوار ونقاط الجذب البصري"
    },
    summary: {
      en: "Transform store spatial flow with AI traffic heatmaps. Identify dead zones, high-dwell hotspots, and optimize focal display placement along the primary circulation path.",
      ar: "تتبع حركة المتسوقين داخل المتجر بالخرائط الحرارية الرقمية. اكتشاف المناطق الميتة ومناطق التوقف الطويل، ونقل المنتجات الأكثر ربحية إلى قلب مسار الحركة."
    },
    tags: ["Heatmap Analytics", "Customer Journey", "Dwell Time", "Visual Focal Points", "Foot Traffic"],
    stats: [
      { label: { en: "Dead Zone Recovery", ar: "تنشيط المناطق الميتة" }, value: "+41%" },
      { label: { en: "Average Dwell Lift", ar: "زيادة وقت التوقف" }, value: "+3.2 mins" },
      { label: { en: "Sales per Sq Meter", ar: "مبيعات المتر المربع" }, value: "+28%" }
    ],
    architecture: {
      en: "Ceiling-mounted optical sensors triangulating customer velocity and dwell intervals, rendering 3-tier glowing heatmap trails (Cyan: Transitory, Violet: Moderate, Amber: Sustained).",
      ar: "حساسات بصرية في السقف تقيس سرعة وفترات توقف المتسوقين، وترسم مسارات حرارية ملونة (السيان: عبور سريع، البنفسجي: توقف متوسط، البرتقالي: تفاعل طويل)."
    },
    diagramSteps: [
      { en: "Store Floor Optical Tracking", ar: "التتبع البصري لأرضية المتجر" },
      { en: "Dwell Time Clustering", ar: "تجميع فترات التوقف" },
      { en: "Hotspot Identification", ar: "تحديد نقاط الجذب الساخنة" },
      { en: "Display Re-merchandising", ar: "إعادة توزيع المنتجات والعرض" }
    ],
    steps: [
      {
        title: { en: "1. Decompression Zone Navigation", ar: "1. إدارة منطقة تخفيف السرعة عند المدخل" },
        content: {
          en: "The first 3-4 meters inside the store is the Decompression Zone. Never place key promotional products here; position high-impact focal displays starting at meter 5.",
          ar: "أول 3 إلى 4 أمتار من المدخل تسمى منطقة تخفيف السرعة، ولا يجب وضع المنتجات المهمة فيها، بل تبدأ العروض البصرية الجاذبة ابتداءً من المتر الخامس."
        }
      }
    ],
    codeSnippet: `// Store Dwell Time & Hotspot Engine
function analyzeStoreTraffic(trackingCoordinates) {
  const hotspots = trackingCoordinates.filter(c => c.dwellDurationSeconds > 45);
  const deadzones = trackingCoordinates.filter(c => c.dwellDurationSeconds < 5);
  
  return {
    primaryGoldenPath: "Clockwise Perimeter Flow",
    recommendedRelocation: "Move hero collection to Bay 4 (Amber Zone)",
    roiIncreaseProjection: "+18.5%"
  };
}`
  },
  {
    id: "vm-popup-architecture",
    category: "vm",
    difficulty: "advanced",
    readTime: "20 min",
    icon: "layout",
    image: "assets/images/vm/vm-08-popup.jpg",
    badge: { en: "Pop-Up Architecture", ar: "عمارة المتاجر المؤقتة" },
    title: {
      en: "Seasonal Campaign & Pop-Up Architecture Designer",
      ar: "مصمم الحملات الموسمية والمتاجر المؤقتة الفاخرة (Pop-Up)"
    },
    summary: {
      en: "Architecting ephemeral retail pavilions and high-impact seasonal fashion installations. Curved iridescent dichroic glass, neon ribbons, and brand immersion pedestals.",
      ar: "تصميم الأجنحة المعمارية المؤقتة للمتاجر العالمية والحملات الحصرية. جدران زجاجية متغيرة الألوان (Dichroic Glass)، أشرطة نيون حركية، وقواعد عرض نحتية للأزياء."
    },
    tags: ["Pop-Up Pavilion", "Retail Installation", "Seasonal Campaigns", "Brand Immersion", "Dichroic Glass"],
    stats: [
      { label: { en: "Footfall Multiplier", ar: "مضاعفة حركة الزوار" }, value: "3.4x" },
      { label: { en: "Social Media Shares", ar: "المشاركات الرقمية" }, value: "+120%" },
      { label: { en: "Modular Reusability", ar: "إعادة الاستخدام المعياري" }, value: "85%" }
    ],
    architecture: {
      en: "Self-supporting double-curved glass shell with integrated linear floor illumination and plug-and-play modular display units for 48-hour rapid deployment.",
      ar: "هيكل زجاجي منحني ذاتي التدعيم مزود بإضاءة خطية مدمجة في الأرضية ووحدات عرض معيارية قابلة للتركيب والتفكيك السريع في غضون 48 ساعة."
    },
    diagramSteps: [
      { en: "Atrium Space Blueprint", ar: "مخطط موقع البهو الرئيسي" },
      { en: "Dichroic Glass Fabrication", ar: "تصنيع الألواح الزجاجية المتدرجة" },
      { en: "Integrated Floor Neon Runs", ar: "تمديد مسارات النيون الأرضية" },
      { en: "VIP Product Podiums", ar: "تركيب منصات العرض الحصرية" }
    ],
    steps: [
      {
        title: { en: "1. 360-Degree Photogenic Design", ar: "1. التصميم البصري الجذاب للمشاركة (360°)" },
        content: {
          en: "Every angle of the pop-up pavilion must serve as a high-contrast editorial photo backdrop for visitors, multiplying viral social reach organically.",
          ar: "يجب أن تكون كل زاوية في الجناح المؤقت خلفية تصوير مثالية ومبهرة للمتسوقين، مما يضاعف الانتشار الرقمي للحملة على منصات التواصل بشكل طبيعي."
        }
      }
    ],
    codeSnippet: `// Modular Pop-Up Deployment Blueprint
const POPUP_CONFIG = {
  footprintArea: "120 sq meters",
  materials: ["Curved Dichroic Glass", "Cast Concrete Benches", "Brushed Aluminum Trim"],
  lighting: "Addressable DMX Neo-Pixel Runs",
  assemblyDurationHours: 48,
  expectedDailyEngagement: 4500
};`
  },
  {
    id: "vm-color-harmony",
    category: "vm",
    difficulty: "beginner",
    readTime: "14 min",
    icon: "globe",
    image: "assets/images/vm/vm-09-color-harmony.jpg",
    badge: { en: "Color & Capsule", ar: "تناغم الألوان والكبسولة" },
    title: {
      en: "Color Harmony & Seasonal Wardrobe Capsule Matrix",
      ar: "مصفوفة تناغم الألوان وتنسيق المجموعات الموسمية الكبسولية"
    },
    summary: {
      en: "Color theory mastery in retail visual merchandising. Gradient tonal transitions, triadic wardrobe balancing, and capsule collection wall coordination.",
      ar: "إتقان نظرية الألوان في تنسيق الجدران العرضية للمتاجر. التدريج اللوني الانسيابي (من الأزرق الملكي إلى الكاميل والأبيض)، وتنسيق المجموعات الكبسولية المترابطة."
    },
    tags: ["Color Blocking", "Capsule Wardrobe", "Tonal Balancing", "Wall Display", "Visual Merchandising"],
    stats: [
      { label: { en: "Cross-Sell Ratio", ar: "نسبة البيع المتقاطع" }, value: "+34%" },
      { label: { en: "Visual Balance Index", ar: "مؤشر التوازن البصري" }, value: "100%" },
      { label: { en: "Browse Duration", ar: "زمن استعراض الجدار" }, value: "3.5 mins" }
    ],
    architecture: {
      en: "Tonal rhythm wall architecture: Long hanging garments flanked by coordinated folded knitwear stacks, illuminated by recessed 3000K warm cove uplighting.",
      ar: "هندسة الجدار الإيقاعي: ملابس معلقة طويلة تتوسطها أعمدة أزياء مطوية منسقة لونياً، مع إضاءة خفية دافئة تبرز ألوان الأقمشة الطبيعية."
    },
    diagramSteps: [
      { en: "Color Palette Selection", ar: "اختيار لوحة ألوان الموسم" },
      { en: "Tonal Flow Left-to-Right", ar: "التدريج اللوني من اليسار لليمين" },
      { en: "Hanging vs Folding Balance", ar: "الموازنة بين المعلق والمطوي" },
      { en: "Accessory Color Anchors", ar: "توزيع الإكسسوارات كمثبتات لونية" }
    ],
    steps: [
      {
        title: { en: "1. The 60-30-10 Retail Color Ratio", ar: "1. قاعدة 60-30-10 لتوزيع ألوان الجدار" },
        content: {
          en: "Assign 60% dominant neutral (Midnight Navy), 30% secondary warmth (Camel & Sand), and 10% high-contrast accent (Crisp White) for optical luxury.",
          ar: "خصص 60% للون الأساسي الهادئ (الكحلي الملكي)، 30% للون الثانوي الدافئ (الكاميل والبيج)، و 10% للون الساطع (الأبيض الناصع) لتحقيق أعلى درجات الأناقة."
        }
      }
    ],
    codeSnippet: `// 60-30-10 Color Harmonizer
const CAPSULE_PALETTE = {
  dominant: { name: "Midnight Navy", percentage: "60%", hex: "#0f172a" },
  secondary: { name: "Camel Cashmere", percentage: "30%", hex: "#b48b60" },
  accent: { name: "Crisp Ivory", percentage: "10%", hex: "#f8fafc" },
  rule: "Left-to-Right Tonal Gradient Progression"
};`
  },
  {
    id: "vm-digital-signage",
    category: "vm",
    difficulty: "intermediate",
    readTime: "17 min",
    icon: "zap",
    image: "assets/images/vm/vm-10-digital-signage.jpg",
    badge: { en: "Phygital Retail", ar: "العرض الرقمي التفاعلي" },
    title: {
      en: "Dynamic Digital Signage & Shelf-Edge Synchronizer",
      ar: "نظام الشاشات الرقمية التفاعلية وتحديث أرفف العرض الذكية"
    },
    summary: {
      en: "Merging digital media with physical merchandising. Ultra-wide curved micro-LED fascias playing ambient brand motion synchronized with smart illuminated product shelves.",
      ar: "دمج الوسائط الرقمية مع العرض الفعلي للمنتجات. شاشات micro-LED منحنية تعرض حملات الفيديو التفاعلية متزامنة مع إضاءة الأرفف وأسعار الباركود الرقمية الذكية."
    },
    tags: ["Digital Signage", "Shelf-Edge LED", "Ambient Motion", "Phygital Retail", "Smart Shelves"],
    stats: [
      { label: { en: "Shopper Recall", ar: "تذكر العلامة التجارية" }, value: "+62%" },
      { label: { en: "Price Sync Latency", ar: "سرعة تحديث الأسعار" }, value: "0.2s Instant" },
      { label: { en: "Screen Contrast", ar: "وضوح شاشة الـ LED" }, value: "HDR 1500 nits" }
    ],
    architecture: {
      en: "Architectural curved wood fascia housing 32:9 micro-LED panel synchronized with smart shelf weight sensors and directional audio speakers.",
      ar: "إطار خشبي معماري منحني يضم شاشة ميكرو LED فائقة العرض بنسبة 32:9 متزامنة مع حساسات الأرفف الذكية والإضاءة الموجهة."
    },
    diagramSteps: [
      { en: "Curved Wall Integration", ar: "دمج الشاشة في جدار المتجر" },
      { en: "Motion Video CMS Sync", ar: "مزامنة محتوى الفيديو الإعلاني" },
      { en: "Shelf Light Modulation", ar: "تنسيق نبضات إضاءة الأرفف" },
      { en: "Customer Lift Trigger", ar: "تفاعل الشاشة عند رفع المنتج" }
    ],
    steps: [
      {
        title: { en: "1. Ambient Phygital Subtlety", ar: "1. نعومة الحركة الرقمية التفاعلية" },
        content: {
          en: "Motion on shelf-edge screens must be slow and atmospheric (flowing fabric, water ripples) rather than rapid flashes, keeping customer focus on the physical product.",
          ar: "يجب أن تكون الحركة الرقمية على الشاشات ناعمة وانسيابية (كتموج الأقمشة أو الضوء) لتجنب تشتيت عين الزائر والحفاظ على التركيز على المنتج الفعلي."
        }
      }
    ],
    codeSnippet: `// Phygital Shelf Synchronization Event
function onProductLifted(shelfId, sku) {
  triggerScreenMedia({
    targetScreen: "CURVED_MICRO_LED_HEADER",
    campaignClip: \`editorial_\${sku}_story.mp4\`,
    transition: "Crossfade 0.8s",
    shelfUnderglow: "Pulse Cyan 100%"
  });
}`
  },

  // ==========================================
  // Modern Software Engineering & AI Blueprints
  // ==========================================
  {
    id: "ai-multi-agent-system",
    category: "ai",
    difficulty: "advanced",
    readTime: "25 min",
    icon: "cpu",
    badge: { en: "AI & Agents", ar: "ذكاء اصطناعي ووكلاء" },
    title: {
      en: "Building Autonomous Multi-Agent AI Systems with Tool Calling",
      ar: "بناء منظومة وكلاء الذكاء الاصطناعي الذاتية مع استدعاء الأدوات"
    },
    summary: {
      en: "A comprehensive deep dive into orchestrating multi-agent LLM systems with autonomous task planning, vector memory, and self-correction loops.",
      ar: "دليل معماري متقدم لبناء وتنسيق وكلاء الذكاء الاصطناعي متعددي المهام مع التخطيط الذاتي وإدارة الذاكرة وحلقات التصحيح الذاتي."
    },
    tags: ["Python", "FastAPI", "LangChain", "VectorDB", "Redis"],
    stats: [
      { label: { en: "Architecture", ar: "المعمارية" }, value: "Multi-Agent" },
      { label: { en: "Latency", ar: "زمن الاستجابة" }, value: "< 450ms" },
      { label: { en: "Reliability", ar: "دقة التنفيذ" }, value: "99.4%" }
    ],
    architecture: {
      en: "Event-driven orchestrator distributing specialized sub-tasks across Planner, Executor, and Critic agents backed by Redis Pub/Sub.",
      ar: "معمارية موجهة بالأحداث تقوم بتوزيع المهام بين وكيل التخطيط ووكيل التنفيذ ووكيل التدقيق مع ذاكرة مشتركة عبر Redis."
    },
    diagramSteps: [
      { en: "User Request", ar: "طلب المستخدم" },
      { en: "Planner Agent", ar: "وكيل التخطيط" },
      { en: "Tool Execution (Python/SQL)", ar: "استدعاء الأدوات البرمجية" },
      { en: "Critic & Reflection", ar: "المراجعة والتصحيح الذاتي" },
      { en: "Verified Response", ar: "المخرجات النهائية الموثقة" }
    ],
    steps: [
      {
        title: { en: "1. Define Agent Roles & System Prompts", ar: "1. تحديد أدوار الوكلاء والتعليمات الأساسية" },
        content: {
          en: "Configure strict role boundaries for each agent: The Planner decomposes objectives into a DAG; the Worker executes tool calls; the Critic reviews correctness.",
          ar: "تحديد حدود صارمة لكل وكيل: يقوم مخطط المهام بتفكيك الهدف إلى رسم بياني مهام (DAG)، بينما يقوم المنفذ باستدعاء الأدوات، ويقوم المدقق بمراجعة السلامة والنتائج."
        }
      }
    ],
    codeSnippet: `class MultiAgentOrchestrator:
    def __init__(self, memory_client):
        self.memory = memory_client
        self.planner = PlannerAgent()
        self.worker = WorkerAgent()
        self.critic = CriticAgent()

    async def execute_workflow(self, objective: str):
        plan = await self.planner.create_dag(objective)
        return {"status": "SUCCESS", "artifacts": plan}`
  },
  {
    id: "rag-semantic-search",
    category: "ai",
    difficulty: "intermediate",
    readTime: "18 min",
    icon: "file-text",
    badge: { en: "RAG & Search", ar: "بحث دلالي RAG" },
    title: {
      en: "Production RAG Pipeline: Semantic Search & Document Chat Without Hallucination",
      ar: "بناء نظام RAG إنتاجي: البحث الدلالي والدردشة مع المستندات بدون هلوسة"
    },
    summary: {
      en: "Step-by-step engineering guide to creating an enterprise Retrieval-Augmented Generation pipeline with hybrid search and citation tracking.",
      ar: "دليل تطبيقي متكامل لبناء منظومة RAG مؤسسية تجمع بين البحث الدلالي بالمتجهات والبحث الكلماتي الدقيق مع تتبع المصادر."
    },
    tags: ["Python", "Vector Embeddings", "ChromaDB", "Chunking", "FastAPI"],
    stats: [
      { label: { en: "Chunk Size", ar: "حجم المقاطع" }, value: "512 Tokens" },
      { label: { en: "Recall Rate", ar: "نسبة الدقة" }, value: "98.2%" },
      { label: { en: "Zero Hallucination", ar: "تجنب الهلوسة" }, value: "Strict Citations" }
    ],
    architecture: {
      en: "Multi-stage ingestion pipeline with recursive character splitting, embedding generation, dense+sparse vector retrieval, and context compression.",
      ar: "خط معالجة متعدد المراحل يبدأ بتفكيك المستندات ذكياً وتوليد المتجهات الرقمية والدمج بين البحث النصي والدلالي وإعادة ترتيب النتائج."
    },
    diagramSteps: [
      { en: "Document Upload", ar: "رفع المستند" },
      { en: "Smart Chunking", ar: "التفكيك الذكي للمقاطع" },
      { en: "Vector Embeddings", ar: "توليد المتجهات العددية" },
      { en: "Hybrid Retrieval", ar: "البحث الهجين المدمج" },
      { en: "Source Citation Response", ar: "الإجابة الموثقة بالمصادر" }
    ],
    steps: [
      {
        title: { en: "1. Document Parsing & Semantic Chunking", ar: "1. قراءة المستندات والتقطيع الدلالي" },
        content: {
          en: "Split documents into cohesive sections maintaining header context and semantic overlap rather than fixed character cuts.",
          ar: "تقسيم الوثائق إلى مقاطع متماسكة منطقياً مع الحفاظ على تسلسل العناوين وهوامش التداخل الدلالي لتجنب بتر المعاني."
        }
      }
    ],
    codeSnippet: `def ingest_document(text: str, doc_id: str, chunk_size: int = 500):
    chunks = recursive_chunk(text, chunk_size)
    embeddings = embedder.encode_batch(chunks)
    vector_db.upsert(ids=[f"{doc_id}_{i}" for i in range(len(chunks))], vectors=embeddings)`
  },
  {
    id: "bento-grid-saas-dashboard",
    category: "web",
    difficulty: "intermediate",
    readTime: "15 min",
    icon: "layout",
    badge: { en: "Modern UI/UX", ar: "واجهات وتصميم" },
    title: {
      en: "Architecting Ultra-Modern Bento Grid Dashboards with CSS Grid & Glassmorphism",
      ar: "هندسة لوحات تحكم SaaS الحديثة بنظام Bento Grid والمؤثرات الزجاجية"
    },
    summary: {
      en: "Mastering the layout patterns used by Apple, Linear, and Vercel. Learn responsive CSS grid placement, backdrop filters, and subtle ambient glows.",
      ar: "تعلم أسرار تصميم شبكات Bento Grid العصرية المعتمدة في كبرى المنصات العالمية مثل Linear و Apple مع الخلفيات الزجاجية والتأثيرات الضوئية."
    },
    tags: ["CSS Grid", "Glassmorphism", "Responsive Design", "UI Architecture", "Dark Mode"],
    stats: [
      { label: { en: "Layout Type", ar: "نوع الهيكل" }, value: "Dynamic Bento" },
      { label: { en: "Zero Frameworks", ar: "بدون إطارات عمل" }, value: "Pure CSS3" },
      { label: { en: "FPS Performance", ar: "معدل الإطارات" }, value: "60 FPS Smooth" }
    ],
    architecture: {
      en: "Pure CSS Grid with auto-fit and minmax formulas paired with CSS Custom Properties for dynamic lighting and glass refraction.",
      ar: "شبكة CSS Grid نقية بتركيبة auto-fit و minmax مع متغيرات CSS ذكية لإدارة الانعكاسات الزجاجية وتوزيع الأبعاد."
    },
    diagramSteps: [
      { en: "CSS Grid Architecture", ar: "هيكل شبكة CSS Grid" },
      { en: "Backdrop Blur & Borders", ar: "تأثير الزجاج البلوري والحدود" },
      { en: "Interactive Hover Glow", ar: "تأثير التوهج التفاعلي" },
      { en: "Responsive Fluid Flow", ar: "التكيف اللحظي مع الشاشات" }
    ],
    steps: [
      {
        title: { en: "1. The Bento Grid Dimension Formula", ar: "1. معادلة أبعاد شبكة Bento" },
        content: {
          en: "Configure `grid-template-columns: repeat(12, 1fr)` for fine-grained spans: 8 cols for primary charts, 4 cols for stat tiles, and 12 cols for activity tables.",
          ar: "ضبط نظام الـ 12 عموداً لتوزيع مرن: 8 أعمدة للرسوم البيانية الكبرى، 4 أعمدة لبطاقات الإحصائيات، و 12 عموداً لجداول الأنشطة اللحظية."
        }
      }
    ],
    codeSnippet: `.bento-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}`
  },
  {
    id: "microservices-ecommerce-blueprint",
    category: "cloud",
    difficulty: "advanced",
    readTime: "30 min",
    icon: "server",
    badge: { en: "Cloud & Scale", ar: "سحابة ومعمارية" },
    title: {
      en: "High-Throughput Distributed Microservices Architecture for E-Commerce Platforms",
      ar: "معمارية الأنظمة الموزعة فائقة التحمل لمنصات التجارة الإلكترونية الضخمة"
    },
    summary: {
      en: "Blueprint for building resilient e-commerce microservices handling 50,000+ orders/min with Kafka event streams, Redis distributed caching, and Saga patterns.",
      ar: "مخطط معماري شامل لبناء أنظمة تجارة إلكترونية موزعة تتحمل أكثر من 50,000 طلب بالدقيقة باستخدام مسارات أحداث Kafka ونمط الـ Saga لإدارة العمليات."
    },
    tags: ["Microservices", "Kafka", "Docker", "Redis", "Distributed Systems"],
    stats: [
      { label: { en: "Throughput", ar: "القدرة الاستيعابية" }, value: "50K req/sec" },
      { label: { en: "Data Pattern", ar: "نمط البيانات" }, value: "Event Sourcing" },
      { label: { en: "Availability", ar: "التوافرية" }, value: "99.99%" }
    ],
    architecture: {
      en: "Asynchronous choreography using Apache Kafka for order lifecycle states, eliminating distributed locks with idempotency keys and compensating transactions.",
      ar: "تواصل لا متزامن بالكامل عبر Apache Kafka لإدارة دورة حياة الطلبات بدون أقفال موزعة، مع مفاتيح تأكيد فريدة وعمليات تعويضية تلقائية."
    },
    diagramSteps: [
      { en: "Client Request", ar: "طلب العميل" },
      { en: "API Gateway & Rate Limiter", ar: "بوابة الخدمات وحماية النطاق" },
      { en: "Order Service", ar: "خدمة الطلبات" },
      { en: "Kafka Event Broker", ar: "وسيط الأحداث Kafka" },
      { en: "Inventory & Payment Workers", ar: "خدمات الدفع والمخزون الموزعة" }
    ],
    steps: [
      {
        title: { en: "1. The Saga Pattern for Distributed Transactions", ar: "1. نمط Saga لإدارة المعاملات المالية الموزعة" },
        content: {
          en: "Avoid two-phase commits. Use choreographic Sagas where OrderCreated triggers InventoryReserved, and failures dispatch CompensatingRelease events.",
          ar: "تجنب المعاملات التقليدية ذات المرحلتين واستخدم نمط Saga حيث يرسل حدث إنشاء الطلب رسائل للخدمات الأخرى، مع إرسال أحداث إلغاء تعويضية عند أي فشل."
        }
      }
    ],
    codeSnippet: `export async function dispatchOrderCreated(order) {
  await producer.send({
    topic: 'ecommerce.orders.created',
    messages: [{ key: order.id, value: JSON.stringify(order) }]
  });
}`
  }
];

const CATEGORIES = [
  { id: "all", label: { en: "All Blueprints & Showcases", ar: "كافة المشاريع والشروحات" } },
  { id: "vm", label: { en: "Visual Merchandising & Retail", ar: "تنسيق العرض وهندسة المتاجر" } },
  { id: "ai", label: { en: "AI & Smart Systems", ar: "الذكاء الاصطناعي والأنظمة" } },
  { id: "web", label: { en: "Modern Web & UI Labs", ar: "الويب وتجربة المستخدم" } },
  { id: "cloud", label: { en: "Cloud & Data Systems", ar: "السحابة وهندسة البيانات" } }
];
