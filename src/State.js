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
      name: 'Home',
      icon: home,
      link: '/'
    },
    {
      id: 1,
      name: 'Prize Pool',
      icon: prize,
      link: '/prize'
    },
    {
      id: 2,
      name: 'Schedule',
      icon: schedule,
      link: '/schedule'
    },
    {
      id: 3,
      name: 'News',
      icon: news,
      link: '/news'
    },
    {
      id: 4,
      name: 'Events',
      icon: events,
      link: '/events'
    },
    {
      id: 5,
      name: 'Teams',
      icon: teams,
      link: '/teams'
    },
    {
      id: 6,
      name: 'Photos & videos',
      icon: photos,
      link: '/media'
    }
  ]
}
