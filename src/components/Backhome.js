import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
export default () => {
  library.add(fab, faHome, faArrowLeft)
  return (
    <div className="language">
      {/* <select className="select-language">
        <option defaultValue="english">North America (English)</option>
        <option defaultValue="vietnames">Vietnamese (Tiếng Việt)</option>
      </select> */}
      <div className="back-home">
        <a href="/">
          <div>
            <FontAwesomeIcon icon="home" />
          </div>
          <div className="home-left">
            <FontAwesomeIcon icon="arrow-left" /> HOME
          </div>
        </a>
      </div>
    </div>
  )
}