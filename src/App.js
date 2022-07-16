// 5d79a230f6ad4ea5a067d4fab4bd7e57
// https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=5d79a230f6ad4ea5a067d4fab4bd7e57

import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
export default class App extends Component {
  render() {
    return (
       <div>
          <Navbar />
          <News pageSize={5}/>
       </div>
    )
  }
}
