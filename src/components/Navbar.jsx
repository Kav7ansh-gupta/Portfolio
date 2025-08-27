import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  {href: '#home', label: 'Home'},
  {href: '#about', label: 'About'},
  {href: '#skills', label: 'Skills'},
  {href: '#projects', label: 'Projects'},
  {href: '#certs', label: 'Certifications'},
  {href: '#contact', label: 'Contact'}
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight">
          <span className="text-primary">Kavyansh</span> • Dev
        </a>
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map(l=>(
            <li key={l.href}>
              <a className="hover:text-primary transition" href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <button onClick={()=>setOpen(v=>!v)} className="md:hidden p-2 rounded hover:bg-white/5" aria-label="toggle menu">
          {open ? <FaTimes/> : <FaBars/>}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="grid gap-2 text-sm">
            {links.map(l=>(
              <li key={l.href}>
                <a onClick={()=>setOpen(false)} className="block w-full p-3 rounded hover:bg-white/5" href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
