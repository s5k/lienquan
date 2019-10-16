/*
 * Created on Thu Oct 10 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Backhome from '../../components/Backhome'
import './news.css'
import { useStateValue } from '../../State'

export default () => {
  const [{ posts }] = useStateValue()

  let { id } = useParams()

  return (
    <div className="newpage">
      <Backhome/>
      <div
        className="content-news-detail"
        dangerouslySetInnerHTML={{
          __html: posts.filter(item => item.id === parseInt(id))[0].body
        }}
      ></div>
      <div className="content-related">
        <div className="content-related-title">RELATED ARTICLES</div>
        <div className="content-related-items">
          {posts
            .filter(item => item.id === parseInt(id))[0]
            .related_posts.split(',')
            .map((item, key) => (
              <div className="news-item" key={key}>
                <Link to={`./${item.id}`}>
                  <div className="news-item-content">
                    <div className="news-item-img">
                      <img src={item.thumbnail} />
                    </div>
                    <div className="news-item-text">
                      <div className="news-item-text-title">{item.title}</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
