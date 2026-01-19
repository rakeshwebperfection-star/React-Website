import React from 'react'
import "../assets/css/home1.css"
import TopHeader from '../components/home1/TopHeader'
import MiddleHeader from '../components/home1/MiddleHeader'
import BottomHeader from '../components/home1/BottomHeader'
import HeroSlider1 from '../components/home1/HeroSlider1'
import ShippingInfo1 from '../components/home1/ShippingInfo1'
import NewArrival1 from '../components/home1/NewArrival1'
import CatagorySection1 from '../components/home1/CatagorySection1'
import SmartProducts from '../components/home1/SmartProducts'

function Home1() {
  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
      <main className='main-content'>
        <HeroSlider1 />
        <ShippingInfo1 />
        <NewArrival1 />
        <CatagorySection1 />
        <SmartProducts />
      </main>
    </>
  )
}

export default Home1
