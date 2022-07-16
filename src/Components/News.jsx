import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    this.setState({loading: true})
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5d79a230f6ad4ea5a067d4fab4bd7e57&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,
    loading: false
    })
  }
  handlepreClick = async () => {
    console.log(this.state.totalResults)   
    this.setState({loading: true})
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5d79a230f6ad4ea5a067d4fab4bd7e57&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData =await data.json();
        this.setState({
           articles: parsedData.articles, 
          page: this.state.page-1,
          loading: false
        })
  }
  handleNextClick = async () => {
    this.setState({loading: true})
    console.log(this.state.totalResults)   
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5d79a230f6ad4ea5a067d4fab4bd7e57&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData =await data.json();
      if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

      }
    else{
      this.setState(
        { articles: parsedData.articles,
          page: this.state.page+1,
          loading: false
        }
        
        )
    }  
  }
  render() {
    return (
      <>
        <div className="container">
          <h1 className='text-center my-3'>Latest News & Headlines</h1>
          <Spinner loader = {this.state.loading} />
          <div className="row">
            {!this.state.loading && this.state.articles.map((element, index) => {
              return (
                <>
                  <div className="col-md-4 my-3">
                    <NewsItems title={element.title ? element.title.slice(0, 45) : ""} description={element.title ? element.title.slice(0, 88) : ""} imagUrl={element.urlToImage} url={element.url} />
                  </div>
                </>
              )
            })}
          </div>
          <div className="my-3 d-flex justify-content-between">
            <button className="btn btn-primary" disabled = {this.state.page <= 1} type="button" onClick={this.handlepreClick}>&laquo; Previous</button>
            <button className="btn btn-primary" disabled = {this.state.page > Math.ceil(this.state.totalResults/20)}  type="button" onClick={this.handleNextClick}>Next &raquo;</button>
          </div>
        </div>
      </>

    )
  }
}
