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
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NEWS_DETAIL_FETCH_REQUESTED } from 'store/news/reducers'

export default () => {
  const dispatch = useDispatch();
  const { post, fetched_post } = useSelector(state => state.news, shallowEqual)

  let { id } = useParams()

  useEffect(() => {
    if (!fetched_post && id) {
      dispatch({type: NEWS_DETAIL_FETCH_REQUESTED, payload: { id }})
    }
  }, [fetched_post, dispatch, id])

  useEffect(() => {
    dispatch({ type: 'COLLAPSE_SIDEBAR', payload: false })
  }, [dispatch])

  return fetched_post && (
    <div className="newpage">
      <Backhome />
      <div className="newpage-title">
        {post.title}
      </div>
      <div className="newpage-post-by">
        By {post.author} |{' '}
        {moment(
          post.create_time,
          'YYYY-MM-DD HH:mm:ss'
        ).format('MMMM DD, YYYY')}
      </div>
      <div
        className="content-news-detail"
        dangerouslySetInnerHTML={{
          __html: post.body
        }}
      ></div>
      <div className="content-related">
        <div className="content-related-title">TIN LIÊN QUAN</div>
        <div className="content-related-items">
          {post
            .related_posts
            .map(
              (item, key) =>
              (
                <div className="news-item" key={key}>
                  <Link
                    to={`./${item.id}`}
                  >
                    <div className="news-item-content">
                      <div className="news-item-img">
                        <img
                          src={
                            item.thumbnail
                          }
                        />
                      </div>
                      <div className="news-item-text">
                        <div className="news-item-text-title">
                          {
                            item.title
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
