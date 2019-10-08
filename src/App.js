import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Homepage from './containers/Homepage/Homepage'
import Prize from './containers/Prize/Prize'
import Schedule from './containers/Schedule/Schedule'
import Sidebar from './containers/Sidebar'
import { StateProvider, initialState } from './State'
import reducers from './reducers'

export default function() {
  return (
    <StateProvider initialState={initialState} reducer={reducers}>
      <Router>
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
          <Route path="/prize" component={Prize} />
          <Route path="/schedule" component={Schedule} />
        </div>
      </Router>
    </StateProvider>
  )
}
