import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Homepage from './containers/Homepage'
import About from './containers/About'
import './App.css'

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />

        {/* Thêm một trang mới, thì anh làm giống trang About nhé ('exact' để chỉ định trang chủ) */}
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  )
}
