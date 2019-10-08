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

export default () => {
  library.add(fab, faCircle, faList, faFile, faNewspaper, faBell, faUsers, faArrowDown)
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
          <a href="https://www.youtube.com" target="blank" className="btn-watch-now">
            <FontAwesomeIcon icon="circle" className="circle" /> WATCH NOW
          </a>
        </div>
      </div>
      <div className="home-menu">
        <div className="menu-item menu-schedule">
          <img src={imageSchedule} alt="menu-schedule" />
          <div className="menu-text">
            <div className="menu-icon">
              <FontAwesomeIcon icon="list" className="icon-schedule" />
            </div>
            <Link to="#">SCHEDULE</Link>
          </div>
        </div>
        <div className="menu-item menu-event">
          <img src={imageEvent} alt="menu-event" />
          <div className="menu-text">
            <div className="menu-icon">
              <FontAwesomeIcon icon="bell" className="icon-schedule" />
            </div>
            <Link to="#">EVENTS</Link>
          </div>
        </div>
        <div className="menu-item menu-news">
          <img src={imageNews} alt="menu-news" />
          <div className="menu-text">
            <div className="menu-icon">
              <FontAwesomeIcon icon="newspaper" className="icon-schedule" />
            </div>
            <Link to="#">NEWS</Link>
          </div>
        </div>
        <div className="menu-item menu-team">
          <img src={imageTeam} alt="menu-team" />
          <div className="menu-text">
            <div className="menu-icon">
              <FontAwesomeIcon icon="users" className="icon-schedule" />
            </div>
            <Link to="#">MEET THE TEAMS</Link>
          </div>
        </div>
      </div>
      <div className="scroll-down-menu">
        <Link to="/prize"> <FontAwesomeIcon icon="arrow-down" /> </Link>
      </div>
    </div>
  )
}
