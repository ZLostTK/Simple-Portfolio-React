import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const rotateVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  }

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/20 flex items-center justify-center z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center">
        {/* Logo */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <div className="relative">
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-2xl"
              variants={pulseVariants}
              animate="animate"
            >
              <span className="text-4xl text-white font-bold">Σ</span>
            </motion.div>
            
            {/* Orbiting Elements */}
            <motion.div
              className="absolute inset-0"
              variants={rotateVariants}
              animate="animate"
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-primary-300 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-primary-500 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 w-3 h-3 bg-primary-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl font-bold text-gradient mb-4"
          variants={itemVariants}
        >
          Portfolio
        </motion.h1>

        {/* Loading Text */}
        <motion.p
          className="text-dark-300 text-lg mb-8"
          variants={itemVariants}
        >
          Cargando experiencia...
        </motion.p>

        {/* Loading Bar */}
        <motion.div
          className="w-64 h-2 bg-dark-700 rounded-full overflow-hidden mx-auto"
          variants={itemVariants}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          className="flex justify-center space-x-2 mt-8"
          variants={itemVariants}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-primary-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>

        {/* Progress Text */}
        <motion.div
          className="mt-6 text-dark-400 text-sm"
          variants={itemVariants}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Preparando componentes...
          </motion.span>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-primary-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default LoadingScreen
