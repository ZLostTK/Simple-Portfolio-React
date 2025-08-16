import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Inicio', href: '#home' },
      { name: 'Sobre mí', href: '#about' },
      { name: 'Habilidades', href: '#skills' },
      { name: 'Proyectos', href: '#projects' },
      { name: 'Contacto', href: '#contact' },
    ],
    services: [
      { name: 'Desarrollo Web', href: '#' },
      { name: 'Aplicaciones Móviles', href: '#' },
      { name: 'UI/UX Design', href: '#' },
      { name: 'Consultoría Técnica', href: '#' },
      { name: 'Mantenimiento', href: '#' },
    ],
    social: [
      { name: 'GitHub', icon: '🐙', href: 'https://github.com/tu-usuario' },
      {
        name: 'LinkedIn',
        icon: '💼',
        href: 'https://linkedin.com/in/tu-perfil',
      },
      { name: 'Twitter', icon: '🐦', href: 'https://twitter.com/tu-usuario' },
      {
        name: 'Instagram',
        icon: '📸',
        href: 'https://instagram.com/tu-usuario',
      },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl text-primary-400">Σ</span>
                <span className="text-xl font-bold text-gradient">
                  Portfolio
                </span>
              </div>
              <p className="text-dark-300 text-sm leading-relaxed mb-6">
                Desarrollador full stack apasionado por crear experiencias
                digitales excepcionales que resuelven problemas reales.
              </p>
              <div className="flex space-x-4">
                {footerLinks.social.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-300 hover:text-primary-400 hover:bg-primary-600/20 transition-all duration-300"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-dark-100 mb-6">
                Enlaces Rápidos
              </h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-dark-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-dark-100 mb-6">
                Servicios
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <motion.a
                      href={service.href}
                      className="text-dark-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {service.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-dark-100 mb-6">
                Mantente Conectado
              </h3>
              <p className="text-dark-300 text-sm mb-4">
                Suscríbete para recibir las últimas noticias y actualizaciones.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-3 py-2 bg-dark-800 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                />
                <motion.button
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  →
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="py-6 border-t border-dark-800"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-dark-400 text-sm">
                © {currentYear}{' '}
                <span className="text-primary-400">Tu Nombre</span>. Todos los
                derechos reservados.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <motion.a
                href="#"
                className="text-dark-400 hover:text-primary-400 text-sm transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Política de Privacidad
              </motion.a>
              <motion.a
                href="#"
                className="text-dark-400 hover:text-primary-400 text-sm transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Términos de Servicio
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 z-40 flex items-center justify-center"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
