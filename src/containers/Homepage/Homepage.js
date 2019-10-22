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
        <img
          src={'https://cdn.vn.garenanow.com/web/kg/aic2019/images/cup-aic.png'}
          alt=">Cup Aic"
          className="cup-aic"
        />
        <p className="intro-content">
          Arena of Valor International Championship (AIC) 2019, giải đấu thể thao điện tử quốc tế bộ môn Liên Quân Mobile được tổ chức bởi Garena và Tencent sẽ diễn ra tại Thái Lan từ 05/11 tới 24/11 với tổng giải thưởng gần 12 tỷ đồng. 12 đội tuyển tới từ 9 khu vực hàng đầu trên thế giới sẽ cùng nhau tranh tài tại một trong những giải eSports quốc tế có số tiền thưởng lớn nhất thế giới ở thể loại MOBA trên nền tảng di động. Đặc biệt lần đầu tiên trong lịch sử AIC, giải đấu 1v1 sẽ được tổ chức để các siêu sao hàng đầu thế giới trình diễn kỹ năng cá nhân thượng thừa.
        </p>
        {params['Watch Now'].value !== '' && (
          <div className="watch-now">
            <a
              href={params['Watch Now'].value}
              target="blank"
              className="btn-watch-now"
            >
              <FontAwesomeIcon icon="circle" className="circle" /> WATCH NOW
            </a>
          </div>
        )}
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
              <span>SCHEDULE</span>
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
              <span>EVENTS</span>
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
              <span>NEWS</span>
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
              <span>MEET THE TEAMS</span>
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
