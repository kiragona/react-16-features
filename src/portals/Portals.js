import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'

import PrismCode from 'react-prism'

import 'prismjs/themes/prism.css'

import portalDiagramImg from '../images/portalDiagram.png'

import ModalWarning from '../images/modalWarning.png'

const PortalSnipet = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
    /**
     * The first argument (child) is any renderable React child, such as an element, string, or fragment.
     * The second argument (container) is a DOM element.
     **/
    ReactDOM.createPortal(child, container);
    `}
  </PrismCode>
)

const NormalSnipet = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
   render() {
    // React mounts a new div and renders the children into it
    return (
      <div>
        {this.props.children}
      </div>
    )
   }
    `}
  </PrismCode>
)

const PortalRenderSnipet = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
    render() {
      return ReactDOM.createPortal(
        this.props.children,
        domNode
      )
   }
    `}
  </PrismCode>
)

const HTMLSnipet = props => (
  <PrismCode component="pre" className="html-snipet language-markup">
    {`
    <div id="root"></div>
    <div id="modal-root"></div>
    `}
  </PrismCode>
)


const ModalSnipet = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
    // Let's create a Modal component that is an abstraction around
    // the portal API.
    class Modal extends React.Component {
      constructor(props) {
        super(props)
        // Create a div that we'll render the modal into. Because each
        // Modal component has its own element, we can render multiple
        // modal components into the modal container.
        this.el = document.createElement('div')
        this.modalRoot = document.getElementById('modal-root')
      }

      componentDidMount() {
        // Append the element into the DOM on mount. We'll render
        // into the modal container element (see the HTML tab).
        this.modalRoot.appendChild(this.el)
      }

      componentWillUnmount() {
        // Remove the element from the DOM when we unmount
        this.modalRoot.removeChild(this.el)
      }

      render() {
        // Use a portal to render the children into the element
        return ReactDOM.createPortal(
          // Any valid React child: JSX, strings, arrays, etc.
          this.props.children,
          // A DOM element
          this.el
        )
      }
    }
    `}
  </PrismCode>
)

const ModalUsageSnipet = props => (
  <PrismCode component="pre" className="language-javascript">
    {`
     // The Modal component is a normal React component, so we can
     // render it wherever we like without needing to know that it's
     // implemented with portals.
      class ModalUsageExample extends React.Component {
        constructor(props) {
          super(props);
          this.state = {showModal: false}

          this.handleShow = this.handleShow.bind(this)
          this.handleHide = this.handleHide.bind(this)
        }

        handleShow() {
          this.setState({showModal: true})
        }

        handleHide() {
          this.setState({showModal: false})
        }

        render() {
          const modal = this.state.showModal ? (
            <Modal>
              <div className="modal">
                <div className='modal-container'>
                  <h1>Modal Content is Here...</h1>
                  <div>With a portal, we can render content into a different part of the DOM, as if it were any other React child.</div>
                  <br/>
                  <div>
                    This is being rendered inside the #modal-container div.
                  </div>
                  <br/>
                  <br/>
                  <div style={{alignSelf: 'flex-end'}}>
                    <button className='my-button' onClick={this.handleHide}>Hide modal</button>
                  </div>
                </div>

              </div>
            </Modal>
          ) : null

          return (
            <div className="modal-example">
              <button className='my-button' onClick={this.handleShow}>Show modal</button>
              {modal}
            </div>
          )
        }
      }
    `}
  </PrismCode>
)


// Let's create a Modal component that is an abstraction around
// the portal API.
class Modal extends React.Component {
  constructor(props) {
    super(props)
    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple
    // modal components into the modal container.
    this.el = document.createElement('div')
    this.modalRoot = document.getElementById('modal-root')
  }

  componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    this.modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    this.modalRoot.removeChild(this.el)
  }

  render() {
    // Use a portal to render the children into the element
    return ReactDOM.render(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.el
    )
  }
}

// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.
class ModalUsageExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};

    this.handleShow = this.handleShow.bind(this)
    this.handleHide = this.handleHide.bind(this)
  }

  handleShow() {
    this.setState({showModal: true})
  }

  handleHide() {
    this.setState({showModal: false})
  }

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div className='modal-container'>
            <h1>Modal Content is Here...</h1>
            <div>With a portal, we can render content into a different part of the DOM, as if it were any other React
              child.
            </div>
            <br/>
            <div>
              This is being rendered inside the #modal-container div.
            </div>
            <br/>
            <br/>
            <div style={{alignSelf: 'flex-end'}}>
              <button className='my-button' onClick={this.handleHide}>Hide modal</button>
            </div>
          </div>

        </div>
      </Modal>
    ) : null

    return (
      <div className="modal-example">
        <button className='my-button' onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    )
  }
}


export default class Portals extends Component {

  constructor(props) {
    super(props)
    this.exampleCount = 6
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
          <div className='example-no-border'>
            <div style={{marginBottom: 10}} className='example-title'>Portals</div>
          </div>
          }

          {(this.state.exampleNumber >= 2) && (this.state.exampleNumber !== 4 && this.state.exampleNumber !== 5 && this.state.exampleNumber !== 6) &&
          <div>
            <br/>
            <div className='example-note'>&emsp;<span>✔</span>️&emsp; Normally, when you return an element from a
              component’s render method, it’s mounted into the
              DOM as a child of the nearest parent node
            </div>
            <div>
              <NormalSnipet/>
            </div>
          </div>
          }

          {(this.state.exampleNumber >= 3) && (this.state.exampleNumber !== 4 && this.state.exampleNumber !== 5 && this.state.exampleNumber !== 6) &&
          <div>
            <br/>
            <div className='example-note'>&emsp;<span>✔</span>️&emsp; <b>Portals</b> provide a first-class way to render
              children into a DOM node that exists outside
              the DOM hierarchy of the parent component
            </div>
            <div>
              <PortalSnipet/>
            </div>
          </div>
          }


          {
            (this.state.exampleNumber === 4) &&
            <div className='example-no-border'>
              <div className='example-title'>Portal Use Cases : Modal</div>
              <div className='example-note'>&emsp;<span>✔</span>️&emsp; Sometimes it’s useful to insert a child into a
                different location in the DOM
                via Portals
                <br/>&emsp;<span>✔</span>️&emsp; React does not create a new div. It renders the children into
                `domNode`.
              </div>
              <div>
                <PortalRenderSnipet/>
              </div>
              <div className='example-note'>&emsp;<span>✔</span>️&emsp; Portals came along in React 16 to enable
                developers to render elements, in this case a modal,
                somewhere else, in this case up at a top layer component level
              </div>
              <br/>
              <div>
                <img style={{marginLeft: 64, border: '2px solid #b5b5b5', width: '48%'}} alt='diagram'
                     src={portalDiagramImg}/>
              </div>
              <br/>

            </div>
          }
          {(this.state.exampleNumber === 5) &&
          <div className='example-no-border'>
            <div className='example-title'>Implement Modal with <b>React Portal</b></div>
            <HTMLSnipet/>
            <ModalSnipet/>
            <div style={{
              backgroundColor: '#fecece',
              position: 'absolute',
              display: 'flex',
              'flex-direction': 'column',
              top: '70%',
              right: 13,
              border: '1px solid red',
              'box-shadow': '2px 2px #fecece'
            }}>
            </div>
          </div>
          }


          {(this.state.exampleNumber === 6) &&
          <div className='example-no-border'>

            <div className='example-title'>Modal Usage Example</div>
            <ModalUsageSnipet/>
            <ModalUsageExample/>
          </div>

          }
        </div>
      </Fragment>
    )
  }
}