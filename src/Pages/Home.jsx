
import { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/HeroSection'
import InfoCards from '../Components/PropertyCards/InfoCards'
import PostProperty from '../Components/PostProperty/PostProperty'
import PropertyListing from './PropertyListing'
import PropertyDetail from './PropertyDetail'

const Home = () => {
  const [isPostPropertyOpen, setIsPostPropertyOpen] = useState(false)
  const [page, setPage] = useState('home')

  if (page === 'listing') {
    return <PropertyListing onBack={() => setPage('home')} onPropertyClick={() => setPage('detail')} />
  }

  if (page === 'detail') {
    return <PropertyDetail onBack={() => setPage('listing')} />
  }

  return (
    <div>
      <Navbar onPostProperty={() => setIsPostPropertyOpen(true)}/>
      <Hero onExplore={() => setPage('listing')}/>
      <InfoCards/>
      {isPostPropertyOpen && <PostProperty onClose={() => setIsPostPropertyOpen(false)}/>} 
    </div>
  )
}

export default Home
