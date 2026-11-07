import gsap from "gsap"
import { useEffect, useRef } from "react"

const CustomCursor = () => {

    const cursorRef = useRef()

    const maxPoints = navigator.maxTouchPoints || 0;

    useEffect(() => {

        if (window.innerWidth < window.innerHeight) {
            return cursorRef.current.style.display = 'none'
        }

        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
        const xTo = gsap.quickTo(cursorRef.current, 'x', { duration: 0.4, ease: 'power3' })
        const yTo = gsap.quickTo(cursorRef.current, 'y', { duration: 0.4, ease: 'power3' })
        const move = e => { xTo(e.clientX); yTo(e.clientY) }
        window.addEventListener('mousemove', move)
        return () => window.removeEventListener('mousemove', move)
    }, [])

    return (
        <div ref={cursorRef} className='w-5.5 h-5.5 border pointer-events-none border-[#7EE787] rounded-full fixed z-100'></div>

    )
}

export default CustomCursor