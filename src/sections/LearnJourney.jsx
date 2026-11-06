import { useSelector } from 'react-redux'

const LearnJourney = () => {

  const { learningData } = useSelector(state => state.data)


  return (
    <section id='journey' className='w-full h-auto px-36 mt-24 pb-20'>
      <p id='journeyP1' className='font-jetBrains font-medium text-sm text-[#7EE787]'>// git log --journey</p>
      <h2 className='font-ibmPlex font-semibold text-5xl leading-12 tracking-[0.01em] mt-3 text-[#E6EDF3]'>How I got here</h2>
      <div id='journeyCard' className='h-auto w-full flex gap-8'>
        <div className='mt-9 w-1 bg-[#151A21]'></div>
        <div>
          {learningData.map((item, idx) => {
            return (
              <div key={idx} className='mt-9'>
                <h5 className='font-jetBrains font-bold text-sm text-[#7EE787]'>{item.name}</h5>
                <h4 className='font-ibmPlex mt-2 font-medium text-xl text-[#E6EDF3] tracking-normal leading-7'>{item.heading}</h4>
                <p className='font-ibmPlex mt-1.5 text-base text-[#B6B0CA] leading-7 tracking-normal'>{item.paragraph}</p>
              </div>
            )
          })}
          <div className='mt-9'>
            <h5 className='font-jetBrains font-bold text-sm text-[#FFD866]'>next . in progress</h5>
            <h4 className='font-ibmPlex mt-2 font-medium text-xl text-[#E6EDF3] tracking-normal leading-7'>Next.js, then System Design</h4>
            <p className='font-ibmPlex mt-1.5 mb-8 text-base text-[#B6B0CA] leading-7 tracking-normal'>Moving from React to Next.js, and looking for help learning System design.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearnJourney