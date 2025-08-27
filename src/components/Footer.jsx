import React from 'react'
export default function Footer(){
  return (
    <footer className="mt-16 py-8 border-t border-white/5 text-sm text-slate-400">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
        <p>© {new Date().getFullYear()} Kavyansh Gupta. All rights reserved.</p>
        <p>Built with React • Tailwind • GSAP • Framer Motion</p>
      </div>
    </footer>
  )
}
