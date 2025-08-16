import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { id: 'todos', name: 'Todos' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ui', name: 'UI/UX Design' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'Plataforma completa de comercio electrónico con panel de administración, sistema de pagos y gestión de inventario.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones push.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['Vue.js', 'Firebase', 'PWA', 'Vuetify'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 3,
      title: 'Fitness Tracker Mobile',
      description:
        'App móvil para seguimiento de ejercicios con integración de wearables y análisis de datos de salud.',
      image: '/api/placeholder/400/300',
      category: 'mobile',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description:
        'Sitio web de portafolio personal con diseño moderno, animaciones fluidas y optimización SEO.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Dashboard Analytics',
      description:
        'Panel de control empresarial con visualizaciones de datos en tiempo real y reportes personalizables.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'D3.js', 'Supabase'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'UI Component Library',
      description:
        'Biblioteca de componentes reutilizables con documentación interactiva y sistema de diseño consistente.',
      image: '/api/placeholder/400/300',
      category: 'ui',
      technologies: ['Storybook', 'React', 'Styled Components', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === 'todos'
      ? projects
      : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-dark-100 mb-4">
            Mis <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y pasión
            por el desarrollo.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filters.map(filter => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-dark-700 text-dark-300 hover:bg-dark-600 hover:text-dark-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="card group cursor-pointer overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-600/20 to-primary-800/20 flex items-center justify-center">
                    <span className="text-6xl text-primary-400">🚀</span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Destacado
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      className="btn-primary"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Detalles
                    </motion.button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-primary-600/20 text-primary-400 px-2 py-1 rounded-full border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-dark-600 text-dark-400 px-2 py-1 rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 pt-2">
                    <motion.a
                      href={project.liveUrl}
                      className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      Demo en vivo →
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="text-dark-400 hover:text-dark-300 text-sm font-medium transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      Código →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Más Proyectos
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-dark-100">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-dark-400 hover:text-dark-300 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div className="w-full h-64 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-lg flex items-center justify-center">
                  <span className="text-8xl text-primary-400">🚀</span>
                </div>

                <p className="text-dark-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-dark-100 mb-3">
                    Tecnologías Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-sm bg-primary-600/20 text-primary-400 px-3 py-1 rounded-full border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.liveUrl}
                    className="btn-primary flex-1 text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Ver Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    className="btn-secondary flex-1 text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Ver Código
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export default Projects;
