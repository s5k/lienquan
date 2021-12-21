/*
 * Created on Wed Oct 09 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React, { createContext, useContext, useReducer } from 'react'
import { Provider } from "react-redux";

export const StateContext = createContext()

export const StateProvider = ({ store, children }) => (
  <Provider store={store}>
    {children}
  </Provider>
)
