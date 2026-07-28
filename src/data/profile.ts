export const profile = {
  name: 'Nikhila Sree',
  initials: 'NM',
  location: 'Sunnyvale, California, United States',
  email: 'nikhilasree636@gmail.com',
  phone: '+1 430-262-8690',
  resumeUrl: '/Nikhila_Mateti_Resume.pdf',
  // linkedin: 'https://www.linkedin.com/in/nikhila-mateti/',
  github: 'https://github.com/nikhila-mateti',
  bio: 'AI Engineer with 3+ years of software engineering experience building production GenAI systems, agent workflows, RAG pipelines, model evaluations, and backend services. Shipped AI applications handling thousands of weekly requests, improved retrieval accuracy to 89%, reduced p95 latency by 43%, and automated workflows that previously required hours of manual work.',
};

export const education = [
  {
    period: 'Aug 2023 – Dec 2024',
    school: 'Northwest Missouri State University',
    degree: 'MS, Computer Science',
    detail: 'Maryville, MO · GPA 4.0/4.0',
  },
  {
    period: 'Jun 2018 – May 2021',
    school: 'Jawaharlal Nehru Technological University',
    degree: 'B.Tech, Computer Science',
    detail: 'Hyderabad, India · GPA 3.6/4.0',
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'SQL', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Generative AI',
    items: [
      'LLMs',
      'Agentic AI',
      'RAG',
      'Structured Outputs',
      'Function Calling',
      'Tool Use',
      'Prompt Engineering',
      'Human-in-the-Loop',
    ],
  },
  {
    title: 'Frameworks',
    items: ['LangGraph', 'LangChain', 'OpenAI APIs', 'AWS Bedrock', 'Hugging Face Transformers'],
  },
  {
    title: 'Retrieval & Evaluation',
    items: [
      'Embeddings',
      'Vector Search',
      'Hybrid Retrieval',
      'Metadata Filtering',
      'Reranking',
      'Retrieval Evaluation',
      'Agent Evaluation',
      'Hallucination Detection',
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      'FastAPI',
      'Spring Boot',
      'REST APIs',
      'Microservices',
      'PostgreSQL',
      'Redis',
      'Kafka',
      'Pandas',
      'PySpark',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    items: ['AWS', 'Kubernetes', 'Docker', 'CI/CD', 'Distributed Tracing', 'Application Monitoring'],
  },
  {
    title: 'Testing',
    items: ['Pytest', 'JUnit', 'Mockito', 'Unit Testing', 'Integration Testing', 'API Testing'],
  },
];

export const experience = [
  {
    period: 'Jul 2025 – Present',
    company: 'Walmart',
    role: 'AI Engineer',
    bullets: [
      'Built an internal AI assistant that investigated catalog, inventory, pricing, and promotion exceptions by retrieving internal policies and querying approved enterprise APIs, supporting 3,500+ requests per week.',
      'Increased retrieval accuracy from 76% to 89% across 1,200 labeled queries by combining lexical and vector search with metadata filters and reranking.',
      'Increased end-to-end exception resolution from 68% to 86% across 6 investigation flows by preserving case state, selecting APIs based on exception type, retrying transient failures, and routing low-confidence cases to human reviewers.',
      'Reduced pre-release validation from approximately 1 day to under 2 hours by automatically replaying labeled cases and blocking regressions in retrieval relevance, API selection, unsupported responses, and response latency.',
    ],
    tech: [
      'RAG',
      'Hybrid Retrieval',
      'Reranking',
      'Agent Workflows',
      'LLMs',
      'Function Calling',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Evaluation',
    ],
  },
  {
    period: 'Jan 2025 – Jun 2025',
    company: 'SellMate.AI',
    role: 'AI Engineer Intern',
    bullets: [
      'Built and productionized a multimodal AI pipeline using OpenAI Vision and AWS Bedrock that converted seller-uploaded product images into validated titles, descriptions, categories, and structured attributes stored in the catalog database.',
      'Reduced listing creation time from approximately 20 minutes to under 30 seconds per SKU, a 40x improvement, by automating image analysis, structured JSON generation, schema validation, retries, fallback handling, and catalog insertion.',
      'Removed the primary bottleneck in large seller onboarding workflows by replacing sequential catalog processing with parallel file streaming and asynchronous LLM inference without loading complete files into memory.',
      'Improved the security and maintainability of AI listing workflows by migrating custom sessions to Clerk OAuth 2.0 and introducing versioned, backward-compatible APIs as seller usage increased.',
    ],
    tech: [
      'OpenAI Vision',
      'AWS Bedrock',
      'Structured Outputs',
      'FastAPI',
      'Clerk OAuth 2.0',
      'Python',
      'PostgreSQL',
    ],
  },
  {
    period: 'Aug 2021 – Jul 2023',
    company: 'LTIMindtree',
    role: 'Software Engineer',
    bullets: [
      'Developed Java and Spring Boot services that processed 100,000+ billing and transaction records daily, enforcing 25+ business rules for payments, duplicate detection, and account eligibility.',
      'Reduced reconciliation investigation time from 2 hours to 20 minutes by building a module that compared source files with processed records and generated record-level mismatch reports.',
      'Cut batch-processing time by 38% by removing redundant SQL joins, adding targeted indexes, optimizing JDBC batch operations, and eliminating repeated database calls.',
      'Increased successful batch completion from 94% to 99% and raised test coverage from 55% to 82% by implementing checkpoint recovery, idempotent reruns, failure-safe restarts, and 80+ JUnit and Mockito tests.',
    ],
    tech: ['Java', 'Spring Boot', 'SQL', 'PostgreSQL', 'JUnit', 'Mockito', 'Batch Processing'],
  },
];

export const projects = [
  {
    number: '01',
    title: 'AI Learning-To-Publishing Agent',
    bullets: [
      'Built a multi-step agent platform that transformed technical notes and code examples into structured blog posts, LinkedIn content, and interactive quizzes with retrieval-grounded generation, source validation, and review workflows.',
      'Deployed the FastAPI and PostgreSQL application with Docker and Kubernetes, adding persistent storage, Secrets, health probes, rolling updates, and 39 passing tests across agent workflows, authentication, publishing states, and API behavior.',
    ],
    description: null as string | null,
    tech: ['LangChain', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
    githubUrl: null as string | null,
  },
  {
    number: '02',
    title: 'InterviewBot',
    bullets: [
      'Ingested and chunked 100+ pages into a Neo4j-backed knowledge graph and implemented top-k retrieval for grounded interview-question responses.',
      'Delivered an end-to-end application with FastAPI inference endpoints, LangChain retrieval workflows, and a Streamlit chat interface.',
    ],
    description: null as string | null,
    tech: ['Python', 'LangChain', 'Neo4j', 'GPT-3.5', 'FastAPI', 'Streamlit', 'RAG'],
    githubUrl: 'https://github.com/nikhila-mateti/InterviewBot',
  },
];
