/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import FsLightbox from 'fslightbox-react'
import Backhome from '../../components/Backhome'
import './photos.css'
import { useStateValue } from '../../State'

export default () => {
  const [{ images }, dispatch] = useStateValue()

  const [state, setState] = useState({ toggler: false, imageVideo: 0 })

  const toggleVideo = index => {
    setState({ toggler: !state.toggler, imageVideo: index })
  }

  useEffect(() => {
    dispatch({
      type: 'COLLAPSE_SIDEBAR',
      payload: false
    })
  }, [dispatch])

  return (
    <div className="photodetailpage">
      <Backhome />
      <FsLightbox
        toggler={state.toggler}
        sources={images[state.imageVideo].images.filter(item =>
          encodeURIComponent(item)
        )}
        type="image"
        slide={0}
      />
      <div className="photo-details">
        {images.map((item, key) => (
          <div
            className="photo-details-item"
            key={key}
            onClick={() => toggleVideo(key)}
          >
            <img src={item.images[0]} alt="facebook" />
            <div className="photo-text">
              <p className="photo-details-item-title">{item.name}</p>
              <p className="photo-details-item-total">
                {item.images.length} photos
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
