/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useState } from 'react'
// import { Link } from 'react-router-dom'
import FsLightbox from 'fslightbox-react';
import './photos.css'

export default () => {
  const [toggler, setToggler] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const toggleImage = (index) => {
    setToggler(!toggler)
    setImageIndex(index)
  }
  const hinhanh = [
    [
      'https://images.unsplash.com/photo-1519455953755-af066f52f1a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      'https://www.youtube.com/watch?v=xshEZzpS4CQ',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    ],
    [
      'https://i.imgur.com/fsyrScY.jpg',
      'https://www.youtube.com/watch?v=xshEZzpS4CQ',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    ],
    [
      'https://i.imgur.com/fsyrScY.jpg',
      'https://www.youtube.com/watch?v=xshEZzpS4CQ',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    ]
  ]
  return (
    <div className="photodetailpage">
      <FsLightbox
        toggler={ toggler }
        sources={ hinhanh[imageIndex] }
        key={ imageIndex }
      />
      <div className="photo-details">
        <div className="photo-details-item" onClick={ () => toggleImage(0)}>
          <img src={require('../../images/photodetail.jpg')} alt="facebook" />
          <div className="photo-text">
            <p className="photo-details-item-title">aic 2019 group stage day 1 </p>
            <p className="photo-details-item-total">95 photos</p>
          </div>
          
        </div>
        <div className="photo-details-item" onClick={ () => toggleImage(1)}>
          <img src={require('../../images/photodetail.jpg')} alt="facebook" />
          <div className="photo-text">
            <p className="photo-details-item-title">aic 2019 group stage day 1 </p>
            <p className="photo-details-item-total">95 photos</p>
          </div>
        </div>
        <div className="photo-details-item" onClick={ () => toggleImage(2)}>
          <img src={require('../../images/photodetail.jpg')} alt="facebook" />
          <div className="photo-text">
            <p className="photo-details-item-title">aic 2019 group stage day 1 </p>
            <p className="photo-details-item-total">95 photos</p>
          </div>
        </div>
        <div className="photo-details-item">
          <img src={require('../../images/photodetail.jpg')} alt="facebook" />
          <div className="photo-text">
            <p className="photo-details-item-title">aic 2019 group stage day 1 </p>
            <p className="photo-details-item-total">95 photos</p>
          </div>
        </div>
        <div className="photo-details-item">
          <img src={require('../../images/photodetail.jpg')} alt="facebook" />
          <div className="photo-text">
            <p className="photo-details-item-title">aic 2019 group stage day 1 </p>
            <p className="photo-details-item-total">95 photos</p>
          </div>
        </div>
        <div className="photo-details-item">
          <img src={require('../../images/photodetail.jpg')} alt="facebook" />
          <div className="photo-text">
            <p className="photo-details-item-title">aic 2019 group stage day 1 </p>
            <p className="photo-details-item-total">95 photos</p>
          </div>
        </div>
        <div className="photo-details-item">
          <img src={require('../../images/photodetail.jpg')} alt="facebook" />
          <div className="photo-text">
            <p className="photo-details-item-title">aic 2019 group stage day 1 </p>
            <p className="photo-details-item-total">95 photos</p>
          </div>
        </div>
        <div className="photo-details-item">
          <img src={require('../../images/photodetail.jpg')} alt="facebook" />
          <div className="photo-text">
            <p className="photo-details-item-title">aic 2019 group stage day 1 </p>
            <p className="photo-details-item-total">95 photos</p>
          </div>
        </div>
      </div>
    </div>
  )
}
