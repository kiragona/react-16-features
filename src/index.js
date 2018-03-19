import React from 'react'
import {render} from 'react-dom'
import './index.css'
// eslint-disable-next-line
import Prism from 'prismjs' //for code highliting, include once

import App from './app/App'
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'



render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>

), document.getElementById('root'))

registerServiceWorker()
