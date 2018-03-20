
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

import {Link} from 'react-router-dom'
import classNames from 'classnames'

import leftArrow from '../images/icons8-double-left-filled-50.png'
import homeImg from '../images/icons8-home-50.png'
import htmlTags from '../images/icons8-source-code-50.png'
import errorImg from '../images/icons8-error-50.png'
import portalImg from '../images/icons8-flow-chart-50.png'
import ssrImg from '../images/icons8-picture-50.png'
import fragmentsImg from '../images/icons8-circled-f-50.png'
import breakableImg from '../images/icons8-breakable-50.png'


import './NavMenu.css'


const ImgLink = withRouter(({...props, history}) => (
  <img onClick={() => {
    history.push(props.path)
  }} alt={props.title} title={props.title} src={props.imageSrc} className={props.imageClass}/>
))

const MenuOption = withRouter(({...props, history}) => (


  <div onClick={(event) => {
    props.handleNav(event, history, props.path)
  }} className='menu-item-holder'>
    <ImgLink imageClass={props.imageClass} imageSrc={props.imageSrc} title={props.title} path={props.path}/>
    <div className='menu-item'>{props.linkComponent}</div>
  </div>
))

class NavMenu extends Component {

  constructor(props) {
    super(props)
    this.totalMenuNum = 7
    this.curMenuNum = 1
    //
    this.menuIdToPathMap = new Map()
    this.menuIdToPathMap.set(1, '/')
    this.menuIdToPathMap.set(2, '/fragment')
    this.menuIdToPathMap.set(3, '/errorHandling')
    this.menuIdToPathMap.set(4, '/portals')
    this.menuIdToPathMap.set(5, '/contextAPI')
    this.menuIdToPathMap.set(6, '/ssr')
    this.menuIdToPathMap.set(7, '/breakingChanges')

    this.state = {
      selected: '/',
      collapsed: false
    }
  }


  Nav2NexMenuItem = (event) => {
    if (event.key === 'ArrowRight') {

      this.curMenuNum = this.curMenuNum + 1

      if (this.curMenuNum > this.totalMenuNum) {
        this.curMenuNum = 1
      }
      this.handleNav(event, this.props.history, this.menuIdToPathMap.get(this.curMenuNum))
    }

    if (event.key === 'ArrowLeft') {
      this.curMenuNum = this.curMenuNum - 1
      if (this.curMenuNum < 1) {
        this.curMenuNum = this.totalMenuNum
      }
      this.handleNav(event, this.props.history, this.menuIdToPathMap.get(this.curMenuNum))
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.Nav2NexMenuItem)
    this.handleNav(null, this.props.history, '/')
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.Nav2NexMenuItem)
  }


  handleNav = (event, history, path) => {

    if (history) {
      history.push(path)
    }
    this.setState({
      selected: path
    })
  }

  render() {

    const menuClass = classNames({'menu': !this.state.collapsed, 'narrow-menu': this.state.collapsed})
    const collapseArrowClass = classNames({'collapse-left': !this.state.collapsed, 'collapse-right': this.state.collapsed})
    const classNamesHomeLink = classNames({'selected': this.state.selected === '/', 'item-icon': true})
    const classNamesFragmentsLink = classNames({'selected': this.state.selected === '/fragment', 'item-icon': true})
    const classNamesErrorsLink = classNames({'selected': this.state.selected === '/errorHandling', 'item-icon': true})
    const classNamesPortals = classNames({'selected': this.state.selected === '/portals', 'item-icon': true})
    const classDomAttrs = classNames({'selected': this.state.selected === '/contextAPI', 'item-icon': true})
    const classSSR = classNames({'selected': this.state.selected === '/ssr', 'item-icon': true})
    const breakableSSR = classNames({'selected': this.state.selected === '/breakingChanges', 'item-icon': true})

    const arrowAlt = !this.state.collapsed ? 'Collapse' : 'Expand'

    return (
      <div className={menuClass}>
        <div className='arrow'>
          <img alt={arrowAlt} title={arrowAlt}
               onClick={() => {
                 this.setState({collapsed: !this.state.collapsed})
               }}
               src={leftArrow}
               className={collapseArrowClass}/>
        </div>

        <MenuOption handleNav={this.handleNav}
                    imageClass={classNamesHomeLink}
                    imageSrc={homeImg}
                    path='/'
                    title='Home'
                    linkComponent={<Link to='/'>Home</Link>}/>

        <MenuOption handleNav={this.handleNav} imageClass={classNamesFragmentsLink} imageSrc={fragmentsImg} path='/fragment'
                    title='Fragments and String' linkComponent={<Link to='/fragment'>Fragments and String</Link>}/>

        <MenuOption handleNav={this.handleNav} imageClass={classNamesErrorsLink} imageSrc={errorImg} path='/errorHandling' title='Error Handling'
                    linkComponent={<Link to='/errorHandling'>Error Handling</Link>}/>

        <MenuOption handleNav={this.handleNav} imageClass={classNamesPortals} imageSrc={portalImg} path='/portals' title='Portals'
                    linkComponent={<Link to='/portals'>Portals</Link>}/>

        <MenuOption handleNav={this.handleNav} imageClass={classDomAttrs} imageSrc={htmlTags} path='/contextAPI' title='New Context API'
                    linkComponent={<Link to='/contextAPI'>New Context API</Link>}/>

        <MenuOption handleNav={this.handleNav} imageClass={classSSR} imageSrc={ssrImg} path='/ssr' title='Server Side Rendering'
                    linkComponent={<Link to='/ssr'>Server Side Rendering</Link>}/>
        <MenuOption handleNav={this.handleNav} imageClass={breakableSSR} imageSrc={breakableImg} path='/breakingChanges' title='Breaking Changes'
                    linkComponent={<Link to='/breakingChanges'>Breaking Changes</Link>}/>

      </div>)

  }
}

export default withRouter(NavMenu)




