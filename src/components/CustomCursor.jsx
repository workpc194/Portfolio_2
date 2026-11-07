import gsap from "gsap"
import { useEffect, useRef } from "react"

const CustomCursor = () => {

    const cursorRef = useRef()

    const maxPoints = navigator.maxTouchPoints || 0;

    useEffect(() => {

        if(window.innerWidth < window.innerHeight && maxPoints > 0){
            return cursorRef.current.style.display = 'none'
        }

        window.addEventListener('mousemove', (e) => {
            gsap.to(cursorRef.current, {
                x: e.x,
                y: e.y,
                duration: 1,
                ease: "back.out(4)",
            })
        })
    }, [])

    return (
        <div ref={cursorRef} className='w-5.5 h-5.5 border border-[#7EE787] rounded-full fixed z-100'></div>

    )
}

export default CustomCursor