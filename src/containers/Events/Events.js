/*
 * Created on Thu Oct 10 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUp,
  faArrowDown,
  faCircle
} from '@fortawesome/free-solid-svg-icons'
import './events.css'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { EVENTS_FETCH_REQUESTED } from 'store/events/reducers'

export default () => {
  const {events, fetched} = useSelector(state => state.events, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch({
        type: EVENTS_FETCH_REQUESTED
      })
    }
  }, [fetched, dispatch]);

  library.add(fab, faArrowUp, faArrowDown, faCircle)

  return fetched && (
    <div className="eventspage">
      <div className="scroll-up-menu see-more-clicked">
        <Link to="/news">
          <img
            src={
              'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/prev-button.png'
            }
            alt="next-button"
          />
        </Link>
      </div>
      <h3 className="title-schedule">SỰ KIỆN</h3>
      <div className="eventspage-items">
        {events.map((item, key) => (
          <div className="events-item" key={key}>
            <a href={item.link} target="blank">
              <div className="events-item-content">
                <div className="events-item-img">
                  <img src={`${process.env.REACT_APP_API_SERVER}/${item.thumbnail}`} />
                </div>
                <div className="events-item-text">
                  <div className="events-item-text-title">{item.title}</div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="scroll-down-menu see-more-clicked">
        <Link to="/teams">
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
