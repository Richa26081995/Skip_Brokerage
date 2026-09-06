
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
  const [selectedProperty, setSelectedProperty] = useState(null)
  const openPostProperty = () => {
    setPage('home')
    setIsPostPropertyOpen(true)
  }

  if (page === 'listing') {
    return <PropertyListing onBack={() => setPage('home')} onPropertyClick={(property) => { setSelectedProperty(property); setPage('detail') }} onPostProperty={openPostProperty} />
  }

  if (page === 'detail') {
    return <PropertyDetail property={selectedProperty} onBack={() => setPage('listing')} onPostProperty={openPostProperty} />
  }

  return (
    <div>
      <Navbar onPostProperty={openPostProperty}/>
      <Hero onExplore={() => setPage('listing')} onPostProperty={openPostProperty}/>
      <InfoCards/>
      {isPostPropertyOpen && <PostProperty onClose={() => setIsPostPropertyOpen(false)}/>} 
    </div>
  )
}

export default Home
