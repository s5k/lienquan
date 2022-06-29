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
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { MEDIA_FETCH_REQUESTED } from 'store/media/reducers'

export default () => {
  const dispatch = useDispatch();
  const {photos, fetched} = useSelector(state => state.media, shallowEqual)
  const [index, setIndex] = useState(0)
  const [toggler, setToggler] = useState(false)
  const [firstTime, setFirstTime] = useState(true)

  const toggleVideo = index => {
    setFirstTime(true)
    setIndex(index)
    setToggler(!toggler)
  }

  useEffect(() => {
    if (!fetched) {
      dispatch({type: MEDIA_FETCH_REQUESTED})
    } else {
      dispatch({
        type: 'COLLAPSE_SIDEBAR',
        payload: false
      })
    }

    if (toggler === true && firstTime === false) setToggler(!toggler)

    if (firstTime === true) {
      setFirstTime(false)
    }
  }, [dispatch, fetched, toggler, firstTime])

  return fetched && (
    <div className="photodetailpage">
      <Backhome />
      {firstTime === false && (
        <FsLightbox
          toggler={toggler}
          sources={photos[index].images}
          type="image"
          key={index}
        />
      )}
      <div className="photo-details">
        {photos.map((item, key) => (
          <div
            className="photo-details-item"
            key={key}
            onClick={() => toggleVideo(key)}
          >
            <img src={`${item.images[0]}`} alt="facebook" />
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
