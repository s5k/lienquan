import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faTrophy,
  faList,
  faFile,
  faNewspaper,
  faBell,
  faUsers,
  faImage,
  faTimes,
  faBars,
  faArrowUp,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons'

import logoAic from '../../images/logo-aic.png'

export default () => {
  const [isSidebarOpen, setCollapseSidebar] = useState(true)

  const [listMenu] = useState([
    {
      id: 0,
      name: 'Home',
      icon: 'home'
    },
    {
      id: 1,
      name: 'Prize Pool',
      icon: 'trophy'
    },
    {
      id: 2,
      name: 'Schedule',
      icon: 'list'
    },
    {
      id: 3,
      name: 'News',
      icon: 'newspaper'
    },
    {
      id: 4,
      name: 'Events',
      icon: 'bell'
    },
    {
      id: 5,
      name: 'Teams',
      icon: 'users'
    },
    {
      id: 6,
      name: 'Photos & videos',
      icon: 'image'
    }
  ])

  library.add(
    fab,
    faHome,
    faTrophy,
    faList,
    faFile,
    faNewspaper,
    faBell,
    faUsers,
    faImage,
    faTimes,
    faBars,
    faArrowUp,
    faArrowDown
  )

  return (
    <div className={isSidebarOpen ? 'sidebar open-sidebar' : 'sidebar'}>
      <div className="top-sidebar">
        <div className="btn-close-menu">
          <img src={logoAic} alt="Logo AIC" className="logo-aic" />
          <FontAwesomeIcon
            icon="times"
            className="close-menu"
            onClick={() => setCollapseSidebar(false)}
          />
        </div>
        <div className="bnt-sidebar">
          <FontAwesomeIcon
            icon="bars"
            className="bnt-sidebar"
            onClick={() => setCollapseSidebar(true)}
          />
        </div>
      </div>
      <ul>
        {listMenu.map((item, key) => {
          return (
            <li className={key === 0 ? 'active' : ''} key={key}>
              <Link to="/">
                <FontAwesomeIcon icon={item.icon} /> <span>{item.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
