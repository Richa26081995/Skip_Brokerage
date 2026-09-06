
import { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/HeroSection'
import InfoCards from '../Components/PropertyCards/InfoCards'
import PostProperty from '../Components/PostProperty/PostProperty'

const Home = () => {
  const [isPostPropertyOpen, setIsPostPropertyOpen] = useState(false)

  return (
    <div>
      <Navbar onPostProperty={() => setIsPostPropertyOpen(true)}/>
      <Hero/>
      <InfoCards/>
      {isPostPropertyOpen && <PostProperty onClose={() => setIsPostPropertyOpen(false)}/>} 
    </div>
  )
}

export default Home
