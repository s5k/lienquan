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

export default ({ match }) => {
  library.add(fab, faArrowUp, faFacebookSquare, faYoutube, faImage)

  return (
    <div className="photospage">
      <div className="scroll-up-menu">
        <Link to="/teams">
          <img
            src={
              'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/prev-button.png'
            }
            alt="prev-button"
          />
        </Link>
      </div>
      <h3 className="title-teams">ẢNH VÀ VIDEO</h3>
      <div className="photo-menu">
        <div className="photo-item">
          <a href=" https://www.facebook.com/pg/caothuLQM" target="blank">
            <img
              src={
                'https://cdn.vn.garenanow.com/web/kg/aic2019/images/facebook.jpg'
              }
              alt="facebook"
            />
            <div className="photo-text">
              <div className="photo-icon">
                <img
                  src={
                    'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/fb-icon.png'
                  }
                  alt="facebook"
                />
              </div>
              <div className="photo-text-content">
                <p className="title-photo-menu">Fanpage eSports</p>
                <p>Tham gia sự kiện nhận quà</p>
              </div>
            </div>
          </a>
        </div>
        <div className="photo-item">
          <Link to="./media/photos">
            <img
              src={
                'https://cdn.vn.garenanow.com/web/kg/aic2019/images/photo-albums.jpg'
              }
              alt="photoalbums"
            />
            <div className="photo-text">
              <div className="photo-icon">
                <img
                  src={
                    'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/picture.png'
                  }
                  alt="albums"
                />
              </div>
              <div className="photo-text-content">
                <p className="title-photo-menu">Album ảnh</p>
                <p>Những hình ảnh mới nhất</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="photo-item">
          <Link to="./media/videos">
            <img
              src={
                'https://cdn.vn.garenanow.com/web/kg/aic2019/images/match-video.jpg'
              }
              alt="photovideo"
            />
            <div className="photo-text">
              <div className="photo-icon">
                <img
                  src={
                    'https://cdn.vn.garenanow.com/web/kg/aic2019/images/icons/youtube-photos.png'
                  }
                  alt="video"
                />
              </div>
              <div className="photo-text-content">
                <p className="title-photo-menu">Videos</p>
                <p>Những nội dung HOT nhất</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="company-info">
        <div className="logo-partner">
          <img
            src={
              'https://cdn.vn.garenanow.com/web/kg/aic2019/images/partner.png'
            }
            alt="logo partner"
          />
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
