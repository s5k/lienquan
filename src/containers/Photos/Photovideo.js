/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

import * as moment from 'moment'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FsLightbox from 'fslightbox-react'
import Backhome from '../../components/Backhome'
import './photos.css'
import { useStateValue } from '../../State'

export default () => {
  const [{ videos }] = useStateValue()

  const [toggler, setToggler] = useState(false)
  const [imageVideo, setImageVideo] = useState(0)

  const toggleVideo = index => {
    setToggler(!toggler)
    setImageVideo(index)
  }

  return (
    <div className="photovideopage">
      <Backhome />
      <div className="photo-video-items">
        <div className="video-heighlight">
          <FsLightbox
            toggler={toggler}
            sources={[videos[imageVideo].link]}
            key={imageVideo}
          />
          <Slider arrows={false} dots={true} swipe={true} autoplay={true} autoplaySpeed={3000}>
            {videos
              .sort(
                item =>
                  moment(item.create_time, 'HH:mm:ss - DD/MM/YYYY').unix() >
                  moment().unix()
              )
              .map((item, key) => (
                <div key={key}>
                  <div className="video-heighlight-item">
                    <div
                      className="video-heightlight-clip"
                      onClick={() => toggleVideo(key)}
                    >
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
