/*
 * Created on Thu Oct 10 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React from 'react'
import { useSelector, shallowEqual } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Homepage from './containers/Homepage/Homepage'
import Prize from './containers/Prize/Prize'
import News from './containers/News/News'
import Sidebar from './containers/Sidebar'
import NewPage from './containers/News/Newpage'
import Events from './containers/Events/Events'
// import Teams from './containers/Teams/Teams'
// import Photos from './containers/Photos/Photos'
import Loading from './components/Loading'
import Error from './components/Error'
// import Photodetail from './containers/Photos/Photodetail'
// import PhotoVideo from './containers/Photos/Photovideo'


export default () => {
  const {loading, error, error_message} = useSelector(state => state.app, shallowEqual);
  
  library.add(fab, faHome, faArrowLeft)
  return (
    <Router>
      <Loading loading={loading}>
        <Error error={error} errorMessage={error_message}>
          <Sidebar />
          <div className="main">
            <Route exact path="/" component={Homepage} />
            <Route path="/prize" component={Prize} />

            <Route
              path="/news"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={News} exact />
                  <Route path={`${url}/:id`} component={NewPage} />
                </>
              )}
            />

            <Route path="/events" component={Events} />
            {/* <Route path="/teams" component={Teams} />
            <Route
              path="/media"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Photos} exact />
                  <Route path={`${url}/photos`} component={Photodetail} />
                  <Route path={`${url}/videos`} component={PhotoVideo} />
                </>
              )}
            /> */}
          </div>
          <div className="play-game">
            <a href="https://ngame1137.onelink.me/jFUN/AIC2019">TRỞ LẠI GAME</a>
          </div>
        </Error>
      </Loading>
    </Router>
  )
}
