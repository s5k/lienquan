/*
 * Created on Thu Oct 10 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React from 'react'

export default ({ error, children }) => {
  return (
    <>
      {error !== false ? (
        <div className="text-center">
          <h1>Đã có lỗi xảy ra</h1>
          <h3>{error}</h3>
        </div>
      ) : (
        children
      )}
    </>
  )
}
