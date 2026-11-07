import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <section id='footer' className='w-full h-auto px-36 pt-20 pb-8'>
      <div className='flex gap-12 mb-16'>
        <div className='max-w-95'>
          <a href="#" className='font-jetBrains font-bold text-xl text-[#E6EDF3]'>&lt;the_developer/&gt;</a>
          <p className='font-ibmPlex text-base leading-6.5 text-[#9AA6B2] mt-5'>Frontend developer from Pakistan, building interactive web experiences with React, JavaScript and GSAP.</p>
          <p className='font-jetBrains font-medium text-sm text-[#B6B0CA] flex gap-2.5 items-center mt-5'><span className='w-2.5 h-2.5 bg-[#7EE787] rounded-full'></span> currently learning Next.js</p>
        </div>
        <div className='w-full grid grid-cols-3 grid-rows-1 gap-12'>
          <div className='flex flex-col'>
            <h3 className='font-jetBrains font-bold text-[13px] text-[#9AA6B2] tracking-[0.08em] uppercase'>explore</h3>
            <a className='font-ibmPlex font-medium text-[15px] text-[#E6EDF3] mt-3.5 hover:text-[#7EE787]' href="#hero">Home</a>
            <a className='font-ibmPlex font-medium text-[15px] text-[#E6EDF3] mt-3.5 hover:text-[#7EE787]' href="#skills">Skills</a>
            <a className='font-ibmPlex font-medium text-[15px] text-[#E6EDF3] mt-3.5 hover:text-[#7EE787]' href="#projects">Projects</a>
            <a className='font-ibmPlex font-medium text-[15px] text-[#E6EDF3] mt-3.5 hover:text-[#7EE787]' href="#journey">Journey</a>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-jetBrains font-bold text-[13px] text-[#9AA6B2] tracking-[0.08em] uppercase'>projects</h3>
            <a className='font-ibmPlex font-medium text-[15px] text-[#E6EDF3] mt-3.5 hover:text-[#7EE787]' href="https://movies-project-eight-beta.vercel.app/" target="_blank">Movies Project</a>
            <a className='font-ibmPlex font-medium text-[15px] text-[#E6EDF3] mt-3.5 hover:text-[#7EE787]' href="https://notes-app-by-noman.vercel.app/" target="_blank">Notes App</a>
            <a className='font-ibmPlex font-medium text-[15px] text-[#E6EDF3] mt-3.5 hover:text-[#7EE787]' href="https://gallery-app-by-noman.vercel.app/" target="_blank">Infinite Gallery</a>
            <a className='font-ibmPlex font-medium text-[15px] text-[#E6EDF3] mt-3.5 hover:text-[#7EE787]' href="https://github.com/workpc194/gsap-learn" target="_blank">GSAP Studies</a>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-jetBrains font-bold text-[13px] text-[#9AA6B2] tracking-[0.08em] uppercase'>connect</h3>
            <a className='font-ibmPlex font-medium text-[15px] text-[#E6EDF3] mt-3.5 hover:text-[#7EE787]' href="https://github.com/workpc194" target="_blank">GitHub</a>
            <a className='font-ibmPlex font-medium text-[15px] text-[#E6EDF3] mt-3.5 hover:text-[#7EE787]' href="mailto:nomitool1419@gmail.com" target="_blank">Email</a>
            <a className='font-ibmPlex font-medium text-[15px] text-[#E6EDF3] mt-3.5 hover:text-[#7EE787]' href="https://wa.me/923183815505" target="_blank">WhatsApp</a>
            <a className='font-ibmPlex font-medium text-[15px] text-[#E6EDF3] mt-3.5 hover:text-[#7EE787]' href="https://www.linkedin.com/" target="_blank">Linkedin</a>
          </div>
        </div>
      </div>
      <div className='border-t border-[#3A4552] pt-6 flex justify-between'>
        <p className='font-ibmPlex text-sm text-[#9AA6B2]'>&copy; 2026 Muhammad Noman. All rights reserved.</p>
        <a className='font-jetBrains font-medium text-sm text-[#B4F5B9] flex items-center gap-1.5' href="#">back to top<FaArrowUp /></a>
      </div>

    </section>
  )
}

export default Footer