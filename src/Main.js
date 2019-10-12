/*
 * Created on Thu Oct 10 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './containers/Homepage/Homepage'
import Prize from './containers/Prize/Prize'
import Schedule from './containers/Schedule/Schedule'
import News from './containers/News/News'
import Sidebar from './containers/Sidebar'
import NewPage from './containers/News/Newpage'
import Events from './containers/Events/Events'
import { useStateValue } from './State'
import Loading from './components/Loading'
import Error from './components/Error'

export default () => {
  const [state, dispatch] = useStateValue()

  useEffect(() => {
    async function fetchData() {
      fetch('http://aic2019.lienquan.garena.vn/api/user/get')
        .then(res => res.json())
        .then(res =>
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: res.payload
          })
        )
        .catch(err =>
          dispatch({
            type: 'FETCH_ERROR'
          })
        )
    }

    fetchData()
  }, [dispatch])

  return (
    <Router>
      <Loading loading={state.loading}>
        <Error error={state.error}>
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
            <Route path="/events" component={Events} />
          </div>
        </Error>
      </Loading>
    </Router>
  )
}