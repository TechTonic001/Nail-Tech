import { motion } from 'framer-motion'
import { Brush, Hand, Heart, Scissors, Sparkles, WandSparkles } from 'lucide-react'
import type { Service } from '../types'

const services: Service[] = [
  { title: 'Gel Nails', description: 'Glossy, durable colour with a perfect finish.', icon: Sparkles },
  { title: 'Acrylic Nails', description: 'Sculpted length and shape made for you.', icon: WandSparkles },
  { title: 'Nails Removal', description: 'A gentle, professional soak off.', icon: Scissors },
  { title: 'Lash Extensions', description: 'Effortless volume and beautiful definition.', icon: Heart },
  { title: 'Clusters Lash', description: 'Soft, wispy clusters for everyday glam.', icon: Brush },
  { title: 'Lash Removal', description: 'Careful removal that respects your natural lashes.', icon: Scissors },
  { title: 'Pedicure & Manicure', description: 'A quiet reset for hands, feet and spirit.', icon: Hand },
]

export function Services() {
  return <section id="services" className="bg-[#fffaf5] px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45 }} className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">The atelier menu</p><h2 className="section-title">Little luxuries,<br /><em>made personal.</em></h2></div><p className="max-w-xs text-sm leading-7 text-[#4a2c1d]/65">Thoughtful beauty rituals, carefully finished and made to leave you feeling like your most polished self.</p></motion.div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((service, index) => { const Icon = service.icon; return <motion.article key={service.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06, duration: .4 }} whileHover={{ y: -6 }} className="group rounded-2xl border border-[#4a2c1d]/10 bg-[#f5ebe0]/45 p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#4a2c1d]/10"><div className="mb-12 flex h-11 w-11 items-center justify-center rounded-full bg-[#4a2c1d] text-[#e6b98e] transition-transform group-hover:rotate-12"><Icon size={20} strokeWidth={1.6} /></div><h3 className="font-serif text-xl">{service.title}</h3><p className="mt-2 text-sm leading-6 text-[#4a2c1d]/60">{service.description}</p></motion.article> })}</div><motion.div initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-[#4a2c1d] px-6 py-5 text-center text-sm font-semibold text-white"><span className="h-2 w-2 rounded-full bg-[#e6b98e]" /> Home Service Available <span className="font-normal text-white/60">(T&C Applies)</span></motion.div></div></section>
}