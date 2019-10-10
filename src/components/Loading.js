/*
 * Created on Thu Oct 10 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React from 'react'

export default ({ children, loading }) => {
  return (
    <>
      {loading === true ? (
        <h1 className="text-center">Vui lòng đợi...</h1>
      ) : (
        children
      )}
    </>
  )
}
