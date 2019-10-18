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
  faCircle,
  faPlayCircle
} from '@fortawesome/free-solid-svg-icons'
import './teams.css'
import { useStateValue } from '../../State'

export default () => {
  const [{ teams }] = useStateValue()

  const [teamIndex, setTeamIndex] = useState(0)
  library.add(fab, faArrowUp, faArrowDown, faCircle, faPlayCircle)

  return (
    <div className="teamspage">
      <div className="scroll-up-menu">
        <Link to="/events">
          <img
            src={
              'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/prev-button.png'
            }
            alt="next-button"
          />
        </Link>
      </div>
      <h3 className="title-teams">MEET THE TEAMS</h3>
      <div className="teamspage-items">
        <div className="teams-info">
          <div className="teams-info-item">
            <div className="team-member">
              <Slider centerMode={true} centerPadding={'30%'} initialSlide={0}>
                {teams[teamIndex].players
                  .sort((a, b) => {
                    return a.position !== '' &&
                      parseInt(a.position) > parseInt(b.position)
                      ? true
                      : false
                  })
                  .map((member, keyChild) => (
                    <div key={keyChild}>
                      <div className="member-info">
                        <img className="member-img" src={member.image} />
                      </div>
                      <div className="member-info-text">
                        <img
                          className="member-lane"
                          src={`https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/lane-${member.description
                            .split(' ')
                            .join('-')
                            .toLowerCase()}.png`}
                        />
                        <p className="member-name">{member.name}</p>
                        <p className="lane-name">{member.description}</p>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
            <div className="team-info">
              <img className="logo-team" src={teams[teamIndex].logo} />
              <div className="team-info-content">
                <div className="title-team-name">{teams[teamIndex].name}</div>
                <div className="team-area">{teams[teamIndex].region}</div>
                <div className="team-des">{teams[teamIndex].description}</div>
                <div className="team-video">
                  <a href={teams[teamIndex].video_link} target="blank">
                    {' '}
                    <FontAwesomeIcon icon="play-circle" /> WATCH VIDEO{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slider
          slidesToShow={teams.length > 12 ? 12 : teams.length}
          focusOnSelect={true}
          centerMode={false}
          infinite={true}
          swipe={true}
          initialSlide={0}
          vertical={true}
          verticalSwiping={true}
          arrows={false}
          className="teams-name"
          responsive={[
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
                rows: 2,
                infinite: true,
                dots: false,
                vertical: false,
                slidesPerRow: 1,
                verticalSwiping: false
              }
            }
          ]}
          // afterChange={index => setTeamIndex(index)}
        >
          {teams.map((item, key) => (
            <div key={key} onClick={() => setTeamIndex(key)}>
              <div
                className={
                  key === teamIndex ? 'team-name active-team' : 'team-name'
                }
              >
                {item.code}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="scroll-down-menu">
        <Link to="/media">
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
