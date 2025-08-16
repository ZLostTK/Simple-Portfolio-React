import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js'
import { Bar, Doughnut, Radar } from 'react-chartjs-2'
import { motion } from 'framer-motion'

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
)

interface Skill {
  name: string
  level: number
  category: string
  color: string
}

interface SkillsChartProps {
  skills: Skill[]
  type?: 'bar' | 'doughnut' | 'radar'
  title?: string
  description?: string
}

const SkillsChart: React.FC<SkillsChartProps> = ({
  skills,
  type = 'bar',
  title,
  description,
}) => {
  const chartData = {
    labels: skills.map(skill => skill.name),
    datasets: [
      {
        label: 'Nivel de Habilidad',
        data: skills.map(skill => skill.level),
        backgroundColor: skills.map(skill => skill.color),
        borderColor: skills.map(skill => skill.color),
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(14, 165, 233, 0.9)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#0ea5e9',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `Nivel: ${context.parsed.y}%`
          }
        }
      },
    },
    scales: type === 'bar' ? {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(71, 85, 105, 0.2)',
        },
        ticks: {
          color: '#94a3b8',
          callback: function(value: any) {
            return value + '%'
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#94a3b8',
        }
      }
    } : undefined,
  }

  const renderChart = () => {
    switch (type) {
      case 'doughnut':
        return (
          <Doughnut
            data={chartData}
            options={{
              ...chartOptions,
              cutout: '60%',
              plugins: {
                ...chartOptions.plugins,
                legend: {
                  position: 'bottom' as const,
                  labels: {
                    color: '#94a3b8',
                    padding: 20,
                    usePointStyle: true,
                  }
                }
              }
            }}
          />
        )
      case 'radar':
        return (
          <Radar
            data={chartData}
            options={{
              ...chartOptions,
              scales: {
                r: {
                  beginAtZero: true,
                  max: 100,
                  grid: {
                    color: 'rgba(71, 85, 105, 0.2)',
                  },
                  angleLines: {
                    color: 'rgba(71, 85, 105, 0.2)',
                  },
                  pointLabels: {
                    color: '#94a3b8',
                    font: {
                      size: 12,
                    }
                  },
                  ticks: {
                    color: '#94a3b8',
                    callback: function(value: any) {
                      return value + '%'
                    }
                  }
                }
              }
            }}
          />
        )
      default:
        return <Bar data={chartData} options={chartOptions} />
    }
  }

  return (
    <motion.div
      className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      {(title || description) && (
        <div className="text-center mb-6">
          {title && (
            <h3 className="text-2xl font-bold text-dark-100 mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-dark-300 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Chart Container */}
      <div className="relative h-80 w-full">
        {renderChart()}
      </div>

      {/* Skills Legend */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex items-center space-x-2 text-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: skill.color }}
            />
            <span className="text-dark-300">{skill.name}</span>
            <span className="text-primary-400 font-medium">
              {skill.level}%
            </span>
          </motion.div>
        ))}
      </div>

      {/* Chart Type Selector */}
      <div className="mt-6 flex justify-center space-x-2">
        {['bar', 'doughnut', 'radar'].map((chartType) => (
          <button
            key={chartType}
            className={`px-3 py-2 text-xs font-medium rounded-lg transition-all duration-300 ${
              type === chartType
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600 hover:text-dark-100'
            }`}
            onClick={() => {
              // Aquí podrías implementar un callback para cambiar el tipo de gráfica
              console.log(`Cambiar a gráfica ${chartType}`)
            }}
          >
            {chartType === 'bar' && 'Barras'}
            {chartType === 'doughnut' && 'Dona'}
            {chartType === 'radar' && 'Radar'}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

export default SkillsChart
