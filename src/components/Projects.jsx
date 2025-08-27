import React from 'react'
import SectionTitle from './SectionTitle'
import { projects } from '../data/projects'

export default function Projects(){
  return (
    <section id="projects" className="py-16">
      <SectionTitle eyebrow="Recent work" title="Projects" />
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => (
          <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="group rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:shadow-glow transition block">
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/20 to-pink-500/20 group-hover:scale-[1.02] transition"></div>
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-300 mt-1">{p.desc}</p>
              <div className="flex gap-2 mt-3 flex-wrap">
                {p.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">{t}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
