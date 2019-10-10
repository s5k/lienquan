/*
 * Created on Thu Oct 10 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUp,
  faArrowDown,
  faCircle
} from '@fortawesome/free-solid-svg-icons'
import './news.css'

export default class News extends Component {
  render() {
    library.add(fab, faArrowUp, faArrowDown, faCircle)
    return (
      <div>
        <div className="scroll-up-menu">
          <Link to="/schedule">
            {' '}
            <FontAwesomeIcon icon="arrow-up" />
          </Link>
        </div>
        <h3 className="title-schedule">NEWS</h3>
        <div className="newspage">
          <div className="news-item">
            <Link to={'./newpage'}>
              <div className="news-item-content">
                <div className="news-item-img">
                  <img src={require('../../images/news-item.jpg')} />
                </div>
                <div className="news-item-text">
                  <div className="news-item-text-title">
                    aic 2019 format annoucement and venue
                  </div>
                  <div className="news-item-text-day">27.09.2019</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="news-item">
            <Link to={'./newpage'}>
              <div className="news-item-content">
                <div className="news-item-img">
                  <img src={require('../../images/news-item.jpg')} />
                </div>
                <div className="news-item-text">
                  <div className="news-item-text-title">
                    aic 2019 format annoucement and venue
                  </div>
                  <div className="news-item-text-day">27.09.2019</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="news-item">
            <Link to={'./newpage'}>
              <div className="news-item-content">
                <div className="news-item-img">
                  <img src={require('../../images/news-item.jpg')} />
                </div>
                <div className="news-item-text">
                  <div className="news-item-text-title">
                    aic 2019 format annoucement and venue
                  </div>
                  <div className="news-item-text-day">27.09.2019</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="news-item">
            <Link to={'./newpage'}>
              <div className="news-item-content">
                <div className="news-item-img">
                  <img src={require('../../images/news-item.jpg')} />
                </div>
                <div className="news-item-text">
                  <div className="news-item-text-title">
                    aic 2019 format annoucement and venue
                  </div>
                  <div className="news-item-text-day">27.09.2019</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="btn-seemore">SEE MORE</div>
        </div>
        <div className="scroll-down-menu">
          <Link to="/events">
            {' '}
            <FontAwesomeIcon icon="arrow-down" />
          </Link>
        </div>
      </div>
    )
  }
}
