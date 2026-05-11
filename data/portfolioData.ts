import { PersonalInfo, ContactInfo, Language, Skill, ExtraSkill, Knowledge, Education, Project } from '@/types';

// INFORMACIÓN PERSONAL
export const personalInfo: PersonalInfo = {
  name: "Mariana Martínez Gaviria",        
  title: "Estudiante Ingeniería de Sistemas",    
  photo: "/images/foto-perfil.jpg",
  description: "Estudiante de Ingeniería de Sistemas con interés en desarrollo de soluciones tecnológicas y gestión de proyectos. Experiencia en trabajo en equipo, liderazgo y metodologías ágiles (Scrum), con capacidad para organizar, coordinar y ejecutar actividades de manera eficiente. Apasionada por el aprendizaje continuo y por generar impacto positivo a través de la tecnología."
};

export const contactInfo: ContactInfo = {
  city: "Medellín, Colombia",
  phone: "+57 314 830 8841",
  email: "mariana.martinez1@udea.edu.co"
};

export const languages: Language[] = [
  { name: "Español", percentage: 100 },
  { name: "Inglés", percentage: 80 },
  { name: "Francés", percentage: 20 }
];

export const programmingSkills: Skill[] = [
  { name: "HTML", percentage: 70 },
  { name: "CSS", percentage: 70 },
  { name: "JavaScript", percentage: 80 },
  { name: "React", percentage: 50 },
];

export const extraSkills: ExtraSkill[] = [
  { name: "Bootstrap" },
  { name: "Git" },
  { name: "Figma" },
];

export const knowledges: Knowledge[] = [
  {
    title: "Frontend Development",
    description: "Creación de interfaces con React, Next.js, TypeScript y Tailwind CSS.",
    icon: "/images/imagen1.jpg"
  },
  {
    title: "Backend Development",
    description: "Desarrollo de servidores y APIs con Node.js, Express y bases de datos.",
    icon: "/images/imagen2.jpg"
  },
  {
    title: "DevOps",
    description: "Despliegue en Vercel y manejo básico de Git/GitHub.",
    icon: "/images/imagen3.jpg"
  },
  {
    title: "Metodologías Ágiles (Scrum)",
    description: "Conocimiento en gestión de proyectos bajo marcos ágiles, organización por sprints y trabajo colaborativo.",
    icon: "/images/imagen4.jpg"
  },
  {
    title: "Desarrollo Web",
    description: "Creación de sitios web tipo blog y e-commerce, enfocados en funcionalidad y estructura.",
    icon: "/images/imagen5.jpg"
  },
  {
    title: "Habilidades Organizacionales",
    description: "Experiencia en planificación, coordinación de actividades y trabajo en equipo en entornos dinámicos.",
    icon: "/images/imagen6.jpg"
  },
];

export const educations: Education[] = [
  {
    institution: "Universidad de Antioquia",
    role: "Ingeniería de Sistemas",
    startDate: "En curso",
    endDate: "",
    certificate: "",
    description: "Actualmente curso el 7mo semestre de Ingeniería de Sistemas en la Universidad de Antioquia."
  },
  {
    institution: "Colegio La Presentación Medellín",
    role: "Bachiller",
    startDate: "Enero, 2009",
    endDate: "Diciembre, 2020",
    certificate: "Bachiller Académico",
    description: "Completé mi educación secundaria en el Colegio La Presentación Medellín, obteniendo el título de Bachiller Académico."
  },
  {
    institution: "Dev Senior Code",
    role: "",
    startDate: "Agosto, 2025",
    endDate: "Octubre, 2025",
    certificate: "Certificado Full Stack Empresarial con Spring Boot y Angular",
    description: "Formación intensiva en desarrollo web full stack, enfocada en la construcción de aplicaciones empresariales utilizando tecnologías como Spring Boot para el backend y Angular para el frontend, fortaleciendo habilidades en desarrollo, integración y trabajo en equipo."
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "InnoSistemas Backend - API GraphQL",
    description: "Backend del sistema InnoSistemas que proporciona una API GraphQL para la gestión de usuarios, autenticación, autorización basada en roles, equipos y cursos. Este proyecto implementa las funcionalidades principales de autenticación y seguridad con JWT, control de acceso basado en roles y directivas GraphQL personalizadas.",
    image: "/images/imagen7.png",
    githubLink: "https://github.com/MarianaMartinezGaviria/innosistemas-feature4-main.git",
  },
  {
    id: "2",
    title: "Aplicación Web con Servicios Aleatorios e Integración CI/CD",
    description: "Desarrollo de una aplicación que consume y expone servicios para obtener información aleatoria de países, monedas y aeronaves, incluyendo endpoints de versión y verificación de estado (health check). Se implementaron prácticas de integración continua y calidad de código mediante herramientas como GitHub Actions, SonarCloud, Coveralls y Snyk, asegurando análisis de calidad, cobertura de pruebas y seguridad del proyecto.",
    image: "/images/imagen8.png",
    githubLink: "https://github.com/MarianaMartinezGaviria/laboratorio2.git"
  },
  {
    id: "3",
    title: "Sistema de financiación personal",
    description: "Desarrollar una aplicación web que permita a los usuarios gestionar su información financiera personal mediante el registro, clasificación y análisis de ingresos y gastos, con el fin de mejorar el control financiero y apoyar la toma de decisiones económicas. El sistema incorporará funcionalidades de seguimiento, análisis y recomendaciones, permitiendo ir más allá de un simple registro de transacciones.",
    image: "/images/imagen9.png",
    githubLink: "https://github.com/LauraCorreaO/EBP08-Gestion-Financiera-Frontend.git"
  }
];