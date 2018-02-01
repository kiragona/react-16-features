import React from 'react'

import logo from '../images/logo.svg'

import './Home.css'

const Home = () => (

  <div className='home-content'>
    <div className="home">
      <img src={logo} className="app-logo" alt="logo"/>
      <div className="app-title">React 16 feature demo</div>
    </div>
  </div>

)

export default Home