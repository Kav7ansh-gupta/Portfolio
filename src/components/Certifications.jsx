import React from 'react'
import SectionTitle from './SectionTitle'

const items = [
  { title: 'Meta Front-End Developer', by: 'Coursera', year: '2024' },
  { title: 'JavaScript Algorithms & Data Structures', by: 'freeCodeCamp', year: '2024' },
  { title: 'Responsive Web Design', by: 'freeCodeCamp', year: '2023' },
  { title: 'GSAP Animation Mastery', by: 'GreenSock', year: '2025' },
]

export default function Certifications(){
  return (
    <section id="certs" className="py-16">
      <SectionTitle eyebrow="Proof of learning" title="Certifications" />
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(c => (
          <div key={c.title} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:-translate-y-1 hover:shadow-glow transition">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{c.title}</h3>
              <span className="text-xs text-slate-400">{c.year}</span>
            </div>
            <p className="text-sm text-slate-300 mt-1">{c.by}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
