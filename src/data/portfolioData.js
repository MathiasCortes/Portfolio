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
  twitter: "https://twitter.com/mathiascortes",
  instagram: "https://instagram.com/mathiascortes"
};

export const skills = [
  { name: "HTML", level: 85, category: "frontend", icon: "Gear" },
  { name: "CSS", level: 80, category: "frontend", icon: "Gear" },
  { name: "JavaScript", level: 75, category: "frontend", icon: "Gear" },
  { name: "Java", level: 70, category: "backend", icon: "Gear" },
  { name: "ReactJS", level: 65, category: "frontend", icon: "Gear" },
  { name: "NodeJS", level: 60, category: "backend", icon: "Gear" },
  { name: "UX/UI Design", level: 70, category: "design", icon: "Gear" },
  { name: "Testing", level: 65, category: "tools", icon: "Gear" }
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
      "Animaciones CSS",
      "Formulario de contacto",
      "Paleta de colores moderna"
    ],
    liveUrl: null,
    githubUrl: "#",
    category: "Frontend",
    status: "En desarrollo"
  },
  {
    id: 2,
    title: "Calculadora Web Interactiva",
    description: "Calculadora funcional desarrollada con JavaScript vanilla. Incluye operaciones básicas, historial de cálculos y diseño intuitivo.",
    image: "/api/placeholder/400/250",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Operaciones aritméticas básicas",
      "Historial de operaciones",
      "Interfaz intuitiva",
      "Responsive design",
      "Validación de entrada"
    ],
    liveUrl: null,
    githubUrl: "#",
    category: "Frontend",
    status: "Proyecto de práctica"
  },
  {
    id: 3,
    title: "Lista de Tareas (To-Do App)",
    description: "Aplicación simple de gestión de tareas desarrollada para practicar conceptos de JavaScript y manejo del DOM.",
    image: "/api/placeholder/400/250",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Agregar/eliminar tareas",
      "Marcar tareas como completadas",
      "Almacenamiento local",
      "Filtros por estado",
      "Contador de tareas"
    ],
    liveUrl: null,
    githubUrl: "#",
    category: "Frontend",
    status: "Proyecto de aprendizaje"
  }
];

export const experiences = [
  {
    id: 1,
    title: "Asistente de Electro mecánico",
    company: "OPICAR S.A.",
    location: "Uruguay",
    period: "Jul - Oct 2024",
    type: "Tiempo Parcial",
    description: "Trabajo por tres meses en una empresa especializada en reparación de computadoras, donde desarrollé habilidades de reparación de computadoras, manejo y mantenimiento de Plotter, manejo y cuidado de un torno de 5 ejes.",
    achievements: [
      "Reparación y mantenimiento de equipos informáticos",
      "Operación de maquinaria especializada (Plotter)",
      "Manejo de torno de 5 ejes con precisión",
      "Trabajo en equipo en entorno industrial"
    ],
    technologies: ["Hardware", "Mantenimiento", "Maquinaria Industrial"]
  }
];

export const education = [
  {
    id: 1,
    degree: "Tecnólogo en Informática (IAE)",
    institution: "Instituto de Educación Superior",
    location: "Uruguay",
    period: "2025 - Presente",
    description: "Carrera técnica en desarrollo de software y sistemas informáticos. Sin culminar aún.",
    grade: "En curso",
    status: "Sin culminar"
  },
  {
    id: 2,
    degree: "UTU Pando EMT Informática - Bachillerato Desarrollo Web",
    institution: "UTU Pando",
    location: "Pando, Uruguay",
    period: "2021 - 2023",
    description: "Bachillerato técnico especializado en desarrollo web y tecnologías de la información.",
    grade: "Culminado"
  },
  {
    id: 3,
    degree: "Liceo 25 José Belloni - Ciclo Básico",
    institution: "Liceo 25 José Belloni",
    location: "Uruguay",
    period: "2017 - 2020",
    description: "Educación secundaria básica completada.",
    grade: "Culminado"
  }
];

export const certifications = [
  {
    id: 1,
    name: "Talleres de Introducción al mundo IT y Competencias Transversales",
    issuer: "Centro de Desarrollo de Pando y Nicolich - La Semilla, Globant y Ukg",
    date: "Dic 2022",
    duration: "26 horas",
    description: "Curso introductorio al mundo de las tecnologías de la información y desarrollo de competencias blandas."
  },
  {
    id: 2,
    name: "Introducción a Testing",
    issuer: "Centro de Desarrollo de Pando y Nicolich - La Semilla, Globant y Ukg",
    date: "Dic 2022",
    duration: "50 horas",
    description: "Curso básico de metodologías y herramientas de testing en desarrollo de software."
  },
  {
    id: 3,
    name: "Digital Tech Developer",
    issuer: "DigitalHouse (Curso Online)",
    date: "Ago 2024 - Presente",
    duration: "2.200 horas",
    description: "Curso integral de desarrollo de software con certificación avalada por Mercado Libre y Globant. Enfoque en tecnologías modernas y metodologías ágiles."
  }
];

export const languages = [
  {
    id: 1,
    name: "Español",
    level: "Nativo",
    proficiency: 100
  },
  {
    id: 2,
    name: "Inglés",
    level: "First (B2)",
    proficiency: 75,
    program: "English Access Microscholarship - Alianza Cultural Uruguay",
    period: "Marzo 2018 - Diciembre 2020",
    achievement: "Aprobé el examen FIRST en 2023 con puntuación de B2"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Ana García",
    position: "Product Manager en Tech Solutions Inc.",
    company: "Tech Solutions Inc.",
    text: "Mathias es un desarrollador excepcional. Su capacidad para entender requisitos complejos y traducirlos en soluciones elegantes es impresionante. Ha sido fundamental en el éxito de nuestros proyectos.",
    image: "/api/placeholder/100/100",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    position: "CTO",
    company: "StartUp Innovations", 
    text: "Durante su tiempo con nosotros, Mathias demostró una gran versatilidad y capacidad de aprendizaje. Su contribución fue clave para escalar nuestra plataforma y mejorar significativamente el rendimiento.",
    image: "/api/placeholder/100/100",
    rating: 5
  },
  {
    id: 3,
    name: "Laura Martínez", 
    position: "Senior Designer",
    company: "Digital Agency Co.",
    text: "Trabajar con Mathias fue una experiencia fantástica. Su atención al detalle y su capacidad para implementar diseños complejos con pixel-perfect precision es admirable.",
    image: "/api/placeholder/100/100",
    rating: 5
  }
];

export const interests = [
  "Diseño UX/UI",
  "Tecnologías Web",
  "Inteligencia Artificial",
  "Desarrollo Personal",
  "Innovación Tecnológica",
  "Open Source"
];

export const stats = {
  projectsCompleted: 3,
  monthsExperience: 3,
  coursesCompleted: 6,
  coffeeCups: 200,
  linesOfCode: 1500,
  certificationsEarned: 3
};
