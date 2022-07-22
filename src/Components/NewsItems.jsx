import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title, description, imagUrl, url, author, date} = this.props;
    return (
      <>
            <div className="card" style={{borderRadius: "30px", position:"relative"}}>
            <h3 style={
              {
                position: "absolute",
    top: "-2px",
    right: "0",
    zIndex: "0"
              }
            }><span class="badge bg-secondary ">New</span></h3>
              <img src={imagUrl ? imagUrl : "https://heute-at-prod-images.imgix.net/2022/05/24/01d90e52-05a2-46d1-a4a9-5a0182aa1acb.jpeg?rect=0%2C333%2C4000%2C2000&w=1280&auto=format"} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={url} className="btn btn-primary" target="_blank">Go somewhere</a>
                <p className="card-text"><small class="text-muted">By {author} on {date}</small></p>
             </div>
            </div>
      </>
    )
  }
}
