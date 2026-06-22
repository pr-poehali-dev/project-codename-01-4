import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const technologies = [
  {
    name: "CAD/CAM-фрезерование",
    description: "Коронки, мосты, каркасы и абатменты с контролем допусков и шероховатости — высокая точность и воспроизводимость.",
    icon: "Cog",
    gradient: "from-blue-500/20 to-blue-600/10",
    accent: "text-blue-400",
  },
  {
    name: "3D-печать",
    description: "Шаблоны, модели, каппы и временные конструкции в короткие сроки без потери качества.",
    icon: "Box",
    gradient: "from-purple-500/20 to-purple-600/10",
    accent: "text-purple-400",
  },
  {
    name: "Wax-up и моделирование",
    description: "Виртуальное моделирование и согласование эстетики и функции до начала производства.",
    icon: "Sparkles",
    gradient: "from-pink-500/20 to-pink-600/10",
    accent: "text-pink-400",
  },
  {
    name: "Цифровые оттиски (STL)",
    description: "Приём сканов без гипсовых моделей, контроль качества и выявление артефактов до запуска производства.",
    icon: "ScanLine",
    gradient: "from-green-500/20 to-green-600/10",
    accent: "text-green-400",
  },
]

const advantages = [
  { value: "10 мкм", label: "Точность фрезерования" },
  { value: "−40%", label: "Меньше переделок" },
  { value: "24/7", label: "Цифровой приём заказов" },
]

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 bg-black relative backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Цифровые технологии</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Работаем в едином цифровом контуре с клиниками — сокращаем сроки и снижаем число переделок.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${tech.gradient} border border-gray-800/50 rounded-3xl p-8 backdrop-blur-sm hover:border-gray-700/50 transition-all duration-300 group`}
            >
              <div className="flex items-start space-x-5">
                <div className={`w-14 h-14 rounded-2xl bg-gray-900/60 border border-gray-800 flex items-center justify-center shrink-0 ${tech.accent}`}>
                  <Icon name={tech.icon} size={28} fallback="CircleAlert" />
                </div>
                <div className="space-y-2">
                  <h3 className={`text-2xl font-bold text-white transition-colors group-hover:${tech.accent}`}>
                    {tech.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{tech.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/40 border border-gray-700/30 rounded-3xl p-8 backdrop-blur-sm grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {advantages.map((item) => (
            <div key={item.label}>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {item.value}
              </div>
              <div className="text-gray-400">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
