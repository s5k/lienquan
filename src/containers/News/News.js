/*
 * Created on Thu Oct 10 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUp,
  faArrowDown,
  faCircle
} from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FsLightbox from 'fslightbox-react';
import './news.css'
import { useStateValue } from '../../State'

export default () => {
  const [paginate, setPaginate] = useState(2)

  let { url } = useRouteMatch()

  const [{ posts }] = useStateValue()

  library.add(fab, faArrowUp, faArrowDown, faCircle)
  const [toggler, setToggler] = useState(false);
  return (
    <div className="newspage">
      <div className="scroll-up-menu">
        <Link to="/schedule">
          <img src={require('../../images/icons/prev-button.png')} alt="next-button"/>
        </Link>
      </div>
      <h3 className="title-schedule">NEWS</h3>
      <div className="newspage-top">
        <Slider arrows={false} dots={true}>
          {posts
            .filter(item => item.is_hot_news)
            .map((item, key) => (
              <div key={key} className="news-top-item-content">
                <Link to={`${url}/${item.id}`}>
                  <div className="news-top-item">
                    <img src={item.thumbnail} alt="newstop" />
                    <div className="news-top-text">
                      <p className="news-top-title">{item.title}</p>
                      <p className="news-top-des">
                        Find out the details of AIC 2019 Events
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="watch-video" onClick={ () => setToggler(!toggler) }>
                  <img src={require('../../images/icons/watch-video.png')} alt="watch video"/> watch video
                </div>
              </div>
            ))}
        </Slider>
        <FsLightbox
          toggler={ toggler }
          sources={ [
          'https://www.youtube.com/watch?v=xshEZzpS4CQ'
          ] }
        />
      </div>
      <div className="newspage-items">
        {posts
          .filter(item => !item.is_hot_news)
          .slice(0, paginate)
          .map((item, key) => (
            <div className="news-item" key={key}>
              <Link to={`${url}/${item.id}`}>
                <div className="news-item-content">
                  <div className="news-item-img">
                    <img src={item.thumbnail} />
                  </div>
                  <div className="news-item-text">
                    <div className="news-item-text-title">{item.title}</div>
                    <div className="news-item-text-day">
                      {item.create_time.split(' - ')[1]}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        {paginate < posts.filter(item => !item.is_hot_news).length && (
          <div className="btn-seemore-div">
            <div
              className="btn-seemore"
              onClick={() => setPaginate(paginate + 4)}
            >
              SEE MORE
            </div>
          </div>
        )}
      </div>
      <div className="scroll-down-menu">
        <Link to="/events">
          <img src={require('../../images/icons/next-button.png')} alt="next-button"/>
        </Link>
      </div>
    </div>
  )
}
