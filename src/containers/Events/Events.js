/* eslint-disable jsx-a11y/alt-text */
import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUp,
  faArrowDown,
  faCircle
} from '@fortawesome/free-solid-svg-icons'
import './events.css';

export default class Events extends Component {
  render() {
    library.add(fab, faArrowUp, faArrowDown, faCircle)
    return (
      <div>
        <div className="scroll-up-menu">
          <Link to="/news"> <FontAwesomeIcon icon="arrow-up" /></Link>
        </div>
        <h3 className="title-schedule">EVENTS</h3>
        <div className="eventspage">
          <div className="events-item">
            <a href="https://www.youtube.com" target="blank">
              <div className="events-item-content">
                <div className="events-item-img">
                  <img src={require('../../images/events-item.jpg')}/>
                </div>
                <div className="events-item-text">
                  <div className="events-item-text-title">
                    Call To Action
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="events-item">
          <a href="https://www.youtube.com" target="blank">
              <div className="events-item-content">
                <div className="events-item-img">
                  <img src={require('../../images/events-item.jpg')}/>
                </div>
                <div className="events-item-text">
                  <div className="events-item-text-title">
                    Call To Action
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="scroll-down-menu">
          <Link to="/teams"> <FontAwesomeIcon icon="arrow-down" /></Link>
        </div>
      </div>
    );
  }
}
