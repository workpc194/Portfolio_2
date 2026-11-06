import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ContactCard from '../components/ContactCard';

const Contact = () => {

  const { contactData } = useSelector(state => state.data)


  const [pakistanTime, setPakistanTime] = useState('');

  useEffect(() => {
    const updatePakistanTime = () => {
      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };

      const currentTime = new Date().toLocaleString('en-US', options);
      setPakistanTime(currentTime);
    };

    updatePakistanTime();
    const timerId = setInterval(updatePakistanTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <section id='contact' className='w-full h-auto px-36 pt-28 pb-26 grid grid-cols-2 grid-rows-1 gap-16 bg-[#11151B]'>
      <div>
        <p className='font-jetBrains font-medium text-sm text-[#7EE787]'>// contact.ns</p>
        <h2 className='font-ibmPlex font-semibold text-[56px] leading-15 text-[#E6EDF3] tracking-[0.02em] mt-7'>Let's build something that solves a real problem.</h2>
        <p className='font-ibmPlex text-xl leading-8 text-[#B6B0CA] mt-7'>I'm open to collaborating on projects and exploring new ideas. I'm also looking for help learning System Design, so advice is just as welcome as work.</p>
        <div className='border-y border-[#3A4552] mt-9'>
          <div className='flex py-4.5 items-center gap-6'>
            <span className='w-24 font-jetBrains font-medium text-sm text-[#9AA6B2]'>location</span>
            <span className='font-jetBrains font-medium text-sm text-[#E6EDF3]'>Pakistan . {pakistanTime}</span>
          </div>
          <div className='flex py-4.5 items-center gap-6 border-t border-[#3A4552]'>
            <span className='w-24 font-jetBrains font-medium text-sm text-[#9AA6B2]'>status</span>
            <span className='font-jetBrains font-medium text-sm flex items-center gap-2.25 text-[#E6EDF3]'><div className='w-2.5 h-2.5 bg-[#7EE787] rounded-full'></div> open to collaborate</span>
          </div>
        </div>
      </div>
      <div>
        <p className='font-jetBrains font-bold text-lg text-[#E6EDF3] mb-5'>reach on me</p>
        {contactData.map((item, idx) => {
          return <ContactCard elem={item} key={idx} />
        })}
      </div>
    </section>
  )
}

export default Contact