/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import './photos.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  fab,
  faFacebookSquare,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { faArrowUp, faImage } from '@fortawesome/free-solid-svg-icons'
import photoFace from '../../images/facebook.jpg'
import photoAlbums from '../../images/photo-albums.jpg'
import photoVideo from '../../images/match-video.jpg'

export default ({ match }) => {
  library.add(fab, faArrowUp, faFacebookSquare, faYoutube, faImage)

  return (
    <div className="photospage">
      <div className="scroll-up-menu">
        <Link to="/teams">
          <img src={require('../../images/icons/prev-button.png')} alt="prev-button"/>
        </Link>
      </div>
      <h3 className="title-teams">PHOTO AND VIDEO</h3>
      <div className="photo-menu">
      
        <div className="photo-item">
          <Link to="#">
            <img src={photoFace} alt="facebook" />
            <div className="photo-text">
              <div className="photo-icon">
                <img src={require('../../images/icons/fb-icon.png')} alt="facebook"/>
              </div>
              <div className="photo-text-content">
                <p className="title-photo-menu">VISIT OUR FANPAGE</p>
                <p>AND EARN REWARD</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="photo-item">
          <Link to="./media/photos">
            <img src={photoAlbums} alt="photoalbums" />
            <div className="photo-text">
              <div className="photo-icon">
                <img src={require('../../images/icons/picture.png')} alt="albums" />
              </div>
              <div className="photo-text-content">
                <p className="title-photo-menu">PHOTO ALBUMS</p>
                <p>PLAYER, VENUE AND MORE</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="photo-item">
          <Link to="./media/videos">
            <img src={photoVideo} alt="photovideo" />
            <div className="photo-text">
              <div className="photo-icon">
                <img src={require('../../images/icons/youtube-photos.png')} alt="video"/>
              </div> 
              <div className="photo-text-content">
                <p className="title-photo-menu">WATCH VIDEO</p>
                <p>FIND OUT WHAT'S GOING ON</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="company-info">
        <div className="logo-partner">
          <img src={require('../../images/partner.png')} alt="logo partner" />
        </div>
        <div className="company-address">
          <p>CÔNG TY CỔ PHẦN GIẢI TRÍ VÀ THỂ THAO ĐIỆN TỬ VIỆT NAM</p>
          <p>
            Văn phòng đại diện: Tầng 29, tòa nhà Trung tâm Lotte Hà Nội, số 54,
            đường Liễu Giai, Phường Cống Vị, Quận Ba Đình, Thành phố Hà Nội,
            Việt Nam.
          </p>
          <p>Điện thoại: 024 73053939</p>
        </div>
      </div>
    </div>
  )
}
