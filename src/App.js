import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './App.css'

import Homepage from './containers/Homepage/Homepage'
import About from './containers/About/About'
import Prize from './containers/Prize/Prize'
import Schedule from './containers/Schedule/Schedule'
import Sidebar from './containers/Sidebar'

export default function() {
  library.add(faArrowUp, faArrowDown)

  return (
    <Router>
      <div className="scroll-up-menu">
        <FontAwesomeIcon icon="arrow-up" />
      </div>
      <Sidebar />
      <div className="language">
        <select className="select-language">
          <option defaultValue="english">North America (English)</option>
          <option defaultValue="vietnames">Vietnamese (Tiếng Việt)</option>
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
