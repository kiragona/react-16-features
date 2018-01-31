// The Header creates links that can be used to navigate
// between routes.
import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
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
  }} title={props.title} src={props.imageSrc} className={props.imageClass}/>
))

const MenuOption = withRouter(({...props, history}) => (


  <div onClick={(event) => {
    props.handleNav(event, history, props.path)
  }} className='menu-item-holder'>
    <ImgLink imageClass={props.imageClass} imageSrc={props.imageSrc} title={props.title} path={props.path}/>
    <div className='menu-item'>{props.linkComponent}</div>
  </div>
))


export default class NavMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: '/',
      collapsed: false
    }
  }

  componentDidMount() {
    this.handleNav(null, null, '/')
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
    const classDomAttrs = classNames({'selected': this.state.selected === '/domAttributes', 'item-icon': true})
    const classSSR = classNames({'selected': this.state.selected === '/ssr', 'item-icon': true})
    const breakableSSR = classNames({'selected': this.state.selected === '/breakingChanges', 'item-icon': true})

    const arrowAlt = !this.state.collapsed ? 'Collapse' : 'Expand'

    return (
      <div className={menuClass}>
        <div className='arrow'>
          <img title={arrowAlt}
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

        <MenuOption handleNav={this.handleNav} imageClass={classDomAttrs} imageSrc={htmlTags} path='/domAttributes' title='DOM Attributes'
                    linkComponent={<Link to='/domAttributes'>DOM Attributes</Link>}/>

        <MenuOption handleNav={this.handleNav} imageClass={classSSR} imageSrc={ssrImg} path='/ssr' title='Server Side Rendering'
                    linkComponent={<Link to='/ssr'>Server Side Rendering</Link>}/>
        <MenuOption handleNav={this.handleNav} imageClass={breakableSSR} imageSrc={breakableImg} path='/breakingChanges' title='Breaking Changes'
                    linkComponent={<Link to='/breakingChanges'>Breaking Changes</Link>}/>

      </div>)

  }
}




