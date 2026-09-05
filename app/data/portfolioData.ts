// Portfolio Data — Single source of truth
export interface Project {
  id: string
  title: string
  role: string
  shortDescription: string
  tag: string
  tagStyle: 'primary' | 'default'
  year: string
  githubUrl: string
  demoUrl: string
  metrics: string[]
  badges: string[]
  image?: string
}

export interface SkillCategory {
  id: string
  title: string
  icon: string
  iconColor: string
  tags: string[]
  span?: string
  badge?: string
}

export interface ContactLink {
  id: string
  label: string
  value: string
  url: string
  type: 'email' | 'github' | 'facebook'
  action: 'copy' | 'visit'
}

// ============================================
// PERSONAL INFO
// ============================================
export const personalInfo = {
  name: 'Le Minh Quoc Bao',
  title: 'Backend Developer',
  level: 'Fresher',
  bio: 'Specializing in high-throughput backend architecture, resilient relational databases, and clean decoupled API designs. Focused on building production-grade services that scale cleanly.',
  fullBio:
    'I am a Backend Developer passionate about constructing scalable web systems powered by Laravel and MySQL. My development ethos revolves around strict relational schema integrity, predictable REST API contracts, and performant backend execution. I enjoy turning complex enterprise operational rules into clean, maintainable micro-architectures.',
  location: 'Can Tho City, VN',
  availability: 'Available for Backend Roles',
  email: 'baolmq05@gmail.com',
  githubUrl: 'https://github.com/baolmq05',
  githubHandle: 'github.com/baolmq05',
  facebookUrl: 'https://www.facebook.com/bao.leminh.3348/',
  facebookHandle: 'facebook.com/bao.leminh.3348',
  cvUrl: '/files/Le-Minh-Quoc-Bao-CV.pdf',
  stack: 'Laravel / MySQL',
  latency: '<24ms latency',
  heroTags: 'Laravel • PHP • MySQL • RESTful API',
  status: 'ready_to_commit',
  photo: '/image/avatar_profile.jpeg',
}

// ============================================
// EDUCATION
// ============================================
export const education = [
  {
    id: 'school',
    label: 'EDUCATION',
    title: 'FPT Polytechnic',
    subtitle: 'Web Development',
    highlight: false,
  },
  {
    id: 'gpa',
    label: 'ACADEMIC EXCELLENCE',
    title: 'GPA 3.92 / 4.0',
    subtitle: 'Highest Honor Graduate',
    highlight: true,
  },
  {
    id: 'focus',
    label: 'CORE DISCIPLINE',
    title: 'Backend Focus',
    subtitle: 'APIs, RDBMS, Reliability',
    highlight: false,
  },
]

// ============================================
// SKILLS
// ============================================
export const skills: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Developer',
    icon: 'terminal',
    iconColor: 'text-primary-container',
    tags: ['Laravel', 'PHP', 'RESTful API', 'JWT Auth', 'Laravel Reverb', 'Filament'],
  },
  {
    id: 'database',
    title: 'Database & Storage',
    icon: 'storage',
    iconColor: 'text-secondary',
    tags: ['MySQL', 'Eloquent ORM', 'Indexing', 'Migrations'],
  },
  {
    id: 'frontend',
    title: 'Frontend Integration',
    icon: 'code',
    iconColor: 'text-secondary',
    tags: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'tools',
    title: 'Tools & Automation',
    icon: 'build',
    iconColor: 'text-secondary',
    tags: ['Git', 'GitHub', 'Postman', 'Cloudinary', 'n8n'],
  },
  {
    id: 'ai',
    title: 'AI & Intelligent Integration',
    icon: 'smart_toy',
    iconColor: 'text-primary-container',
    tags: ['Gemini API', 'RAG Chatbot', 'Prompt Engineering', 'Contextual Embeddings'],
    span: 'md:col-span-2',
    badge: 'Applied',
  },
]

// ============================================
// PROJECTS
// ============================================
export const projects: Project[] = [
  {
    id: 'drivio',
    title: 'Drivio - Self-Drive Car Rental Marketplace',
    role: 'Fullstack Developer',
    shortDescription: 'Full-stack self-drive car rental marketplace with web and mobile applications.',
    tag: 'Graduation Project',
    tagStyle: 'primary',
    year: '2026',
    githubUrl: 'https://github.com/baolmq05/DuAnTotNghiep_Website_Thue_Xe',
    demoUrl: '#',
    image: '/images/thuexe_project.PNG',
    metrics: ['RESTful API', 'MySQL', 'JWT Authentication', 'Realtime Chat & Payment'],
    badges: ['Laravel', 'PHP', 'Nuxt 3', 'JWT', 'Reverb', 'VNPay', 'Cloudinary'],
  },
  {
    id: 'room-rental',
    title: 'PhongTro123 - Room Rental Listing Website',
    role: 'Fullstack Developer',
    shortDescription: 'Room rental platform with Goong Maps integration and location-based search.',
    tag: 'Geo-Platform',
    tagStyle: 'default',
    year: '2026',
    githubUrl: 'https://github.com/baolmq05/PhongTro123_WebsitePhongTro',
    demoUrl: '#',
    image: '/images/phongtro_project.png',
    metrics: [],
    badges: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Goong Maps API'],
  },
  {
    id: 'flower-ecommerce',
    title: 'FloSun - Flower E-commerce Website',
    role: 'Fullstack Developer',
    shortDescription: 'E-commerce website with shopping cart, product management, and payment integration.',
    tag: 'Commerce',
    tagStyle: 'default',
    year: '2025',
    githubUrl: 'https://github.com/ngocdao0103/Flower-Shop',
    demoUrl: '#',
    image: '/images/flower_shop_project.PNG',
    metrics: [],
    badges: ['Node.js', 'JavaScript', 'MySQL', 'Bootstrap', 'Payment API'],
  },
]

// ============================================
// CONTACT
// ============================================
export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'EMAIL',
    value: 'baolmq05@gmail.com',
    url: 'mailto:baolmq05@gmail.com',
    type: 'email',
    action: 'copy',
  },
  {
    id: 'github',
    label: 'GITHUB',
    value: 'github.com/baolmq05',
    url: 'https://github.com/baolmq05',
    type: 'github',
    action: 'visit',
  },
  {
    id: 'facebook',
    label: 'FACEBOOK',
    value: 'facebook.com/bao.leminh.3348',
    url: 'https://www.facebook.com/bao.leminh.3348/',
    type: 'facebook',
    action: 'visit',
  },
]
