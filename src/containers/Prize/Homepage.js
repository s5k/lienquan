/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
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
import cupAic from '../../images/cup-aic.png'
import imageSchedule from '../../images/home-schedule.jpg'
import imageEvent from '../../images/home-event.jpg'
import imageNews from '../../images/home-news.jpg'
import imageTeam from '../../images/home-team.jpg'
import { useStateValue } from '../../State'

export default () => {
  const [{ params }] = useStateValue()

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

  return (
    <div className="homepage">
      <div className="home-intro">
        <img src={cupAic} alt=">Cup Aic" className="cup-aic" />
        <p className="intro-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="watch-now">
          <a
            href={params['Watch Now'].value}
            target="blank"
            className="btn-watch-now"
          >
            <FontAwesomeIcon icon="circle" className="circle" /> WATCH NOW
          </a>
        </div>
      </div>
      <div className="home-menu">
        <div className="menu-item menu-schedule">
          <Link to={'./schedule'}>
            <img src={imageSchedule} alt="menu-schedule" />
            <div className="menu-text">
              <div className="menu-icon">
                <img src={require('../../images/icons/schedule-acti.png')} alt="schedule"/>
              </div>
              <span>SCHEDULE</span>
            </div>
          </Link>
        </div>
        <div className="menu-item menu-event">
          <Link to={'./events'}>
            <img src={imageEvent} alt="menu-event" />
            <div className="menu-text">
              <div className="menu-icon">
                <img src={require('../../images/icons/events-acti.png')} alt="events"/>
              </div>
              <span>EVENTS</span>
            </div>
          </Link>
        </div>
        <div className="menu-item menu-news">
          <Link to={'./news'}>
            <img src={imageNews} alt="menu-news" />
            <div className="menu-text">
              <div className="menu-icon">
                <img src={require('../../images/icons/news-acti.png')} alt="news"/>
              </div>
              <span>NEWS</span>
            </div>
          </Link>
        </div>
        <div className="menu-item menu-team">
          <Link to={'./teams'}>
            <img src={imageTeam} alt="menu-team" />
            <div className="menu-text">
              <div className="menu-icon">
                <img src={require('../../images/icons/teams-acti.png')} alt="teams"/>
              </div>
              <span>MEET THE TEAMS</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="scroll-down-menu">
        <Link to="/prize">
          <img src={require('../../images/icons/next-button.png')} alt="next-button"/>
        </Link>
      </div>
    </div>
  )
}
