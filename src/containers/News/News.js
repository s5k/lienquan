/*
 * Created on Thu Oct 10 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
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
import './news.css'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NEWS_FETCH_REQUESTED } from 'store/news/reducers'

export default () => {
  const dispatch = useDispatch();
  const { posts, SEEMORE_CLICKING, fetched_posts } = useSelector(state => state.news, shallowEqual)

  let { url } = useRouteMatch()
  const [paginate, setPaginate] = useState(2)
  const [toggler] = useState(false)

  useEffect(() => {
    if (!fetched_posts) {
      dispatch({type: NEWS_FETCH_REQUESTED})
    }
  }, [fetched_posts, dispatch])

  const showMore = () => {
    setPaginate(paginate + 4)
    dispatch({ type: 'SEEMORE_CLICKING' })
  }

  library.add(fab, faArrowUp, faArrowDown, faCircle)

  return fetched_posts && (
    <div className="newspage">
      <div
        className={
          SEEMORE_CLICKING
            ? 'scroll-up-menu see-more-clicked'
            : 'scroll-up-menu'
        }
      >
        <Link to="/prize">
          <img
            src={
              'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/prev-button.png'
            }
            alt="next-button"
          />
        </Link>
      </div>
      <h3 className="title-schedule">TIN TỨC</h3>
      <div className="newspage-top">
        <Slider arrows={false} dots={true}>
          {posts
            .filter(item => item.is_hot_news)
            .map((item, key) => (
              <div key={key} className="news-top-item-content">
                <Link to={`${url}/${item.id}`}>
                  <div className="news-top-item">
                    <img src={`${process.env.REACT_APP_API_SERVER}/${item.thumbnail}`} alt="newstop" />
                    <div className="news-top-text">
                      <p className="news-top-title">{item.title}</p>
                      <p className="news-top-des">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </Slider>
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
                    <img src={`${process.env.REACT_APP_API_SERVER}/${item.thumbnail}`} />
                  </div>
                  <div className="news-item-text">
                    <div className="news-item-text-title">{item.title}</div>
                    <div className="news-item-text-day">
                      {item.create_time}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        {paginate < posts.filter(item => !item.is_hot_news).length && (
          <div className="btn-seemore-div">
            <div className="btn-seemore" onClick={() => showMore()}>
              XEM THÊM
            </div>
          </div>
        )}
      </div>
      <div
        className={
          SEEMORE_CLICKING
            ? 'scroll-down-menu see-more-clicked'
            : 'scroll-down-menu'
        }
      >
        <Link to="/events">
          <img
            src={
              'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/next-button.png'
            }
            alt="next-button"
          />
        </Link>
      </div>
    </div>
  )
}
