import { motion } from 'framer-motion'
import { Camera, Mail, MessageCircle, Music2 } from 'lucide-react'
import type { SocialLink } from '../types'

const links: SocialLink[] = [
  { label: 'WhatsApp', value: '+234 814 213 1105', href: 'https://wa.me/2348142131105', icon: MessageCircle },
  { label: 'Instagram', value: '@o.js_beauty_atelier', href: 'https://instagram.com/o.js_beauty_atelier', icon: Camera },
  { label: 'TikTok', value: '@o.js_beauty_atelier', href: 'https://tiktok.com/@o.js_beauty_atelier', icon: Music2 },
  { label: 'Email', value: 'ojbeautyatelier02@gmail.com', href: 'mailto:ojbeautyatelier02@gmail.com', icon: Mail },
]

export function Contact() {
  return <section id="contact" className="bg-[#fffaf5] px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><div className="mb-12"><p className="eyebrow">Stay in touch</p><h2 className="section-title">Let’s make something<br /><em>beautiful.</em></h2></div><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">{links.map(({ label, value, href, icon: Icon }) => <motion.a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} whileHover={{ y: -5 }} whileTap={{ scale: .98 }} className="rounded-2xl border border-[#4a2c1d]/10 p-6 transition-colors hover:bg-[#f5ebe0]"><motion.span whileHover={{ scale: 1.12, rotate: 8 }} className="mb-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#e9d1ba] text-[#4a2c1d]"><Icon size={19} /></motion.span><span className="block text-xs font-semibold uppercase tracking-[.17em] text-[#c08552]">{label}</span><span className="mt-2 block break-words text-sm font-medium">{value}</span></motion.a>)}</div></div></section>
}