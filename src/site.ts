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
    'I have shipped a healthcare platform on Angular, Spring Boot and AWS, and built a RAG microservice with Spring AI and pgvector. Now I am extending that into agent workflows with LangGraph, documented in my current build below.',
  ],
  photo: '/profile.jpg',
  resume: '/resume.pdf',
  location: 'Dallas Open to relocate, All over USA',
  email: 'dinesh.26java@gmail.com',
  links: {
    github: 'https://github.com/dinesh-din',
    linkedin: 'https://www.linkedin.com/in/dineshmamidi08/',
  },
  skills: {
    'Backend (Java)': ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'JWT / RBAC', 'Kafka'],
    Frontend: ['Angular', 'TypeScript', 'HTML / CSS'],
    Data: ['MySQL', 'PostgreSQL', 'pgvector'],
    'AI / LLM': ['Spring AI', 'OpenAI APIs', 'RAG', 'Semantic search', 'LangGraph'],
    'Cloud & DevOps': ['AWS', 'Docker', 'Jenkins', 'Git'],
  } as Record<string, string[]>,
  // Add your jobs here and an Experience section appears automatically.
  // Example:
  // { role: 'Software Engineer', company: 'Company Name', period: '2022 - Present',
  //   points: ['Built X that did Y', 'Improved Z by 30%'] },
  experience: [] as Job[],
};
