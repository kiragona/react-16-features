/**
 *
 * @Description:
 *
 */


import React, {Component, Fragment} from 'react'

import PrismCode from 'react-prism'

import 'prismjs/themes/prism.css'

import ssrPerformance from '../images/ssrPerformance.png'
import ssrWarning from '../images/ssrWarning.png'

const SSRHybradeSnipet = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
   import { hydrate } from 'react-dom'
   import MyComponent from './MyComponent'
   hydrate(<MyComponent />, document.getElementById('my-component-container'))
    `}
  </PrismCode>
)


export default class SSR extends Component {

  constructor(props) {
    super(props)
    this.exampleCount = 1
    this.curExampleNum = 1
    this.state = {
      exampleNumber: 1
    }
  }

  showExample = (event) => {
    if (event.key === 'ArrowDown') {
      this.curExampleNum = this.curExampleNum + 1

      if (this.curExampleNum > this.exampleCount) {
        this.curExampleNum = 1
        this.setState({exampleNumber: 1, showAll: false})
      } else {
        this.setState({exampleNumber: this.curExampleNum})
      }
    }

    if (event.key === 'ArrowUp') {
      this.curExampleNum = this.curExampleNum - 1
      if (this.curExampleNum <= 1) {
        this.curExampleNum = 1
        this.setState({exampleNumber: 1})
      } else {
        this.setState({exampleNumber: this.curExampleNum})
      }
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.showExample)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.showExample)
  }

  render() {
    return (
      <Fragment>
        {(this.state.exampleNumber === 1 || this.state.showAll) &&
        <div className='example'>
          <div className='example-title'>Server Side Rendering</div>
          <br/>
          <div className='example-note'>&emsp;<span>✔</span>️&emsp; React 16 includes a completely rewritten server renderer</div>
          <div className='example-note'>&emsp;<span>✔</span>️&emsp; Server side rendering in React 16 supports <b>streaming</b>, that makes sending data from
            server to the client faster
          </div>
          <div className='example-note'>&emsp;<span>✔</span>️&emsp;In React 16, there are two different methods for rendering on the client side: <i>render()</i>
            and <i>hydrate()</i></div>
          <div className='example-note example-note-tab'><b>&emsp; render()</b> for rendering content solely on the client side</div>
          <div className='example-note example-note-tab'><b>&emsp; hydrate()</b> for rendering on top of server-side rendered markup.</div>
          <div className='example-note example-note-tab1'>
            <SSRHybradeSnipet/>
          </div>
          <div className='example-note example-note-tab1' style={{display: 'flex'}}>
            <img alt='warning' className='ssr-warning-img' src={ssrWarning}/>
          </div>
          <div className='example-note'>&emsp;<span>✔</span>️&emsp;Finally, React 16 Just Faster</div>
          <img className='ssr-performance-img' src={ssrPerformance}/>
        </div>
        }
      </Fragment>
    )
  }
}
