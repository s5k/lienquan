/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './photos.css'

export default () => {
  return (
    <div className="photovideopage">
      <div className="photo-video-items">
        <div className="video-heighlight">
          <Slider 
            arrows={false}
            dots={true}
          >
            <div>
              <div className="video-heighlight-item">
                <div className="video-heightlight-clip">
                  <img src={require('../../images/photovideo.jpg')} alt="photovideo" />
                </div>
                <div className="video-heightlight-text">
                  <p className="video-text-title">aic 2019 format annoucement and venue</p>
                  <p className="video-text-des">Find out the details of AIC 2019 Events</p>
                </div>
              </div>
            </div>
            <div>
              <div className="video-heighlight-item">
                <div className="video-heightlight-clip">
                  <img src={require('../../images/photovideo.jpg')} alt="photovideo" />
                </div>
                <div className="video-heightlight-text">
                  <p className="video-text-title">aic 2019 format annoucement and venue</p>
                  <p className="video-text-des">Find out the details of AIC 2019 Events</p>
                </div>
              </div>
            </div>
            <div>
              <div className="video-heighlight-item">
                <div className="video-heightlight-clip">
                  <img src={require('../../images/photovideo.jpg')} alt="photovideo" />
                </div>
                <div className="video-heightlight-text">
                  <p className="video-text-title">aic 2019 format annoucement and venue</p>
                  <p className="video-text-des">Find out the details of AIC 2019 Events</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="video-other">
          <div className="video-other-item">
            <img src={require('../../images/photovideo.jpg')} alt="photovideo"/>
            <div className="video-other-item-text">VIDEO RANDOM 1</div>
          </div>
          <div className="video-other-item">
            <img src={require('../../images/photovideo.jpg')} alt="photovideo"/>
            <div className="video-other-item-text">VIDEO RANDOM 1</div>
          </div>
          <div className="video-other-item">
            <img src={require('../../images/photovideo.jpg')} alt="photovideo"/>
            <div className="video-other-item-text">VIDEO RANDOM 1</div>
          </div>
        </div>
      </div>
    </div>
  )
}
