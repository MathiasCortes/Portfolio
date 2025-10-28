// Portfolio data constants
export const personalInfo = {
  name: "Mathias Nahuel Cortés Fabra",
  title: "Desarrollador Frontend Junior",
  description: "Apasionado por el aprendizaje continuo y la mejora constante, busco aplicar mis habilidades técnicas y creatividad en el desarrollo de soluciones innovadoras y eficientes",
  email: "arthourgrimm@gmail.com",
  phone: "+598 094986857",
  location: "Villa Don Bosco, Uruguay",
  profileImage: "/api/placeholder/400/500",
  birthDate: "06/10/2004",
  cedula: "5.459.315-0"
};

export const socialLinks = {
  github: "https://github.com/MathiasCortes",
  linkedin: "https://linkedin.com/in/mathiascortes",
  instagram: "https://instagram.com/mathiascortes"
};

export const skills = [
  {
    name: "HTML",
    level: 85,
    category: "frontend",
    icon: "Gear",
    description: "Conocimientos sólidos en HTML5 semántico, accesibilidad y buenas prácticas para estructurar contenido web.",
    technologies: ["HTML5", "Semantic HTML", "Accessibility", "Forms", "SEO"]
  },
  {
    name: "CSS",
    level: 80,
    category: "frontend",
    icon: "Gear",
    description: "Experiencia en CSS3, layouts modernos, animaciones y frameworks como Tailwind CSS para diseños responsivos.",
    technologies: ["CSS3", "Flexbox", "Grid", "Tailwind CSS", "Responsive Design", "Animations"]
  },
  {
    name: "JavaScript",
    level: 75,
    category: "frontend",
    icon: "Gear",
    description: "Dominio de JavaScript ES6+, manipulación del DOM, eventos y asincronía para crear aplicaciones interactivas.",
    technologies: ["ES6+", "DOM Manipulation", "Async/Await", "Fetch API", "Local Storage"]
  },

  {
    name: "ReactJS",
    level: 65,
    category: "frontend",
    icon: "Gear",
    description: "Experiencia en desarrollo de componentes, estado, hooks y enrutamiento con React para construir SPAs.",
    technologies: ["React", "Hooks", "Context API", "React Router", "Component Lifecycle"]
  },
  {
    name: "NodeJS",
    level: 60,
    category: "backend",
    icon: "Gear",
    description: "Capacidad para crear APIs RESTful, manejar middleware y trabajar con bases de datos desde el backend.",
    technologies: ["Node.js", "Express", "REST API", "Middleware", "NPM"]
  },
  {
    name: "UX/UI Design",
    level: 70,
    category: "design",
    icon: "Gear",
    description: "Habilidades en diseño de interfaces intuitivas, prototipado y principios de experiencia de usuario.",
    technologies: ["Figma", "Wireframing", "Prototyping", "User Research", "Design Systems"]
  },
  {
    name: "Testing",
    level: 65,
    category: "tools",
    icon: "Gear",
    description: "Conocimientos en pruebas unitarias, integración y end-to-end para asegurar la calidad del código.",
    technologies: ["Jest", "React Testing Library", "Cypress", "Unit Testing", "E2E Testing"]
  }
];

export const softSkills = [
  "Buena comunicación efectiva",
  "Empatía",
  "Adaptabilidad",
  "Creatividad",
  "Aprendizaje continuo",
  "Trabajo en equipo"
];

export const projects = [
  {
    id: 1,
    title: "Mi Primer Portafolio Web",
    description: "Portafolio personal desarrollado como proyecto de aprendizaje. Implementa diseño responsive, navegación suave y efectos visuales modernos usando React y Tailwind CSS.",
    image: "/api/placeholder/400/250",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    features: [
      "Diseño responsive",
      "Navegación suave entre secciones",
      "Efectos visuales modernos",
      "Optimización para SEO"
    ],
    githubUrl: "https://github.com/MathiasCortes/mi-primer-portafolio",
    demoUrl: "https://mathiascortes.github.io/mi-primer-portafolio"
  },
  {
    id: 2,
    title: "Aplicación de Tareas",
    description: "Aplicación web para gestionar tareas diarias con funcionalidades de crear, editar, eliminar y marcar como completadas. Incluye persistencia de datos en el navegador.",
    image: "/api/placeholder/400/250",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    features: [
      "CRUD de tareas",
      "Filtrado por estado",
      "Persistencia con LocalStorage",
      "Interfaz intuitiva"
    ],
    githubUrl: "https://github.com/MathiasCortes/app-tareas",
    demoUrl: "https://mathiascortes.github.io/app-tareas"
  },
  {
    id: 3,
    title: "Tienda Online",
    description: "Proyecto de e-commerce simulado con catálogo de productos, carrito de compras y proceso de checkout. Utiliza componentes reutilizables y estado centralizado.",
    image: "/api/placeholder/400/250",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Context API"],
    features: [
      "Catálogo de productos",
      "Carrito de compras funcional",
      "Filtros de búsqueda",
      "Diseño responsive"
    ],
    githubUrl: "https://github.com/MathiasCortes/tienda-online",
    demoUrl: "https://mathiascortes.github.io/tienda-online"
  }
];

export const experience = [
  {
    id: 1,
    company: "Tech Solutions SRL",
    position: "Desarrollador Frontend Junior",
    period: "Enero 2023 - Presente",
    description: "Participación en el desarrollo de aplicaciones web responsivas utilizando React y Tailwind CSS. Colaboración en equipos ágiles con metodologías Scrum.",
    achievements: [
      "Desarrollo de componentes reutilizables",
      "Optimización de rendimiento",
      "Implementación de pruebas unitarias",
      "Mejora de la accesibilidad web"
    ]
  },
  {
    id: 2,
    company: "Digital Agency",
    position: "Prácticas Profesionales - Desarrollo Web",
    period: "Junio 2022 - Diciembre 2022",
    description: "Desarrollo de sitios web para clientes utilizando HTML, CSS y JavaScript. Experiencia en la adaptación de diseños a código y optimización para diferentes dispositivos.",
    achievements: [
      "Conversión de diseños a código",
      "Optimización para motores de búsqueda",
      "Implementación de animaciones",
      "Soporte técnico a clientes"
    ]
  }
];

export const certifications = [
  {
    id: 1,
    title: "Desarrollo Web Full Stack",
    institution: "Academia Digital",
    date: "Diciembre 2022",
    description: "Curso intensivo de 6 meses cubriendo tecnologías frontend y backend, incluyendo bases de datos y despliegue de aplicaciones.",
    credentialUrl: "https://example.com/certification-1"
  },
  {
    id: 2,
    title: "React Avanzado",
    institution: "Tech Academy",
    date: "Octubre 2022",
    description: "Especialización en React incluyendo hooks avanzados, optimización de rendimiento y patrones de diseño.",
    credentialUrl: "https://example.com/certification-2"
  },
  {
    id: 3,
    title: "JavaScript Moderno",
    institution: "Code Institute",
    date: "Junio 2022",
    description: "Dominio de ES6+, programación asíncrona, manipulación del DOM y buenas prácticas de desarrollo.",
    credentialUrl: "https://example.com/certification-3"
  }
];

export const interests = [
  "Desarrollo de videojuegos",
  "Inteligencia Artificial",
  "Experiencia de Usuario",
  "Optimización de Rendimiento",
  "Accesibilidad Web"
];

export const stats = [
  {
    number: "3",
    label: "Proyectos Completados"
  },
  {
    number: "5+",
    label: "Tecnologías Dominadas"
  },
  {
    number: "2+",
    label: "Años de Experiencia"
  },
  {
    number: "100%",
    label: "Compromiso"
  }
];
