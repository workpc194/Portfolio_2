import gsap from "gsap"
import { useEffect, useRef } from "react"

const CustomCursor = () => {

    const cursorRef = useRef()

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            gsap.to(cursorRef.current, {
                x: e.x,
                y: e.y,
                duration: 1,
                ease: "back.out",
            })
        })

        window.addEventListener('wheel', (e) => {
            gsap.to(cursorRef.current, {
                x: e.screenX,
                y: e.screenY,
                // duration: 1,
                ease: "back.out",
            })
        })
    }, [])

    return (
        <div ref={cursorRef} className='w-4.5 h-4.5 bg-transparent border border-[#7EE787] rounded-full'></div>

    )
}

export default CustomCursor