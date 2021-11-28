import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles=[
        {
            "source": {
                "id": "google-news-in",
                "name": "Google News (India)"
            },
            "author": "Livemint",
            "title": "Gautam Gambhir receives third threat e-mail from ISIS: Delhi Police",
            "description": "Before this, Gambhir received two emails on November 25. The Delhi Police had told ANI news agency that two e-mails threatening to kill former Indian cricketer were sent from Pakistan",
            "url": "https://www.livemint.com/news/india/gautam-gambhir-receives-third-threat-e-mail-from-isis-delhi-police-11638077811397.html",
            "urlToImage": "https://images.livemint.com/img/2021/11/28/600x338/1a578cb4-4cea-11ec-b72c-b1948978fab3_1638078510215_1638078522124.jpg",
            "publishedAt": "2021-11-28T05:50:17+00:00",
            "content": "Former Indian cricketer and current Bharatiya Janata Party (BJP) MP from east Delhi constituency, Gautam Gambhir has allegedly received a third threat e-mail from 'ISIS Kashmir', Delhi Police said on… [+1002 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Ananta Agarwal",
            "title": "India has an eroding image of tolerance in the West. A recent cricket loss proves why.",
            "description": "In India, a Hindu-majority country, ethno-religious tensions with its Muslim-minority, boiled over after defeat to Pakistan in the cricket T20 World Cup.",
            "url": "https://www.nbcnews.com/news/world/india-eroding-image-tolerance-west-recent-cricket-loss-proves-rcna6788",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-11/211126-pak-ind-cricket-mb-1439-9a0b46.jpg",
            "publishedAt": "2021-11-27T11:17:54Z",
            "content": "When India meets its archrival Pakistan on the cricket field, even those who do not follow the sport sit up and watch. But at the opening match of the T20 World Cup late last month, they were in for … [+8227 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor()
    {
        super();
        console.log("hello i am a News component constructor");
        this.state={
            articles:this.articles
        }
    }
    async componentDidMount()
    {
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=8130940a5e294922b72a25b5fea523a2";
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({
            articles:parsedData.articles
        })
    }
    render() {
        return (
            <div className="container my-3">
                <h3>NewsMonk --Headlines</h3>
                <div className="row">
                {this.state.articles.map((Element)=>{
                   return( <div className="col md-3" key={Element.url}>
                    <NewsItem title={Element.title?Element.title.slice(0,44):""} description={Element.description?Element.description.slice(0,88):""} imageurl={Element.urlToImage} newsUrl={Element.url}/>
                    </div>)
                })}
                </div>
            </div>
        )
    }
}
