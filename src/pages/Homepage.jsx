import React from 'react'
import Header from '../components/Header'
import Map from '../components/Map'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div className='h-full bg-gray-100'>
      <Header/>
      <div className='flex flex-col md:flex-row-reverse'>
      <Map/>
      <Menu/>
      </div>
      <Footer/>
    </div>
  )
}

export default Homepage