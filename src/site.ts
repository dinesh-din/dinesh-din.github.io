// Edit this file first: it feeds the whole site.
// Leave `email`, `location`, `photo`, `resume`, a link, or `experience` empty
// and that part simply won't be shown.

export interface Job {
  role: string;
  company: string;
  period: string; // e.g. 'Jan 2023 - Present'
  points: string[];
}

export const site = {
  name: 'Dinesh Mamidi',
  role: 'Full-stack Java engineer · AI',
  tagline:
    'I build full-stack applications on Java and Spring, from the database to the UI, and I am building AI agents and LLM-powered features on top of them.',
  about: [
    'I am a full-stack engineer who works mainly in Java. I like taking a feature from schema to API to interface and making it reliable in production.',
    'I have shipped a healthcare platform on Angular, Spring Boot and AWS, and built a generative AI chat and image app with React, Spring Boot, Spring AI and OpenAI. Now I am extending that into agent workflows with LangGraph, documented in my current build below.',
  ],
  photo: '/profile.jpg',
  location: 'Dallas Open to relocate, All over USA',
  email: 'dinesh.26java@gmail.com',
  links: {
    github: 'https://github.com/dinesh-din',
    linkedin: 'https://www.linkedin.com/in/dineshmamidi08/',
  },
  skills: {
        Languages: [
          'Java 8+', 'Java 11', 'Java 17', 'J2EE / EJB', 'Python', 'Bash scripting', 'SQL',
          'JavaScript', 'TypeScript', 'Scala', 'C# (working knowledge)', 'Node.js',
        ],
        'Backend, frameworks and APIs': [
          'Spring Boot', 'Spring Cloud', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'Spring Security',
          'Spring Web Services', 'Spring AI', 'RESTful APIs (API-first design)', 'GraphQL', 'SOAP web services',
          'JSON', 'XML', 'XSD', 'JMS', 'API Gateway', 'Swagger', 'ModelMapper', 'Lombok', 'Log4j', 'JDBC',
          'CompletableFuture and bounded thread pools', 'Resilience4j (circuit breakers)', 'Maven', 'Gradle',
        ],
        Frontend: [
          'Angular 17+', 'NgRx Store', 'RxJS', 'React', 'Redux', 'Micro frontend architecture',
          'HTML5', 'CSS3', 'Bootstrap', 'TypeScript',
        ],
        'Cloud (AWS)': [
          'EKS', 'EC2', 'RDS', 'S3', 'Lambda', 'CDK', 'CloudWatch', 'CloudFormation', 'IAM', 'VPC',
          'SQS', 'SNS', 'API Gateway',
        ],
        'Cloud (Azure)': [
          'App Services', 'Azure Functions', 'Azure DevOps', 'Azure SQL', 'Azure Storage', 'Cosmos DB', 'AKS', 'Azure AD',
        ],
        'Cloud (GCP)': ['GKE', 'BigQuery', 'Pub/Sub'],
        'CI/CD, IaC and containers': [
          'Jenkins', 'GitLab CI/CD', 'GitHub Workflows', 'Terraform', 'AWS CDK', 'CloudFormation',
          'Infrastructure as Code', 'GitOps', 'Helm', 'Docker (multi-stage builds)', 'Kubernetes',
          'Red Hat OpenShift', 'Blue-green and rolling deployments', 'SonarQube',
        ],
        Databases: [
          'PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'Oracle', 'Azure SQL', 'MongoDB', 'Redis', 'DynamoDB',
          'Azure Cosmos DB', 'Amazon DocumentDB', 'pgvector', 'Stored procedures', 'SSRS / SSIS', 'Schema design',
          'Query optimization', 'Data migration and reconciliation',
        ],
        'Messaging and streaming': [
          'Apache Kafka', 'Kafka Streams', 'RabbitMQ', 'IBM MQ', 'JMS', 'AWS SQS / SNS', 'GCP Pub/Sub',
          'Event-driven architecture', 'Dead-letter queues', 'Idempotent consumers',
        ],
        Testing: [
          'JUnit 5', 'Mockito', 'Jasmine', 'Karma', 'Postman', 'Swagger', 'JMeter', 'TDD', 'BDD',
          'Integration and regression testing', 'A/B experimentation', 'Canary deployments',
        ],
        Observability: [
          'Dynatrace', 'Prometheus', 'Grafana', 'Real-time dashboards', 'Distributed tracing', 'Alerting', 'Runbooks',
        ],
        Security: [
          'OAuth 2.0', 'OpenID Connect', 'JWT', 'Spring Security', 'Azure AD', 'IAM roles and policies', 'RBAC',
          'PII tokenization', 'Input sanitization', 'OWASP validation',
        ],
        'AI-assisted development': [
          'Spring AI', 'OpenAI APIs (GPT-4, DALL-E)', 'Prompt engineering', 'PromptTemplate workflows',
          'Retrieval-Augmented Generation (pgvector)', 'GitHub Copilot', 'LangGraph',
        ],
        'OS and systems': [
          'Linux (Ubuntu, RHEL)', 'IBM AIX', 'Networking', 'OS-level optimizations', 'JVM tuning',
          'Data structures and algorithms',
        ],
        'Practices and methodologies': [
          'Agile / Scrum', 'SDLC', 'Git', 'Code reviews', 'Mentoring', 'Design documentation',
          'Estimates and implementation plans', 'Sprint planning', 'Requirements gathering', 'Production support',
          'On-call', 'Root cause analysis', 'Confluence', 'Design patterns (Strategy, Factory)',
          'Domain-driven design', 'Microservices', 'Distributed systems',
        ],
  } as Record<string, string[]>,
  // Add your jobs here and an Experience section appears automatically.
  // Example:
  // { role: 'Software Engineer', company: 'Company Name', period: '2022 - Present',
  //   points: ['Built X that did Y', 'Improved Z by 30%'] },
  experience: [] as Job[],
};
