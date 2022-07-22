import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
      country : "in",
      pageSize : 8,
      category: "business"
  }
  static propTypes = {
    country : PropTypes.string,
    category : PropTypes.string,
    pageSize : PropTypes.number

  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
   async updateNews(){
    this.setState({loading: true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5d79a230f6ad4ea5a067d4fab4bd7e57&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,
    loading: false
    })
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlepreClick = async () => {
    this.setState({loading: true})
    this.setState({
      page: this.state.page - 1,
    })
    this.updateNews();
  }
  handleNextClick = async () => {
    this.setState({loading: true, page: this.state.page + 1} )
      if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

      }
    else{
      this.updateNews();
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
                    <NewsItems title={element.title ? element.title.slice(0, 45) : ""} description={element.title ? element.title.slice(0, 88) : ""} imagUrl={element.urlToImage} url={element.url} author = {!element.author ? "Unknown" : element.author} date = {element.publishedAt}/>
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
