/*
 * Created on Wed Oct 01 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React from 'react'
import { Provider } from "react-redux";
import './App.css'
import store from './store'
import Main from './Main'

export default function() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
