import React from 'react'
import Explore from '../Components/Explore'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import Skils from '../Components/Skils'
import Education from '../Components/Education'
import ScrollProgress from '../Components/ScrollProgress'
import Projects from '../Components/Projects'

const Home = () => {


  return (
    <div>
      <ScrollProgress />
    <Explore />
    <div id='home'><Main /></div>
    <div id='skills'><Skils /></div>
    <div id='education'><Education /></div>
    <div id='projects'><Projects /></div>
    <Footer />
    </div>
  )
}

export default Home
