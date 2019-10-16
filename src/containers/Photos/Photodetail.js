/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import FsLightbox from 'fslightbox-react'
import Backhome from '../../components/Backhome'
import './photos.css'
import { useStateValue } from '../../State'

export default () => {
  const [{ images }] = useStateValue()

  const [toggler, setToggler] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const toggleImage = index => {
    setToggler(!toggler)
    setImageIndex(index)
  }

  return (
    <div className="photodetailpage">
      <Backhome/>
      <FsLightbox
        toggler={toggler}
        sources={images[imageIndex].images}
        key={imageIndex}
      />
      <div className="photo-details">
        {images.map((item, key) => (
          <div
            className="photo-details-item"
            key={key}
            onClick={() => toggleImage(key)}
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
