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

export default () => {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)

  library.add(fab, faArrowUp, faArrowDown, faCircle,faPlayCircle)

  return (
    <div>
      <div className="scroll-up-menu">
        <Link to="/events">
          {' '}
          <FontAwesomeIcon icon="arrow-up" />
        </Link>
      </div>
      <h3 className="title-teams">MEET THE TEAMS</h3>
      <div className="teamspage">
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
          <div>
            <div className="teams-info-item">
              <div className="team-member">
                <Slider 
                  centerMode={true}
                  centerPadding={'30%'}
                >
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                      
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="team-info">
                <img className="logo-team" src={require('../../images/logo-team.png')} />
                <div className="title-team-name">FNATIC</div>
                <div className="team-area">EUROPE</div>
                <div className="team-des">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown privnter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="team-video">
                  <a href="https://www.youtube.com" target="blank"> <FontAwesomeIcon icon="play-circle" /> WATCH VIDEO </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="teams-info-item">
              <div className="team-member">
                <Slider 
                  centerMode={true}
                  centerPadding={'30%'}
                >
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                      
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="team-info">
                <img className="logo-team" src={require('../../images/logo-team.png')} />
                <div className="title-team-name">FNATIC</div>
                <div className="team-area">EUROPE</div>
                <div className="team-des">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown privnter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="team-video">
                  <a href="https://www.youtube.com" target="blank"> <FontAwesomeIcon icon="play-circle" /> WATCH VIDEO </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="teams-info-item">
              <div className="team-member">
                <Slider 
                  centerMode={true}
                  centerPadding={'30%'}
                >
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                      
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="team-info">
                <img className="logo-team" src={require('../../images/logo-team.png')} />
                <div className="title-team-name">FNATIC</div>
                <div className="team-area">EUROPE</div>
                <div className="team-des">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown privnter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="team-video">
                  <a href="https://www.youtube.com" target="blank"> <FontAwesomeIcon icon="play-circle" /> WATCH VIDEO </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="teams-info-item">
              <div className="team-member">
                <Slider 
                  centerMode={true}
                  centerPadding={'30%'}
                >
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                      
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="team-info">
                <img className="logo-team" src={require('../../images/logo-team.png')} />
                <div className="title-team-name">FNATIC</div>
                <div className="team-area">EUROPE</div>
                <div className="team-des">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown privnter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="team-video">
                  <a href="https://www.youtube.com" target="blank"> <FontAwesomeIcon icon="play-circle" /> WATCH VIDEO </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="teams-info-item">
              <div className="team-member">
                <Slider 
                  centerMode={true}
                  centerPadding={'30%'}
                >
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                      
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="team-info">
                <img className="logo-team" src={require('../../images/logo-team.png')} />
                <div className="title-team-name">FNATIC</div>
                <div className="team-area">EUROPE</div>
                <div className="team-des">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown privnter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="team-video">
                  <a href="https://www.youtube.com" target="blank"> <FontAwesomeIcon icon="play-circle" /> WATCH VIDEO </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="teams-info-item">
              <div className="team-member">
                <Slider 
                  centerMode={true}
                  centerPadding={'30%'}
                >
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                      
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="team-info">
                <img className="logo-team" src={require('../../images/logo-team.png')} />
                <div className="title-team-name">FNATIC</div>
                <div className="team-area">EUROPE</div>
                <div className="team-des">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown privnter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="team-video">
                  <a href="https://www.youtube.com" target="blank"> <FontAwesomeIcon icon="play-circle" /> WATCH VIDEO </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="teams-info-item">
              <div className="team-member">
                <Slider 
                  centerMode={true}
                  centerPadding={'30%'}
                >
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                      
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="team-info">
                <img className="logo-team" src={require('../../images/logo-team.png')} />
                <div className="title-team-name">FNATIC</div>
                <div className="team-area">EUROPE</div>
                <div className="team-des">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown privnter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="team-video">
                  <a href="https://www.youtube.com" target="blank"> <FontAwesomeIcon icon="play-circle" /> WATCH VIDEO </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="teams-info-item">
              <div className="team-member">
                <Slider 
                  centerMode={true}
                  centerPadding={'30%'}
                >
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                      
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="team-info">
                <img className="logo-team" src={require('../../images/logo-team.png')} />
                <div className="title-team-name">FNATIC</div>
                <div className="team-area">EUROPE</div>
                <div className="team-des">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown privnter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="team-video">
                  <a href="https://www.youtube.com" target="blank"> <FontAwesomeIcon icon="play-circle" /> WATCH VIDEO </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="teams-info-item">
              <div className="team-member">
                <Slider 
                  centerMode={true}
                  centerPadding={'30%'}
                >
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                      
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="team-info">
                <img className="logo-team" src={require('../../images/logo-team.png')} />
                <div className="title-team-name">FNATIC</div>
                <div className="team-area">EUROPE</div>
                <div className="team-des">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown privnter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="team-video">
                  <a href="https://www.youtube.com" target="blank"> <FontAwesomeIcon icon="play-circle" /> WATCH VIDEO </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="teams-info-item">
              <div className="team-member">
                <Slider 
                  centerMode={true}
                  centerPadding={'30%'}
                >
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                      
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="team-info">
                <img className="logo-team" src={require('../../images/logo-team.png')} />
                <div className="title-team-name">FNATIC</div>
                <div className="team-area">EUROPE</div>
                <div className="team-des">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown privnter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="team-video">
                  <a href="https://www.youtube.com" target="blank"> <FontAwesomeIcon icon="play-circle" /> WATCH VIDEO </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="teams-info-item">
              <div className="team-member">
                <Slider 
                  centerMode={true}
                  centerPadding={'30%'}
                >
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                      
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="team-info">
                <img className="logo-team" src={require('../../images/logo-team.png')} />
                <div className="title-team-name">FNATIC</div>
                <div className="team-area">EUROPE</div>
                <div className="team-des">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown privnter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="team-video">
                  <a href="https://www.youtube.com" target="blank"> <FontAwesomeIcon icon="play-circle" /> WATCH VIDEO </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="teams-info-item">
              <div className="team-member">
                <Slider 
                  centerMode={true}
                  centerPadding={'30%'}
                >
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                      
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="team-info">
                <img className="logo-team" src={require('../../images/logo-team.png')} />
                <div className="title-team-name">FNATIC</div>
                <div className="team-area">EUROPE</div>
                <div className="team-des">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown privnter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="team-video">
                  <a href="https://www.youtube.com" target="blank"> <FontAwesomeIcon icon="play-circle" /> WATCH VIDEO </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="teams-info-item">
              <div className="team-member">
                <Slider 
                  centerMode={true}
                  centerPadding={'30%'}
                >
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                      
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                  <div>
                    <div className="member-info">
                      <img className="member-img" src={require('../../images/member.png')} />
                    </div>
                    <div className="member-info-text">
                      <img className="member-lane" src={require('../../images/lane.png')} />
                      <p className="member-name">PLAYER NAME</p>
                      <p className="lane-name">DARK SLAYER LANE</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="team-info">
                <img className="logo-team" src={require('../../images/logo-team.png')} />
                <div className="title-team-name">FNATIC</div>
                <div className="team-area">EUROPE</div>
                <div className="team-des">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown privnter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="team-video">
                  <a href="https://www.youtube.com" target="blank"> <FontAwesomeIcon icon="play-circle" /> WATCH VIDEO </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <Slider
          asNavFor={nav1}
          ref={slider => setNav2(slider)}
          slidesToShow={12}
          focusOnSelect={true}
          centerMode={false}
          infinite={true}
          swipe={true}
          initialSlide={0}
          vertical={true}
          verticalSwiping={true}
          arrows={false}
          className="teams-name"
        >
          <div>
            <div className="team-name">FNC</div>
          </div>
          <div>
            <div className="team-name">C9</div>
          </div>
          <div>
            <div className="team-name">SKT</div>
          </div>
          <div>
            <div className="team-name">TSM</div>
          </div>
          <div>
            <div className="team-name">G2</div>
          </div>
          <div>
            <div className="team-name">SO4</div>
          </div>
          <div>
            <div className="team-name">FL</div>
          </div>
          <div>
            <div className="team-name">IGP</div>
          </div>
          <div>
            <div className="team-name">MZ</div>
          </div>
          <div>
            <div className="team-name">RNG</div>
          </div>
          <div>
            <div className="team-name">GAM</div>
          </div>
          <div>
            <div className="team-name">LK</div>
          </div>
          <div>
            <div className="team-name">FL</div>
          </div>
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
