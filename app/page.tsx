import Hero from '@components/Hero'
import Marquee from '@components/Marquee'
import Navbar from '@components/Navbar'
import Projects from '@components/Projects'
import About from '@components/About'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
// import MusicPlayer from './components/MusicPlayer'

const page = () => {
  return (
    <main className='font-oswald min-w-full text-white antialiased selection:bg-lime-300 selection:text-black'>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      {/* <MusicPlayer /> */}
    </main>
  )
}

export default page