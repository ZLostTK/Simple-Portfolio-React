import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="home" className="section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-primary-600/20 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse"></span>
              Disponible para proyectos
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-dark-100">¡Hola! Soy </span>
              <span className="text-gradient">Desarrollador</span>
              <br />
              <span className="text-dark-100">Full Stack</span>
            </motion.h1>

            <motion.p
              className="text-xl text-dark-300 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              Creo experiencias digitales excepcionales con código limpio y diseño intuitivo. 
              Especializado en React, Node.js y tecnologías modernas.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Proyectos
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Descargar CV
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center space-x-8 pt-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">3+</div>
                <div className="text-sm text-dark-400">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">50+</div>
                <div className="text-sm text-dark-400">Proyectos completados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">100%</div>
                <div className="text-sm text-dark-400">Satisfacción del cliente</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-80 h-80 lg:w-96 lg:h-96"
              variants={floatingVariants}
              animate="animate"
            >
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-full border border-primary-500/30 backdrop-blur-sm"></div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-10 left-10 w-16 h-16 bg-primary-500/30 rounded-full border border-primary-400/50"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <motion.div
                className="absolute top-20 right-16 w-12 h-12 bg-primary-400/40 rounded-full border border-primary-300/50"
                animate={{
                  y: [5, -5, 5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <motion.div
                className="absolute bottom-16 left-20 w-20 h-20 bg-primary-600/25 rounded-full border border-primary-500/40"
                animate={{
                  y: [-3, 3, -3],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
