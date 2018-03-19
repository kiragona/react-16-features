import React, {Component, Fragment} from 'react'

import 'prismjs/themes/prism.css'


export default class BreakingChanges extends Component {

  constructor(props) {
    super(props)
    this.exampleCount = 10
    this.curExampleNum = 1
    this.state = {
      exampleNumber: 1,
      showAll: false
    }
  }

  showExample = (event) => {
    if (event.key === 'ArrowDown') {
      this.curExampleNum = this.curExampleNum + 1

      if (this.curExampleNum > this.exampleCount) {

        this.curExampleNum = 1
        this.setState({exampleNumber: 1})

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


        <div style={{overflow: 'hidden', overflowY: 'auto'}} className='example'>
          {(this.state.exampleNumber <= this.exampleCount  ) &&
          <div>
            <div className='example-title'>Breaking Changes and Deprecations</div>
            <br/>
            <div className='example-note'>&emsp;<span>✔</span>️&emsp; <b>Upgrading</b></div>

            <div className='example-note example-note-tab'><span>•</span> &emsp; In terms of upgrading, you can think of this like any other major React release.
            </div>
            <br/>
            <div className='example-note example-note-tab'><span>•</span> &emsp; With minor exceptions, if your app runs in 15.6 <b>without any warnings</b>, it
              should work in 16.
            </div>
            <br/>
            <div className='example-note example-note-tab'><span>•</span> &emsp; Codemods (check react-codemod project) are provided to automatically transform
              your deprecated code.
            </div>
          </div>
          }

          <div>
            <br/>
            {(this.state.exampleNumber >= 2 ) &&
            <div className='example-note'>&emsp;<span>✔</span>️️&emsp; <b>Deprecations</b></div>
            }
            {(this.state.exampleNumber >= 2) &&
            <div className='example-note example-note-tab'><span>•</span> &emsp; use <b>ReactDOM.hydrate</b> instead of <b>ReactDOM.render</b> for server side
              rendering</div>
            }
            <br/>
            {(this.state.exampleNumber >= 3 ) &&
            <div className='example-note example-note-tab'><span>•</span> &emsp; Keep using ReactDOM.render if you’re just doing client-side rendering.
            </div>
            }
            <br/>
            {(this.state.exampleNumber >= 4 ) &&
            <div className='example-note example-note-tab'><span>•</span> &emsp; <b>React.PropTypes</b>:
              use PropTypes from <b>prop-types</b> package, not from React object</div>
            }<br/>
            {(this.state.exampleNumber >= 5) &&
            <div className='example-note example-note-tab'><span>•</span> &emsp; <b>React.createClass</b>:
              use <b>createReactClass</b> from <b>create-react-class</b> package, not from React object</div>
            }<br/>
            {(this.state.exampleNumber >= 6) &&
            <div className='example-note example-note-tab'><span>•</span> &emsp; Discontinuing support for React Addons: <a
              href="https://reactjs.org/blog/2017/04/07/react-v15.5.0.html#discontinuing-support-for-react-addons" rel="noopener noreferrer" target="_blank"> <b>more details</b></a>
            </div>
            }<br/>

            {(this.state.exampleNumber >= 7) &&
            <div className='example-note'>&emsp;<span>✔</span>️️&emsp; <b>Scheduling and lifecycle methods changes</b></div>
            }<br/>

            {(this.state.exampleNumber >= 8) &&
            <div>
              <div className='example-note example-note-tab'><span>•</span> &emsp; ReactDOM.render() and ReactDOM.unstable_renderIntoContainer() now return null
              </div>
              <div className='example-note example-note-double-tab'>if called from inside a lifecycle method</div>
              <div className='example-note example-note-double-tab'>• &emsp; To work around this, you can either use the <b>new portal</b> API
              </div>
            </div>
            }<br/>
            {(this.state.exampleNumber >= 9) &&
            <div className='example-note example-note-tab'>• &emsp;&emsp; New lifecycle method <b>ComponentDidCatch(error, info)</b> API
            </div>
            }<br/>

            {(this.state.exampleNumber >= 10 ) &&
            <div className='example-note'>&emsp;<span>✔</span>️️&emsp; <b><a rel="noopener noreferrer" href="https://reactjs.org/blog/2017/09/26/react-v16.0.html#breaking-changes"
                                                               target="_blank">...and more</a></b></div>
            }

          </div>

        </div>
      </Fragment>
    )
  }
}

