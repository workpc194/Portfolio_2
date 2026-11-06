import { useSelector } from 'react-redux'
import SkillCard from '../components/SkillCard'

const Skills = () => {

  const { skillsData } = useSelector(state => state.data)


  return (
    <section id='skills' className='w-full h-auto px-36 mt-24'>
      <p className='font-jetBrains font-medium text-sm text-[#7EE787]'>// stack.json</p>
      <h2 className='font-ibmPlex font-semibold text-5xl leading-12 tracking-[0.01em] mt-3'>Everything I work with</h2>
      <div id='skills-div1' className='w-full grid gap-5 grid-cols-2 grid-rows-2 mt-10'>
        {skillsData.map((item, idx) => {
          return <SkillCard elem={item} key={idx} />
        })}
      </div>
    </section>
  )
}

export default Skills