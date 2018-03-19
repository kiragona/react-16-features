

import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../home/Home'
import FragmentsExamples from '../fragments/Fragments'
import ErrorHandling from '../errorHandling/ErrorHandling'
import Portals from '../portals/Portals'
import ContextAPI from '../contextAPI/ContextAPI'
import SSR from '../ssr/SSR'
import BreakingChanges from '../breakingChanges/BreakingChanges'
import '../index.css'





const Routes = (props) => (
  <div className='content'>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/fragment' component={FragmentsExamples}/>
      <Route exact path='/errorHandling' component={ErrorHandling}/>
      <Route exact path='/portals' component={Portals}/>
      <Route exact path='/contextAPI' component={ContextAPI}/>
      <Route exact path='/ssr' component={SSR}/>
      <Route exact path='/breakingChanges' component={BreakingChanges}/>
    </Switch>
  </div>
)

export default Routes
