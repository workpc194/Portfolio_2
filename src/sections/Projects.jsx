import { useSelector } from 'react-redux'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {

    const { projectsData } = useSelector(state => state.data)

    return (
        <section id='projects' className='px-36 mt-24'>
            <p className='font-jetBrains font-medium text-sm text-[#7EE787]'>// projects/</p>
            <h2 className='font-ibmPlex font-semibold text-5xl text-[#E6EDF3] mt-3'>Things I've built while learning</h2>
            <div className='grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3 mt-20'>
                {/* w-full grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-14 mt-20 */}
                {projectsData.map((item, idx) => {
                    return <ProjectCard elem={item} key={idx} />
                })}
            </div>
            <div className='w-full px-7 py-9 flex items-center justify-between mt-14 border border-dashed border-[#3A4552] rounded-2xl'>
                <p className='font-ibmPlex font-medium text-lg text-B6B0CA]'>Every project here is open source on GitHub</p>
                <a className='text-[#7EE787] border border-[#7EE787] py-3.5 px-5 font-jetBrains font-bold rounded-lg' href="https://github.com/workpc194">more on github</a>
            </div>
        </section>
    )
}

export default Projects