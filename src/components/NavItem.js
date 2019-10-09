/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React from 'react'
import { Route, Link } from 'react-router-dom'

export default function NavItem({ children, to, exact }) {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => (
        <li className={match ? 'active' : null}>
          <Link to={to}>{children}</Link>
        </li>
      )}
    />
  )
}
