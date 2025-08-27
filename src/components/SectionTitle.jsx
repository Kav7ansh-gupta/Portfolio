import React from 'react'
export default function SectionTitle({eyebrow, title}){
  return (
    <div className="mb-8">
      <p className="text-sm uppercase tracking-widest text-primary/80">{eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
    </div>
  )
}
