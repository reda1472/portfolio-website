// TechCraft Hub - Master Tutorials & Architecture Blueprints Dataset
const TUTORIALS_DATA = [
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
      },
      {
        title: { en: "2. Tool Definition & Function Calling", ar: "2. تعريف أدوات التشغيل واستدعاء الدوال" },
        content: {
          en: "Equip agents with type-safe tools (Python REPL, Vector Database Search, and SQL Query Execution) using strict JSON schemas.",
          ar: "تزويد الوكلاء بأدوات برمجية آمنة (تنفيذ كود بايثون، بحث دلالي في قاعدة المتجهات، واستعلامات SQL) وفق مخططات JSON صارمة."
        }
      },
      {
        title: { en: "3. Shared Vector Memory & Context Retention", ar: "3. إدارة الذاكرة المشتركة وحفظ السياق" },
        content: {
          en: "Connect agents to ChromaDB or Qdrant for episodic and semantic memory retention across sessions.",
          ar: "ربط الوكلاء بقواعد بيانات المتجهات لحفظ واسترجاع السياق التاريخي والخبرات السابقة عبر الجلسات."
        }
      },
      {
        title: { en: "4. Autonomous Self-Correction Loop", ar: "4. حلقة التصحيح والتأكد الذاتي" },
        content: {
          en: "Implement an automated review step where code errors or hallucinated outputs are trapped and resent for refinement before delivering output.",
          ar: "تضمين خطوة مراجعة تلقائية تقوم باصطياد أي أخطاء برمجية أو استنتاجات غير دقيقة وإعادة إرسالها للتحسين قبل إظهار النتيجة النهائية."
        }
      }
    ],
    codeSnippet: `from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
import asyncio

class TaskRequest(BaseModel):
    objective: str
    max_iterations: int = 5

class MultiAgentOrchestrator:
    def __init__(self, memory_client):
        self.memory = memory_client
        self.planner = PlannerAgent()
        self.worker = WorkerAgent()
        self.critic = CriticAgent()

    async def execute_workflow(self, objective: str):
        # Step 1: Decompose objective into tasks
        plan = await self.planner.create_dag(objective)
        results = []
        
        for task in plan.tasks:
            # Step 2: Execute task with safe tools
            raw_output = await self.worker.execute(task)
            
            # Step 3: Validate with Critic agent
            validation = await self.critic.verify(task, raw_output)
            if not validation.passed:
                raw_output = await self.worker.repair(task, validation.feedback)
                
            results.append(raw_output)
            await self.memory.store_step(task, raw_output)
            
        return {"status": "SUCCESS", "artifacts": results}

app = FastAPI(title="Autonomous AI Agent Engine")
orchestrator = MultiAgentOrchestrator(memory_client=None)

@app.post("/api/agents/run")
async def run_agent(req: TaskRequest):
    return await orchestrator.execute_workflow(req.objective)`
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
      },
      {
        title: { en: "2. Vector Embeddings & Indexing", ar: "2. التضمين الشعاعي والفهرسة" },
        content: {
          en: "Generate dense embeddings using high-dimensional models and index into ChromaDB with metadata filters.",
          ar: "تحويل المقاطع إلى متجهات رقمية عالية الأبعاد وحفظها في قاعدة بيانات المتجهات مع وسوم التصفية الزمنية والموضوعية."
        }
      },
      {
        title: { en: "3. Re-ranking & Context Compression", ar: "3. إعادة الترتيب وضغط السياق" },
        content: {
          en: "Use a cross-encoder model to re-rank top candidates and prune irrelevant tokens to fit the LLM context window efficiently.",
          ar: "تطبيق نموذج Cross-Encoder لإعادة فرز أفضل النتائج المتطابقة واستبعاد النصوص الثانوية لتوفير استهلاك الرموز وتسريع الاستجابة."
        }
      }
    ],
    codeSnippet: `import numpy as np
from typing import List

class SemanticRAGPipeline:
    def __init__(self, embedder, vector_db, llm):
        self.embedder = embedder
        self.db = vector_db
        self.llm = llm

    def ingest_document(self, text: str, doc_id: str, chunk_size: int = 500, overlap: int = 50):
        chunks = self._recursive_chunk(text, chunk_size, overlap)
        embeddings = self.embedder.encode_batch(chunks)
        self.db.upsert(ids=[f"{doc_id}_{i}" for i in range(len(chunks))], 
                       vectors=embeddings, 
                       documents=chunks)

    def query(self, user_question: str, top_k: int = 4):
        q_vec = self.embedder.encode(user_question)
        relevant_docs = self.db.similarity_search(q_vec, k=top_k)
        
        context_block = "\\n---\\n".join(relevant_docs)
        prompt = (
            f"Use ONLY the following context to answer the question:\\n"
            f"{context_block}\\n\\n"
            f"Question: {user_question}\\n"
            f"Answer with exact citations:"
        )
        return self.llm.generate(prompt)`
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
      },
      {
        title: { en: "2. Glassmorphism & Refraction Optics", ar: "2. مؤثرات الزجاج البلوري وانكسار الضوء" },
        content: {
          en: "Combine `backdrop-filter: blur(16px)` with a delicate 1px gradient border `linear-gradient(135deg, rgba(255,255,255,0.15), transparent)` for executive elegance.",
          ar: "دمج فلتر التغبيش الزجاجي مع حدود دقيقة 1px بتدرج شفاف يعكس الضوء بسلاسة ويمنح عمقاً بصرياً ثلاثي الأبعاد."
        }
      }
    ],
    codeSnippet: `.bento-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.25rem;
  padding: 1.5rem;
}

.bento-card {
  position: relative;
  background: rgba(18, 24, 38, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.25rem;
  padding: 1.75rem;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.3s ease;
}

.bento-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.4);
}

.col-span-8 { grid-column: span 8; }
.col-span-4 { grid-column: span 4; }
.col-span-12 { grid-column: span 12; }

@media (max-width: 992px) {
  .col-span-8, .col-span-4 { grid-column: span 12; }
}`
  },
  {
    id: "zero-dependency-arabic-rtl",
    category: "web",
    difficulty: "beginner",
    readTime: "12 min",
    icon: "globe",
    badge: { en: "Internationalization", ar: "التعريب وRTL" },
    title: {
      en: "Zero-Dependency Arabic RTL Web Engineering with CSS Logical Properties",
      ar: "هندسة واجهات الويب العربية RTL بدون أي مكتبات باستخدام خصائص CSS المنطقية"
    },
    summary: {
      en: "Eliminate flipped margins and duplicate stylesheets. Build pristine bilingual websites using inline-start, margin-inline, and bidirectional layout flow.",
      ar: "تخلص تماماً من تكرار ملفات التنسيق وحسابات الهوامش المعكوسة، وتعلم بناء واجهات ثنائية اللغة تدعم العربية والإنجليزية بملف CSS واحد ذكي."
    },
    tags: ["CSS Logical Properties", "RTL Design", "Typography", "Cairo Font", "Clean Code"],
    stats: [
      { label: { en: "CSS Code Saved", ar: "توفير في الكود" }, value: "65% Smaller" },
      { label: { en: "Switch Time", ar: "سرعة التبديل" }, value: "0ms Instant" },
      { label: { en: "Browser Support", ar: "دعم المتصفحات" }, value: "99.8% Global" }
    ],
    architecture: {
      en: "Unified design tokens utilizing CSS Logical Properties (`margin-inline-start`, `padding-inline`, `border-inline-end`) ensuring natural layout mirroring.",
      ar: "نظام تصميم موحد يعتمد على الخصائص المنطقية الحديثة، مما يجعل العناصر تنعكس تلقائياً بمجرد تغيير خاصية dir دون أي تعديل إضافي."
    },
    diagramSteps: [
      { en: "LTR Document Flow", ar: "تدفق LTR الإنجليزي" },
      { en: "CSS Logical Tokens", ar: "متغيرات الخصائص المنطقية" },
      { en: "Direction Attribute (dir=rtl)", ar: "خاصية الاتجاه في HTML" },
      { en: "Automatic RTL Mirroring", ar: "الانعكاس التلقائي السلس" }
    ],
    steps: [
      {
        title: { en: "1. The Fallacy of margin-left and margin-right", ar: "1. استبدال الهوامش الثابتة بالمنطقية" },
        content: {
          en: "Never use left/right. Use `margin-inline-start` for start spacing and `margin-inline-end` for trailing spacing.",
          ar: "توقف عن استخدام left و right واستخدم بدلاً منها `margin-inline-start` لبداية العنصر و `margin-inline-end` لنهايته في كل من اللغتين."
        }
      },
      {
        title: { en: "2. Arabic Typography Optical Balance", ar: "2. التوازن البصري للخطوط العربية" },
        content: {
          en: "Arabic typography (Cairo / Readex Pro) requires approximately 10-15% taller `line-height` compared to Latin fonts to prevent diacritic clipping.",
          ar: "تحتاج الخطوط العربية لارتفاع سطر (line-height) أكبر بنسبة 10-15% مقارنة بالخطوط اللاتينية لضمان عدم تداخل التشكيل والنقاط."
        }
      }
    ],
    codeSnippet: `/* One single CSS rule works for BOTH English (LTR) and Arabic (RTL) */
.nav-item {
  display: flex;
  align-items: center;
  /* Instead of margin-left: 1rem; */
  margin-inline-start: 1.25rem;
  /* Instead of padding: 10px 20px 10px 15px; */
  padding-block: 0.625rem;
  padding-inline: 1.25rem 0.95rem;
  /* Instead of border-left: 3px solid ... */
  border-inline-start: 3px solid var(--accent-primary);
}

:root[dir="rtl"] {
  --font-family-sans: 'Cairo', system-ui, sans-serif;
  --base-line-height: 1.7;
}

:root[dir="ltr"] {
  --font-family-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
  --base-line-height: 1.5;
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
      },
      {
        title: { en: "2. Idempotency Key Architecture", ar: "2. هندسة مفاتيح التأكيد الفريدة (Idempotency)" },
        content: {
          en: "Prevent duplicate payments by verifying unique UUID transaction keys in Redis with atomicity before charging customer accounts.",
          ar: "منع الخصم المزدوج للمدفوعات عبر التحقق اللحظي والذري من مفتاح العملية الفريد في ذاكرة Redis قبل اعتماد أي خصم مالي."
        }
      }
    ],
    codeSnippet: `// Event Producer Pattern for Kafka Order Events
import { Kafka } from 'kafkajs';

const kafka = new Kafka({ clientId: 'order-service', brokers: ['kafka-cluster:9092'] });
const producer = kafka.producer();

export async function dispatchOrderCreated(order) {
  await producer.connect();
  const payload = {
    orderId: order.id,
    userId: order.userId,
    amount: order.totalAmount,
    items: order.items,
    timestamp: Date.now()
  };

  await producer.send({
    topic: 'ecommerce.orders.created',
    messages: [
      {
        key: order.id,
        value: JSON.stringify(payload),
        headers: { 'idempotency-key': order.idempotencyToken }
      }
    ]
  });
  console.log(\`Order event published: \${order.id}\`);
}`
  },
  {
    id: "relational-3nf-database-design",
    category: "cloud",
    difficulty: "intermediate",
    readTime: "14 min",
    icon: "database",
    badge: { en: "Database Engineering", ar: "هندسة قواعد البيانات" },
    title: {
      en: "Relational Database Engineering: From Business Models to 3NF Normalization",
      ar: "هندسة قواعد البيانات العلاقاتية: من متطلبات العمل إلى المستوى المعياري 3NF"
    },
    summary: {
      en: "A rigorous guide to designing normalized, performant SQL schemas with composite indexes, foreign key constraints, and zero redundancy.",
      ar: "دليل تطبيقي متقن لتصميم جداول SQL نظيفة ومتوافقة مع المعيار الثالث (3NF)، مع بناء الفهارس المركبة والعلاقات القياسية لمنع تكرار البيانات."
    },
    tags: ["PostgreSQL", "SQL", "Database Indexing", "Data Integrity", "Normalization"],
    stats: [
      { label: { en: "Standard", ar: "المعيار" }, value: "Third Normal Form" },
      { label: { en: "Query Speedup", ar: "تسريع الاستعلامات" }, value: "10x Faster" },
      { label: { en: "Data Anomalies", ar: "أخطاء التكرار" }, value: "Zero Duplication" }
    ],
    architecture: {
      en: "Normalized relational schema with immutable ledger audit logs, foreign keys with ON DELETE RESTRICT, and B-Tree composite index coverage.",
      ar: "مخطط علاقاتي معياري يضم سجلات تدقيق غير قابلة للتعديل، وقيود سلامة مرجعية صارمة، وفهارس B-Tree لتسريع استعلامات البحث المتعدد."
    },
    diagramSteps: [
      { en: "Raw Business Entities", ar: "كيانات العمل الأولية" },
      { en: "1NF: Atomic Columns", ar: "المستوى الأول: تفكيك الأعمدة" },
      { en: "2NF: Full Key Dependency", ar: "المستوى الثاني: تبعية المفتاح الأساسي" },
      { en: "3NF: Eliminate Transitive Keys", ar: "المستوى الثالث: استبعاد التبعيات الانتقالية" }
    ],
    steps: [
      {
        title: { en: "1. Achieving First Normal Form (1NF)", ar: "1. تحقيق المستوى المعياري الأول (1NF)" },
        content: {
          en: "Ensure every column holds atomic, single-valued data and every record is uniquely identified by a primary key.",
          ar: "التأكد من أن كل عمود يحتوي على قيمة واحدة غير مجزأة، وأن كل سجل يمتلك مفتاحاً أساسياً فريداً يميزه."
        }
      },
      {
        title: { en: "2. Composite Indexing for High-Velocity Queries", ar: "2. الفهارس المركبة للاستعلامات السريعة" },
        content: {
          en: "Index columns based on query cardinality: place equality match columns first, followed by range filter columns.",
          ar: "ترتيب أعمدة الفهرس المركب بحسب طريقة الاستعلام: وضع أعمدة التطابق المباشر أولاً، تليها أعمدة النطاقات الزمنية أو الأرقام."
        }
      }
    ],
    codeSnippet: `-- 3NF Standardized Schema with Composite Indexing
CREATE TABLE customers (
    customer_id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    company_name VARCHAR(150),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    order_id BIGSERIAL PRIMARY KEY,
    customer_id BIGINT NOT NULL REFERENCES customers(customer_id) ON DELETE RESTRICT,
    order_status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    currency_code CHAR(3) NOT NULL DEFAULT 'USD',
    order_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE order_items (
    order_item_id BIGSERIAL PRIMARY KEY,
    order_id BIGINT NOT NULL REFERENCES orders(order_id) ON DELETE CASCADE,
    sku_code VARCHAR(50) NOT NULL,
    unit_price NUMERIC(12, 2) NOT NULL CHECK (unit_price >= 0),
    quantity INT NOT NULL CHECK (quantity > 0)
);

CREATE INDEX idx_orders_customer_status_date 
ON orders (customer_id, order_status, order_date DESC);`
  },
  {
    id: "python-automation-bot",
    category: "devtools",
    difficulty: "beginner",
    readTime: "10 min",
    icon: "terminal",
    badge: { en: "Automation", ar: "أتمتة وبرمجة" },
    title: {
      en: "Automated Data Extraction & PDF Executive Reporter with Python",
      ar: "بناء روبوت أتمتة لاستخراج البيانات وتوليد تقارير PDF تنفيذية بلغة بايثون"
    },
    summary: {
      en: "Create an end-to-end automation bot that queries data sources, builds statistical charts, compiles PDF dashboards, and delivers them via Telegram / Email.",
      ar: "شرح عملي لبناء برنامج أتمتة يجمع البيانات من قواعد البيانات يومياً، ويرسم مؤشرات الأداء بيانيا، وينشئ ملف PDF تنفيذي ويرسله بالبريد أو تيليجرام."
    },
    tags: ["Python", "Pandas", "Automation", "Matplotlib", "PDF Generation"],
    stats: [
      { label: { en: "Time Saved", ar: "الوقت الموفر" }, value: "5 hrs/day" },
      { label: { en: "Execution", ar: "وقت التشغيل" }, value: "3.2 seconds" },
      { label: { en: "Output", ar: "المخرجات" }, value: "Vector PDF + Bot Alert" }
    ],
    architecture: {
      en: "Modular Python ETL pipeline running on cron, aggregating operational datasets into structured DataFrames with automated exception alerting.",
      ar: "خط معالجة بيانات مجدول زمنياً يقوم بسحب البيانات وتلخيصها إحصائياً وتوليد المخططات وحفظها كملفات تقارير أنيقة."
    },
    diagramSteps: [
      { en: "Cron Trigger", ar: "مجدول الوقت التلقائي" },
      { en: "Data Extraction (SQL/API)", ar: "سحب وتجميع البيانات" },
      { en: "Pandas Aggregation", ar: "التحليل الإحصائي" },
      { en: "Chart & PDF Compilation", ar: "توليد الرسوم وملف PDF" },
      { en: "Automated Dispatch", ar: "الإرسال التلقائي الفوري" }
    ],
    steps: [
      {
        title: { en: "1. Data Aggregation with Pandas", ar: "1. تجميع وتلخيص البيانات باستخدام Pandas" },
        content: {
          en: "Read raw daily sales or performance logs and generate executive KPI sums, averages, and trend lines.",
          ar: "قراءة سجلات الأداء أو المبيعات اليومية وتوليد مؤشرات الأداء التنفيذية (KPIs) ونسب التغير الأسبوعية والشهرية."
        }
      },
      {
        title: { en: "2. Vector Chart Generation", ar: "2. رسم المخططات البيانية عالية الدقة" },
        content: {
          en: "Export standalone, publication-ready charts using Matplotlib with crisp dark/light styling and annotations.",
          ar: "توليد رسوم بيانية نقية بألوان عصرية وإشارات توضيحية على القمم والانخفاضات وحفظها بصيغة جاهزة للطباعة."
        }
      }
    ],
    codeSnippet: `import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime

def generate_daily_executive_report(csv_path: str):
    df = pd.read_csv(csv_path)
    df['date'] = pd.to_datetime(df['date'])
    
    total_volume = df['amount'].sum()
    avg_ticket = df['amount'].mean()
    success_rate = (df['status'] == 'COMPLETED').mean() * 100
    
    fig, ax = plt.subplots(figsize=(10, 4), facecolor='#0f172a')
    ax.set_facecolor('#0f172a')
    ax.plot(df['date'], df['amount'], color='#38bdf8', linewidth=2.5)
    ax.tick_params(colors='#94a3b8')
    plt.title('24-Hour Throughput Analytics', color='#f8fafc', fontsize=14, pad=12)
    plt.tight_layout()
    plt.savefig('kpi_chart.png', dpi=300)
    
    print(f"Report Generated! Total: {total_volume} | Success: {success_rate:.1f}%")
    return {"volume": total_volume, "rate": success_rate}`
  },
  {
    id: "web-vitals-performance-mastery",
    category: "web",
    difficulty: "advanced",
    readTime: "16 min",
    icon: "zap",
    badge: { en: "Performance Lab", ar: "مختبر الأداء" },
    title: {
      en: "Web Performance & Core Web Vitals: Achieving 100/100 Lighthouse Scores",
      ar: "هندسة أداء الويب و Core Web Vitals: أسرار تحقيق 100/100 في Google Lighthouse"
    },
    summary: {
      en: "Eliminate layout shifts, accelerate Largest Contentful Paint (LCP), and conquer Interaction to Next Paint (INP) with modern browser APIs.",
      ar: "تعلم تقنيات القضاء على اهتزاز العناصر (CLS) وتسريع زمن ظهور أول محتوى مرئي (LCP) واستجابة التفاعل (INP) بأحدث تقنيات المتصفح."
    },
    tags: ["Core Web Vitals", "Lighthouse", "LCP", "INP", "Performance Tuning"],
    stats: [
      { label: { en: "LCP", ar: "زمن ظهور المحتوى" }, value: "< 0.8s" },
      { label: { en: "CLS", ar: "اهتزاز التخطيط" }, value: "0.00" },
      { label: { en: "Lighthouse Score", ar: "تقييم الأداء" }, value: "100 / 100" }
    ],
    architecture: {
      en: "Resource prioritization via `fetchpriority='high'`, font subsetting with swap metrics, and critical CSS inlining to eliminate render-blocking roundtrips.",
      ar: "إدارة أولوية الموارد عبر خاصية fetchpriority، وتجزئة الخطوط، وتضمين الـ CSS الحرج لتفادي أي تأخير في العرض الأولي للصفحة."
    },
    diagramSteps: [
      { en: "Fetch Priority Tagging", ar: "تحديد أولويات التحميل" },
      { en: "Critical CSS Inlining", ar: "تضمين الأنماط الحرجة" },
      { en: "Font Metric Overrides", ar: "موازنة أبعاد الخطوط البديلة" },
      { en: "Zero Shift Painting", ar: "الرسم الفوري بدون اهتزاز" }
    ],
    steps: [
      {
        title: { en: "1. Optimizing Largest Contentful Paint (LCP)", ar: "1. تسريع أكبر عنصر مرئي (LCP)" },
        content: {
          en: "Tag hero images with `fetchpriority='high'` and `loading='eager'` while ensuring modern AVIF/WebP image formats are served.",
          ar: "إضافة خاصية `fetchpriority='high'` للعنصر الرئيسي في أول الصفحة وتوفير الصور بصيغتي AVIF و WebP لتنزيل فوري في أقل من ثانية."
        }
      },
      {
        title: { en: "2. Conquering Cumulative Layout Shift (CLS)", ar: "2. التخلص التام من اهتزاز التخطيط (CLS)" },
        content: {
          en: "Always reserve explicit `aspect-ratio` or `width` and `height` attributes on all media and dynamic banner slots before content renders.",
          ar: "حجز مساحات ثابتة مسبقاً لجميع الصور والبانرات الديناميكية عبر خاصية `aspect-ratio` لمنع قفز الصفحة أثناء التحميل."
        }
      }
    ],
    codeSnippet: `<!-- Production Performance HTML Boilerplate -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link rel="preload" fetchpriority="high" as="image" href="/assets/hero-banner.webp" type="image/webp">

<style>
  :root { --bg-dark: #090d16; }
  body { margin: 0; background: var(--bg-dark); color: #fff; }
  .hero-img-slot { aspect-ratio: 16 / 9; width: 100%; display: block; }
</style>

<picture>
  <source srcset="/assets/hero-banner.avif" type="image/avif">
  <img src="/assets/hero-banner.webp" 
       alt="High Performance Architecture"
       fetchpriority="high"
       loading="eager"
       decoding="async"
       class="hero-img-slot">
</picture>`
  },
  {
    id: "drag-and-drop-kanban-engine",
    category: "web",
    difficulty: "intermediate",
    readTime: "12 min",
    icon: "trello",
    badge: { en: "Interactive Web", ar: "تطبيقات تفاعلية" },
    title: {
      en: "Zero-Dependency HTML5 Drag-and-Drop Interactive Kanban Board Engine",
      ar: "بناء محرك لوحة كانبان تفاعلية بالسحب والإفلات بدون أي مكتبات خارجية"
    },
    summary: {
      en: "Learn how to build a smooth, accessible drag-and-drop task workflow engine with real-time column state synchronization and local persistence.",
      ar: "تعلم كيفية بناء نظام كانبان تفاعلي كامل بالسحب والإفلات باستخدام HTML5 Drag and Drop API مع حفظ الحالة تلقائياً وانسيابية الحركة."
    },
    tags: ["HTML5 DnD", "Vanilla JS", "State Management", "LocalStorage", "Animations"],
    stats: [
      { label: { en: "External Libs", ar: "مكتبات خارجية" }, value: "0 Dependencies" },
      { label: { en: "Bundle Size", ar: "حجم الكود" }, value: "< 4 KB" },
      { label: { en: "Drag Smoothness", ar: "انسيابية السحب" }, value: "Native 60 FPS" }
    ],
    architecture: {
      en: "Clean event delegation listener tracking dragstart, dragover, drop, and dragend with DOM node insertion and state array reconciliation.",
      ar: "إدارة تفويض الأحداث لمتابعة سحب وإفلات العناصر مع تحديث فوري لمصفوفة البيانات وحفظها في التخزين المحلي."
    },
    diagramSteps: [
      { en: "Drag Start (Element Grip)", ar: "بدء السحب وتحديد العنصر" },
      { en: "Drag Over (Column Detection)", ar: "المرور فوق العمود المستهدف" },
      { en: "Visual Drop Indicator", ar: "إظهار مؤشر موضع الإفلات" },
      { en: "Drop & State Sync", ar: "الإفلات وحفظ الترتيب" }
    ],
    steps: [
      {
        title: { en: "1. HTML5 Drag Event Lifecycle", ar: "1. دورة حياة أحداث السحب في HTML5" },
        content: {
          en: "Attach `draggable='true'` to cards and handle `e.dataTransfer.setData` to securely transfer entity identifiers.",
          ar: "إضافة خاصية `draggable='true'` لكل بطاقة والتقاط معرّف العنصر لنقله بين الأعمدة بسلاسة."
        }
      },
      {
        title: { en: "2. Reordering & Persistence", ar: "2. إعادة الترتيب والحفظ اللحظي" },
        content: {
          en: "Calculate nearest sibling position using mouse Y coordinates to insert cards above or below adjacent items accurately.",
          ar: "حساب موقع الماوس بالنسبة للبطاقات المجاورة لإدراج البطاقة في الموضع الدقيق قبل حفظ الترتيب الجديد."
        }
      }
    ],
    codeSnippet: `class KanbanEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.draggedCard = null;
    this.initEvents();
  }

  initEvents() {
    this.container.addEventListener('dragstart', (e) => {
      if (e.target.classList.contains('kanban-card')) {
        this.draggedCard = e.target;
        e.target.classList.add('is-dragging');
        e.dataTransfer.effectAllowed = 'move';
      }
    });

    this.container.addEventListener('dragend', (e) => {
      if (this.draggedCard) {
        this.draggedCard.classList.remove('is-dragging');
        this.draggedCard = null;
        this.saveBoardState();
      }
    });

    this.container.addEventListener('dragover', (e) => {
      e.preventDefault();
      const column = e.target.closest('.kanban-column-body');
      if (!column || !this.draggedCard) return;

      const afterElement = this.getDragAfterElement(column, e.clientY);
      if (afterElement == null) {
        column.appendChild(this.draggedCard);
      } else {
        column.insertBefore(this.draggedCard, afterElement);
      }
    });
  }

  getDragAfterElement(container, y) {
    const cards = [...container.querySelectorAll('.kanban-card:not(.is-dragging)')];
    return cards.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }
}`
  }
];

const PLATFORM_STATS = [
  { value: "24+", label: { en: "Deep Blueprints", ar: "شرح معماري وتطبيقي" } },
  { value: "100%", label: { en: "Production Ready Code", ar: "أكواد برمجية جاهزة" } },
  { value: "0ms", label: { en: "Instant Bilingual RTL", ar: "تبديل فوري عربي/إنجليزي" } },
  { value: "SaaS", label: { en: "World-Class Design", ar: "تصميم عالمي بمعايير SaaS" } }
];

const CATEGORIES = [
  { id: "all", label: { en: "All Blueprints", ar: "كافة الشروحات والمشاريع" } },
  { id: "ai", label: { en: "AI & Smart Agents", ar: "الذكاء الاصطناعي والوكلاء" } },
  { id: "web", label: { en: "Modern Web & UI", ar: "الويب وتجربة المستخدم" } },
  { id: "cloud", label: { en: "Cloud & Systems", ar: "السحابة والأنظمة الموزعة" } },
  { id: "devtools", label: { en: "DevTools & Automation", ar: "أدوات المطورين والأتمتة" } }
];
