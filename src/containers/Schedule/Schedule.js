/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
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
import FsLightbox from 'fslightbox-react'
// import "react-tabs/style/react-tabs.css";
import './schedule.css'
import { useStateValue } from '../../State'

export default () => {
  const [{ schedule, params }] = useStateValue()
  const today = moment()
  const [date_chosen, set_date_chosen] = useState(today.format('DD.MM'))
  const [isCheck, setCheck] = useState(true)
  const [dated, setDated] = useState(false)
  const [state, setState] = useState({ toggler: false, imageVideo: 0 })

  const groupStage = {
    'group stage': ['Group A', 'Group B'],
    'quater final': ['Quater Final'],
    'semi final': ['Semi Final'],
    final: ['Final']
  }

  library.add(fab, faArrowUp, faArrowDown, faCircle)

  useEffect(() => {
    if (
      dated === false &&
      today.unix() >
        moment(schedule.dates[schedule.dates.length - 1].date, 'DD.MM').unix()
    ) {
      set_date_chosen(schedule.dates[schedule.dates.length - 1].date)
      setDated(true)
    } else if (
      dated === false &&
      today.unix() < moment(schedule.dates[0].date, 'DD.MM').unix()
    ) {
      set_date_chosen(schedule.dates[0].date)
      setDated(true)
    }
  }, [today, schedule.dates, dated])

  return (
    <div className="schedulepageall">
      {dated === true && (
        <FsLightbox
          toggler={state.toggler === true}
          sources={[
            schedule.matches.filter(el => el.date === date_chosen)[
              state.imageVideo
            ].video_link
          ]}
          slide={0}
        />
      )}
      <div className="scroll-up-menu">
        <Link to="/prize">
          <img
            src={
              'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/prev-button.png'
            }
            alt="next-button"
          />
        </Link>
      </div>
      <h3 className="title-schedule">LỊCH THI ĐẤU</h3>
      <div className="active-schedule-mb">
        <div
          className={
            isCheck
              ? 'active-schedule-mb-item active-schedule-match'
              : 'active-schedule-mb-item'
          }
          onClick={() => setCheck(true)}
        >
          LỊCH THI ĐẤU
        </div>
        <div
          className={
            isCheck
              ? 'active-schedule-mb-item'
              : 'active-schedule-mb-item active-standing'
          }
          onClick={() => setCheck(false)}
        >
          BXH
        </div>
      </div>
      <div
        className={
          isCheck
            ? 'schedulepage schedulepage-match-active'
            : 'schedulepage schedulepage-standing-active'
        }
      >
        <Slider
          slidesToShow={
            schedule.dates.length && schedule.dates.length > 6
              ? 6
              : schedule.dates.length - 1
          }
          focusOnSelect={true}
          centerMode={false}
          infinite={true}
          swipe={true}
          initialSlide={
            schedule.dates.findIndex(x => x.date === date_chosen) || 0
          }
          afterChange={i => set_date_chosen(schedule.dates[i].date)}
          className="slide-day-match"
          responsive={[
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3
              }
            }
          ]}
        >
          {schedule.dates.map((item, key) => (
            <div key={key}>
              <div className="day-match">{item.date}</div>
              <div className="day-round">{item.vn_name}</div>
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
                          <div className="team-name-row">
                            {item.team_1.code}
                          </div>{' '}
                          <img src={item.team_1.logo} />
                        </div>
                        <div className="match-bo">
                          <span className="score">{item.score}</span>
                          <span>{item.description}</span>
                        </div>
                        <div className="team team-disable">
                          <img src={item.team_2.logo} />{' '}
                          <div className="team-name-row">
                            {item.team_2.code}
                          </div>
                        </div>
                      </div>
                      <div className={`match-view match-${item.status} `}>
                        <div
                          onClick={() =>
                            item.status !== 'off' &&
                            setState({
                              toggler: !state.toggler,
                              imageVideo: key
                            })
                          }
                        >
                          <img
                            src={
                              'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/youtube-icon.png'
                            }
                          />
                          <span className="active-view">LINK VOD</span>
                          <span className="active-live">
                            <FontAwesomeIcon icon="circle" className="circle" />{' '}
                            LIVE
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
          <div className="standings">
            {dated === true && (
              <Tabs>
                <TabList>
                  {groupStage[
                    schedule.dates.filter(x => x.date === date_chosen)[0].name
                  ].map((name, key) => (
                    <Tab key={key}>{name}</Tab>
                  ))}
                </TabList>

                {groupStage[
                  schedule.dates.filter(x => x.date === date_chosen)[0].name
                ].map((name, key) => (
                  <TabPanel key={key}>
                    <img src={params[name].value} />
                  </TabPanel>
                ))}
              </Tabs>
            )}
          </div>
        </div>
      </div>
      <div className="scroll-down-menu">
        <Link to="/news">
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
