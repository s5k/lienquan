/*
 * Created on Wed Oct 01 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React from 'react'
import './App.css'
import { StateProvider, initialState } from './State'
import reducers from './reducers'
import Main from './Main'

export default function() {
  return (
    <StateProvider initialState={initialState} reducer={reducers}>
      <Main />
    </StateProvider>
  )
}
