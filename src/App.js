import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome,faTrophy,faList,faFile,faNewspaper,faBell,faUsers,faImage,faTimes,faBars } from '@fortawesome/free-solid-svg-icons'
import logoAic from './images/logo-aic.png'
import Homepage from './containers/Homepage'
import About from './containers/About'
<<<<<<< HEAD
import Prize from './containers/Prize'
import Schedule from './containers/Schedule'
=======
import './App.css'
>>>>>>> 0c63646383d3ca8c4e34eee8369656f3dbdac092

export default function BasicExample() {
  library.add(fab, faHome,faTrophy,faList,faFile,faNewspaper,faBell,faUsers,faImage,faTimes,faBars)
  return (
    <Router>
      <div className="bnt-sidebar">
        <Link to="/"><FontAwesomeIcon icon="bars" /></Link>
      </div>
      <div className="sidebar">
        <div className="top-sidebar">
          <img src={logoAic} alt="Logo AIC" className="logo-aic"/>
          <FontAwesomeIcon icon="times" className="close-menu"/>
        </div>
        <ul>
          <li className="active">
            <Link to="/"><FontAwesomeIcon icon="home" /> Home</Link>
          </li>
          <li>
            <Link to="/prize"><FontAwesomeIcon icon="trophy" /> Prize Pool</Link>
          </li>
          <li>
            <Link to="/schedule"><FontAwesomeIcon icon="list" /> Schedule</Link>
          </li>
          <li>
            <Link to="/about"><FontAwesomeIcon icon="newspaper" /> News</Link>
          </li>
          <li>
            <Link to="/about"><FontAwesomeIcon icon="bell" /> Evnets</Link>
          </li>
          <li>
            <Link to="/about"><FontAwesomeIcon icon="users" />Teams</Link>
          </li>
          <li>
            <Link to="/about"> <FontAwesomeIcon icon="image" />Photos & videos</Link>
          </li>
        </ul>
      </div>
      <div className="language">
        <select className="select-language">
          <option selected value="grapefruit">North America (Englsh)</option>
          <option value="vietnames">Vietnames</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </div>
      {/* Thêm một trang mới, thì anh làm giống trang About nhé ('exact' để chỉ định trang chủ) */}
      <div className="main">
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/prize" component={Prize} />
        <Route path="/schedule" component={Schedule} />
      </div>
    </Router>
  )
}
