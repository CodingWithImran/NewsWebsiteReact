import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title, description, imagUrl} = this.props;
    return (
      <>
            <div className="card" style={{borderRadius: "30px"}}>
              <img src={imagUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/newsdetails" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
      </>
    )
  }
}
