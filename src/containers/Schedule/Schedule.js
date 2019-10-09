/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUp,
  faArrowDown,
  faCircle
} from '@fortawesome/free-solid-svg-icons'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import "react-tabs/style/react-tabs.css";
import './schedule.css'

export default () => {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)

  library.add(fab, faArrowUp, faArrowDown, faCircle)

  return (
    <div>
      <div className="scroll-up-menu">
        <Link to="/prize">
          {' '}
          <FontAwesomeIcon icon="arrow-up" />
        </Link>
      </div>
      <h3 className="title-schedule">SCHEDULE</h3>
      <div className="schedulepage">
        <Slider
          asNavFor={nav1}
          ref={slider => setNav2(slider)}
          slidesToShow={6}
          focusOnSelect={true}
          centerMode={false}
          infinite={true}
          initialSlide={0}
          className="slide-day-match"
        >
          <div>
            <div className="day-match">12.11</div>
            <div className="day-round">GROUP STATE</div>
          </div>
          <div>
            <div className="day-match">13.11</div>
            <div className="day-round">GROUP STATE</div>
          </div>
          <div>
            <div className="day-match">13.11</div>
            <div className="day-round">GROUP STATE</div>
          </div>
          <div>
            <div className="day-match">14.11</div>
            <div className="day-round">GROUP STATE</div>
          </div>
          <div>
            <div className="day-match">20.11</div>
            <div className="day-round">QUATER FINAL</div>
          </div>
          <div>
            <div className="day-match">21.11</div>
            <div className="day-round">SEMI FINAL</div>
          </div>
          <div>
            <div className="day-match">22.11</div>
            <div className="day-round">GRAND FINAL</div>
          </div>
        </Slider>
        <Slider
          asNavFor={nav2}
          ref={slider => setNav1(slider)}
          arrows={false}
          focusOnSelect={false}
          infinite={true}
          initialSlide={0}
          className="slide-schedule-match"
        >
          <div>
            <div className="schedule-match-day">
              <div className="schedule-match-day-items">
                {/*Start*/}
                <div className="schedule-match-day-item">
                  <div className="match-time">16:00</div>
                  <div className="match-teams team-1">
                    <div className="team team-win">
                      Team A <img src={require('../../images/logo-t1.png')} />
                    </div>
                    <div className="match-bo">
                      <span className="score">2-1</span>
                      <span>BEST OF 3</span>
                    </div>
                    <div className="team team-disable">
                      <img src={require('../../images/logo-t2.png')} /> Team 2
                    </div>
                  </div>
                  <div className="match-view match-end">
                    <a href="https://www.youtube.com" target="blank">
                      <img
                        src={require('../../images/icons/youtube-icon.png')}
                      />
                      <span className="active-view">LINK YOU</span>
                      <span className="active-live">
                        <FontAwesomeIcon icon="circle" className="circle" />{' '}
                        LIVE
                      </span>
                    </a>
                  </div>
                </div>
                {/*End*/}
                {/*Start*/}
                <div className="schedule-match-day-item">
                  <div className="match-time">16:00</div>
                  <div className="match-teams team-2">
                    <div className="team team-disable">
                      Team A <img src={require('../../images/logo-t1.png')} />
                    </div>
                    <div className="match-bo">
                      <span className="score">2-1</span>
                      <span>BEST OF 3</span>
                    </div>
                    <div className="team team-win">
                      <img src={require('../../images/logo-t2.png')} /> Team 2
                    </div>
                  </div>
                  <div className="match-view match-end">
                    <a href="https://www.youtube.com" target="blank">
                      <img
                        src={require('../../images/icons/youtube-icon.png')}
                      />
                      <span className="active-view">LINK YOU</span>
                      <span className="active-live">
                        <FontAwesomeIcon icon="circle" className="circle" />{' '}
                        LIVE
                      </span>
                    </a>
                  </div>
                </div>
                {/*End*/}
                {/*Start*/}
                <div className="schedule-match-day-item">
                  <div className="match-time">16:00</div>
                  <div className="match-teams">
                    <div className="team team-win">
                      Team A <img src={require('../../images/logo-t1.png')} />
                    </div>
                    <div className="match-bo">
                      <span className="score">1-1</span>
                      <span>BEST OF 3</span>
                    </div>
                    <div className="team">
                      <img src={require('../../images/logo-t2.png')} /> Team 2
                    </div>
                  </div>
                  <div className="match-view match-live">
                    <a href="https://www.youtube.com" target="blank">
                      <img
                        src={require('../../images/icons/youtube-icon.png')}
                      />
                      <span className="active-view">LINK YOU</span>
                      <span className="active-live">
                        <FontAwesomeIcon icon="circle" className="circle" />{' '}
                        LIVE
                      </span>
                    </a>
                  </div>
                </div>
                {/*End*/}
                {/*Start*/}
                <div className="schedule-match-day-item">
                  <div className="match-time">16:00</div>
                  <div className="match-teams">
                    <div className="team team-win">
                      Team A <img src={require('../../images/logo-t1.png')} />
                    </div>
                    <div className="match-bo">
                      <span className="score">VS</span>
                      <span>BEST OF 3</span>
                    </div>
                    <div className="team">
                      <img src={require('../../images/logo-t2.png')} /> Team 2
                    </div>
                  </div>
                  <div className="match-view match-wait">
                    <a href="https://www.youtube.com" target="blank">
                      <img
                        src={require('../../images/icons/youtube-icon.png')}
                      />
                      <span className="active-view">LINK YOU</span>
                      <span className="active-live">
                        <FontAwesomeIcon icon="circle" className="circle" />{' '}
                        LIVE
                      </span>
                    </a>
                  </div>
                </div>
                {/*End*/}
                {/*Start*/}
                <div className="schedule-match-day-item">
                  <div className="match-time">16:00</div>
                  <div className="match-teams">
                    <div className="team team-win">
                      Team A <img src={require('../../images/logo-t1.png')} />
                    </div>
                    <div className="match-bo">
                      <span className="score">VS</span>
                      <span>BEST OF 3</span>
                    </div>
                    <div className="team">
                      <img src={require('../../images/logo-t2.png')} /> Team 2
                    </div>
                  </div>
                  <div className="match-view match-wait">
                    <a href="https://www.youtube.com" target="blank">
                      <img
                        src={require('../../images/icons/youtube-icon.png')}
                      />
                      <span className="active-view">LINK YOU</span>
                      <span className="active-live">
                        <FontAwesomeIcon icon="circle" className="circle" />{' '}
                        LIVE
                      </span>
                    </a>
                  </div>
                </div>
                {/*End*/}
                {/*Start*/}
                <div className="schedule-match-day-item">
                  <div className="match-time">16:00</div>
                  <div className="match-teams">
                    <div className="team team-win">
                      Team A <img src={require('../../images/logo-t1.png')} />
                    </div>
                    <div className="match-bo">
                      <span className="score">VS</span>
                      <span>BEST OF 3</span>
                    </div>
                    <div className="team">
                      <img src={require('../../images/logo-t2.png')} /> Team 2
                    </div>
                  </div>
                  <div className="match-view match-wait">
                    <a href="https://www.youtube.com" target="blank">
                      <img
                        src={require('../../images/icons/youtube-icon.png')}
                      />
                      <span className="active-view">LINK YOU</span>
                      <span className="active-live">
                        <FontAwesomeIcon icon="circle" className="circle" />{' '}
                        LIVE
                      </span>
                    </a>
                  </div>
                </div>
                {/*End*/}
                {/*Start*/}
                <div className="schedule-match-day-item">
                  <div className="match-time">16:00</div>
                  <div className="match-teams team-1">
                    <div className="team team-win">
                      Team A <img src={require('../../images/logo-t1.png')} />
                    </div>
                    <div className="match-bo">
                      <span className="score">2-1</span>
                      <span>BEST OF 3</span>
                    </div>
                    <div className="team">
                      <img src={require('../../images/logo-t2.png')} /> Team 2
                    </div>
                  </div>
                  <div className="match-view match-wait">
                    <a href="https://www.youtube.com" target="blank">
                      <img
                        src={require('../../images/icons/youtube-icon.png')}
                      />
                      <span className="active-view">LINK YOU</span>
                      <span className="active-live">
                        <FontAwesomeIcon icon="circle" className="circle" />{' '}
                        LIVE
                      </span>
                    </a>
                  </div>
                </div>
                {/*End*/}
              </div>
            </div>
            <div className="standings">
              <Tabs>
                <TabList>
                  <Tab>GROUP A</Tab>
                  <Tab>GROUP B</Tab>
                </TabList>

                <TabPanel>
                  <img src={require('../../images/standings.jpg')} />
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </Slider>
      </div>
      <div className="scroll-down-menu">
        <Link to="/news">
          {' '}
          <FontAwesomeIcon icon="arrow-down" />
        </Link>
      </div>
    </div>
  )
}
