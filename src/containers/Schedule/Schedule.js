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

import * as moment from 'moment'

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
import { useStateValue } from '../../State'

export default () => {
  const [{ schedule, params }] = useStateValue()
  const today = moment()
  const [date_chosen, set_date_chosen] = useState(today.format('DD.MM'))
  const [isCheck, setCheck] = useState(true)

  library.add(fab, faArrowUp, faArrowDown, faCircle)

  return (
    <div className="schedulepageall">
      <div className="scroll-up-menu">
        <Link to="/prize">
          <img src={require('../../images/icons/prev-button.png')} alt="next-button"/>
        </Link>
      </div>
      <h3 className="title-schedule">SCHEDULE</h3>
      <div className="active-schedule-mb">
        <div className={isCheck ? 'active-schedule-mb-item active-schedule-match' : 'active-schedule-mb-item'} onClick={() => setCheck(true)}>
          SCHEDULE
        </div>
        <div className={isCheck ? 'active-schedule-mb-item' : 'active-schedule-mb-item active-standing'} onClick={() => setCheck(false)}>
          STANDING
        </div>
      </div>
      <div className={isCheck ? 'schedulepage schedulepage-match-active' : 'schedulepage schedulepage-standing-active'}>
        <Slider
          slidesToShow={
            schedule.dates.length && schedule.dates.length > 6
              ? 6
              : schedule.dates.length - 1
          }
          focusOnSelect={true}
          centerMode={false}
          infinite={true}
          swipe={false}
          initialSlide={
            schedule.dates.findIndex(x => x.date === today.format('DD.MM')) || 0
          }
          afterChange={i => set_date_chosen(schedule.dates[i].date)}
          className="slide-day-match"
          responsive= {[
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
              }
            }
          ]}
        >
          {schedule.dates.map((item, key) => (
            <div key={key} onClick={() => set_date_chosen(item.date)}>
              <div className="day-match">{item.date}</div>
              <div className="day-round">{item.name}</div>
            </div>
          ))}
        </Slider>

        <div className="slide-schedule-match">
          <div className="schedule-match-day">
            <div className="schedule-match-day-items">
              {schedule.matches
                .filter(el => el.date === date_chosen)
                .map((item, key) => {
                  let scores = item.score.split('-')
                  return (
                    <div className="schedule-match-day-item" key={key}>
                      <div className="match-time">{item.time}</div>
                      <div
                        className={
                          parseInt(scores[0]) > parseInt(scores[1])
                            ? 'match-teams team-1'
                            : 'match-teams team-2'
                        }
                      >
                        <div className="team">
                          {item.team_1.name} <img src={item.team_1.logo} />
                        </div>
                        <div className="match-bo">
                          <span className="score">{item.score}</span>
                          <span>{item.description}</span>
                        </div>
                        <div className="team team-disable">
                          <img src={item.team_2.logo} /> {item.team_2.name}
                        </div>
                      </div>
                      <div className={`match-view match-${item.status} `}>
                        <a href={item.video_link} target="blank">
                          <img
                            src={require('../../images/icons/youtube-icon.png')}
                          />
                          <span className="active-view">LINK VOD</span>
                          <span className="active-live">
                            <FontAwesomeIcon icon="circle" className="circle" />{' '}
                            LIVE
                          </span>
                        </a>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
          <div className="standings">
            <Tabs>
              <TabList>
                <Tab>GROUP A</Tab>
                <Tab>GROUP B</Tab>
              </TabList>

              <TabPanel>
                <img src={params['Group A'].value} />
              </TabPanel>
              <TabPanel>
                <img src={params['Group B'].value} />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="scroll-down-menu">
        <Link to="/news">
          <img src={require('../../images/icons/next-button.png')} alt="next-button"/>
        </Link>
      </div>
    </div>
  )
}
