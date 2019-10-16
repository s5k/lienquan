/*
 * Created on Thu Oct 10 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import React, { useState, useEffect, useRef } from 'react'

export default ({ children, loading }) => {
  const [threeDots, setDots] = useState('...')

  function useInterval(callback, delay) {
    const savedCallback = useRef()

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    }, [delay])
  }

  useInterval(
    () => {
      threeDots.length === 3 ? setDots('.') : setDots(threeDots + '.')
    },
    loading ? 500 : null
  )

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
