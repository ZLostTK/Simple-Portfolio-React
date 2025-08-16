import { motion } from 'framer-motion'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

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
  }

  const experienceData = [
    {
      year: '2023 - Presente',
      title: 'Desarrollador Full Stack Senior',
      company: 'TechCorp Solutions',
      description: 'Lidero el desarrollo de aplicaciones web escalables usando React, Node.js y AWS.',
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'MongoDB']
    },
    {
      year: '2021 - 2023',
      title: 'Desarrollador Frontend',
      company: 'Digital Innovations',
      description: 'Desarrollé interfaces de usuario responsivas y accesibles para aplicaciones web.',
      technologies: ['React', 'Vue.js', 'Tailwind CSS', 'JavaScript', 'REST APIs']
    },
    {
      year: '2020 - 2021',
      title: 'Desarrollador Junior',
      company: 'StartUp Studio',
      description: 'Colaboré en el desarrollo de MVP y prototipos para startups tecnológicas.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase']
    }
  ]

  const educationData = [
    {
      degree: 'Ingeniería en Sistemas Computacionales',
      school: 'Universidad Tecnológica',
      year: '2016 - 2020',
      description: 'Especialización en desarrollo de software y arquitectura de sistemas.'
    },
    {
      degree: 'Certificación AWS Developer',
      school: 'Amazon Web Services',
      year: '2022',
      description: 'Certificación oficial en desarrollo de aplicaciones en la nube.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-dark-100 mb-4">
            Sobre <span className="text-gradient">Mí</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Apasionado desarrollador full stack con experiencia en crear soluciones digitales 
            innovadoras que resuelven problemas reales.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Personal Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-dark-100 mb-6">
              Mi Historia
            </h3>
            <p className="text-dark-300 leading-relaxed">
              Comencé mi viaje en el desarrollo web hace más de 3 años, fascinado por la 
              capacidad de crear experiencias digitales que impacten positivamente en la vida 
              de las personas.
            </p>
            <p className="text-dark-300 leading-relaxed">
              Me especializo en el desarrollo full stack, combinando tecnologías frontend 
              modernas con arquitecturas backend robustas. Mi enfoque se centra en escribir 
              código limpio, mantenible y escalable.
            </p>
            <p className="text-dark-300 leading-relaxed">
              Cuando no estoy programando, me gusta contribuir a proyectos de código abierto, 
              aprender nuevas tecnologías y compartir conocimiento con la comunidad de desarrolladores.
            </p>

            {/* Personal Details */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="space-y-2">
                <div className="text-sm text-dark-400">Nombre:</div>
                <div className="text-dark-100 font-medium">Tu Nombre</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-dark-400">Email:</div>
                <div className="text-dark-100 font-medium">tu@email.com</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-dark-400">Ubicación:</div>
                <div className="text-dark-100 font-medium">Tu Ciudad, País</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-dark-400">Disponibilidad:</div>
                <div className="text-primary-400 font-medium">Disponible</div>
              </div>
            </div>
          </motion.div>

          {/* Experience & Education */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-dark-100 mb-6">
                Experiencia Laboral
              </h3>
              <div className="space-y-6">
                {experienceData.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="card group hover:border-primary-500/50"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-primary-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-dark-400 bg-dark-700 px-3 py-1 rounded-full">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-dark-300 text-sm leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-primary-600/20 text-primary-400 px-2 py-1 rounded-full border border-primary-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-dark-100 mb-6">
                Educación
              </h3>
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="card group hover:border-primary-500/50"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-dark-400 bg-dark-700 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-primary-400 font-medium text-sm mb-2">
                      {edu.school}
                    </p>
                    <p className="text-dark-300 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
