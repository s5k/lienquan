/* eslint-disable jsx-a11y/alt-text */
/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React, { useState, useEffect } from 'react'

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
import closeBnt from '../../images/icons/x-button.png'
import logoAic from '../../images/logo-aic.png'
import { useStateValue } from '../../State'
import NavItem from '../../components/NavItem'

export default () => {
  const [isSidebarOpen, setCollapseSidebar] = useState(true)
  const [is_mobile, setIs_Mobile] = useState(false)

  const [{ menu }] = useStateValue()

  const resize = () => {
    setIs_Mobile(window.innerWidth <= 760)
  }

  const menuClicking = () => {
    return is_mobile && setCollapseSidebar(false)
  }

  useEffect(() => {
    window.addEventListener('resize', resize)
    resize()

    if (window.innerWidth <= 760) {
      setCollapseSidebar(false)
    }
  }, [])

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
          <img src={closeBnt} className="close-menu" onClick={() => setCollapseSidebar(false)} />
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
              <div className="sidebar-item" onClick={() => menuClicking()}>
                <img src={item.icon} /> <span>{item.name}</span>
              </div>
            </NavItem>
          )
        })}
      </ul>
    </div>
  )
}
