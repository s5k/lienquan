/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React from 'react'
import { Link } from 'react-router-dom'
import './prize.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
export default () => {
  library.add(fab, faArrowUp, faArrowDown)
  return (
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
        src={'https://lienquan.garena.vn/files/upload/images/TrungAnh/AIC%202019/prize%20PC.png'}
        alt="Giải thưởng"
      />
      <img
        className="prize-mb"
        src={'https://lienquan.garena.vn/files/upload/images/TrungAnh/banner/prize-MO.png'}
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
