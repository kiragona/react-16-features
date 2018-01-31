import React, {Component} from 'react'

import Routes from '../routes/Routes'

import NavMenu from '../menu/NavMenu'


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavMenu/>
        <Routes/>
      </div>
    )
  }
}

