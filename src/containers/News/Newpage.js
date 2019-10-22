/*
 * Created on Thu Oct 10 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import * as moment from 'moment'

import Backhome from '../../components/Backhome'
import './news.css'
import { useStateValue } from '../../State'

export default () => {
  const [{ posts }, dispatch] = useStateValue()

  let { id } = useParams()

  useEffect(() => {
    dispatch({
      type: 'COLLAPSE_SIDEBAR',
      payload: false
    })
  }, [dispatch])

  return (
    <div className="newpage">
      <Backhome />
      <div className="newpage-title">
        {posts.filter(item => item.id === parseInt(id))[0].title}
      </div>
      <div className="newpage-post-by">
        By Son.nguyen.97 |{' '}
        {moment(
          posts.filter(item => item.id === parseInt(id))[0].create_time,
          'HH:mm:ss - DD/MM/YYYY'
        ).format('MMMM DD, YYYY')}
      </div>
      <div
        className="content-news-detail"
        dangerouslySetInnerHTML={{
          __html: posts.filter(item => item.id === parseInt(id))[0].body
        }}
      ></div>
      <div className="content-related">
        <div className="content-related-title">TIN LIÊN QUAN</div>
        <div className="content-related-items">
          {posts
            .filter(item => item.id === parseInt(id))[0]
            .related_posts.split(',')
            .map(
              (itemId, key) =>
                posts.filter(item => item.id === parseInt(itemId))[0] && (
                  <div className="news-item" key={key}>
                    <Link
                      to={`./${
                        posts.filter(item => item.id === parseInt(itemId))[0].id
                      }`}
                    >
                      <div className="news-item-content">
                        <div className="news-item-img">
                          <img
                            src={
                              posts.filter(
                                item => item.id === parseInt(itemId)
                              )[0].thumbnail
                            }
                          />
                        </div>
                        <div className="news-item-text">
                          <div className="news-item-text-title">
                            {
                              posts.filter(
                                item => item.id === parseInt(itemId)
                              )[0].title
                            }
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  )
}
