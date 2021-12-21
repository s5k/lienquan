/* eslint-disable jsx-a11y/alt-text */
/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { library } from '@fortawesome/fontawesome-svg-core'
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
import NavItem from '../../components/NavItem'

export default () => {
  const dispatch = useDispatch();
  const {menus, is_mobile, COLLAPSE_SIDEBAR} = useSelector(state => state.app, shallowEqual);

  const menuClicking = () => {
    return is_mobile && dispatch({ type: 'COLLAPSE_SIDEBAR', payload: false })
  }

  useEffect(() => {
    const resize = () => {
      dispatch({
        type: 'WINDOW_WIDTH',
        payload: {
          width: window.innerWidth,
          is_mobile: window.innerWidth <= 760
        }
      })
    }
    window.addEventListener('resize', resize)
    resize()

    if (window.innerWidth <= 760) {
      dispatch({ type: 'COLLAPSE_SIDEBAR', payload: false })
    }
  }, [dispatch])

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
    <div className={COLLAPSE_SIDEBAR ? 'sidebar open-sidebar' : 'sidebar'}>
      <div className="top-sidebar">
        <div className="btn-close-menu">
          <img
            src={
              'https://cdn.vn.garenanow.com/web/kg/aic2019/images/logo-aic.png'
            }
            alt="Logo AIC"
            className="logo-aic"
          />
          <img
            src={
              'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/x-button.png'
            }
            className="close-menu"
            onClick={() =>
              dispatch({ type: 'COLLAPSE_SIDEBAR', payload: false })
            }
          />
        </div>
        <div className="bnt-sidebar">
          <img
            src={
              'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/menu-button.png'
            }
            className="bnt-sidebar"
            onClick={() =>
              dispatch({ type: 'COLLAPSE_SIDEBAR', payload: true })
            }
          />
        </div>
      </div>
      <ul>
        {menus.map((item, key) => {
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
