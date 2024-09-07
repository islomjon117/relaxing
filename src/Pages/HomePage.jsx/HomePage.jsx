import React from 'react'
import Header from '../../Components/Header'
import OurServices from '../../Components/OurServices'
import Packages from '../../Components/Packages'
import PopularDest from '../../Components/PopularDest'
import Stats from '../../Components/Stats'
import Steps from '../../Components/Steps'
import Contact from '../../Components/contact/Contact'

const HomePage = () => {
  return (
    <>
      <Header/>
      <OurServices/>
      <PopularDest/>
      <Stats/>
      <Packages/>
      <Steps/>
      <Contact/>
    </>
  )
}

export default HomePage