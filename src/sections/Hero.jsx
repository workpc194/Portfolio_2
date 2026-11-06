
const Hero = () => {


  return (
    <section id='hero' className='w-full h-auto grid grid-cols-2 grid-rows-1 gap-11 px-36'>
      <div id='heroLeft' className='mt-24'>
        <h5 className='font-jetBrains font-medium text-base text-[#7EE787]'>$ whoami</h5>
        <h1 className='font-ibmPlex text-7xl text-[#E6EDF3] font-semibold pt-6 leading-18'>Muhammad Noman</h1>
        <p className='font-ibmPlex text-[22px] text-[#B6B0CA] pt-6 leading-8'>Frontend developer from Pakistan, building interactive, animated web experiences with React, JavaScript and GSAP.</p>
        <div id='heroBtns' className='flex gap-4 mt-8'>
          <a href='https://github.com/workpc194' target='_blank' className='bg-[#7EE787] text-[#0E1116] font-jetBrains font-bold text-sm rounded-lg py-3.5 px-6'>View Repositories</a>
          <a href='mailto:nomitool1419@gmail.com' target='_blank' className='text-[#EDE6F3] border border-[#3A4552] font-jetBrains font-bold text-sm rounded-lg py-3.5 px-6 hover:text-[#7EE787] hover:border-[#7EE787]'>Send an Email</a>
        </div>
      </div>
      {/* Hero Card */}
      <div id='heroCard' className='mt-38 h-auto border border-[#252C36] rounded-[14px]'>
        <div className='w-full h-9 pl-4 flex items-center gap-5 border-b border-[#252C36]'>
          <div className='flex gap-2'>
            <span className='w-3 h-3 rounded-full bg-[#FF5F57]'></span>
            <span className='w-3 h-3 rounded-full bg-[#FEBC2E]'></span>
            <span className='w-3 h-3 rounded-full bg-[#28C840]'></span>
          </div>
          <p className='font-jetBrains text-sm text-[#9AA6B2]'>noman.js</p>
        </div>
        <div className='w-full pl-4 py-7'>
          <pre className='font-jetBrains text-sm text-[#E6EDF3] leading-7'>
            <span className='text-[#FF7B72]'>const</span> noman = &#123; <br />
            <span className='pl-4 flex flex-wrap'>
              role: <span className='text-[#A5D6FF]'>"Frontend Developer"</span> <br />
            </span>
            <span className='pl-4 flex flex-wrap'>
              from: <span className='text-[#A5D6FF]'>"Pakistan"</span> <br />
            </span>
            <span className='pl-4 flex flex-wrap'>
              stack: &#91;<span className='text-[#A5D6FF]'>"React"</span>, <span className='text-[#A5D6FF]'>"Redux"</span>, <span className='text-[#A5D6FF]'>"Tailwind"</span>, <span className='text-[#A5D6FF]'>"GSAP"</span>&#93; <br />
            </span>
            <span className='pl-4 flex flex-wrap'>
              learning: &#91;<span className='text-[#A5D6FF]'>"Next.js"</span>, <span className='text-[#A5D6FF]'>"System Design"</span>&#93; <br />
            </span>
            <span className='pl-4 flex flex-wrap'>
              open_to: <span className='text-[#A5D6FF]'>"Collaborating on Projects"</span> <br />
            </span>
            &#125;;
          </pre>
        </div>
      </div>
    </section>
  )
}

export default Hero