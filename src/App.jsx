import Navbar from './components/Navbar'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import GithubData from './sections/GithubData'
// import LenisFile from './LenisFile'
import Hero from './sections/Hero'
import LearnJourney from './sections/LearnJourney'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
// import CustomCursor from './components/CustomCursor'

const App = () => {
  return (
    <main id='app' className='w-full min-h-screen bg-[#0E1116]'>
      {/* <CustomCursor /> */}
      <Navbar />
      {/* <LenisFile> */}
      <Hero />
      <GithubData />
      <Skills />
      <Projects />
      <LearnJourney />
      <Contact />
      <Footer />
      {/* </LenisFile> */}
    </main>
  )
}

export default App