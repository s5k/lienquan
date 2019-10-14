/*
 * Created on Thu Oct 10 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUp,
  faArrowDown,
  faCircle
} from '@fortawesome/free-solid-svg-icons'
import './events.css'
import { useStateValue } from '../../State'

export default () => {
  const [{ events }] = useStateValue()

  library.add(fab, faArrowUp, faArrowDown, faCircle)

  return (
    <div className="eventspage">
      <div className="scroll-up-menu">
        <Link to="/news">
          {' '}
          <FontAwesomeIcon icon="arrow-up" />
        </Link>
      </div>
      <h3 className="title-schedule">EVENTS</h3>
      <div className="eventspage-items">
        {events.map((item, key) => (
          <div className="events-item" key={key}>
            <a href={item.link} target="blank">
              <div className="events-item-content">
                <div className="events-item-img">
                  <img src={item.image} />
                </div>
                <div className="events-item-text">
                  <div className="events-item-text-title">Call To Action</div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="scroll-down-menu">
        <Link to="/teams">
          {' '}
          <FontAwesomeIcon icon="arrow-down" />
        </Link>
      </div>
    </div>
  )
}
