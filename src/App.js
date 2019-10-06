import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faTrophy,
  faList,
  faFile,
  faNewspaper,
  faBell,
  faUsers,
  faImage,
  faTimes,
  faBars,
  faArrowUp,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons'
import logoAic from './images/logo-aic.png'
import './App.css'

import Homepage from './containers/Homepage/Homepage'
import About from './containers/About/About'
import Prize from './containers/Prize/Prize'
import Schedule from './containers/Schedule/Schedule'

export default function() {
  const [isSidebarOpen, setCollapseSidebar] = useState(false)

  library.add(
    fab,
    faHome,
    faTrophy,
    faList,
    faFile,
    faNewspaper,
    faBell,
    faUsers,
    faImage,
    faTimes,
    faBars,
    faArrowUp,
    faArrowDown
  )

  return (
    <Router>
      <div className="scroll-up-menu">
        <FontAwesomeIcon icon="arrow-up"/>
      </div>
      <div className={isSidebarOpen ? 'sidebar open-sidebar' : 'sidebar'}>
        <div className="top-sidebar">
          <div className="btn-close-menu">
            <img src={logoAic} alt="Logo AIC" className="logo-aic" />
            <FontAwesomeIcon
              icon="times"
              className="close-menu"
              onClick={() => setCollapseSidebar(false)}
            />
          </div>
          <div className="bnt-sidebar">
            <FontAwesomeIcon
              icon="bars"
              className="bnt-sidebar"
              onClick={() => setCollapseSidebar(true)}
            />
          </div>
        </div>
        <ul>
          <li className="active">
            <Link to="/">
              <FontAwesomeIcon icon="home" /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/prize">
              <FontAwesomeIcon icon="trophy" /> <span>Prize Pool</span>
            </Link>
          </li>
          <li>
            <Link to="/schedule">
              <FontAwesomeIcon icon="list" /> <span>Schedule</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FontAwesomeIcon icon="newspaper" /> <span>News</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FontAwesomeIcon icon="bell" /> <span>Evnets</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FontAwesomeIcon icon="users" />
              <span>Teams</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              {' '}
              <FontAwesomeIcon icon="image" />
              <span>Photos & videos</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="language">
        <select className="select-language">
          <option defaultValue="grapefruit">North America (Englsh)</option>
          <option defaultValue="vietnames">Vietnames</option>
          <option defaultValue="coconut">Coconut</option>
          <option defaultValue="mango">Mango</option>
        </select>
      </div>
      {/* Thêm một trang mới, thì anh làm giống trang About nhé ('exact' để chỉ định trang chủ) */}
      <div className="main">
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/prize" component={Prize} />
        <Route path="/schedule" component={Schedule} />
      </div>
      <div className="scroll-down-menu">
        <FontAwesomeIcon icon="arrow-down" />
      </div>
    </Router>
  )
}
