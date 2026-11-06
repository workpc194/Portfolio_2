import { useSelector } from 'react-redux'
import GithubDataCard from '../components/GithubDataCard'

const GithubData = () => {

    const { githubData } = useSelector(state => state.data)

    return (
        <section id='githubData' className="w-full px-36 mt-18 grid grid-cols-4 grid-rows-1 gap-4">
            {githubData.map((item) => {
                return <GithubDataCard elem={item} key={item.id} />
            })}
        </section>
    )
}

export default GithubData