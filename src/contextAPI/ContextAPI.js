import React, {Component, Fragment} from 'react'

import PrismCode from 'react-prism'

import 'prismjs/themes/prism.css'

import contextAPISearchImg from '../images/contextAPISearch.png'


const QuoteSnippet = props => (
  <PrismCode component="pre" className="text">
    {`
      From React Docs:
      ======================
      Why Not to Use Context
      ======================
        | If you want your application to be stable, don’t use context.
        | It is an experimental API and it is likely to break in future releases of React.
    `}
  </PrismCode>
)

const ContextAPICreateCodeSnippet = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
    import {createContext} from 'react'
    const ThemeContext = createContext({
        textColor: 'black',
        background: 'white'
    })
    `}
  </PrismCode>
)


const ProviderSnippet = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
    class App extends React.Component {
    render() {
      return (
        <ThemeContext.Provider
          value={{textColor: 'black', background: 'white'}}>
          <Header/>
          <Main/>
          <Footer/>
        </ThemeContext.Provider>
      )
    }}
    `}
  </PrismCode>
)

const ConsumerSnippet = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
    const Header = () => (
     <ThemeContex.Consumer>
       {(context) => {
        return (
        <div style={{background: context.background, color: context.textColor}}>
          Welcome!!!
        </div>
      )
    }}
    </ThemeContex.Consumer>
   )
    `}
  </PrismCode>
)


export default class ContextAPI extends Component {

  constructor(props) {
    super(props)
    this.exampleCount = 7
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
        <div style={{overflow: 'hidden', overflowY: 'auto'}} className='example'>

          {(this.state.exampleNumber <= this.exampleCount) &&
          <div className='example-title'>New Context API in React 16.3</div>
          }<br/>

          {(this.state.exampleNumber >= 2) && (this.state.exampleNumber !== 3) && (this.state.exampleNumber !== 4) && (this.state.exampleNumber !== 5) && (this.state.exampleNumber !== 6) &&  (this.state.exampleNumber !== 7)  &&

          <div className='example-no-border' style={{flex: 1}}>

            <div className='example-note'>&emsp;<span>✔</span>️&emsp; Context API was always a thing of mystery...</div>
            <img className='search-api-img' alt='Context API Search' src={contextAPISearchImg}/>
            <br/>
            <QuoteSnippet/>
          </div>
          }

          {(this.state.exampleNumber >= 3) &&

          <div className='example-no-border'>
            <div className='example-note'>&emsp;<span>✔</span>️&emsp;RFC phase has passed and the new API is merged.
            </div>
          
          </div>
          }


          {(this.state.exampleNumber >= 4) &&
          <div className='example-note'>&emsp;<span>✔</span>️&emsp;New API is more “user friendly” and useful for
            state management without the “overhead” of Redux or MobX.
          </div>
          }
          <br/>

          {(this.state.exampleNumber >= 5) &&
          <div className='example-note'>&emsp;<span>✔</span>️&emsp;Creation of the new context via <span
            style={{fontWeight: 'bold'}}>React.createContext</span>
          </div>
          }
          <br/>


          {(this.state.exampleNumber >= 6) &&
          <div>
            <div className='example-note'>&emsp;<span>✔</span>️&emsp;Calling the factory function will return an object
              that has a <span style={{fontWeight: 'bold'}}>“Provider”</span> and
              a <span style={{fontWeight: 'bold'}}>“Consumer”.</span>
            </div>
            <div className='example-note example-note-tab1'>
              <ContextAPICreateCodeSnippet/>
            </div>
          </div>
          }

          {(this.state.exampleNumber >= 7) &&
          <div>
            <div className='example-note'>&emsp;<span>✔</span>️&emsp;The “Provider” is a component that provides the
              data to all its sub-tree.
            </div>
            <div className='example-note'>&emsp;<span>✔</span>️&emsp;The “Consumer” uses the provided data thought the
              context.
            </div>
            <div className='example-note example-note-tab1'>
              <div className='code-example'>
                <div>
                  <ProviderSnippet/>
                </div>
                <div>
                  <ConsumerSnippet/>
                </div>
              </div>
            </div>
          </div>
          }

        </div>
      </Fragment>
    )
  }
}