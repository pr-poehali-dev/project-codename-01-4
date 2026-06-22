import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const cases = [
  {
    id: 1,
    category: "Несъёмное протезирование",
    title: "Циркониевая коронка на имплант",
    description: "Полная реабилитация одиночного зуба. Индивидуальный абатмент CAD/CAM, циркониевая коронка E-max. Точность краевого прилегания — 20 мкм.",
    clinic: "Стоматологическая клиника «ДентПрестиж»",
    duration: "5 рабочих дней",
    tag: "Цирконий + E-max",
    image: "https://cdn.poehali.dev/projects/e2665e4b-f132-41de-a8e4-cbe3c71f8461/files/81f1d76d-281d-4832-a7ea-35cdb3ed303d.jpg",
    accent: "from-blue-500/30 to-blue-600/10",
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    id: 2,
    category: "Цифровые технологии",
    title: "CAD/CAM-мост на 4 единицы",
    description: "Мостовидный протез на естественных опорах. Полный цифровой рабочий процесс: приём STL, моделирование, фрезерование. Без единой гипсовой модели.",
    clinic: "Центр имплантологии «Арком»",
    duration: "3 рабочих дня",
    tag: "Полный цифровой цикл",
    image: "https://cdn.poehali.dev/projects/e2665e4b-f132-41de-a8e4-cbe3c71f8461/files/bc6d222a-e544-4af7-a593-ed8d27184aab.jpg",
    accent: "from-purple-500/30 to-purple-600/10",
    tagColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
  {
    id: 3,
    category: "Виниры и эстетика",
    title: "Комплекс 10 виниров — Smile Design",
    description: "Полная эстетическая реабилитация улыбки. Wax-up, Mock-up, согласование цвета по шкале Vita. Ультратонкие E-max виниры 0,3 мм.",
    clinic: "Эстетическая стоматология «Белая линия»",
    duration: "8 рабочих дней",
    tag: "E-max / Wax-up",
    image: "https://cdn.poehali.dev/projects/e2665e4b-f132-41de-a8e4-cbe3c71f8461/files/6607639b-7609-4aa0-ab79-b663158d8f73.jpg",
    accent: "from-pink-500/30 to-pink-600/10",
    tagColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  },
  {
    id: 4,
    category: "Хирургические шаблоны",
    title: "Шаблон под 6 имплантов All-on-6",
    description: "Навигационный шаблон по КТ пациента. Точность позиционирования ±0,1 мм. Полная документация по позиционированию и глубине сверления.",
    clinic: "Имплант-центр «ОртоМед»",
    duration: "2 рабочих дня",
    tag: "All-on-6 / Навигация",
    image: "https://cdn.poehali.dev/projects/e2665e4b-f132-41de-a8e4-cbe3c71f8461/files/4fbfda42-c134-41d6-b0e6-907950d137a2.jpg",
    accent: "from-green-500/30 to-green-600/10",
    tagColor: "bg-green-500/20 text-green-300 border-green-500/30",
  },
]

export default function CasesGallery() {
  const [active, setActive] = useState(0)
  const current = cases[active]

  return (
    <section id="cases" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Наши работы</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Реальные кейсы из клинической практики — от цифрового оттиска до готовой конструкции.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Sidebar tabs */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {cases.map((c, i) => (
              <motion.button
                key={c.id}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                className={`shrink-0 lg:shrink text-left p-4 rounded-2xl border transition-all duration-300 w-56 lg:w-auto ${
                  active === i
                    ? `bg-gradient-to-br ${c.accent} border-gray-600`
                    : "bg-gray-900/30 border-gray-800/50 hover:border-gray-700"
                }`}
              >
                <div className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border mb-2 ${c.tagColor}`}>
                  {c.category}
                </div>
                <div className="text-sm font-semibold text-white leading-snug">{c.title}</div>
                <div className="flex items-center space-x-1 mt-2 text-xs text-gray-500">
                  <Icon name="Clock" size={12} />
                  <span>{c.duration}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Main case display */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={`bg-gradient-to-br ${current.accent} border border-gray-800/50 rounded-3xl overflow-hidden`}
              >
                {/* Photo */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border backdrop-blur-sm ${current.tagColor}`}>
                      {current.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-5">
                  <h3 className="text-2xl font-bold text-white">{current.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{current.description}</p>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-800/60 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="Building2" size={16} className="text-gray-400" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">Клиника</div>
                        <div className="text-sm text-white font-medium leading-snug">{current.clinic}</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-800/60 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="Clock" size={16} className="text-gray-400" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">Срок изготовления</div>
                        <div className="text-sm text-white font-medium">{current.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
