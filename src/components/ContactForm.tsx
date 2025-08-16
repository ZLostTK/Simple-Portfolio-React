import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence } from 'framer-motion'

// Esquema de validación con Zod
const contactSchema = z.object({
  name: z.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres'),
  email: z.string()
    .email('Ingresa un email válido')
    .min(1, 'El email es requerido'),
  subject: z.string()
    .min(5, 'El asunto debe tener al menos 5 caracteres')
    .max(100, 'El asunto no puede exceder 100 caracteres'),
  message: z.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede exceder 1000 caracteres'),
  priority: z.enum(['baja', 'media', 'alta']),
  budget: z.enum(['< $1000', '$1000 - $5000', '$5000 - $10000', '> $10000']),
  timeline: z.enum(['< 1 mes', '1-3 meses', '3-6 meses', '> 6 meses']),
})

type ContactFormData = z.infer<typeof contactSchema>

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  })

  const watchedFields = watch()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simular envío de formulario
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Aquí iría la lógica real de envío
      console.log('Datos del formulario:', data)
      
      setSubmitStatus('success')
      reset()
      
      // Resetear estado después de 3 segundos
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      console.error('Error al enviar formulario:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFieldError = (fieldName: keyof ContactFormData) => {
    return errors[fieldName]?.message
  }

  const isFieldValid = (fieldName: keyof ContactFormData) => {
    return !errors[fieldName] && watchedFields[fieldName]
  }

  return (
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nombre y Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark-200 mb-2">
              Nombre Completo *
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                isFieldValid('name')
                  ? 'border-green-500 bg-green-500/10'
                  : errors.name
                  ? 'border-red-500 bg-red-500/10'
                  : 'border-dark-600 bg-dark-700 hover:border-dark-500 focus:border-primary-500'
              } text-dark-100 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20`}
              placeholder="Tu nombre completo"
            />
            {errors.name && (
              <motion.p
                className="mt-2 text-sm text-red-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {getFieldError('name')}
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark-200 mb-2">
              Email *
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                isFieldValid('email')
                  ? 'border-green-500 bg-green-500/10'
                  : errors.email
                  ? 'border-red-500 bg-red-500/10'
                  : 'border-dark-600 bg-dark-700 hover:border-dark-500 focus:border-primary-500'
              } text-dark-100 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20`}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <motion.p
                className="mt-2 text-sm text-red-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {getFieldError('email')}
              </motion.p>
            )}
          </div>
        </div>

        {/* Asunto */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-dark-200 mb-2">
            Asunto *
          </label>
          <input
            {...register('subject')}
            type="text"
            id="subject"
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
              isFieldValid('subject')
                ? 'border-green-500 bg-green-500/10'
                : errors.subject
                ? 'border-red-500 bg-red-500/10'
                : 'border-dark-600 bg-dark-700 hover:border-dark-500 focus:border-primary-500'
            } text-dark-100 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20`}
            placeholder="¿En qué puedo ayudarte?"
          />
          {errors.subject && (
            <motion.p
              className="mt-2 text-sm text-red-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {getFieldError('subject')}
            </motion.p>
          )}
        </div>

        {/* Opciones del Proyecto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-dark-200 mb-2">
              Prioridad
            </label>
            <select
              {...register('priority')}
              id="priority"
              className="w-full px-4 py-3 rounded-lg border border-dark-600 bg-dark-700 text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
            >
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-dark-200 mb-2">
              Presupuesto
            </label>
            <select
              {...register('budget')}
              id="budget"
              className="w-full px-4 py-3 rounded-lg border border-dark-600 bg-dark-700 text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
            >
              <option value="< $1000">Menos de $1000</option>
              <option value="$1000 - $5000">$1000 - $5000</option>
              <option value="$5000 - $10000">$5000 - $10000</option>
              <option value="> $10000">Más de $10000</option>
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-dark-200 mb-2">
              Timeline
            </label>
            <select
              {...register('timeline')}
              id="timeline"
              className="w-full px-4 py-3 rounded-lg border border-dark-600 bg-dark-700 text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
            >
              <option value="< 1 mes">Menos de 1 mes</option>
              <option value="1-3 meses">1-3 meses</option>
              <option value="3-6 meses">3-6 meses</option>
              <option value="> 6 meses">Más de 6 meses</option>
            </select>
          </div>
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark-200 mb-2">
            Mensaje *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none ${
              isFieldValid('message')
                ? 'border-green-500 bg-green-500/10'
                : errors.message
                ? 'border-red-500 bg-red-500/10'
                : 'border-dark-600 bg-dark-700 hover:border-dark-500 focus:border-primary-500'
            } text-dark-100 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20`}
            placeholder="Cuéntame más sobre tu proyecto..."
          />
          {errors.message && (
            <motion.p
              className="mt-2 text-sm text-red-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {getFieldError('message')}
            </motion.p>
          )}
          <div className="mt-2 text-right text-sm text-dark-400">
            {watchedFields.message?.length || 0}/1000 caracteres
          </div>
        </div>

        {/* Botón de Envío */}
        <motion.button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
            isValid && !isSubmitting
              ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
              : 'bg-dark-600 text-dark-400 cursor-not-allowed'
          }`}
          whileHover={isValid && !isSubmitting ? { scale: 1.02 } : {}}
          whileTap={isValid && !isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Enviando...</span>
            </div>
          ) : (
            'Enviar Mensaje'
          )}
        </motion.button>

        {/* Estado del Envío */}
        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.div
              className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              ¡Mensaje enviado exitosamente! Te responderé pronto.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  )
}

export default ContactForm
