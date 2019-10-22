/*
 * Created on Wed Oct 09 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React, { createContext, useContext, useReducer } from 'react'
import home from './images/icons/home-acti.png'
import prize from './images/icons/prize-acti.png'
import schedule from './images/icons/schedule-acti.png'
import news from './images/icons/news-acti.png'
import events from './images/icons/events-acti.png'
import teams from './images/icons/teams-acti.png'
import photos from './images/icons/photos-acti.png'

export const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)

export const initialState = {
  loading: true,
  error: false,
  SEEMORE_CLICKING: false,
  width: 0,
  is_mobile: false,
  COLLAPSE_SIDEBAR: true,
  events: [],
  videos: [],
  schedule: {
    dates: [],
    matches: []
  },
  images: [],
  posts: [],
  teams: [],
  menu: [
    {
      id: 0,
      name: 'Trang chủ',
      icon: home,
      link: '/'
    },
    {
      id: 1,
      name: 'Giải thưởng',
      icon: prize,
      link: '/prize'
    },
    {
      id: 2,
      name: 'Lịch thi đấu',
      icon: schedule,
      link: '/schedule'
    },
    {
      id: 3,
      name: 'Tin tức',
      icon: news,
      link: '/news'
    },
    {
      id: 4,
      name: 'Sự kiện',
      icon: events,
      link: '/events'
    },
    {
      id: 5,
      name: 'Đội tuyển',
      icon: teams,
      link: '/teams'
    },
    {
      id: 6,
      name: 'Ảnh và Video',
      icon: photos,
      link: '/media'
    }
  ]
}
