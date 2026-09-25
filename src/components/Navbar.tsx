import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const waLink = 'https://wa.me/2348142131105'

export function Navbar() {
  const { scrollY } = useScroll()
  const height = useTransform(scrollY, [0, 80], [90, 70])
  const [open, setOpen] = useState(false)
  const links = ['Home', 'Services', 'Location', 'Contact']

  return <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: .5 }} style={{ height }} className="fixed inset-x-0 top-0 z-50 border-b border-[#4a2c1d]/10 bg-[#f5ebe0]/90 px-5 backdrop-blur-md md:px-10"><div className="mx-auto flex h-full max-w-7xl items-center justify-between"><a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}><span className="logo-mark" aria-hidden="true">OJ</span><span className="font-serif text-lg font-semibold tracking-tight">OJ's <span className="font-normal italic">Beauty Atelier</span></span></a><nav className={`${open ? 'absolute left-0 right-0 top-full flex' : 'hidden'} flex-col gap-5 border-b border-[#4a2c1d]/10 bg-[#f5ebe0] px-6 py-6 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}>{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium transition-colors hover:text-[#c08552]" onClick={() => setOpen(false)}>{link}</a>)}<a href={waLink} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4a2c1d] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">Book Now <ArrowUpRight size={15} /></a></nav><button type="button" className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></motion.header>
}