export interface ProjectData {
  slug: string;
  category: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  role: string;
  year?: string;
  client?: string;
  problem?: string;
  solution?: string;
  narrativeImage?: {
    src: string;
    alt: string;
  };
  keyFeatures?: {
    title: string;
    desc: string;
    icon?: string;
  }[];
  technicalSections?: {
    title: string;
    content: string;
  }[];
  results?: string[];
  links?: {
    live?: string;
    github?: string;
    docs?: string;
  };
  architecture?: {
    summary: string;
    stack: string[];
    notes: string[];
  };
  featured?: boolean;
  clientData?: {
    title: string;
    subtitle: string;
    description: string;
    problem: string;
    solution: string;
    features: {
      title: string;
      desc: string;
      icon: string;
    }[];
    results: string[];
    liveUrl: string;
  };
}

export const projects: ProjectData[] = [
  {
    slug: "trekdesk-ai",
    category: "ai",
    title: "TrekDesk AI - AI-Powered Tour Booking Assistant",
    shortDesc:
      "Real-time AI voice and chat assistant for tour bookings with RAG-based knowledge retrieval.",
    fullDesc:
      "TrekDesk AI is a production-ready AI assistant designed for the travel industry. It leverages the Gemini Live API and WebSockets for low-latency voice and text interactions, integrated with a RAG pipeline using pgvector for context-aware responses and Google Calendar for automated scheduling.",
    tags: [
      "React",
      "Node.js",
      "TypeScript",
      "WebSockets",
      "PostgreSQL",
      "pgvector",
      "Gemini Live API",
      "Google APIs",
      "Cloud Run",
      "RAG",
    ],
    role: "Full Stack Enginner",
    year: "2026 (March)",
    client: "Internal Project (Live)",
    problem:
      "Tour operators often struggle with handling real-time inquiries and bookings across different time zones, leading to missed opportunities and slow response times.",
    solution:
      "I built an AI-driven assistant that can handle complex tour inquiries, check real-time availability via Google Calendar, and process bookings autonomously using tool-calling and RAG.",
    narrativeImage: {
      src: "/portfolio/projectImg/trekdeskai.webp",
      alt: "TrekDesk AI booking assistant interface",
    },
    keyFeatures: [
      {
        title: "Real-time Voice & Chat",
        desc: "Implemented low-latency communication using WebSockets and Gemini Live API for a natural human-like interaction.",
        icon: "record_voice_over",
      },
      {
        title: "RAG Pipeline",
        desc: "Built a semantic search engine using PostgreSQL and pgvector to provide accurate information based on private tour data.",
        icon: "search",
      },
      {
        title: "Automated Scheduling",
        desc: "Integrated Google Calendar API for dynamic availability checks and automated booking confirmations.",
        icon: "event_available",
      },
    ],
    technicalSections: [
      {
        title: "Voice-First AI Architecture",
        content:
          "The system uses a high-performance Node.js backend to bridge the gap between frontend WebSockets and the Gemini Live API, ensuring sub-second response times for voice interactions.",
      },
      {
        title: "Embeddable Widget System",
        content:
          "Designed a secure, domain-validated widget system that allows third-party websites to integrate the AI assistant with just a few lines of code, featuring full session persistence and analytics.",
      },
    ],
    results: [
      "Live product handling tour inquiries through real-time voice and chat.",
      "Deployed on Google Cloud Run with an embeddable, domain-validated widget for third-party sites.",
      "Automates availability checks and booking confirmations via Google Calendar integration.",
      "TODO: add verified metrics (response latency, inquiries handled, bookings completed) once measured.",
    ],
    links: {
      live: "https://trekdeskai.axiolon.com",
    },
    architecture: {
      summary:
        "Real-time AI voice system with RAG capabilities, containerized and deployed on Google Cloud Run.",
      stack: [
        "React",
        "Node.js",
        "Express",
        "TypeScript",
        "WebSockets",
        "PostgreSQL",
        "pgvector",
        "Gemini Live API",
        "Google APIs",
        "Google Cloud Run",
      ],
      notes: [
        "Low-latency voice communication via WebSockets",
        "RAG pipeline for semantic knowledge retrieval",
        "AI tool-calling for dynamic booking workflows",
        "Google Calendar API integration for scheduling",
        "Secure Google OAuth authentication",
        "Embeddable widget with domain-based access control",
      ],
    },
    featured: true,
    clientData: {
      title: "TrekDesk AI - Automated Tour Booking Assistant",
      subtitle:
        "A smart voice and chat assistant that answers questions and handles reservations 24/7.",
      description:
        "TrekDesk AI is an automated assistant designed to help travel and tour businesses manage customer inquiries instantly. By linking directly to Google Calendar and using secure, custom chat modules, it answers questions about tours, checks real-time availability, and records bookings automatically without needing human intervention.",
      problem:
        "Handling booking inquiries across different time zones is challenging for small teams, resulting in slow reply times and lost customers.",
      solution:
        "An automated web assistant that understands natural conversation, has complete knowledge of your tours, and integrates directly with scheduling tools to book customers instantly.",
      features: [
        {
          title: "Real-Time Voice & Chat",
          desc: "Customers get instant, friendly responses to their questions about tours through voice or text.",
          icon: "record_voice_over",
        },
        {
          title: "Automated Calendar Sync",
          desc: "Checks availability and schedules bookings directly into Google Calendar without conflicts.",
          icon: "event_available",
        },
        {
          title: "24/7 Availability",
          desc: "Works around the clock so you never miss an inquiry or booking opportunity.",
          icon: "support_agent",
        },
      ],
      results: [
        "Automates tour inquiries and booking workflows end-to-end.",
        "Reduces response times from hours to seconds.",
        "Secures reservations automatically via live calendar integrations.",
      ],
      liveUrl: "https://trekdeskai.axiolon.com",
    },
  },
  {
    slug: "axcom",
    category: "Open Source",
    title: "AxCom - Modular Headless Commerce Engine",
    shortDesc:
      "An open-source e-commerce backend that gives any storefront - web, mobile, or custom - a ready-made engine for products, carts, orders, and payments.",
    fullDesc:
      "AxCom is an open-source (Apache-2.0) headless commerce engine written in Go. Instead of forcing businesses into a monolithic store platform, it exposes commerce as clean APIs - auth, catalog, inventory, cart, orders, payments, and shipping - that any frontend can consume. It ships as a single static binary with observability built in, so it can be deployed anywhere from a small VPS to a Kubernetes cluster. I created and actively maintain the project, including its documentation site, CI/CD pipeline, and published Docker images.",
    tags: [
      "Go",
      "Gin",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "Docker",
      "GitHub Actions",
      "OpenTelemetry",
      "Prometheus",
      "Docusaurus",
    ],
    role: "Creator & Maintainer",
    year: "2026 – Present",
    client: "Open Source",
    problem:
      "Small teams building custom storefronts face a bad trade-off: adopt a heavyweight platform they don't fully need, or rebuild the same commerce plumbing - products, carts, orders, payments, auth - from scratch for every project. Most lightweight alternatives also skip the operational basics (metrics, tracing, sane deployment), which only hurts later in production.",
    solution:
      "I built a modular engine where each commerce domain is an independent module with zero cross-module imports, so teams can reason about - and extend - one area without touching the rest. Infrastructure is swappable through adapters (PostgreSQL or MongoDB, Redis caching, RabbitMQ messaging, S3/R2 storage) selected by configuration, not code changes. Observability, auth, and rate limiting are built in from day one, and the whole engine compiles to one static binary for trivial deployment.",
    keyFeatures: [
      {
        title: "Seven independent domain modules",
        desc: "Auth, catalog, inventory, cart, orders, payments, and shipping - each with its own controller, service, and repository layers, and no cross-module imports.",
        icon: "widgets",
      },
      {
        title: "Swappable infrastructure adapters",
        desc: "Switch between PostgreSQL and MongoDB, enable Redis caching or RabbitMQ events, via configuration alone - business logic never changes.",
        icon: "swap_horiz",
      },
      {
        title: "Security at the gateway",
        desc: "JWT authentication with role-based access control, rate limiting, and CORS handled centrally at the API gateway layer.",
        icon: "security",
      },
      {
        title: "Observability out of the box",
        desc: "OpenTelemetry tracing, Prometheus metrics, and structured JSON logging - Grafana/Jaeger-ready without extra instrumentation work.",
        icon: "monitoring",
      },
      {
        title: "One-binary deployment",
        desc: "Compiles to a single static binary; published Docker images and a Docker Compose environment give a one-command local setup.",
        icon: "deployed_code",
      },
      {
        title: "Real open-source governance",
        desc: "Full documentation site, API reference, contribution guide, security policy, and code of conduct - built for community collaboration.",
        icon: "menu_book",
      },
    ],
    technicalSections: [
      {
        title: "Architecture",
        content:
          "AxCom follows clean architecture with strict module boundaries. Each of the seven domain modules owns its controllers, services, repositories, and models; modules never import each other, communicating only through well-defined interfaces. This keeps the codebase navigable and makes individual modules independently testable and replaceable.",
      },
      {
        title: "Adapter pattern for infrastructure",
        content:
          "Storage, caching, messaging, and file storage sit behind adapter interfaces. The engine runs on PostgreSQL or MongoDB, with optional Redis caching, RabbitMQ event messaging, and S3/R2-compatible object storage - all chosen through environment configuration at startup rather than code changes.",
      },
      {
        title: "CI/CD & releases",
        content:
          "GitHub Actions handles the pipeline end to end: build, test, versioned releases, and automated Docker image publishing. The Docusaurus documentation site deploys to GitHub Pages, keeping API reference and guides in sync with releases.",
      },
      {
        title: "Observability",
        content:
          "The engine is instrumented with OpenTelemetry for distributed tracing, exposes Prometheus metrics, and emits structured JSON logs - designed to plug into a Grafana/Jaeger stack with zero additional application code.",
      },
    ],
    results: [
      "Published as a public open-source project (Apache-2.0) with a full documentation site and API reference.",
      "Ships as a single static binary with published Docker images and a one-command Docker Compose setup.",
      "Observability (OpenTelemetry tracing + Prometheus metrics + structured logging) built in from day one.",
      "Runs on either PostgreSQL or MongoDB with no code changes, thanks to configuration-driven adapters.",
      "TODO: add adoption metrics (GitHub stars, releases published, contributors) once meaningful.",
    ],
    links: {
      live: "https://axcom.axiolon.com",
      github: "https://github.com/axiolon/axcom",
      docs: "https://axiolon.github.io/axcom/",
    },
    architecture: {
      summary:
        "Modular monolith in Go: seven isolated domain modules behind a shared API gateway, with configuration-driven infrastructure adapters and built-in observability, compiled to a single static binary.",
      stack: [
        "Go (Gin)",
        "PostgreSQL / MongoDB",
        "Redis",
        "RabbitMQ",
        "Docker & Docker Compose",
        "GitHub Actions",
        "OpenTelemetry + Prometheus",
        "Docusaurus (docs)",
      ],
      notes: [
        "Zero cross-module imports enforced between domain modules",
        "Adapters selected via environment configuration, not code changes",
        "Single static binary output for minimal-footprint containers",
        "Apache-2.0 licensed with contribution, security, and conduct policies",
      ],
    },
    narrativeImage: {
      src: "/portfolio/projectImg/axcom.webp",
      alt: "AxCom Headless Commerce Engine Architecture Diagram",
    },
    featured: true,
    clientData: {
      title: "AxCom - Ready-Made E-Commerce Engine",
      subtitle:
        "A secure, robust backend engine for custom online stores, carts, and payment checkout platforms.",
      description:
        "AxCom is a modular, high-performance online commerce engine. Designed for businesses that need custom storefronts (mobile apps, custom websites, or interactive screens) rather than standard templates. It provides secure APIs for inventory, shopping carts, order checkouts, and stripe payment processing, giving you a custom store backend without starting from scratch.",
      problem:
        "Building custom online stores usually requires rewriting payment systems, database integrations, and order management tools from scratch, which is expensive and time-consuming.",
      solution:
        "A ready-to-use backend engine that handles all shopping logic, payments, and product data securely, allowing developers to focus entirely on designing a beautiful user experience.",
      features: [
        {
          title: "Complete Store APIs",
          desc: "Pre-built systems for managing shopping carts, checkouts, and customer orders.",
          icon: "shopping_cart",
        },
        {
          title: "Secure Payments",
          desc: "Pre-integrated with stripe and major checkout providers to handle transactions safely.",
          icon: "payments",
        },
        {
          title: "High Speed & Stability",
          desc: "Built to process requests instantly and handle high volumes of traffic without slowing down.",
          icon: "bolt",
        },
      ],
      results: [
        "Reduces custom e-commerce development time by up to 50%.",
        "Ensures high security and speed for order checkouts out-of-the-box.",
        "Fully open-source and easy to host on cost-effective servers.",
      ],
      liveUrl: "https://axcom.axiolon.com",
    },
  },
  {
    slug: "kandy-trekking-tours",
    category: "frontend",
    title: "Kandy Trekking Tours",
    shortDesc:
      "Modern web platform showcasing authentic Sri Lankan trekking experiences with immersive route discovery.",
    fullDesc:
      "Kandy Trekking Tours is a high-performance production site serving real customer traffic. It focuses on immersive route discovery, performance optimization, and seamless user engagement through modern web technologies.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Resend",
      "Analytics",
      "Vercel",
      "SEO",
    ],
    role: "Frontend Engineer",
    year: "2026 (Feb)",
    client: "Internal",
    problem:
      "The client needed a digital presence that mirrored the high-end, immersive nature of their trekking expeditions while maintaining top-tier performance and SEO ranking.",
    solution:
      "Developed a production-ready Next.js site with optimized rendering, integrated analytics for visitor tracking, and a custom inquiry system.",
    keyFeatures: [
      {
        title: "Production DNS & Deployment",
        desc: "Managed the full deployment lifecycle on Vercel, including DNS configuration and performance tuning for live traffic.",
        icon: "cloud_done",
      },
      {
        title: "SEO & Analytics",
        desc: "Implemented advanced SEO strategies and integrated behavior tracking to analyze visitor engagement.",
        icon: "trending_up",
      },
      {
        title: "Responsive Design",
        desc: "Built a premium, mobile-first UI tailored for high-res adventure photography and smooth transitions.",
        icon: "devices",
      },
    ],
    technicalSections: [
      {
        title: "Vercel Edge Optimization",
        content:
          "Utilized Vercel Edge functions and caching strategies to ensure the site remains fast and responsive across different global regions.",
      },
      {
        title: "SEO & Marketing",
        content:
          "Integrated Google Analytics and implemented SEO strategies to improve search engine rankings and track user behavior.",
      },
      {
        title: "Responsive Design",
        content:
          "Built a premium, mobile-first UI tailored for high-res adventure photography and smooth transitions.",
      },
    ],
    results: [
      "Live in production on a custom domain, serving real customer traffic.",
      "Deployed on Vercel with DNS and edge caching managed end to end.",
      "Customer inquiries delivered reliably through Resend transactional email.",
      "TODO: add verified metrics (visitor traffic, search rankings, inquiry conversion) from Google Analytics / Search Console.",
    ],
    links: {
      live: "https://kandytreks.com",
    },
    architecture: {
      summary:
        "SEO-optimized Next.js platform focused on performance, conversion, and immersive storytelling.",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Resend",
        "Google Analytics",
        "Vercel",
      ],
      notes: [
        "Full production deployment and DNS management",
        "Performance-tuned Next.js App Router architecture",
        "SEO-optimization for competitive trekking keywords",
        "Integrated Resend for transactional email notifications",
        "Analytics integration for user behavior tracking",
      ],
    },
    narrativeImage: {
      src: "/portfolio/projectImg/kandytreks.webp",
      alt: "Kandy Trekking Tours premium website presentation",
    },
    featured: true,
    clientData: {
      title: "Kandy Trekking Tours - Premium Trekking & Tour Portal",
      subtitle:
        "An immersive tour discovery site with built-in inquiry capture and high-performance search rankings.",
      description:
        "Kandy Trekking Tours is a premium, high-speed travel platform built to showcase outdoor adventure experiences in Sri Lanka. It combines fast load times, optimized layouts for high-resolution images, and built-in search engine optimization (SEO) to attract organic traffic and convert visitors into booking leads.",
      problem:
        "Standard website templates often load slowly when displaying heavy high-resolution imagery and rank poorly on Google search, leading to low visitor engagement.",
      solution:
        "A custom, ultra-fast website optimized for mobile phones and search engine rankings, using modern image loading techniques and automated email inquiry forms.",
      features: [
        {
          title: "High-Speed Imagery",
          desc: "Showcases high-res adventure photography without slowing down the page loading speed.",
          icon: "photo_library",
        },
        {
          title: "Advanced Search SEO",
          desc: "Built with search engine optimization best practices to help clients find the business easily on Google.",
          icon: "trending_up",
        },
        {
          title: "Instant Booking Inquiries",
          desc: "Direct-to-email form so customers can submit booking requests easily and reliably.",
          icon: "mail",
        },
      ],
      results: [
        "Delivers booking inquiries reliably to the business owner via transactional email.",
        "Maintains optimal loading speeds on mobile and desktop devices.",
        "SEO-optimized structure designed to improve local search visibility.",
      ],
      liveUrl: "https://kandytreks.com",
    },
  },
  {
    slug: "university-sso",
    category: "fullstack",
    title: "University-SSO (Multi-Portal Management System)",
    shortDesc:
      "Next.js monorepo university system with shared services, centralized SSO, and GitOps-driven deployment.",
    fullDesc:
      "University-SSO is a comprehensive multi-portal university management system built using a modern monorepo architecture. The platform consists of independent student, library, and administrative portals, all powered by shared packages for authentication, database access, and backend logic. It leverages WSO2 Identity Server for centralized SSO and a sophisticated DevOps pipeline involving Terraform for Azure provisioning, Ansible for K3s cluster bootstrapping, and ArgoCD for GitOps-driven application deployment.",
    tags: [
      "Next.js",
      "Turborepo",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "WSO2",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "ArgoCD",
      "GitOps",
    ],
    role: "Fullstack / DevOps Engineer",
    year: "2025 (Dec) - 2026 (Jan)",
    client: "Personal Project",
    problem:
      "Traditional university systems often suffer from fragmented services, inconsistent UI, and manual deployment processes that lead to high maintenance overhead and poor user experience.",
    solution:
      "Engineered a unified ecosystem using Turborepo to share code across three distinct portals. Centralized identity management through WSO2 IS and automated the entire infrastructure lifecycle from Azure provisioning to K8s deployment.",
    keyFeatures: [
      {
        title: "Student & Library Portals",
        desc: "Dedicated dashboards for academic activity, library loan/return workflows, and overdue tracking with real-time stats.",
        icon: "school",
      },
      {
        title: "WSO2 Centralized SSO",
        desc: "Enterprise-grade identity integration using WSO2 Identity Server for secure role-based access control across all portals.",
        icon: "security",
      },
      {
        title: "Infrastructure as Code",
        desc: "Full automation suite using Terraform for Azure VM/network provisioning and Ansible for bootstrapping K3s and IAM stacks.",
        icon: "cloud_done",
      },
      {
        title: "GitOps & Observability",
        desc: "Continuous delivery via ArgoCD coupled with a full monitoring stack using Prometheus, Grafana, and Alertmanager.",
        icon: "monitoring",
      },
    ],
    technicalSections: [
      {
        title: "Monorepo Architecture (Turborepo)",
        content:
          "The system is organized into apps (student, library, admin) and packages (auth, api-client, database, ui). This structure ensures type safety and code reuse across the entire platform, managed via npm workspaces and Turborepo.",
      },
      {
        title: "Multi-Cloud Infrastructure Automation",
        content:
          "Infrastructure is provisioned using Terraform on Azure, creating the networking and VM foundations for a K3s cluster. Ansible playbooks then take over to install K3s, ArgoCD, and the WSO2 IAM stack, providing a fully reproducible production-like environment.",
      },
      {
        title: "Advanced CI/CD & Static Analysis",
        content:
          "Configured a robust pipeline including SonarQube for static analysis and code coverage reporting across all modules, ensuring high maintainability and security standards throughout the development lifecycle.",
      },
    ],
    links: {
      github: "https://github.com/udaaraSH23/University-SSO",
    },
    architecture: {
      summary:
        "Cloud-native monorepo system with centralized identity and automated deployment workflows.",
      stack: [
        "Next.js",
        "Turborepo",
        "Prisma",
        "PostgreSQL",
        "WSO2 Identity Server",
        "Terraform",
        "Ansible",
        "K3s",
        "ArgoCD",
        "Prometheus",
        "Grafana",
      ],
      notes: [
        "Monorepo management via Turborepo",
        "SSO authentication with WSO2 Identity Server",
        "Infrastructure as Code (IaC) via Terraform",
        "GitOps deployment using ArgoCD",
        "Cluster monitoring with Prometheus and Grafana",
      ],
    },
    narrativeImage: {
      src: "/portfolio/projectImg/university-portal.webp",
      alt: "University-SSO Multi-Portal System architecture and UI preview",
    },
    featured: true,
  },
  {
    slug: "multi-cloud-terraform-infrastructure",
    category: "devops",
    title: "Multi-Cloud Terraform Infrastructure",
    shortDesc:
      "Modular Infrastructure-as-Code across AWS and GCP using Terraform.",
    fullDesc:
      "A sophisticated multi-cloud Infrastructure-as-Code (IaC) project that provisions and manages a hybrid cloud environment spanning Amazon Web Services (AWS) and Google Cloud Platform (GCP). The project utilizes a modular Terraform design to deploy consistent resources-including virtual machines, object storage, and NoSQL databases-across both providers, demonstrating advanced techniques in provider orchestration, module encapsulation, and automated configuration management.",
    tags: [
      "Terraform",
      "AWS",
      "GCP",
      "IaC",
      "Cloud Architecture",
      "Automation",
      "Security Groups",
      "VPC",
    ],
    role: "Cloud / DevOps Engineer",
    year: "2025 (Dec)",
    client: "Personal Project",
    problem:
      'Managing hybrid cloud environments manually is error-prone, inconsistent, and difficult to scale, leading to "configuration drift" between different cloud providers.',
    solution:
      "Designed a unified IaC framework using modular Terraform components that provide a consistent interface for deploying and managing core compute, storage, and database services across AWS and GCP.",
    keyFeatures: [
      {
        title: "Modular Hybrid Cloud",
        desc: "Implemented independent modules for AWS and GCP, allowing for clean encapsulation and easy scaling of resources.",
        icon: "cloud",
      },
      {
        title: "Security & Networking",
        desc: "Automated provisioning of Security Groups and VPC Firewall rules to ensure secure SSH access and internal communication.",
        icon: "security",
      },
      {
        title: "Multi-Cloud Parity",
        desc: "Synchronized deployment of EC2/GCE instances, S3/GCS buckets, and DynamoDB/Firestore databases.",
        icon: "sync",
      },
      {
        title: "Parametrized Config",
        desc: "Variable-driven environment management using terraform.tfvars and interactive setup scripts.",
        icon: "settings",
      },
    ],
    technicalSections: [
      {
        title: "Architecture & Modularity",
        content:
          "The infrastructure is divided into dedicated modules for AWS and GCP. This separation ensures that the root configuration remains high-level, while provider-specific logic (like t2.micro vs e2-micro instance types) is encapsulated within the modules.",
      },
      {
        title: "Automation Workflow",
        content:
          "Developed a custom setup.sh script to handle interactive configuration generation, streamlining the terraform init/plan/apply lifecycle for new environments.",
      },
      {
        title: "Verification & Access",
        content:
          "Implemented specific output definitions that generate ready-to-use SSH commands immediately after provisioning, facilitating instant verification of the deployed infrastructure.",
      },
    ],
    links: {
      github:
        "https://github.com/udaaraSH23/Multi-Cloud-Infrastructure-AWS-GCP",
    },
    architecture: {
      summary:
        "Modular Terraform design providing a unified interface for multi-cloud resource provisioning.",
      stack: [
        "Terraform v1.0+",
        "AWS (EC2, S3, DynamoDB)",
        "GCP (GCE, GCS, Firestore)",
        "Bash (Setup Scripts)",
      ],
      notes: [
        "Reusable Terraform modules for multi-cloud parity",
        "Automated compute and storage provisioning",
        "Cloud security rule and access configuration",
        "Variable-driven environment management",
        "Provider abstraction for AWS and GCP resources",
      ],
    },
    narrativeImage: {
      src: "/portfolio/projectImg/multi-cloud-terraform.webp",
      alt: "Multi-Cloud Terraform Infrastructure diagram showing AWS and GCP resources",
    },
    featured: true,
  },
  {
    slug: "ecommerce-api",
    category: "backend",
    title: "Scalable Ecommerce Microservice with WSO2 API Management",
    shortDesc:
      "Enterprise-grade ecommerce backend with WSO2 API Management and Kubernetes orchestration.",
    fullDesc:
      "A robust, production-ready RESTful API built with Node.js and Express, designed for high scalability and secure enterprise integration. The system leverages a modern cloud-native approach, utilizing Kubernetes for orchestration and WSO2 API Manager for enterprise-grade security, rate limiting, and observability. It features a modular architecture with Sequelize ORM and is built using a Design First approach with OpenAPI 3.0 definitions.",
    tags: [
      "Node.js",
      "Express",
      "WSO2 API Manager",
      "Kubernetes",
      "Docker",
      "Helm",
      "OpenAPI 3.0",
      "Sequelize",
      "MySQL",
    ],
    role: "Backend Engineer",
    year: "2025 (Nov)",
    client: "Personal Project",
    problem:
      "Enterprises require more than just functional APIs; they need secure, managed, and observable microservices that can be easily discovered and consumed by third-party developers.",
    solution:
      "Engineered a managed microservice ecosystem by offloading identity management to the WSO2 API Manager and automating deployment via Helm charts, reducing the attack surface and improving deployability.",
    keyFeatures: [
      {
        title: "Enterprise API Management",
        desc: "Leveraged WSO2 APIM for OAuth2/JWT authentication, header-based identity injection (x-user-id), and policy enforcement.",
        icon: "security",
      },
      {
        title: "Cloud-Native Orchestration",
        desc: "Packaged with Helm for reproducible deployments, utilizing Nginx Ingress and PVCs for persistent storage management.",
        icon: "grid_view",
      },
      {
        title: "Software Engineering Excellence",
        desc: "Organized with a Controller-Service-Repository pattern and custom middleware for identity validation.",
        icon: "code",
      },
      {
        title: "OpenAPI Driven Design",
        desc: "Developed using a Design First approach with OpenAPI 3.0, enabling 100% automated resource creation in WSO2.",
        icon: "api",
      },
    ],
    technicalSections: [
      {
        title: "API Management (WSO2 APIM)",
        content:
          "Integrated WSO2 Gateway to handle rate limiting and usage quotas, while exposing a self-service Developer Portal for API discovery and testing.",
      },
      {
        title: "Kubernetes & DevOps Strategy",
        content:
          "Implemented resource optimization with CPU/Memory limits and integrated health checks (Liveness/Readiness probes) to ensure cluster stability.",
      },
    ],
    links: {
      github: "https://github.com/udaaraSH23/ecommerce-api",
    },
    architecture: {
      summary:
        "Containerized API ecosystem with WSO2 management and security layers.",
      stack: [
        "Node.js / Express",
        "WSO2 API Manager",
        "Kubernetes / Helm",
        "Docker",
        "MySQL",
        "OpenAPI 3.0",
      ],
      notes: [
        "Design First approach with OpenAPI 3.0",
        "Header-based authentication (x-user-id injection)",
        "Rate limiting and policy enforcement via WSO2",
        "Nginx Ingress for traffic management",
        "Persistent Volume Claims for database stability",
      ],
    },
    narrativeImage: {
      src: "/portfolio/projectImg/ecommerce-wso2-api.webp",
      alt: "Scalable Ecommerce Microservice with WSO2 API Management and Kubernetes orchestration",
    },
    featured: true,
  },
  {
    slug: "rosalover-ecommerce",
    category: "fullstack",
    title: "Lover Shop - E-Commerce Architecture",
    shortDesc:
      "Full-stack e-commerce platform with Spring Boot, MongoDB, and AWS S3 integration.",
    fullDesc:
      "Lover Shop is a production-ready e-commerce ecosystem featuring a React frontend and a Spring Boot microservice backend. It implements advanced patterns like server-side filtering, Stripe payment orchestration, and role-based administrative controls, all containerized via Docker for seamless deployment.",
    tags: [
      "React",
      "Spring Boot",
      "MongoDB",
      "AWS S3",
      "Stripe",
      "Docker",
      "JWT",
    ],
    role: "Full-stack Developer",
    year: "2024 (Oct) – 2025 (Jan)",
    client: "Team Project",
    problem:
      "Standard e-commerce templates often lack the scalability for high-volume product catalogs and the security required for enterprise-level admin operations and payments.",
    solution:
      "Engineered a robust system using Spring Boot and MongoDB for flexible data modeling. Integrated AWS S3 for scalable image storage and Stripe for secure transaction handling, all unified under a role-based JWT security layer.",
    keyFeatures: [
      {
        title: "Advanced Product Catalog",
        desc: "Implemented server-side filtering and search to maintain high performance even with large inventory datasets.",
        icon: "shopping_cart",
      },
      {
        title: "Secure Payment Flow",
        desc: "Full Stripe integration for secure, PCI-compliant transaction processing and order fulfillment.",
        icon: "payments",
      },
      {
        title: "Admin Control Center",
        desc: "Dedicated administrative panel for real-time order tracking, review moderation, and product lifecycle management.",
        icon: "admin_panel_settings",
      },
      {
        title: "Cloud Storage (AWS S3)",
        desc: "Offloaded product imagery to AWS S3, ensuring fast global delivery and scalable asset management.",
        icon: "cloud",
      },
    ],
    technicalSections: [
      {
        title: "Containerized Orchestration",
        content:
          "The entire stack-Frontend, Backend, and Database-is orchestrated using Docker Compose, providing an isolated and reproducible environment for development and production parity.",
      },
      {
        title: "Security & Authentication",
        content:
          "Implemented secure role-based access control (RBAC) using JWT with the Nimbus library, segregating customer and administrator capabilities.",
      },
    ],
    links: {
      github: "https://github.com/udaaraSH23/Lover-Shop-E-Commerce",
    },
    architecture: {
      summary:
        "Containerized full-stack architecture with decoupled storage and payment orchestration.",
      stack: [
        "React (Vite)",
        "Spring Boot (Java)",
        "MongoDB",
        "AWS S3",
        "Stripe",
        "Docker Compose",
      ],
      notes: [
        "Server-side filtering for performance",
        "Role-based authentication with JWT",
        "AWS S3 for scalable asset storage",
        "Stripe API integration for payments",
        "Dockerized development and deployment",
      ],
    },
    narrativeImage: {
      src: "/portfolio/projectImg/rosa_lover.webp",
      alt: "Lover Shop E-Commerce platform interface and architecture",
    },
    featured: true,
  },
  {
    slug: "ai-weightlifting-posture-analysis",
    category: "research",
    title: "AI-Driven Weightlifting Posture Analysis Pipeline",
    shortDesc:
      "Advanced biomechanical analysis pipeline using MediaPipe and GRU networks for Olympic weightlifting.",
    fullDesc:
      "A comprehensive computer vision and deep learning pipeline designed to analyze Olympic weightlifting (Snatch, Clean & Jerk). The system processes multi-view video streams to extract precise joint angles and velocities, utilizing a custom GRU-based regression model to provide real-time biomechanical feedback and posture correction.",
    tags: [
      "Python",
      "TensorFlow",
      "MediaPipe",
      "GRU",
      "OpenCV",
      "Biometrics",
      "Deep Learning",
    ],
    role: "ML / Research Engineer",
    year: "2024 (Jun) – 2025 (June)",
    client: "University Research",
    problem:
      "Athletes often lack access to professional biomechanical analysis, which is critical for preventing injury and optimizing power delivery in complex movements like the Snatch and Clean & Jerk.",
    solution:
      "Developed an automated pipeline that extracts 2D/3D keypoints using MediaPipe, computes joint kinematics, and uses a GRU (Gated Recurrent Unit) network to analyze movement sequences and generate actionable feedback.",
    keyFeatures: [
      {
        title: "Automated Kinematic Extraction",
        desc: "End-to-end processing from frame extraction to joint angle and velocity computation for precise movement mapping.",
        icon: "analytics",
      },
      {
        title: "GRU Sequence Analysis",
        desc: "Implemented a multi-layer GRU regression model to analyze the temporal dynamics of weightlifting phases.",
        icon: "psychology",
      },
      {
        title: "Biomechanical Feedback",
        desc: "Automated rule-based and ML-driven feedback system that identifies posture flaws in real-time.",
        icon: "feedback",
      },
      {
        title: "Multi-View Data Synthesis",
        desc: "Orchestrated quintuplet-based data sets combining front, side, and top views for holistic movement analysis.",
        icon: "grid_view",
      },
    ],
    technicalSections: [
      {
        title: "Model Architecture & Training",
        content:
          "The system utilizes a Sequential model with stacked GRU layers, BatchNormalization, and Dropout to achieve high accuracy in posture regression while preventing overfitting on limited biomechanical datasets.",
      },
      {
        title: "Feature Engineering Pipeline",
        content:
          "Built custom modules for keypoint normalization relative to hip distance and automated cropping to ensure input consistency across varying lighting and backgrounds.",
      },
    ],
    links: {
      github:
        "https://github.com/udaaraSH23/AI-posture-detection-for-weightlifting",
    },
    architecture: {
      summary:
        "Deep learning sequence model integrated with a custom computer vision pre-processing pipeline.",
      stack: [
        "Python",
        "TensorFlow (GRU)",
        "MediaPipe",
        "OpenCV",
        "Scikit-learn",
        "Pandas",
      ],
      notes: [
        "GRU-based temporal sequence regression",
        "Biomechanical joint angle computation",
        "MediaPipe-driven pose estimation",
        "Automated video pre-processing (cropping/extraction)",
        "Interactive feedback generation system",
      ],
    },
    narrativeImage: {
      src: "/portfolio/projectImg/ai-weightlifting-posture.webp",
      alt: "AI-Driven Weightlifting Posture Analysis Pipeline with MediaPipe skeleton overlay and GRU neural network",
    },
    featured: true,
  },
  {
    slug: "movie-booking-systems",
    category: "software",
    title: "Movie Booking Systems (Java & C)",
    shortDesc:
      "Two separate implementations of a movie booking system focusing on OOP and Procedural paradigms.",
    fullDesc:
      "A dual-project exploration of software engineering principles. The Java implementation focuses on Object-Oriented Programming (OOP) and Swing GUI, while the C implementation focuses on procedural programming and efficient data structures.",
    tags: ["Java", "Swing", "C", "OOP", "Data Structures"],
    role: "Software Engineer",
    year: "2022 - 2023",
    narrativeImage: {
      src: "/portfolio/projectImg/movie-booking-system.webp",
      alt: "Movie Booking System with cinematic theater seat selection interface built in Java and C",
    },
    links: {
      github: "",
    },
    architecture: {
      summary: "Educational project comparing two major programming paradigms.",
      stack: ["Java (Swing)", "C"],
      notes: [
        "Java: GUI interaction and OOP design patterns",
        "C: Functional programming and memory management",
        "Core focus on business logic and state management",
      ],
    },
  },
];

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projects.find((p) => p.slug === slug);
};
