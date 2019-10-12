/*
 * Created on Wed Oct 09 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React, { createContext, useContext, useReducer } from 'react'

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
      icon: 'home',
      link: '/'
    },
    {
      id: 1,
      name: 'Prize Pool',
      icon: 'trophy',
      link: '/prize'
    },
    {
      id: 2,
      name: 'Schedule',
      icon: 'list',
      link: '/schedule'
    },
    {
      id: 3,
      name: 'News',
      icon: 'newspaper',
      link: '/news'
    },
    {
      id: 4,
      name: 'Events',
      icon: 'bell',
      link: '/events'
    },
    {
      id: 5,
      name: 'Teams',
      icon: 'users',
      link: '/teams'
    },
    {
      id: 6,
      name: 'Photos & videos',
      icon: 'image',
      link: '/photos'
    }
  ]
}
