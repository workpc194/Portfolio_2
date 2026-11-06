import { CodeXml, Mail, Menu, MessageCircle, UserRound, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { FaArrowRight } from "react-icons/fa6";


const Navbar = () => {

  const navLinkRef = useRef()
  const navMenuRef = useRef()
  const navCloseRef = useRef()
  const [number, setNumber] = useState(0)
  const mediaQuery = window.matchMedia("(max-width: 650px)")

  const changeNumber = () => {
    if (number === 0) {
      setNumber(1)
    } else {
      setNumber(0)
    }
  }


  useEffect(() => {
    if (number === 1 && mediaQuery.matches) {
      navLinkRef.current.style.display = 'block'
      navCloseRef.current.style.display = 'flex'
      navMenuRef.current.style.display = 'none'
    } else if (number === 0 && mediaQuery.matches) {
      navLinkRef.current.style.display = 'none'
      navMenuRef.current.style.display = 'flex'
      navCloseRef.current.style.display = 'none'
    }
  }, [number])

  return (
    <>
      <nav className='w-full h-16 flex items-center justify-between fixed top-0 px-36 z-50'>
        <h1 className='font-jetBrains font-bold text-base text-[#EDE6F3]'><a href="">&lt;the_developer/&gt;</a></h1>
        <ul id="navFirstUl" className="w-auto gap-6 flex items-center justify-between">
          <li className="font-jetBrains text-sm font-medium text-[#9AA6B2] hover:text-[#7EE787]"><a href="#hero">Home</a></li>
          <li className="font-jetBrains text-sm font-medium text-[#9AA6B2] hover:text-[#7EE787]"><a href="#skills">Skills</a></li>
          <li className="font-jetBrains text-sm font-medium text-[#9AA6B2] hover:text-[#7EE787]"><a href="#projects">Projects</a></li>
          <li className="font-jetBrains text-sm font-medium text-[#9AA6B2] hover:text-[#7EE787]"><a href="#journey">Journey</a></li>
          <li className="font-jetBrains text-sm font-medium text-[#9AA6B2] hover:text-[#7EE787]"><a href="#contact">Contact</a></li>
        </ul>
        <button id="navMenuRef" ref={navMenuRef} onClick={changeNumber} className="w-11 h-11 border border-[#3A4552] rounded-[10px] justify-center items-center hidden"><Menu size={20} /></button>
        <button ref={navCloseRef} onClick={changeNumber} className="w-11 h-11 border border-[#3A4552] rounded-[10px] justify-center items-center hidden"><X size={20} /></button>
      </nav>
      <hr />
      {/* Second */}
      <div id="navSecondUl" ref={navLinkRef} className="w-full hidden overflow-auto h-screen bg-[#0E1116] fixed top-18 left-0 z-50">
        <div className=" flex flex-col justify-between ">
          <div className="">
            <p className="pt-4 font-jetBrains font-medium text-xs tracking-[0.08em] text-[#9AA6B2] px-5">// navigate</p>
            <ul className="w-full gap-6 block px-5">
              <li className="group hover:text-[#7EE787] py-3 cursor-pointer">
                <a href="#hero" className="flex justify-between items-center">
                  <span className="flex items-center gap-6">
                    <span className="font-jetBrains font-medium text-sm text-[#9AA6B2] group-hover:text-[#7EE787]">01</span>
                    <span className="font-ibmPlex text-2xl font-semibold leading-8 text-[#E6EDF3] group-hover:text-[#7EE787]">Home</span>
                  </span>
                  <FaArrowRight size={22} className="text-[#9AA6B2] group-hover:text-[#7EE787]" />
                </a>
              </li>
              <hr className="mx-3" />
              <li className="group hover:text-[#7EE787] py-3">
                <a href="#skills" className="flex justify-between items-center">
                  <span className="flex items-center gap-6">
                    <span className="font-jetBrains font-medium text-sm text-[#9AA6B2] group-hover:text-[#7EE787]">02</span>
                    <span className="font-ibmPlex text-2xl font-semibold leading-8 text-[#E6EDF3] group-hover:text-[#7EE787]">Skills</span>
                  </span>
                  <FaArrowRight size={22} className="text-[#9AA6B2] group-hover:text-[#7EE787]" />
                </a>
              </li>
              <hr className="mx-3" />
              <li className="group hover:text-[#7EE787] py-3">
                <a href="#projects" className="flex justify-between items-center">
                  <span className="flex items-center gap-6">
                    <span className="font-jetBrains font-medium text-sm text-[#9AA6B2] group-hover:text-[#7EE787]">03</span>
                    <span className="font-ibmPlex text-2xl font-semibold leading-8 text-[#E6EDF3] group-hover:text-[#7EE787]">Projects</span>
                  </span>
                  <FaArrowRight size={22} className="text-[#9AA6B2] group-hover:text-[#7EE787]" />
                </a>
              </li>
              <hr className="mx-3" />
              <li className="group hover:text-[#7EE787] py-3">
                <a href="#journey" className="flex justify-between items-center">
                  <span className="flex items-center gap-6">
                    <span className="font-jetBrains font-medium text-sm text-[#9AA6B2] group-hover:text-[#7EE787]">04</span>
                    <span className="font-ibmPlex text-2xl font-semibold leading-8 text-[#E6EDF3] group-hover:text-[#7EE787]">Journey</span>
                  </span>
                  <FaArrowRight size={22} className="text-[#9AA6B2] group-hover:text-[#7EE787]" />
                </a>
              </li>
              <hr className="mx-3" />
              <li className="group hover:text-[#7EE787] py-3">
                <a href="#contact" className="flex justify-between items-center">
                  <span className="flex items-center gap-6">
                    <span className="font-jetBrains font-medium text-sm text-[#9AA6B2] group-hover:text-[#7EE787]">05</span>
                    <span className="font-ibmPlex text-2xl font-semibold leading-8 text-[#E6EDF3] group-hover:text-[#7EE787]">Contact</span>
                  </span>
                  <FaArrowRight size={22} className="text-[#9AA6B2] group-hover:text-[#7EE787]" />
                </a>
              </li>
              <hr className="mx-3" />
            </ul>
          </div>
          <div className="w-full h-auto bg-[#11151B] pb-7 px-5 border-t border-[#252C36]">
            <p className="font-jetBrains font-medium text-xs text-[#9AA6B2] tracking-[0.08em] mt-5">// reach me on</p>
            <div className="mt-4 flex justify-between">
              <a href="mailto:nomitool1419@gmail.com" className="w-15 h-14 bg-[#151A21] flex items-center justify-center border border-[#252C36] rounded-xl"><Mail color="#7EE787" size={24} strokeWidth={1.5} /></a>
              <a href="https://wa.me/923183815505" className="w-15 h-14 bg-[#151A21] flex items-center justify-center border border-[#252C36] rounded-xl"><MessageCircle color="#7EE787" size={24} strokeWidth={1.5} /></a>
              <a href="https://github.com/workpc194" className="w-15 h-14 bg-[#151A21] flex items-center justify-center border border-[#252C36] rounded-xl"><CodeXml color="#7EE787" size={24} strokeWidth={1.5} /></a>
              <a href="https://linkedin.com/" className="w-15 h-14 bg-[#151A21] flex items-center justify-center border border-[#252C36] rounded-xl"><UserRound color="#7EE787" size={24} strokeWidth={1.5} /></a>
            </div>
            <a href="mailto:nomitool1419@gmail.com" className="w-full h-13 mt-4 rounded-lg flex items-center justify-center bg-[#7EE787] font-jetBrains font-bold text-lg text-[#0E1116]">send an email</a>
            <p className="flex gap-2.5 items-center justify-center mt-4"><span className="w-2.5 h-2.5 bg-[#7EE787] rounded-full"></span>open to collaborate</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar