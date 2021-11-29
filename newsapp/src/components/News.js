import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor()
    {
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
    async componentDidMount()
    {
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=8130940a5e294922b72a25b5fea523a2&page=1&pagesize=20";
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults
        })
    }
    handlepreviousclick=async ()=>{
        console.log('Previous is clicked')
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=8130940a5e294922b72a25b5fea523a2&page=${this.state.page-1}&pagesize=20`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log()
        this.setState({
            articles:parsedData.articles,
            page:this.state.page-1
           
        })
        
    }
    handlenextclick=async ()=>{
        console.log('Next is clicked')
        if(this.state.page+1> Math.ceil(this.state.totalResults/20))
        {

        }
        else
        {
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=8130940a5e294922b72a25b5fea523a2&page=${this.state.page+1}&pagesize=20`;
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({
            articles:parsedData.articles,
            page:this.state.page+1,
        })
    }
    }
   
  

    render() {
        return (
            <div className="container my-3">
                <h3 className="text-center">NewsMonk --Headlines</h3>
                <div className="row">
                {this.state.articles.map((Element)=>{
                   return( <div className="col md-3" key={Element.url}>
                    <NewsItem title={Element.title?Element.title.slice(0,44):""} description={Element.description?Element.description.slice(0,88):""} imageurl={Element.urlToImage} newsUrl={Element.url}/>
                    </div>)
                })}
                </div>
                <div className="container d-flex justify-content-between">
<button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlepreviousclick}> &larr; Previous</button>
<button type="button" disabled={this.state.page+1> Math.ceil(this.state.totalResults/20)} className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
</div>
            </div>
        )
    }
}
