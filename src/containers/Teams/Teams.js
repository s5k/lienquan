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

  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)

  library.add(fab, faArrowUp, faArrowDown, faCircle, faPlayCircle)

  return (
    <div className="teamspage">
      <div className="scroll-up-menu">
        <Link to="/events">
          {' '}
          <FontAwesomeIcon icon="arrow-up" />
        </Link>
      </div>
      <h3 className="title-teams">MEET THE TEAMS</h3>
      <div className="teamspage-items">
        <Slider
          asNavFor={nav2}
          ref={slider => setNav1(slider)}
          arrows={false}
          focusOnSelect={false}
          infinite={true}
          swipe={false}
          initialSlide={0}
          className="teams-info"
        >
          {teams.map((item, key) => (
            <div key={key}>
              <div className="teams-info-item">
                <div className="team-member">
                  <Slider centerMode={true} centerPadding={'30%'}>
                    {item.players
                      .sort((a, b) =>
                        b.position !== '' &&
                        a.position !== '' &&
                        a.position > b.position
                          ? 1
                          : -1
                      )
                      .map((member, keyChild) => (
                        <div key={keyChild}>
                          <div className="member-info">
                            <img className="member-img" src={member.image} />
                          </div>
                          <div className="member-info-text">
                            <img
                              className="member-lane"
                              src={require('../../images/lane.png')}
                            />
                            <p className="member-name">{member.name}</p>
                            <p className="lane-name">{member.description}</p>
                          </div>
                        </div>
                      ))}
                  </Slider>
                </div>
                <div className="team-info">
                  <img className="logo-team" src={item.logo} />
                  <div className="title-team-name">{item.name}</div>
                  <div className="team-area">{item.region}</div>
                  <div className="team-des">{item.description}</div>
                  <div className="team-video">
                    <a href="https://www.youtube.com" target="blank">
                      {' '}
                      <FontAwesomeIcon icon="play-circle" /> WATCH VIDEO{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Slider
          asNavFor={nav1}
          ref={slider => setNav2(slider)}
          slidesToShow={teams.length > 12 ? 12 : teams.length - 1}
          focusOnSelect={true}
          centerMode={false}
          infinite={true}
          swipe={true}
          initialSlide={0}
          vertical={true}
          verticalSwiping={true}
          arrows={false}
          className="teams-name"
          responsive= {[
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 0,
                rows: 2,
                infinite: true,
                dots: false,
                vertical:false,
                slidesPerRow: 1,
                verticalSwiping:false
              }
            }
          ]}
        >
          {teams.map((item, key) => (
            <div key={key}>
              <div className="team-name">{item.name}</div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="scroll-down-menu">
        <Link to="/photos">
          {' '}
          <FontAwesomeIcon icon="arrow-down" />
        </Link>
      </div>
    </div>
  )
}
