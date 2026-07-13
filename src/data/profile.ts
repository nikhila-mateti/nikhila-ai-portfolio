export const profile = {
  name: 'Nikhila Mateti',
  initials: 'NM',
  location: 'Fremont, California, United States',
  email: 'nikhila.mateti12@gmail.com',
  phone: '+1 (660) 528-8989',
  resumeUrl: '/Nikhila_Mateti_Resume.pdf',
  linkedin: 'https://www.linkedin.com/in/nikhila-mateti/',
  github: 'https://github.com/nikhila-mateti',
  bio: "Full-stack engineer with 3+ years shipping products end-to-end. I build across the entire stack: backend services, distributed systems, frontend UX, and DevOps, with expertise in Python, TypeScript, React, and AWS. Recently built RAG pipelines on AWS Bedrock and led features from spec to production on a 2-person team. I'm motivated by shipping fast and learning from production.",
};

export const education = [
  {
    period: 'Aug 2023 – Dec 2024',
    school: 'Northwest Missouri State University',
    degree: 'MS, Computer Science',
    detail: 'GPA 4.0/4.0',
  },
  {
    period: 'Jun 2018 – May 2021',
    school: 'Jawaharlal Nehru Technological University Hyderabad',
    degree: 'B.Tech, Computer Science',
    detail: 'GPA 3.6/4.0',
  },
];

export const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Bash', 'Java', 'C#', 'HTML/CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      'React',
      'Next.js',
      'React Native',
      'component libraries',
      'FastAPI',
      'Express',
      'LangChain',
      'Streamlit',
      'Spring Boot',
    ],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'Firebase', 'DynamoDB', 'Neo4j', 'MS SQL'],
  },
  {
    title: 'Tools & Software',
    items: [
      'GitHub Actions',
      'Jenkins',
      'Docker',
      'Vercel',
      'Conga',
      'Application Designer',
      'Application Engine',
      'Cursor',
      'Claude Code',
      'Kubernetes',
      'Splunk',
    ],
  },
  {
    title: 'Cloud Platforms',
    items: ['AWS', 'AWS Lambda', 'AWS EC2', 'AWS S3', 'AWS Amplify', 'AWS Bedrock'],
  },
];

export const experience = [
  {
    period: 'Jul 2025 – Present',
    company: 'AI Platform Startup (Stealth)',
    role: 'Full Stack Engineer',
    bullets: [
      'Owned features end-to-end from spec to production: designed the data model, built the API in Python, shipped the React frontend, and personally handled production incidents with no handoffs.',
      'Built a RAG pipeline on AWS Bedrock (Claude LLM) that takes uploaded documents, chunks and embeds them, and generates structured output in real time; integrated it directly into a customer-facing product used daily.',
      'Shipped a multi-tenant document platform on AWS (Lambda, DynamoDB, Amplify) with org-level data isolation, TypeScript frontend, and REST APIs; went from zero to production in under 3 months on a 2-person team.',
      'Set up CI/CD in GitHub Actions with lint, type-check, and test gates; used Claude Code and Cursor daily to move faster while keeping code quality high.',
    ],
    tech: [
      'Python',
      'React',
      'AWS Bedrock',
      'Claude LLM',
      'AWS Lambda',
      'DynamoDB',
      'Amplify',
      'TypeScript',
      'REST APIs',
      'GitHub Actions',
      'Claude Code',
      'Cursor',
    ],
  },
  {
    period: 'May 2025 – Aug 2025',
    company: 'Mindly Care (Healthcare)',
    role: 'Software Engineer, Full Stack',
    bullets: [
      'Built QuickTrack from scratch in 6 weeks: goal creation flow, goal-bank browsing, multi-state validation, approve/reject actions, and activity log; shipped it independently and 3 clinical teams adopted it as their primary workflow.',
      'Tracked down a silent data corruption bug in the Node.js/Firebase decryption path, a race condition corrupting roughly 1 in 8 profile records; fixed it and error rate dropped by 40% across web and React Native.',
      'Integrated reminders into the messaging layer, applied route-level code splitting, and rebuilt skeleton loaders across patient profiles; cut perceived load time on low-end Android devices without any backend changes.',
      'Extracted 8 repeated UI patterns into a shared component library; 2 other engineers adopted it within the first month, cutting duplicated code across the product.',
    ],
    tech: ['Node.js', 'Firebase', 'React Native', 'React'],
  },
  {
    period: 'Jun 2024 – Aug 2024',
    company: 'SellMate.AI (Early Stage)',
    role: 'Software Engineer, Full Stack',
    bullets: [
      'Built the image-to-listing pipeline: seller uploads a photo, OpenAI Vision extracts product attributes, GPT-4 writes the listing copy, result is saved to the database; cut per-SKU effort from 20 minutes to under 30 seconds.',
      'Replaced a home-grown session system with Clerk OAuth 2.0, versioning the API with backward-compatible response shapes; auth support tickets dropped to zero in the 6 weeks after rollout.',
      'Rewrote bulk upload to stream files in parallel, cutting catalog processing time for large sellers and removing the main bottleneck blocking enterprise onboarding.',
    ],
    tech: ['OpenAI Vision', 'GPT-4', 'Clerk OAuth 2.0', 'API', 'Database'],
  },
  {
    period: 'Aug 2021 – Jul 2023',
    company: 'LTIMindtree',
    role: 'Software Engineer',
    bullets: [
      'Developed and maintained Java and Spring Boot services for statement and billing data processing, handling file ingestion, validation, exception handling, and reconciliation across batch workflows processing 10K+ records per run.',
      'Built a reconciliation module that diffed source files against processed records and published mismatches to Splunk, replacing manual file diffing and enabling automatic alerts with exact discrepancy details.',
      'Optimized database-access logic by removing redundant joins, adding targeted indexes, and restructuring query execution, reducing average query time by ~30%; wrote unit and integration tests wired into CI to catch regressions in PRs.',
      'Diagnosed and resolved batch job failures by correlating Spring Boot logs, Splunk events, and database records, then executed controlled idempotent reruns; collaborated with US-based leads and QA to clarify billing rules and catch edge cases during UAT.',
    ],
    tech: [
      'Java',
      'Python',
      'AWS EC2',
      'Spring Boot',
      'PostgreSQL',
      'Splunk',
      'CI/CD',
      'GitHub Actions',
      'Docker',
      'Kubernetes',
      'AWS EC2',
      'AWS Lambda',
      'AWS S3',
      'AWS DynamoDB',
      'AWS Amplify',
    ],
  },
];

export const projects = [
  {
    number: '01',
    title: 'AI Learning-To-Publishing Agent',
    bullets: [
      'Built an agentic platform that transforms technical notes and code examples into structured blog posts, LinkedIn content, and interactive quizzes through multi-step LangChain workflows.',
      'Implemented retrieval-grounded generation and source validation, then deployed the FastAPI and PostgreSQL application with Docker and Kubernetes using persistent storage, Secrets, health probes, and rolling updates.',
    ],
    description: null as string | null,
    tech: ['LangChain', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
    githubUrl: null as string | null,
  },
  {
    number: '02',
    title: 'Billing, Invoicing & Transaction Management System',
    bullets: [
      'Built a full-stack billing and invoicing system with barcode checkout, GST/discount calculation, partial payment tracking, invoice PDF generation, PostgreSQL-backed transaction records, and unit-tested pricing logic across edge cases.',
      'Designed transaction data models and REST APIs to manage invoice creation, payment status updates, customer records, billing history, partial payments, and failed/voided transaction states.',
    ],
    description: null as string | null,
    tech: ['C# .NET', 'React', 'TypeScript', 'PostgreSQL', 'REST APIs'],
    githubUrl: null as string | null,
  },
  {
    number: '03',
    title: 'InterviewBot',
    bullets: [] as string[],
    description:
      'Ingested and chunked 100+ pages into a Neo4j knowledge graph; LangChain retrieves top-k nodes at query time, FastAPI serves the inference endpoint, Streamlit handles the chat UI end-to-end.',
    tech: ['Python', 'LangChain', 'RAG', 'Neo4j', 'FastAPI', 'Streamlit'],
    githubUrl: 'https://github.com/nikhila-mateti/InterviewBot',
  },
];
