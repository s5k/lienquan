/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'

import * as moment from 'moment'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FsLightbox from 'fslightbox-react'
import Backhome from '../../components/Backhome'
import './photos.css'
import { useStateValue } from '../../State'

export default () => {
  const [{ videos }, dispatch] = useStateValue()

  const [state, setState] = useState({ toggler: false, imageVideo: 0 })

  const toggleVideo = index => {
    setState({ toggler: !state.toggler, imageVideo: index })
  }

  useEffect(() => {
    dispatch({
      type: 'COLLAPSE_SIDEBAR',
      payload: false
    })
  }, [dispatch])

  return (
    <div className="photovideopage">
      <Backhome />
      <FsLightbox
        toggler={state.toggler === true}
        sources={[videos[state.imageVideo].link]}
        slide={0}
      />
      <div className="photo-video-items">
        <div className="video-heighlight">
          <Slider arrows={false} dots={true} swipe={true}>
            {videos
              .sort(
                item =>
                  moment(item.create_time, 'HH:mm:ss - DD/MM/YYYY').unix() >
                  moment().unix()
              )
              .map((item, key) => (
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
                        Find out the details of AIC 2019 Events
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
        <div className="video-other">
          {videos
            .sort(
              item =>
                moment(item.create_time, 'HH:mm:ss - DD/MM/YYYY').unix() >
                moment().unix()
            )
            .map((item, key) => (
              <div
                className="video-other-item"
                key={key}
                onClick={() => toggleVideo(key)}
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
