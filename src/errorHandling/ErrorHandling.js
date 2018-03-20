/**
 *
 * @Description:
 *
 */


import React, {Component, Fragment} from 'react'
import PrismCode from 'react-prism'

import 'prismjs/themes/prism.css'
import './ErrorHandling.css'


const ErrorBoundariesSnipet = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
     class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }

      componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        logError(error, info);
      }

      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
      }
    }
   `}
  </PrismCode>
)

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {error: null, errorInfo: null}
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo || this.state.error) {
      // Error path
      return (
        <div className='error-component'>
          <div style={{fontWeight: 'bold', color: '#ff8300'}}>&emsp;<span>🤔</span> &emsp;Something went wrong &emsp;
            <span>🤔</span>&emsp;</div>
          &emsp;
          <details style={{margin: 10, marginTop: 0, whiteSpace: 'pre-wrap', lineHeight: '30px', paddingLeft: '15px'}}>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      )
    }
    // Normally, just render children
    return this.props.children;
  }
}

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
  }

  handleClick = () => {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed!')
    }
    return <div className='counter' onClick={this.handleClick}>{this.state.counter}</div>
  }
}

const BuggyCounterSnipet = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
     class BuggyCounter extends React.Component {
        constructor(props) {
          super(props)
          this.state = {counter: 0}
        }

        handleClick = () => {
          this.setState(({counter}) => ({
            counter: counter + 1
          }))
        }

        render() {
          if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!')
          }
          return (
            <div className='counter'
                 onClick={this.handleClick}>{this.state.counter}
            </div>
            )
        }
      }
    `}
  </PrismCode>
)

const ErrorBoundariesExampleSnipet = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
     const ErrorBoundariesExample = props => (
        <Fragment>
          <div style={{marginLeft: 10, marginTop: 10}}>
            Click on the numbers to increase the counters.
          </div>
          <div className='counter-example'>
            <div className='counter-example-panel'>
              <ErrorBoundary>
                <div>These two counters are inside the same error boundary</div>
                <div>If one crashes, the error boundary will replace both of them</div>
                <div className='counters-group'>
                  <BuggyCounter/>
                  <BuggyCounter/>
                </div>
              </ErrorBoundary>
            </div>
            <div className='counter-example-panel'>
              <div>These two counters are each inside of their own error boundary</div>
              <div>So if one crashes, the other is not affected.</div>
              <div className='counters-group'>
                <ErrorBoundary><BuggyCounter/></ErrorBoundary>
                <ErrorBoundary><BuggyCounter/></ErrorBoundary>
              </div>
            </div>
          </div>
        </Fragment>
    )
    `}
  </PrismCode>
)


const ErrorBoundariesExample = props => (

  <Fragment>
    <div style={{marginLeft: 10, marginTop: 10}}>
      Click on the numbers to increase the counters.
    </div>
    <div className='counter-example'>
      <div className='counter-example-panel'>
        <ErrorBoundary>
          <div>These two counters are inside the same error boundary.</div>
          <div>If one crashes, the error boundary will replace <b>both</b> of them.</div>
          <div className='counters-group'>
            <BuggyCounter/>
            <BuggyCounter/>
          </div>
        </ErrorBoundary>
      </div>
      <div className='counter-example-panel'>
        <div>These two counters are each inside of their own error boundary.</div>
        <div>So if one crashes, the other is not affected.</div>
        <div className='counters-group'>
          <ErrorBoundary><BuggyCounter/></ErrorBoundary>
          <ErrorBoundary><BuggyCounter/></ErrorBoundary>
        </div>
      </div>
    </div>
  </Fragment>
)


export default class ErrorHandling extends Component {

  constructor(props) {
    super(props)
    this.exampleCount = 10
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
        this.setState({exampleNumber: 1})

      } else {
        this.setState({exampleNumber: this.curExampleNum})
      }
    }

    if (event.key === 'ArrowUp') {
      this.curExampleNum = this.curExampleNum - 1
      if (this.curExampleNum < 1) {
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
          {(this.state.exampleNumber <= this.exampleCount) &&
          <div className='example-title'>Error handling using Error boundaries</div>
          }<br/>

          {(this.state.exampleNumber >= 2) && (this.state.exampleNumber !== 7 && this.state.exampleNumber !== 8 && this.state.exampleNumber !== 9 && this.state.exampleNumber !== 10 ) &&


          <div className='example-note'>&emsp;<span>✔</span>️&emsp; Prior to React v16.0, any error in any part of the
            UI would crash the whole application</div>


          }
          <br/>

          {(this.state.exampleNumber >= 3) && (this.state.exampleNumber !== 7 && this.state.exampleNumber !== 8 && this.state.exampleNumber !== 9 && this.state.exampleNumber !== 10 ) &&

          <div className='example-note'>&emsp;<span>✔</span>️&emsp; To handle this problem, <b>ErrorBoundary</b> concept
            was introduced in React v16.0</div>

          }
          <br/>

          {(this.state.exampleNumber >= 4) && (this.state.exampleNumber !== 7 && this.state.exampleNumber !== 8 && this.state.exampleNumber !== 9 && this.state.exampleNumber !== 10 ) &&


          <div className='example-note'>&emsp;<span>✔</span>️&emsp; Only <b>class</b> components can be an Error
            Boundaries component</div>

          }
          <br/>

          {(this.state.exampleNumber >= 5) && (this.state.exampleNumber !== 7 && this.state.exampleNumber !== 8 && this.state.exampleNumber !== 9 && this.state.exampleNumber !== 10 ) &&


          <div className='example-note'>&emsp;<span>✔</span>️&emsp;With <b>Error Boundaries</b>, each error occurs in
            any lifecycle method of <b>Child</b> is
            caught by <b>Parent</b>
          </div>

          }
          <br/>

          {(this.state.exampleNumber >= 6) && (this.state.exampleNumber !== 7 && this.state.exampleNumber !== 8 && this.state.exampleNumber !== 9 && this.state.exampleNumber !== 10 ) &&

          <div className='example-note'>&emsp;<span>✔</span>️&emsp;Define a new lifecycle method
            called <b>componentDidCatch(error,info)</b> in <b>Parent</b> to be
            error
            boundaries and catch errors
          </div>

          }
          <br/>


          {(this.state.exampleNumber === 7) &&
          <div className='example-no-border'>
            <div className='example-title'>ErrorBoundary component example</div>
            <div className='example-note'>&emsp;<span>✔</span>️&emsp; Create a component once and call it everywhere
              it's needed in your
              application
            </div>
            <ErrorBoundariesSnipet/>
          </div>
          }

          {(this.state.exampleNumber === 8) &&
          <div className='example-no-border'>
            <div className='example-title'>Buggy Counter</div>

            <div className='example-note'>&emsp;<span>✔</span>️&emsp; When (counter === 5), <b>Buggy
              Counter</b> simulates an error
            </div>
            <BuggyCounterSnipet/>

          </div>
          }

          {(this.state.exampleNumber === 9) &&

          <div className='example-no-border'>
            <div className='example-title'>Error Boundaries Usage Example</div>

            <ErrorBoundariesExampleSnipet/>
          </div>

          }

          {(this.state.exampleNumber === 10) &&
          <div className='example-no-border'>
            <div className='example-title'>Live Example</div>
            <br/>
            <ErrorBoundariesExample/>
          </div>
          }
        </div>
      </Fragment>
    )
  }
}



