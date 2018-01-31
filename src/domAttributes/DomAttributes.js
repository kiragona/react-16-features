import React, {Component, Fragment} from 'react'

import PrismCode from 'react-prism'

import 'prismjs/themes/prism.css'

const CodeExampleSnipet = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
    // Your code:
    <div mycustomattribute="something" />
    `}
  </PrismCode>
)

const React15Snipet = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
    // React 15 output:
    <div />
    `}
  </PrismCode>
)

const React16Snipet = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
    // React 16 output:
    <div mycustomattribute="something" />
    `}
  </PrismCode>
)


export default class DomAttributes extends Component {

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
          this.setState({exampleNumber: 1})

      } else {
        this.setState({exampleNumber: this.curExampleNum, showAll: false})
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
        {(this.state.exampleNumber === 1 ) &&

        <div className='example' style={{flex: 1}}>
          <div className='example-title'>Dom Attributes in React 16</div>
          <br/>
          <div className='example-note'>&emsp;✔️&emsp; In the past, React used to ignore unknown DOM attributes. If you wrote JSX with an attribute
            that React doesn’t recognize, React would just skip it
          </div>
          <br/>
          <CodeExampleSnipet/>
          <div className='example-note'>&emsp;✔️&emsp; would render an empty div to the DOM with React 15:
          </div>
          <br/>
          <React15Snipet/>
          <br/>
          <div className='example-note'>&emsp;✔️&emsp; In React 16, we are making a change. Now, any unknown attributes will end up in the DOM
          </div>
          <br/>
          <React16Snipet/>
        </div>
        }
      </Fragment>
    )
  }
}
