/**
 *
 * @Description:
 *
 */


import React, {Component, Fragment} from 'react'
import PrismCode from 'react-prism'


import 'prismjs/themes/prism.css'


const KeyedFragmentExample = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
    import React, {Fragment} from 'react'

    function Glossary(props) {
      return (
      <dl>
      {props.items.map(item => (
        // Without the 'key', React will fire a key warning
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
      </dl>
      )
   }
  `}
  </PrismCode>
)

const StringExample = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
     render() {
      return 'I just returned a string. Can you believe it? ReactJS 16 is dope! 😜';
     }
   `}
  </PrismCode>
)

const ArrayExample = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
     render() {
     // No need to wrap items in an extra element!
       return [
        // Don't forget the keys :)
        <p key="first">ReactJS</li>,
        <span key="second">PreactJS</li>,
        <span> key="third">VueJS</li>
      ]
    }
   `}
  </PrismCode>
)

const FragmentExample = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
     render() {
      return (
        <>
          <ChildA />
          <ChildB />
          <ChildC />
        </>
      )
    }
   `}
  </PrismCode>
)


export default class FragmentsExamples extends Component {

  constructor(props) {
    super(props)
    this.exampleCount = 4
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
        {
          (this.state.exampleNumber === 1 ) &&
          <div className='example'>
            <div className='example-title'>Return String from <i>render</i></div>
            <StringExample/>
          </div>
        }
        {
          (this.state.exampleNumber === 2 ) &&
          <div className='example'>
            <div className='example-title'>Return Array from <i>render</i></div>
            <div className='example-note'>In ReactJS 16, you can now return an array of multiple elements from a component's render method</div>
            <ArrayExample/>
          </div>
        }
        {
          (this.state.exampleNumber === 3 ) &&
          <div className='example'>
            <div className='example-title'>Fragments</div>
            <div className='example-note'>&emsp;<span>✔</span>️&emsp; Starting with React 16.2.0, <b>fragment</b> syntax was added to JSX that doesn’t require keys
            </div>
            <div className='example-note'>&emsp;<span>✔</span>️&emsp; Fragments look like empty <b>&lt;&gt;&lt;/&gt;</b> JSX tags.</div>
            <div className='example-note'>&emsp;<span>✔</span>️&emsp; They let you group a list of children without adding extra nodes to the DOM</div>
            <FragmentExample/>
          </div>
        }
        {
          (this.state.exampleNumber === 4 ) &&
          <div className='example'>
            <div className='example-title'>Keyed Fragments</div>
            <div className='example-note'>&emsp;<span>✔</span>️&emsp; Note that the <b>&lt;&gt;&lt;/&gt;</b> syntax does not accept attributes, including keys
            </div>
            <div className='example-note'>&emsp;<span>✔</span>️&emsp; If you need a keyed fragment, you can use <b>&lt;Fragment /&gt;</b> directly</div>
            <div className='example-note'>&emsp;<span>✔</span>️&emsp; A use case for this is mapping a collection to an array of fragments</div>

            <KeyedFragmentExample/>
          </div>
        }
      </Fragment>
    )
  }
}



