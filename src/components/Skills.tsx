import { motion } from 'framer-motion';

const Skills = () => {
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

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'Next.js', level: 88, icon: '⚡' },
        { name: 'Vue.js', level: 85, icon: '💚' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, icon: '🟢' },
        { name: 'Express.js', level: 88, icon: '🚀' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'PostgreSQL', level: 82, icon: '🐘' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
      ],
    },
    {
      category: 'Herramientas',
      skills: [
        { name: 'Git', level: 92, icon: '📚' },
        { name: 'Docker', level: 85, icon: '🐳' },
        { name: 'AWS', level: 80, icon: '☁️' },
        { name: 'Figma', level: 75, icon: '🎯' },
        { name: 'Jest', level: 88, icon: '🧪' },
      ],
    },
  ];

  const softSkills = [
    { name: 'Trabajo en Equipo', icon: '🤝' },
    { name: 'Comunicación', icon: '💬' },
    { name: 'Resolución de Problemas', icon: '🔧' },
    { name: 'Aprendizaje Continuo', icon: '📚' },
    { name: 'Gestión de Tiempo', icon: '⏰' },
    { name: 'Pensamiento Crítico', icon: '🧠' },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-dark-100 mb-4">
            Mis <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones
            digitales excepcionales.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="card group hover:border-primary-500/50"
            >
              <h3 className="text-xl font-semibold text-dark-100 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="space-y-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-dark-100 font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-primary-400 text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-dark-100 mb-6">
            Habilidades <span className="text-gradient">Blandas</span>
          </h3>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Competencias interpersonales que complementan mi perfil técnico.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card text-center group hover:border-primary-500/50 hover:bg-primary-600/10 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h4 className="text-dark-100 font-medium text-sm">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="card max-w-2xl mx-auto bg-gradient-to-r from-primary-600/20 to-primary-800/20 border-primary-500/30">
            <h3 className="text-xl font-semibold text-dark-100 mb-4">
              ¿Interesado en colaborar?
            </h3>
            <p className="text-dark-300 mb-6">
              Siempre estoy abierto a nuevos desafíos y oportunidades de
              colaboración. Si tienes un proyecto en mente, ¡me encantaría
              escucharlo!
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
