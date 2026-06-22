import { motion } from "framer-motion"
import { useState } from "react"

const photos = [
  {
    src: "https://cdn.poehali.dev/projects/e2665e4b-f132-41de-a8e4-cbe3c71f8461/files/ef1df5c7-efc9-468f-8311-84a97c401431.jpg",
    label: "Производственный цех",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://cdn.poehali.dev/projects/e2665e4b-f132-41de-a8e4-cbe3c71f8461/files/85b19693-f32d-4b70-a678-4166510614d1.jpg",
    label: "Ручная работа",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://cdn.poehali.dev/projects/e2665e4b-f132-41de-a8e4-cbe3c71f8461/files/1177f442-ad6f-4375-ae4f-f8d3ef7b067c.jpg",
    label: "3D-печать",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://cdn.poehali.dev/projects/e2665e4b-f132-41de-a8e4-cbe3c71f8461/files/deb4b5da-1ea9-4d5b-b063-648f08de3f98.jpg",
    label: "Контроль качества",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://cdn.poehali.dev/projects/e2665e4b-f132-41de-a8e4-cbe3c71f8461/files/255f6e81-1d03-495f-b872-942232fa6e68.jpg",
    label: "Хранение и архив",
    span: "col-span-1 row-span-1",
  },
]

export default function LabGallery() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section id="lab" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Наша лаборатория</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Современное оборудование, чистое производство и опытные техники — всё для предсказуемого результата.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-4 h-[520px] sm:h-[560px]">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer ${photo.span} ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setLightbox(i)}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ transform: hovered === i ? "scale(1.07)" : "scale(1)" }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300"
                style={{ opacity: hovered === i ? 1 : 0.5 }}
              />
              <motion.div
                className="absolute bottom-3 left-4"
                initial={false}
                animate={{ y: hovered === i ? 0 : 6, opacity: hovered === i ? 1 : 0.7 }}
                transition={{ duration: 0.25 }}
              >
                <span className="text-white text-sm font-medium">{photo.label}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].label}
              className="w-full rounded-2xl object-cover max-h-[80vh]"
            />
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setLightbox(null)}
                className="w-10 h-10 bg-black/60 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="text-white font-medium bg-black/60 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                {photos[lightbox].label}
              </span>
            </div>
            {/* Prev / Next */}
            <button
              onClick={() => setLightbox((lightbox - 1 + photos.length) % photos.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            >
              ‹
            </button>
            <button
              onClick={() => setLightbox((lightbox + 1) % photos.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            >
              ›
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
