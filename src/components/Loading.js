/*
 * Created on Thu Oct 10 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React, { useState, useEffect } from 'react'

export default ({ children, loading }) => {
  const [threeDots, setDots] = useState('...')

  useEffect(() => {
    setInterval(() => {
      threeDots.length === 3 ? setDots('.') : setDots(threeDots + '.')
    }, 500)
  }, [setDots, threeDots])

  return (
    <>
      {loading === true ? (
        <h1 className="text-center">Vui lòng đợi{threeDots}</h1>
      ) : (
        children
      )}
    </>
  )
}
