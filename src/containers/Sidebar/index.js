import React, { useState } from 'react'

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
import { useStateValue } from '../../State'
import NavItem from '../../components/NavItem'

export default () => {
  const [isSidebarOpen, setCollapseSidebar] = useState(true)

  const [{ menu }] = useStateValue()

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
        {menu.map((item, key) => {
          return (
            <NavItem to={item.link} key={key} exact>
              <FontAwesomeIcon icon={item.icon} /> <span>{item.name}</span>
            </NavItem>
          )
        })}
      </ul>
    </div>
  )
}
