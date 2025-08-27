import React from 'react'
import SectionTitle from './SectionTitle'

export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <SectionTitle eyebrow="Say hello" title="Contact" />
      <div className="grid md:grid-cols-2 gap-6">
        <form className="grid gap-3 p-5 rounded-xl bg-white/5 border border-white/10">
          <input className="px-4 py-3 rounded bg-slate-900/60 border border-white/10" placeholder="Your name" />
          <input type="email" className="px-4 py-3 rounded bg-slate-900/60 border border-white/10" placeholder="Email" />
          <textarea rows="5" className="px-4 py-3 rounded bg-slate-900/60 border border-white/10" placeholder="Message"></textarea>
          <button className="px-5 py-3 rounded-lg bg-primary text-slate-950 font-medium hover:shadow-glow transition w-max">Send Message</button>
          <p className="text-xs text-slate-400">This is a demo form. Hook it up with EmailJS / Formspree / your backend.</p>
        </form>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <p className="text-slate-300">Prefer email? <a className="text-primary" href="mailto:hello@example.com">hello@example.com</a></p>
          <p className="text-slate-300 mt-2">Or DM me on LinkedIn/GitHub (links in the hero).</p>
        </div>
      </div>
    </section>
  )
}
