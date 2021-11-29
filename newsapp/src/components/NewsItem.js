import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let {title,description,imageurl,newsUrl}=this.props;
        return (
            <div>
               <div className="card my-2" style={{width:"18rem"}}>
  <img src={!imageurl?"https://c.ndtvimg.com/2021-11/m0t485jk_thailand-monkey-festival-reuters_625x300_28_November_21.jpg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}....</p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
            </div>
        )
    }
}
