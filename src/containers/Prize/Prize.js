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
          <img src={require('../../images/icons/prev-button.png')} alt="next-button"/>
        </Link>
      </div>
      <h3 className="title-schedule">PRIZE POOL</h3>
      <img className="prize-desktop" src={require('../../images/prize.png')} alt="Giải thưởng" />
      <img className="prize-mb" src={require('../../images/prize-mb.png')} alt="Giải thưởng"/>
      <div className="scroll-down-menu">
        <Link to="/schedule">
          <img src={require('../../images/icons/next-button.png')} alt="next-button"/>
        </Link>
      </div>
    </div>
  )
}
