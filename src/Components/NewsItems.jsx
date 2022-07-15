import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title, description, imagUrl, url} = this.props;
    return (
      <>
            <div className="card" style={{borderRadius: "30px"}}>
              <img src={imagUrl ? imagUrl : "https://heute-at-prod-images.imgix.net/2022/05/24/01d90e52-05a2-46d1-a4a9-5a0182aa1acb.jpeg?rect=0%2C333%2C4000%2C2000&w=1280&auto=format"} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={url} className="btn btn-primary" target="_blank">Go somewhere</a>
              </div>
            </div>
      </>
    )
  }
}
