import React from 'react'
import "../assets/css/home1.css"
import TopHeader from '../components/home1/TopHeader'
import MiddleHeader from '../components/home1/MiddleHeader'
import BottomHeader from '../components/home1/BottomHeader'

function Home1() {
  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
      <main className='main-content'>
        <div style={{height: '100vh'}}></div>
      </main>
    </>
  )
}

export default Home1
