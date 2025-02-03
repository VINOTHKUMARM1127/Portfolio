import React from 'react'
import Explore from '../Components/Explore'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import Skils from '../Components/Skils'
import Education from '../Components/Education'

const Home = () => {


  return (
    <div>
    <Explore />
    <div id='home'><Main /></div>
    <div id='skills'><Skils /></div>
    <div id='education'><Education /></div>
    <Footer />
    </div>
  )
}

export default Home
