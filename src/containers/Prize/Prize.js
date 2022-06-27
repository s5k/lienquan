/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './prize.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PRIZE_FETCH_REQUESTED } from 'store/prize/reducers'
export default () => {
  library.add(fab, faArrowUp, faArrowDown)
  const dispatch = useDispatch();
  const { prize_image, prize_image_mobile, fetched } = useSelector(state => state.prize, shallowEqual);

  useEffect(() => {
      if (!fetched) {
        dispatch({type: PRIZE_FETCH_REQUESTED})
      }

  }, [dispatch, fetched])

  return fetched && (
    <div className="prizepage">
      <div className="scroll-up-menu">
        <Link to="/">
          <img
            src={
              'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/prev-button.png'
            }
            alt="next-button"
          />
        </Link>
      </div>
      <h3 className="title-schedule">GIẢI THƯỞNG</h3>
      <img
        className="prize-desktop"
        src={`${process.env.REACT_APP_API_SERVER}/${prize_image}`}
        alt="Giải thưởng"
      />
      <img
        className="prize-mb"
        src={`${process.env.REACT_APP_API_SERVER}/${prize_image_mobile}`}
        alt="Giải thưởng"
      />
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
