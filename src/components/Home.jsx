import React from 'react'
import Hero from './Hero'
import Marquee from './Marquee'
import Technologies from './Technologies'
import Projects from './Projects'
import Blog from './Blog'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Hero />
        <Marquee />
        <Technologies />
        <Projects />
        <Blog />
        <Contact />
    </div>
  )
}

export default Home