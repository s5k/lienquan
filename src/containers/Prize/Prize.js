/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React from 'react'
import { Link } from 'react-router-dom'
import './prize.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import imagePrize from '../../images/prize.png'
export default () => {
  library.add(fab, faArrowUp, faArrowDown)
  return (
    <div className="prizepage">
      <div className="scroll-up-menu">
        <Link to="/">
          {' '}
          <FontAwesomeIcon icon="arrow-up" />
        </Link>
      </div>
      <img src={imagePrize} alt="Giải thưởng" />
      <div className="scroll-down-menu">
        <Link to="/schedule">
          {' '}
          <FontAwesomeIcon icon="arrow-down" />
        </Link>
      </div>
    </div>
  )
}
