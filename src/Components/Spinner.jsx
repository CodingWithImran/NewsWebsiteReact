import React, { Component } from 'react'
import loader from '../spinner.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
          {this.props.loader && <img src={loader} alt="" style={{height: "50px", width: "50px"}}/>}
      </div>
    )
  }
}
