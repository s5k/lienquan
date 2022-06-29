/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'

// import * as moment from 'moment'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FsLightbox from 'fslightbox-react'
import Backhome from '../../components/Backhome'
import './photos.css'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { MEDIA_FETCH_REQUESTED } from 'store/media/reducers'

export default () => {
  const dispatch = useDispatch();
  const {fetched, videos} = useSelector(state => state.media, shallowEqual)
  const [state, setState] = useState({ toggler: false, imageVideo: 0 })

  const toggleVideo = index => {
    setState({ toggler: !state.toggler, imageVideo: index })
  }

  useEffect(() => {
    if (!fetched) {
      dispatch({type: MEDIA_FETCH_REQUESTED})
    } else {
      dispatch({
        type: 'COLLAPSE_SIDEBAR',
        payload: false
      })
    }
  }, [dispatch, fetched])

  return fetched && (
    <div className="photovideopage">
      <Backhome />
      <FsLightbox
        toggler={state.toggler === true}
        sources={[videos[state.imageVideo].link]}
      />
      <div className="photo-video-items">
        <div className="video-heighlight">
          <Slider
            arrows={false}
            dots={true}
            swipe={true}
            autoplay={true}
            speed={2000}
            autoplaySpeed={5000}
          >
            {videos
              .map((item, key) => ((key < 3 ) ? (
                <div key={key} onClick={() => toggleVideo(key)}>
                  <div className="video-heighlight-item">
                    <div className="video-heightlight-clip">
                      <img
                        src={`//i3.ytimg.com/vi/${
                          item.link.split('?v=')[1]
                        }/maxresdefault.jpg`}
                        alt="photovideo"
                      />
                    </div>
                    <div className="video-heightlight-text">
                      <p className="video-text-title">{item.name}</p>
                      <p className="video-text-des">
                        Những Video HOT nhất về giải AIC 2019
                      </p>
                    </div>
                  </div>
              </div>
              ):''))}
          </Slider>
        </div>
        <div className="video-other">
          {videos
            .map((item, key2) => (
              <div
                className="video-other-item"
                key={key2}
                onClick={() => toggleVideo(key2)}
              >
                <img
                  src={`//i3.ytimg.com/vi/${
                    item.link.split('?v=')[1]
                  }/maxresdefault.jpg`}
                  alt="photovideo"
                />
                <div className="video-other-item-text">{item.name}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
