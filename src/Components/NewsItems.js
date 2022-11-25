import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title, discription, imageUrl, url, author, date, source}= this.props;
    return (
      <div>
         <div className="card" style={{width: "18rem"}}>
           <img src={!imageUrl?"https://spectrumnews-web-assets.s3.amazonaws.com/wp-content/uploads/2022/05/27105105/844_CommunityNL.jpg" :imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{discription}</p>
              <span className="badge bg-primary">{source}</span>
              <p className="card-text"><small className="text-danger">By {author? author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
              <a href={url} rel="noreferrer" target="_blank" className="btn btn-dark">More</a>
            </div>
         </div>
      </div>
    )
  }
}
