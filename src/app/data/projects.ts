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
    slug: 'university-sso',
    category: 'fullstack',
    title: 'University-SSO (University Portal)',
    shortDesc: 'Monorepo-based multi-portal university system with shared services and centralized SSO authentication.',
    fullDesc: 'A modular monorepo-based university platform consisting of Student, Library, and Admin portals built with Next.js. The system uses shared backend services, authentication, UI, and database layers to enable a unified and scalable enterprise-grade architecture.',
    tags: [
      'Next.js',
      'Monorepo',
      'Turborepo',
      'Prisma',
      'PostgreSQL',
      'SSO',
      'WSO2',
      'Kubernetes',
      'Terraform',
      'Ansible',
      'Docker',
      'GitOps'
    ],
    role: 'Fullstack / Platform Engineer',
    year: '2024',
    client: 'University Internal Project',
    problem: 'The university faced significant challenges with fragmented student services. Each department had its own portal, leading to data silos, inconsistent user experiences, and a complex authentication process that required students to maintain multiple sets of credentials.',
    solution: 'I architected and implemented a unified monorepo system that centralizes authentication through a custom SSO layer. By leveraging shared packages and a modular architecture, we were able to consolidate the Student, Library, and Admin portals into a single, cohesive ecosystem with a unified database and design system.',
    keyFeatures: [
      {
        title: 'Centralized SSO',
        desc: 'Implemented a robust authentication layer using OAuth2 and OpenID Connect, allowing seamless navigation across all portals.',
        icon: 'lock'
      },
      {
        title: 'Monorepo Architecture',
        desc: 'Used Turborepo to manage multiple applications and shared packages, ensuring code reuse and consistent development patterns.',
        icon: 'account_tree'
      },
      {
        title: 'GitOps Deployment',
        desc: 'Automated the infrastructure and application deployment using Terraform, Ansible, and ArgoCD for a reliable CI/CD pipeline.',
        icon: 'sync'
      }
    ],
    technicalSections: [
      {
        title: 'Centralized Identity Management',
        content: 'The core of the system is a centralized identity provider based on OIDC. This allows for a single point of entry and session management across multiple top-level domains and subdomains, ensuring that a student logged into the Library portal remains authenticated when moving to the Student portal.'
      },
      {
        title: 'Infrastructure as Code (IaC)',
        content: 'The entire environment is defined using Terraform and Ansible. This ensures that the production, staging, and development environments are identical and can be recreated from scratch within minutes. We use K3s for lightweight Kubernetes orchestration in a hybrid-cloud environment.'
      },
      {
        title: 'Database & State Management',
        content: 'A shared PostgreSQL instance is used with separate schemas for different portals to maintain data isolation while allowing for complex cross-service queries when necessary. Prisma ORM handles the type-safe migrations and client generation for all portals.'
      }
    ],
    links: {
      github: ''
    },
    architecture: {
      summary: 'Multi-portal monorepo system with shared backend services, centralized authentication, and cloud-native deployment pipeline.',
      stack: [
        'Next.js',
        'Node.js (shared backend services)',
        'Prisma ORM',
        'PostgreSQL',
        'WSO2 Identity Server',
        'Kubernetes (K3s)',
        'Terraform (Azure)',
        'Ansible',
        'ArgoCD',
        'Docker',
        'Prometheus',
        'Grafana'
      ],
      notes: [
        'Role-based portal separation (Student / Library / Admin)',
        'Shared authentication layer using OAuth2 / OpenID Connect (SSO)',
        'Infrastructure-as-Code pipeline using Terraform + Ansible',
        'GitOps-based deployment via ArgoCD',
        'Centralized shared packages for backend, auth, UI, and database',
        'Observability via Prometheus and Grafana'
      ]
    },
    featured: true
  },
  {
    slug: 'kandy-trekking-tours',
    category: 'frontend',
    title: 'Kandy Trekking Tours',
    shortDesc: 'Modern web platform showcasing authentic Sri Lankan trekking experiences with immersive route discovery and guide-based expeditions.',
    fullDesc: 'Kandy Trekking Tours is a modern Next.js-based platform designed to present curated trekking experiences across Sri Lanka. It focuses on interactive trail discovery, immersive expedition showcases, and a premium visual experience optimized for performance and SEO.',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Resend',
      'Zod',
      'Lucide React',
      'SEO',
      'UI/UX'
    ],
    role: 'Frontend Engineer',
    year: '2025',
    client: 'Adventure Sri Lanka',
    problem: 'The client needed a way to showcase high-end trekking experiences that felt as immersive as the treks themselves. Existing solutions were too static and failed to capture the dynamic beauty of the Sri Lankan highlands.',
    solution: 'I developed a high-performance frontend using Next.js 16 and Tailwind CSS v4. The site features a "Trek Finder" tool, immersive route showcases with topographic-inspired UI elements, and a seamless inquiry system using Resend.',
    keyFeatures: [
      {
        title: 'Immersive Trail Discovery',
        desc: 'Interactive UI for exploring trek routes, including difficulty levels, duration, and elevation profiles.',
        icon: 'map'
      },
      {
        title: 'Ultra-Performance',
        desc: 'Optimized using Next.js App Router and server components for lightning-fast load times even with high-res imagery.',
        icon: 'speed'
      },
      {
        title: 'Guide Integration',
        desc: 'Dedicated profiles for local guides, building trust and personal connection with potential travelers.',
        icon: 'groups'
      }
    ],
    technicalSections: [
      {
        title: 'Modern Rendering Patterns',
        content: 'Leveraging Next.js 16 Server Components to minimize the client-side JavaScript bundle, resulting in near-instantaneous page loads even on slower 3G connections often found in remote trekking areas.'
      },
      {
        title: 'Topographic UI Design',
        content: 'Implemented a custom design system that uses SVG-based topographic patterns and CSS masks to create a layered, organic feel that mirrors the Sri Lankan landscape.'
      }
    ],
    links: {
      live: '',
      github: ''
    },
    architecture: {
      summary: 'Component-driven Next.js App Router architecture with a focus on SEO optimization, performance, and modular UI composition.',
      stack: [
        'Next.js 16 (App Router)',
        'TypeScript',
        'Tailwind CSS v4',
        'Resend (email service)',
        'Zod (validation)',
        'Lucide React (icons)',
        'Geist Fonts'
      ],
      notes: [
        'App Router-based file structure for routing and layouts',
        'Reusable component architecture under src/components',
        'SEO-optimized pages using Next.js metadata system',
        'Dynamic UI sections (Trek Finder, Expeditions, Marquee ticker)',
        'Responsive dark-mode aware design system',
        'Focus on performance and visual storytelling'
      ]
    },
    featured: true
  },
  {
    slug: 'lover-shop-ecommerce',
    category: 'fullstack',
    title: 'Lover Shop E-Commerce Application',
    shortDesc: 'Full-stack e-commerce platform built with React, Spring Boot, and MongoDB, fully containerized using Docker.',
    fullDesc: 'Lover Shop is a full-stack e-commerce application that provides product browsing and purchasing functionality. It is built with a React (Vite) frontend, Spring Boot backend, and MongoDB database. The system is fully containerized using Docker and Docker Compose for consistent development and deployment across environments.',
    tags: [
      'React',
      'Vite',
      'Spring Boot',
      'Java',
      'MongoDB',
      'Docker',
      'Docker Compose',
      'REST API'
    ],
    role: 'Fullstack Developer',
    links: {
      live: '',
      github: ''
    },
    architecture: {
      summary: 'Containerized full-stack architecture with separated frontend, backend, and database services orchestrated via Docker Compose.',
      stack: [
        'React (Vite)',
        'Spring Boot (Java)',
        'MongoDB',
        'Docker',
        'Docker Compose',
        'RESTful APIs'
      ],
      notes: [
        'Frontend built with Vite for fast development and HMR',
        'Backend exposes REST APIs using Spring Boot',
        'MongoDB used as NoSQL document database',
        'Each service runs in isolated Docker container',
        'Docker Compose used for multi-service orchestration',
        'Environment variables managed via .env configuration',
        'Designed for portable and reproducible development environments'
      ]
    },
    featured: true
  },
  {
    slug: 'uber-like-microservices-kafka',
    category: 'backend',
    title: 'Uber-like Microservices Demo (Kafka)',
    shortDesc: 'Event-driven microservices system using Kafka for asynchronous communication between independent services.',
    fullDesc: 'A microservices-based backend system inspired by ride-hailing platforms, where independent services (User, Driver, Ride, Payment, Notification) communicate asynchronously via Apache Kafka. The architecture demonstrates event-driven design, service decoupling, and real-time workflow orchestration using message queues.',
    tags: [
      'Node.js',
      'Express',
      'Microservices',
      'Apache Kafka',
      'KafkaJS',
      'Event-Driven Architecture',
      'Docker',
      'Distributed Systems'
    ],
    role: 'Backend / Distributed Systems Engineer',
    links: {
      github: ''
    },
    architecture: {
      summary: 'Event-driven microservices architecture using Kafka as the central message broker for asynchronous inter-service communication.',
      stack: [
        'Node.js',
        'Express.js',
        'Apache Kafka',
        'KafkaJS',
        'Docker Compose'
      ],
      notes: [
        'Service-based architecture (User, Driver, Ride, Payment, Notification)',
        'Asynchronous communication via Kafka topics',
        'Producers and consumers implemented per service',
        'Decoupled services enabling independent scalability',
        'Event-driven workflow for ride lifecycle management',
        'Docker Compose used for Kafka and service orchestration',
        'Simulates real-world distributed system patterns (queue-based coordination)'
      ]
    },
    featured: true
  },
  {
    slug: 'multi-cloud-terraform-infrastructure',
    category: 'devops',
    title: 'Multi-Cloud Terraform Infrastructure',
    shortDesc: 'Hybrid cloud infrastructure provisioning across AWS and GCP using modular Terraform design.',
    fullDesc: 'A multi-cloud Infrastructure-as-Code project that provisions compute, storage, and database resources across AWS and GCP using Terraform. The system is designed with reusable modules, enabling scalable and environment-agnostic deployments while demonstrating cross-cloud architecture patterns.',
    tags: [
      'Terraform',
      'AWS',
      'GCP',
      'Multi-Cloud',
      'Infrastructure as Code',
      'EC2',
      'S3',
      'DynamoDB',
      'Compute Engine',
      'Cloud Storage',
      'Firestore'
    ],
    role: 'DevOps / Cloud Engineer',
    links: {
      github: ''
    },
    architecture: {
      summary: 'Modular multi-cloud infrastructure using Terraform with separate AWS and GCP modules orchestrated from a unified root configuration.',
      stack: [
        'Terraform',
        'AWS (EC2, S3, DynamoDB)',
        'GCP (Compute Engine, Cloud Storage, Firestore)'
      ],
      notes: [
        'Modular Terraform design separating AWS and GCP resource definitions',
        'Root configuration orchestrates multi-cloud deployment via providers',
        'Parameterized infrastructure using variables and tfvars',
        'Reusable modules for compute, storage, and database layers',
        'Outputs expose critical deployment data (e.g., public IPs, SSH access)',
        'Supports environment customization (regions, credentials, keys)',
        'Demonstrates hybrid cloud provisioning and cross-provider abstraction',
        'Security configurations include SSH access via security groups and firewall rules'
      ]
    },
    featured: true
  },
  {
    slug: 'ai-weightlifting-posture-analysis',
    category: 'research',
    title: 'AI-Driven Weightlifting Posture Analysis Pipeline',
    shortDesc: 'End-to-end computer vision and sequence modeling pipeline for analyzing Olympic weightlifting posture and generating corrective feedback.',
    fullDesc: 'A complete AI pipeline that processes Olympic weightlifting videos (Snatch and Clean & Jerk) to extract biomechanical features such as joint angles, velocities, and movement phases. The system generates structured feedback and trains a GRU-based regression model to predict posture corrections using sequential motion data.',
    tags: [
      'Python',
      'Computer Vision',
      'MediaPipe',
      'TensorFlow',
      'GRU',
      'Sequence Modeling',
      'Biomechanics',
      'Machine Learning',
      'OpenCV',
      'Data Pipeline'
    ],
    role: 'ML / Computer Vision Engineer',
    links: {
      github: ''
    },
    architecture: {
      summary: 'End-to-end data pipeline transforming raw video into structured biomechanical features and training a GRU-based sequence model for posture correction.',
      stack: [
        'Python',
        'OpenCV',
        'MediaPipe',
        'NumPy',
        'Pandas',
        'TensorFlow (Keras)',
        'Scikit-learn',
        'Matplotlib'
      ],
      notes: [
        'Frame extraction and preprocessing pipeline for video data',
        '2D human pose estimation using MediaPipe keypoint detection',
        'Feature engineering: joint angles, velocities, and movement phases',
        'Sequence generation for temporal modeling (time-series data)',
        'Automated feedback generation based on biomechanical thresholds',
        'GRU-based regression model for posture correction prediction',
        'Model training with validation split and performance tracking (MSE, MAE)',
        'Structured dataset pipeline (JSON + NPZ formats)',
        'End-to-end workflow from raw video → prediction output'
      ]
    },
    featured: true
  }
];

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projects.find(p => p.slug === slug);
};
