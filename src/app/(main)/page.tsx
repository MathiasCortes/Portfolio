import React, { useEffect } from "react";
import Navbar from "../components/organisms/Navbar";
import ProjectCard from "../components/molecules/ProjectCard";
import SkillBar from "../components/molecules/SkillBar";
import ContactForm from "../components/molecules/ContactForm";
import Icon from "../components/atoms/SvgIcon";
import { personalInfo, skills, projects, experiences, certifications, interests, stats } from "../../data/portfolioData";

const Home = () => {
  useEffect(() => {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con carrito de compras, sistema de pagos y panel administrativo.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones push.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico con gráficos interactivos y predicciones basadas en machine learning.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 95, category: "frontend", icon: "Gear" },
    { name: "React", level: 90, category: "frontend", icon: "Gear" },
    { name: "Node.js", level: 85, category: "backend", icon: "Gear" },
    { name: "Python", level: 80, category: "backend", icon: "Gear" },
    { name: "MongoDB", level: 75, category: "database", icon: "Gear" },
    { name: "PostgreSQL", level: 70, category: "database", icon: "Gear" }
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Presente",
      description: "Liderazgo de equipo de desarrollo, arquitectura de aplicaciones web escalables y mentoreo de desarrolladores junior."
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: "Desarrollo de interfaces de usuario responsivas y optimización de rendimiento web para clientes empresariales."
    },
    {
      title: "Junior Developer",
      company: "StartUp Innovations",
      period: "2018 - 2020",
      description: "Desarrollo de funcionalidades web, integración de APIs y colaboración en proyectos ágiles."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="hero-bg min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
              <br />
              <span className="text-white">{personalInfo.name.split(' ')[1]} {personalInfo.name.split(' ')[2]}</span>
            </h1>
            <div className="text-2xl md:text-3xl text-cyan-300 mb-4 font-semibold">
              {personalInfo.title}
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {personalInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Ver Proyectos
              </button>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Contactar
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ArrowUp" size={24} className="rotate-180 text-white opacity-70" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-4">
              Sobre <span className="gradient-text">Mí</span>
            </h2>
            <div className="section-divider mb-12" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Soy un desarrollador frontend junior de 20 años, apasionado por el aprendizaje 
                  continuo y la mejora constante. Me especializo en HTML, CSS, JavaScript y React, 
                  con conocimientos en backend y testing.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {personalInfo.description}. Mi objetivo es contribuir a satisfacer las necesidades 
                  del mercado mediante propuestas tecnológicas que optimicen procesos y generen valor.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="glass-morphism px-6 py-3">
                    <span className="text-2xl font-bold gradient-text">{stats.projectsCompleted}+</span>
                    <p className="text-gray-300">Proyectos</p>
                  </div>
                  <div className="glass-morphism px-6 py-3">
                    <span className="text-2xl font-bold gradient-text">{stats.certificationsEarned}</span>
                    <p className="text-gray-300">Certificaciones</p>
                  </div>
                  <div className="glass-morphism px-6 py-3">
                    <span className="text-2xl font-bold gradient-text">{stats.monthsExperience}</span>
                    <p className="text-gray-300">Meses Exp.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="glass-morphism p-8 animate-float">
                  <img 
                    src="/api/placeholder/400/500" 
                    alt="Mathias Cortès" 
                    className="w-full rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-black">
        <div className="container mx-auto">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-4">
              Mis <span className="gradient-text">Habilidades</span>
            </h2>
            <div className="section-divider mb-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  category={skill.category}
                  icon={skill.icon}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-4">
              Mis <span className="gradient-text">Proyectos</span>
            </h2>
            <div className="section-divider mb-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  status={project.status}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-black">
        <div className="container mx-auto">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-4">
              Mi <span className="gradient-text">Experiencia</span>
            </h2>
            <div className="section-divider mb-12" />
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="glass-morphism p-6 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 gradient-bg rounded-full" />
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <span className="gradient-text font-semibold">{exp.company}</span>
                      <span className="text-gray-400">{exp.period}</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-cyan-300 text-sm">{exp.location} • {exp.type}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                    {exp.achievements && (
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold mb-2">Logros y responsabilidades:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-300 text-sm">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-4">
              Mis <span className="gradient-text">Certificaciones</span>
            </h2>
            <div className="section-divider mb-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-morphism p-6 hover:scale-105 transition-transform">
                  <h3 className="text-lg font-bold text-white mb-3">{cert.name}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-cyan-300 font-semibold">{cert.issuer}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{cert.date}</span>
                      {cert.duration && (
                        <span className="text-cyan-400 text-sm font-medium">{cert.duration}</span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="gradient-text">Contacto</span>
            </h2>
            <div className="section-divider mb-12" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">¡Trabajemos juntos!</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Estoy siempre abierto a discutir nuevos proyectos, oportunidades 
                    creativas o simplemente charlar sobre tecnología.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 gradient-bg rounded-lg">
                      <Icon name="User" size={20} />
                    </div>
                    <div>
                      <span className="text-white font-medium">{personalInfo.email}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 gradient-bg rounded-lg">
                      <Icon name="Info" size={20} />
                    </div>
                    <div>
                      <span className="text-white font-medium">{personalInfo.phone}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 gradient-bg rounded-lg">
                      <Icon name="Download" size={20} />
                    </div>
                    <div>
                      <span className="text-white font-medium">{personalInfo.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/in/mathias-cortes" target="_blank" rel="noopener noreferrer" className="p-3 glass-morphism rounded-lg hover:scale-110 transition-transform" aria-label="LinkedIn Profile">
                    <Icon name="Exit" size={20} />
                  </a>
                  <a href="https://github.com/MathiasCortes" target="_blank" rel="noopener noreferrer" className="p-3 glass-morphism rounded-lg hover:scale-110 transition-transform" aria-label="GitHub Profile">
                    <Icon name="Gear" size={20} />
                  </a>
                  <a href="https://twitter.com/mathias_cortes" target="_blank" rel="noopener noreferrer" className="p-3 glass-morphism rounded-lg hover:scale-110 transition-transform" aria-label="Twitter Profile">
                    <Icon name="User" size={20} />
                  </a>
                </div>
              </div>
              
              <div className="glass-morphism p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Mathias Cortès. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Hecho con ❤️ y mucho café
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
