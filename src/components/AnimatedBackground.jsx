import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function AnimatedBackground(){
  const container = useRef(null)
  const blobs = useRef([])
  const setters = useRef([])

  useEffect(()=>{
    const el = container.current
    const b = blobs.current
    const createBlob = (size, blur, opacity) => {
      const d = document.createElement('div')
      d.className = `pointer-events-none absolute rounded-full mix-blend-screen`
      d.style.width = d.style.height = size + 'px'
      d.style.filter = `blur(${blur}px)`
      d.style.opacity = opacity
      d.style.background = 'radial-gradient(circle at 30% 30%, rgba(14,165,233,.9), rgba(168,85,247,.8) 60%, rgba(236,72,153,.6))'
      el.appendChild(d)
      b.push(d)
    }
    // create blobs
    createBlob(500, 60, .35)
    createBlob(380, 40, .30)
    createBlob(260, 30, .25)

    // center them
    b.forEach((d,i)=>{
      gsap.set(d, {xPercent:-50, yPercent:-50, x: window.innerWidth/2 + i*50, y: window.innerHeight/2 + i*20})
    })

    // quick setters for smooth trailing
    setters.current = b.map(div => gsap.quickTo(div, 'x', {duration:.6, ease:'power3'}))
    const settersY = b.map(div => gsap.quickTo(div, 'y', {duration:.6, ease:'power3'}))

    const onMove = (e)=>{
      const x = e.clientX || (e.touches && e.touches[0].clientX)
      const y = e.clientY || (e.touches && e.touches[0].clientY)
      if(x==null || y==null) return
      setters.current.forEach((set, i)=> set(x + i*20))
      settersY.forEach((set, i)=> set(y + i*10))
    }
    window.addEventListener('mousemove', onMove, {passive:true})
    window.addEventListener('touchmove', onMove, {passive:true})

    // gentle float
    b.forEach((d,i)=>{
      gsap.to(d, { x: '+=30', y: '+=20', duration: 8+i*2, yoyo:true, repeat:-1, ease:'sine.inOut'})
    })

    return ()=>{
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      b.forEach(div=>div.remove())
      blobs.current = []
    }
  },[])

  return <div ref={container} className="fixed inset-0 -z-10 overflow-hidden bg-slate-950"></div>
}
