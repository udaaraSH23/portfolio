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
  keyFeatures?: {
    title: string;
    desc: string;
    icon?: string;
  }[];
  technicalSections?: {
    title: string;
    content: string;
  }[];
  links?: {
    live?: string;
    github?: string;
  };
  architecture?: {
    summary: string;
    stack: string[];
    notes: string[];
  };
  featured?: boolean;
}

export const projects: ProjectData[] = [
  {
    slug: 'trekdesk-ai',
    category: 'ai',
    title: 'TrekDesk AI - AI-Powered Tour Booking Assistant',
    shortDesc: 'Real-time AI voice and chat assistant for tour bookings with RAG-based knowledge retrieval.',
    fullDesc: 'TrekDesk AI is a production-ready AI assistant designed for the travel industry. It leverages the Gemini Live API and WebSockets for low-latency voice and text interactions, integrated with a RAG pipeline using pgvector for context-aware responses and Google Calendar for automated scheduling.',
    tags: [
      'React',
      'Node.js',
      'TypeScript',
      'WebSockets',
      'PostgreSQL',
      'pgvector',
      'Gemini Live API',
      'Google APIs',
      'Cloud Run',
      'RAG'
    ],
    role: 'Lead AI Engineer',
    year: '2026 (March)',
    client: 'Internal Project (Live)',
    problem: 'Tour operators often struggle with handling real-time inquiries and bookings across different time zones, leading to missed opportunities and slow response times.',
    solution: 'I built an AI-driven assistant that can handle complex tour inquiries, check real-time availability via Google Calendar, and process bookings autonomously using tool-calling and RAG.',
    keyFeatures: [
      {
        title: 'Real-time Voice & Chat',
        desc: 'Implemented low-latency communication using WebSockets and Gemini Live API for a natural human-like interaction.',
        icon: 'record_voice_over'
      },
      {
        title: 'RAG Pipeline',
        desc: 'Built a semantic search engine using PostgreSQL and pgvector to provide accurate information based on private tour data.',
        icon: 'search'
      },
      {
        title: 'Automated Scheduling',
        desc: 'Integrated Google Calendar API for dynamic availability checks and automated booking confirmations.',
        icon: 'event_available'
      }
    ],
    technicalSections: [
      {
        title: 'Voice-First AI Architecture',
        content: 'The system uses a high-performance Node.js backend to bridge the gap between frontend WebSockets and the Gemini Live API, ensuring sub-second response times for voice interactions.'
      },
      {
        title: 'Embeddable Widget System',
        content: 'Designed a secure, domain-validated widget system that allows third-party websites to integrate the AI assistant with just a few lines of code, featuring full session persistence and analytics.'
      }
    ],
    links: {
      live: 'https://udarashanuka.axiolon.com'
    },
    architecture: {
      summary: 'Real-time AI voice system with RAG capabilities, containerized and deployed on Google Cloud Run.',
      stack: [
        'React',
        'Node.js',
        'Express',
        'TypeScript',
        'WebSockets',
        'PostgreSQL',
        'pgvector',
        'Gemini Live API',
        'Google APIs',
        'Google Cloud Run'
      ],
      notes: [
        'Low-latency voice communication via WebSockets',
        'RAG pipeline for semantic knowledge retrieval',
        'AI tool-calling for dynamic booking workflows',
        'Google Calendar API integration for scheduling',
        'Secure Google OAuth authentication',
        'Embeddable widget with domain-based access control'
      ]
    },
    featured: true
  },
  {
    slug: 'kandy-trekking-tours',
    category: 'frontend',
    title: 'Kandy Trekking Tours',
    shortDesc: 'Modern web platform showcasing authentic Sri Lankan trekking experiences with immersive route discovery.',
    fullDesc: 'Kandy Trekking Tours is a high-performance production site serving real customer traffic. It focuses on immersive route discovery, performance optimization, and seamless user engagement through modern web technologies.',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Resend',
      'Analytics',
      'Vercel',
      'SEO'
    ],
    role: 'Frontend Engineer',
    year: '2026 (Feb)',
    client: 'Adventure Sri Lanka',
    problem: 'The client needed a digital presence that mirrored the high-end, immersive nature of their trekking expeditions while maintaining top-tier performance and SEO ranking.',
    solution: 'Developed a production-ready Next.js site with optimized rendering, integrated analytics for visitor tracking, and a custom inquiry system.',
    keyFeatures: [
      {
        title: 'Production DNS & Deployment',
        desc: 'Managed the full deployment lifecycle on Vercel, including DNS configuration and performance tuning for live traffic.',
        icon: 'cloud_done'
      },
      {
        title: 'SEO & Analytics',
        desc: 'Implemented advanced SEO strategies and integrated behavior tracking to analyze visitor engagement.',
        icon: 'trending_up'
      },
      {
        title: 'Responsive Design',
        desc: 'Built a premium, mobile-first UI tailored for high-res adventure photography and smooth transitions.',
        icon: 'devices'
      }
    ],
    technicalSections: [
      {
        title: 'Vercel Edge Optimization',
        content: 'Utilized Vercel Edge functions and caching strategies to ensure the site remains fast and responsive across different global regions.'
      }
    ],
    links: {
      live: 'https://kandytrekkingtours.com'
    },
    architecture: {
      summary: 'SEO-optimized Next.js platform focused on performance, conversion, and immersive storytelling.',
      stack: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Resend',
        'Google Analytics',
        'Vercel'
      ],
      notes: [
        'Full production deployment and DNS management',
        'Performance-tuned Next.js App Router architecture',
        'SEO optimization for competitive trekking keywords',
        'Integrated Resend for transactional email notifications',
        'Analytics integration for user behavior tracking'
      ]
    },
    featured: true
  },
  {
    slug: 'university-sso',
    category: 'fullstack',
    title: 'University-SSO (Multi-Portal Management System)',
    shortDesc: 'Next.js monorepo university system with shared services, centralized SSO, and GitOps-driven deployment.',
    fullDesc: 'University-SSO is a comprehensive multi-portal university management system built using a modern monorepo architecture. The platform consists of independent student, library, and administrative portals, all powered by shared packages for authentication, database access, and backend logic. It leverages WSO2 Identity Server for centralized SSO and a sophisticated DevOps pipeline involving Terraform for Azure provisioning, Ansible for K3s cluster bootstrapping, and ArgoCD for GitOps-driven application deployment.',
    tags: [
      'Next.js',
      'Turborepo',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'WSO2',
      'Kubernetes',
      'Terraform',
      'Ansible',
      'ArgoCD',
      'GitOps'
    ],
    role: 'Fullstack / DevOps Engineer',
    year: '2025 (Dec) - 2026 (Jan)',
    client: 'Personal Project',
    problem: 'Traditional university systems often suffer from fragmented services, inconsistent UI, and manual deployment processes that lead to high maintenance overhead and poor user experience.',
    solution: 'Engineered a unified ecosystem using Turborepo to share code across three distinct portals. Centralized identity management through WSO2 IS and automated the entire infrastructure lifecycle from Azure provisioning to K8s deployment.',
    keyFeatures: [
      {
        title: 'Student & Library Portals',
        desc: 'Dedicated dashboards for academic activity, library loan/return workflows, and overdue tracking with real-time stats.',
        icon: 'school'
      },
      {
        title: 'WSO2 Centralized SSO',
        desc: 'Enterprise-grade identity integration using WSO2 Identity Server for secure role-based access control across all portals.',
        icon: 'security'
      },
      {
        title: 'Infrastructure as Code',
        desc: 'Full automation suite using Terraform for Azure VM/network provisioning and Ansible for bootstrapping K3s and IAM stacks.',
        icon: 'cloud_done'
      },
      {
        title: 'GitOps & Observability',
        desc: 'Continuous delivery via ArgoCD coupled with a full monitoring stack using Prometheus, Grafana, and Alertmanager.',
        icon: 'monitoring'
      }
    ],
    technicalSections: [
      {
        title: 'Monorepo Architecture (Turborepo)',
        content: 'The system is organized into apps (student, library, admin) and packages (auth, api-client, database, ui). This structure ensures type safety and code reuse across the entire platform, managed via npm workspaces and Turborepo.'
      },
      {
        title: 'Multi-Cloud Infrastructure Automation',
        content: 'Infrastructure is provisioned using Terraform on Azure, creating the networking and VM foundations for a K3s cluster. Ansible playbooks then take over to install K3s, ArgoCD, and the WSO2 IAM stack, providing a fully reproducible production-like environment.'
      },
      {
        title: 'Advanced CI/CD & Static Analysis',
        content: 'Configured a robust pipeline including SonarQube for static analysis and code coverage reporting across all modules, ensuring high maintainability and security standards throughout the development lifecycle.'
      }
    ],
    links: {
      github: 'https://github.com/udaaraSH23/University-SSO'
    },
    architecture: {
      summary: 'Cloud-native monorepo system with centralized identity and automated deployment workflows.',
      stack: [
        'Next.js',
        'Turborepo',
        'Prisma',
        'PostgreSQL',
        'WSO2 Identity Server',
        'Terraform',
        'Ansible',
        'K3s',
        'ArgoCD',
        'Prometheus',
        'Grafana'
      ],
      notes: [
        'Monorepo management via Turborepo',
        'SSO authentication with WSO2 Identity Server',
        'Infrastructure as Code (IaC) via Terraform',
        'GitOps deployment using ArgoCD',
        'Cluster monitoring with Prometheus and Grafana'
      ]
    },
    featured: true
  },
  {
    slug: 'multi-cloud-terraform-infrastructure',
    category: 'devops',
    title: 'Multi-Cloud Terraform Infrastructure',
    shortDesc: 'Modular Infrastructure-as-Code across AWS and GCP using Terraform.',
    fullDesc: 'A sophisticated multi-cloud Infrastructure-as-Code (IaC) project that provisions and manages a hybrid cloud environment spanning Amazon Web Services (AWS) and Google Cloud Platform (GCP). The project utilizes a modular Terraform design to deploy consistent resources—including virtual machines, object storage, and NoSQL databases—across both providers, demonstrating advanced techniques in provider orchestration, module encapsulation, and automated configuration management.',
    tags: [
      'Terraform',
      'AWS',
      'GCP',
      'IaC',
      'Cloud Architecture',
      'Automation',
      'Security Groups',
      'VPC'
    ],
    role: 'Cloud / DevOps Engineer',
    year: '2025 (Dec)',
    client: 'Personal Project',
    problem: 'Managing hybrid cloud environments manually is error-prone, inconsistent, and difficult to scale, leading to "configuration drift" between different cloud providers.',
    solution: 'Designed a unified IaC framework using modular Terraform components that provide a consistent interface for deploying and managing core compute, storage, and database services across AWS and GCP.',
    keyFeatures: [
      {
        title: 'Modular Hybrid Cloud',
        desc: 'Implemented independent modules for AWS and GCP, allowing for clean encapsulation and easy scaling of resources.',
        icon: 'cloud'
      },
      {
        title: 'Security & Networking',
        desc: 'Automated provisioning of Security Groups and VPC Firewall rules to ensure secure SSH access and internal communication.',
        icon: 'security'
      },
      {
        title: 'Multi-Cloud Parity',
        desc: 'Synchronized deployment of EC2/GCE instances, S3/GCS buckets, and DynamoDB/Firestore databases.',
        icon: 'sync'
      },
      {
        title: 'Parametrized Config',
        desc: 'Variable-driven environment management using terraform.tfvars and interactive setup scripts.',
        icon: 'settings'
      }
    ],
    technicalSections: [
      {
        title: 'Architecture & Modularity',
        content: 'The infrastructure is divided into dedicated modules for AWS and GCP. This separation ensures that the root configuration remains high-level, while provider-specific logic (like t2.micro vs e2-micro instance types) is encapsulated within the modules.'
      },
      {
        title: 'Automation Workflow',
        content: 'Developed a custom setup.sh script to handle interactive configuration generation, streamlining the terraform init/plan/apply lifecycle for new environments.'
      },
      {
        title: 'Verification & Access',
        content: 'Implemented specific output definitions that generate ready-to-use SSH commands immediately after provisioning, facilitating instant verification of the deployed infrastructure.'
      }
    ],
    links: {
      github: 'https://github.com/udaaraSH23/Multi-Cloud-Infrastructure-AWS-GCP'
    },
    architecture: {
      summary: 'Modular Terraform design providing a unified interface for multi-cloud resource provisioning.',
      stack: [
        'Terraform v1.0+',
        'AWS (EC2, S3, DynamoDB)',
        'GCP (GCE, GCS, Firestore)',
        'Bash (Setup Scripts)'
      ],
      notes: [
        'Reusable Terraform modules for multi-cloud parity',
        'Automated compute and storage provisioning',
        'Cloud security rule and access configuration',
        'Variable-driven environment management',
        'Provider abstraction for AWS and GCP resources'
      ]
    },
    featured: true
  },
  {
    slug: 'ecommerce-api',
    category: 'backend',
    title: 'Scalable Ecommerce Microservice with WSO2 API Management',
    shortDesc: 'Enterprise-grade ecommerce backend with WSO2 API Management and Kubernetes orchestration.',
    fullDesc: 'A robust, production-ready RESTful API built with Node.js and Express, designed for high scalability and secure enterprise integration. The system leverages a modern cloud-native approach, utilizing Kubernetes for orchestration and WSO2 API Manager for enterprise-grade security, rate limiting, and observability. It features a modular architecture with Sequelize ORM and is built using a Design First approach with OpenAPI 3.0 definitions.',
    tags: [
      'Node.js',
      'Express',
      'WSO2 API Manager',
      'Kubernetes',
      'Docker',
      'Helm',
      'OpenAPI 3.0',
      'Sequelize',
      'MySQL'
    ],
    role: 'Backend / Platform Engineer',
    year: '2025 (Nov)',
    client: 'Personal Project',
    problem: 'Enterprises require more than just functional APIs; they need secure, managed, and observable microservices that can be easily discovered and consumed by third-party developers.',
    solution: 'Engineered a managed microservice ecosystem by offloading identity management to the WSO2 Gateway and automating deployment via Helm charts, reducing the attack surface and improving deployability.',
    keyFeatures: [
      {
        title: 'Enterprise API Management',
        desc: 'Leveraged WSO2 APIM for OAuth2/JWT authentication, header-based identity injection (x-user-id), and policy enforcement.',
        icon: 'security'
      },
      {
        title: 'Cloud-Native Orchestration',
        desc: 'Packaged with Helm for reproducible deployments, utilizing Nginx Ingress and PVCs for persistent storage management.',
        icon: 'grid_view'
      },
      {
        title: 'Software Engineering Excellence',
        desc: 'Organized with a Controller-Service-Repository pattern and custom middleware for identity validation.',
        icon: 'code'
      },
      {
        title: 'OpenAPI Driven Design',
        desc: 'Developed using a Design First approach with OpenAPI 3.0, enabling 100% automated resource creation in WSO2.',
        icon: 'api'
      }
    ],
    technicalSections: [
      {
        title: 'API Management (WSO2 APIM)',
        content: 'Integrated WSO2 Gateway to handle rate limiting and usage quotas, while exposing a self-service Developer Portal for API discovery and testing.'
      },
      {
        title: 'Kubernetes & DevOps Strategy',
        content: 'Implemented resource optimization with CPU/Memory limits and integrated health checks (Liveness/Readiness probes) to ensure cluster stability.'
      },
      {
        title: 'Modular Backend Architecture',
        content: 'Utilized Sequelize for flexible database abstraction and built custom Express middleware to extract WSO2-injected identity headers safely.'
      }
    ],
    links: {
      github: 'https://github.com/udaaraSH23/ecommerce-api'
    },
    architecture: {
      summary: 'Containerized API ecosystem with WSO2 management and security layers.',
      stack: [
        'Node.js / Express',
        'WSO2 API Manager',
        'Kubernetes / Helm',
        'Docker',
        'MySQL',
        'OpenAPI 3.0'
      ],
      notes: [
        'Design First approach with OpenAPI 3.0',
        'Header-based authentication (x-user-id injection)',
        'Rate limiting and policy enforcement via WSO2',
        'Nginx Ingress for traffic management',
        'Persistent Volume Claims for database stability'
      ]
    },
    featured: true
  },
  {
    slug: 'rosalover-ecommerce',
    category: 'fullstack',
    title: 'RosaLover - E-Commerce Platform',
    shortDesc: 'Full-stack e-commerce system with product management, payment gateway, and admin panel.',
    fullDesc: 'RosaLover is a comprehensive e-commerce platform built with React and Spring Boot. It features a robust admin dashboard for inventory management, integrated Stripe payments, and a mobile-responsive user experience.',
    tags: [
      'React',
      'Spring Boot',
      'MySQL',
      'Stripe',
      'Java',
      'REST API'
    ],
    role: 'Fullstack Developer',
    year: '2024 (Oct) – 2025 (Jan)',
    links: {
      github: ''
    },
    architecture: {
      summary: 'Standard full-stack architecture with a React frontend and Spring Boot backend.',
      stack: [
        'React',
        'Spring Boot',
        'MySQL',
        'Stripe API'
      ],
      notes: [
        'Product and inventory management system',
        'Role-based admin panel access',
        'Stripe payment gateway integration',
        'Modular REST API design'
      ]
    },
    featured: true
  },
  {
    slug: 'ai-weightlifting-posture-analysis',
    category: 'research',
    title: 'AI-Driven 3D Posture Detection in Weightlifting',
    shortDesc: 'Computer vision pipeline for biomechanical analysis of Olympic weightlifting using TensorFlow and MediaPipe.',
    fullDesc: 'A research-focused project that uses computer vision to analyze human posture during weightlifting. The system extracts joint angles and velocities to provide real-time feedback and movement classification using deep learning models.',
    tags: [
      'Python',
      'TensorFlow',
      'OpenCV',
      'MediaPipe',
      'LSTM',
      'MLOps'
    ],
    role: 'ML / Research Engineer',
    year: '2024 (Jun) – 2025 (June)',
    links: {
      github: ''
    },
    architecture: {
      summary: 'Automated computer vision pipeline for biomechanical feature extraction and motion classification.',
      stack: [
        'Python',
        'TensorFlow',
        'OpenCV',
        'MediaPipe',
        'LSTM'
      ],
      notes: [
        'Multi-camera video processing pipeline',
        'Pose estimation and joint angle computation',
        'Phase classification using CNN-LSTM models',
        'Real-time posture feedback generation'
      ]
    },
    featured: true
  },
  {
    slug: 'movie-booking-systems',
    category: 'software',
    title: 'Movie Booking Systems (Java & C)',
    shortDesc: 'Two separate implementations of a movie booking system focusing on OOP and Procedural paradigms.',
    fullDesc: 'A dual-project exploration of software engineering principles. The Java implementation focuses on Object-Oriented Programming (OOP) and Swing GUI, while the C implementation focuses on procedural programming and efficient data structures.',
    tags: [
      'Java',
      'Swing',
      'C',
      'OOP',
      'Data Structures'
    ],
    role: 'Software Engineer',
    year: '2022 - 2023',
    links: {
      github: ''
    },
    architecture: {
      summary: 'Educational project comparing two major programming paradigms.',
      stack: [
        'Java (Swing)',
        'C'
      ],
      notes: [
        'Java: GUI interaction and OOP design patterns',
        'C: Functional programming and memory management',
        'Core focus on business logic and state management'
      ]
    }
  }
];


export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projects.find(p => p.slug === slug);
};
