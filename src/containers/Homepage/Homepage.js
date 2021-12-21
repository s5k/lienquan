/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { HOMEPAGE_FETCH_REQUESTED } from "../../store/homepage/reducers";
import './homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCircle,
  faList,
  faFile,
  faNewspaper,
  faBell,
  faUsers,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons'

export default () => {
  const {logo_src, introduce_text, watch_now_url, fetched} = useSelector(state => state.homepage, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch({
        type: HOMEPAGE_FETCH_REQUESTED
      })
    }
  }, [fetched, dispatch])

  library.add(
    fab,
    faCircle,
    faList,
    faFile,
    faNewspaper,
    faBell,
    faUsers,
    faArrowDown
  )

  return fetched && (
    <div className="homepage">
      <div className="home-intro">
        <img
          src={`${process.env.REACT_APP_API_SERVER}/${logo_src}`}
          alt="Cup Aic"
          className="cup-aic"
        />
        <p className="intro-content">{ introduce_text }</p>
        <div className="watch-now">
          <a
            href={watch_now_url}
            target="blank"
            className="btn-watch-now"
          >
            <FontAwesomeIcon icon="circle" className="circle" /> TRỰC TIẾP
          </a>
        </div>
      </div>
      <div className="home-menu">
        <div className="menu-item menu-schedule">
          <Link to={'./schedule'}>
            <img
              src={
                'https://cdn.vn.garenanow.com/web/kg/aic2019/images/home-schedule.jpg'
              }
              alt="menu-schedule"
            />
            <div className="menu-text">
              <div className="menu-icon">
                <img
                  src={
                    'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/schedule-acti.png'
                  }
                  alt="schedule"
                />
              </div>
              <span>LỊCH THI ĐẤU</span>
            </div>
          </Link>
        </div>
        <div className="menu-item menu-event">
          <Link to={'./events'}>
            <img
              src={
                'https://cdn.vn.garenanow.com/web/kg/aic2019/images/home-event.jpg'
              }
              alt="menu-event"
            />
            <div className="menu-text">
              <div className="menu-icon">
                <img
                  src={
                    'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/events-acti.png'
                  }
                  alt="events"
                />
              </div>
              <span>SỰ KIỆN</span>
            </div>
          </Link>
        </div>
        <div className="menu-item menu-news">
          <Link to={'./news'}>
            <img
              src={
                'https://cdn.vn.garenanow.com/web/kg/aic2019/images/home-news.jpg'
              }
              alt="menu-news"
            />
            <div className="menu-text">
              <div className="menu-icon">
                <img
                  src={
                    'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/news-acti.png'
                  }
                  alt="news"
                />
              </div>
              <span>TIN TỨC</span>
            </div>
          </Link>
        </div>
        <div className="menu-item menu-team">
          <Link to={'./teams'}>
            <img
              src={
                'https://cdn.vn.garenanow.com/web/kg/aic2019/images/home-team.jpg'
              }
              alt="menu-team"
            />
            <div className="menu-text">
              <div className="menu-icon">
                <img
                  src={
                    'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/teams-acti.png'
                  }
                  alt="teams"
                />
              </div>
              <span>ĐỘI TUYỂN</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="scroll-down-menu">
        <Link to="/prize">
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
