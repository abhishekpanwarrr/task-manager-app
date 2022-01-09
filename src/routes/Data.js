import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Home = () => {
    return (
        <div className='app'>
        <Header />
      <div className='app_bottom'>
        <Sidebar />
        <Body/>
      </div>
    </div>
    )
}

export default Home
