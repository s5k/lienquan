/*
 * Created on Wed Oct 01 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Homepage from './containers/Homepage/Homepage'
import Prize from './containers/Prize/Prize'
import Schedule from './containers/Schedule/Schedule'
import News from './containers/News/News'
import Sidebar from './containers/Sidebar'
import { StateProvider, initialState } from './State'
import reducers from './reducers'
import NewPage from './containers/News/Newpage'
import Events from './containers/Events/Events'

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
          <Route path="/news" component={News} />
          <Route path="/newpage" component={NewPage} />
          <Route path="/events" component={Events}/>
        </div>
      </Router>
    </StateProvider>
  )
}
