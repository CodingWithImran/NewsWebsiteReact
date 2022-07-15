import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": "Vithushan Ehantharajah",
      "title": "July 14 marks the moment Reece Topley moved to the top of the English ODI game - ESPNcricinfo",
      "description": "A man who couldn't have been further from England's 2019 World Cup win rises to the occasion",
      "url": "https://www.espncricinfo.com/story/eng-vs-ind-2nd-odi-lords-july-14-marks-the-moment-reece-topley-moved-to-the-top-of-the-english-odi-game-1324809",
      "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/342600/342657.6.jpg",
      "publishedAt": "2022-07-14T22:32:31Z",
      "content": "AnalysisA man who couldn't have been further from England's 2019 World Cup win rises to the occasion\r\nReece Topley leaps for joy  •  AFP via Getty Images\r\nThe throwbacks on social media began pretty … [+5299 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": "Nagraj Gollapudi",
      "title": "Rohit Sharma bats for Virat Kohli again amid 'slump' talk: 'He does not need reassurance' - ESPNcricinfo",
      "description": "\"A player like him, who has won so many matches, needs only one or two good innings to bounce back\"",
      "url": "https://www.espncricinfo.com/story/eng-vs-ind-2nd-odi-rohit-sharma-bats-for-virat-kohli-again-amid-slump-talk-he-does-not-need-reassurance-1324808",
      "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/342600/342663.6.jpg",
      "publishedAt": "2022-07-14T21:29:00Z",
      "content": "Kohli, Bumrah, Chahal rested for T20Is in West Indies"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": "Andrew Miller",
      "title": "Rob Key pleased that 'bet' on Brendon McCullum has hit the Test jackpot - ESPNcricinfo",
      "description": "Director of cricket vindicated by buy-in from players and public after four Test wins in a row",
      "url": "https://www.espncricinfo.com/story/england-s-test-reboot-rob-key-pleased-that-bet-on-brendon-mccullum-has-hit-the-test-jackpot-1324786",
      "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/342600/342654.6.jpg",
      "publishedAt": "2022-07-14T19:24:31Z",
      "content": "NewsDirector of cricket vindicated by buy-in from players and public after four Test wins in a row\r\nRob Key (right) appointed Brendon McCullum as England's Test coach back in May  •  Getty Images\r\nRo… [+4895 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cricbuzz"
      },
      "author": null,
      "title": "Jamie Overton stars as Surrey reclaim top spot | Cricbuzz.com - Cricbuzz - Cricbuzz",
      "description": "Elsewhere, Kerrigan, Keogh bag five apiece to bowl Northamptonshire to victory",
      "url": "https://www.cricbuzz.com/cricket-news/123072/jamie-overton-stars-as-surrey-reclaim-top-spot",
      "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c236039/jamie-overton-bagged-a-six-wic.jpg",
      "publishedAt": "2022-07-14T18:31:33Z",
      "content": "Jamie OVerton bagged a six-wicket haul in the second innings against Yorkshire © Getty\r\nDIVISION ONE\r\nNorthamptonshire vs Kent\r\nSimon Kerrigan (5-43) and Rob Keogh (5-31) took five-fers each as North… [+3531 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Athletic"
      },
      "author": "Pol Ballus",
      "title": "Barcelona tell Frenkie de Jong to leave and join Manchester United - The Athletic",
      "description": "Barcelona have told Frenkie de Jong they want him to leave the club to join Manchester United, The Athletic understands.It is understood that Barcelona’s...",
      "url": "https://theathletic.com/news/barcelona-frenkie-de-jong-manchester-united/l20HINoXD3SG/",
      "urlToImage": "https://cdn-media.theathletic.com/l20HINoXD3SG_l20HINoXD3SG_0W2Gq75NVSw0_original_1440x960.png",
      "publishedAt": "2022-07-14T18:23:43Z",
      "content": "Barcelona have told Frenkie de Jong they want him to leave the club to join Manchester United, The Athletic understands.\r\nIt is understood that Barcelonas hierarchy have informed De Jong that they ne… [+1924 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cricbuzz"
      },
      "author": null,
      "title": "BIG WICKET! Rohit departs for a duck - Cricbuzz",
      "description": "Topley to Rohit, out Lbw!! Rohit is given out on the field. Not sure if the umpire has given him caught-behind or LBW. Rohit is going to challenge it though. Okay so looks like he's been given LBW. And there's three-reds on ball-tracking to back the original …",
      "url": "https://www.cricbuzz.com/cricket-videos/46999/big-wicket-rohit-departs-for-a-duck",
      "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c238876/cms-img.jpg",
      "publishedAt": "2022-07-14T17:43:29Z",
      "content": "✖\r\n<ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li… [+402 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Sports Desk",
      "title": "IND vs ENG 2nd ODI Live Score Updates: Rohit Sharma falls early, Virat Kohli in the middle - The Indian Express",
      "description": "IND vs ENG 2nd ODI Live Cricket Score Streaming Online Today Match, Sony Six, Sony LIV Live: England vs India live stream from Lord's.",
      "url": "https://indianexpress.com/article/sports/cricket/india-vs-england-2nd-odi-live-score-updates-8027743/",
      "urlToImage": "https://images.indianexpress.com/2022/07/WhatsApp-Image-2022-07-12-at-1.42.34-PM.jpeg",
      "publishedAt": "2022-07-14T16:50:40Z",
      "content": "IND vs ENG 2nd ODI Live Cricket Score Streaming Online Today Match Updates: Here are the 2 squads\r\nEngland Squad: Jason Roy, Jonny Bairstow, Joe Root, Ben Stokes, Jos Buttler(w/c), Liam Livingstone, … [+403 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cricbuzz"
      },
      "author": null,
      "title": "Zimbabwe see off USA, circumvent Netherlands in semi-final | Cricbuzz.com - Cricbuzz - Cricbuzz",
      "description": "The hosts will now take on Papua New Guinea in their semi final at Queens",
      "url": "https://www.cricbuzz.com/cricket-news/123071/zimbabwe-see-off-usa-circumvent-netherlands-in-semi-final-cricbuzzcom",
      "urlToImage": "//m.cricbuzz.com/a/img/v1/600x400/i1/c238849/an-accelerating-82-from-sikandar-raza-saw-zimbabwe-surge-to-185-6.jpg",
      "publishedAt": "2022-07-14T16:06:02Z",
      "content": "Hosts Zimbabwe closed out a 46-run win over USA in their final group match at the T20 WC Global Qualifier B at Queens Club to take the top-spot in Group A and set up a decisive semi-final against Pap… [+6465 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Barca Blaugranes"
      },
      "author": "Gill Clark",
      "title": "Ousmane Dembele: Barçelona was always my first option - Barca Blaugranes",
      "description": "The forward has signed a new contract until 2024",
      "url": "https://www.barcablaugranes.com/fc-barcelona-transfer-rumors-news/2022/7/14/23215957/ousmane-dembele-barcelona-was-always-my-first-option",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/llZesqzCZF3mfPvup5iKphgpYQc=/0x11:2081x1101/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23827096/1241894470.jpg",
      "publishedAt": "2022-07-14T16:00:00Z",
      "content": "Ousmane Dembele has said that staying at Barcelona was always his top priority after putting pen to paper on a new two-year deal at the club.\r\nThe Frenchmans future has been the subject of speculatio… [+1676 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cricbuzz"
      },
      "author": null,
      "title": "'Whoever performs better will play': Nasum not worried about competition with seniors | Cricbuzz.com - Cricbuzz - Cricbuzz",
      "description": "The left-arm spinner made his mark with a player-of-the-match winning performance in the second ODI vs West Indies",
      "url": "https://www.cricbuzz.com/cricket-news/123069/whoever-performs-better-will-play-nasum-not-worried-about-competition-with-seniors",
      "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c238838/nasum-took-3-for-19-in-the-sec.jpg",
      "publishedAt": "2022-07-14T14:50:35Z",
      "content": "Nasum took 3 for 19 in the second ODI against West Indies. © AFP\r\nBangladesh left-arm spinner Nasum Ahmed said the switch from T20 to 50-over cricket wasn't too daunting for him as he has a similar r… [+2849 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": "ESPNcricinfo staff",
      "title": "Shohidul Islam banned for 10 months for failing doping test - ESPNcricinfo",
      "description": "A urine sample provided by Shohidul contained Clomifene, which is on the WADA's prohibited list",
      "url": "https://www.espncricinfo.com/story/shohidul-islam-banned-for-10-months-for-failing-doping-test-1324756",
      "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/330300/330320.3.jpg",
      "publishedAt": "2022-07-14T14:47:13Z",
      "content": "The ICC said Shohidul accepted that he had \"failed to satisfy the high levels of personal responsibility incumbent upon him as an international cricketer\"  •  Walton"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Shivani Naik",
      "title": "Husband-coach Kashyap on Saina Nehwal's CWG non-selection: 'It's about your own people treating you like s*#@.' - The Indian Express",
      "description": "Kashyap says that Nehwal's omission from the Badminton contingent going to Birmingham has led to frequent breakdowns for the former World No. 1.",
      "url": "https://indianexpress.com/article/sports/badminton/husband-coach-kashyap-on-saina-nehwals-cwg-non-selection-8028993/",
      "urlToImage": "https://images.indianexpress.com/2022/07/saina-nehwal-1.jpg",
      "publishedAt": "2022-07-14T14:44:46Z",
      "content": "For Saina Nehwal, her non-selection for the Commonwealth Games was not about desperation to play at the Games: she has two gold medals from 2010 and 2018 editions. “It’s about the amount of disrespec… [+4381 chars]"
    },
    {
      "source": {
        "id": "four-four-two",
        "name": "FourFourTwo"
      },
      "author": "Greg Lea",
      "title": "Manchester United report: Red Devils take big step towards FINALLY landing transfer target - FourFourTwo",
      "description": "Manchester United are getting closer to signing one of their key transfer targets",
      "url": "https://www.fourfourtwo.com/news/manchester-united-report-red-devils-take-big-step-to-finally-land-transfer-target",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/aspN5dfCuDNtSCS63aHo3n-1200-80.jpg",
      "publishedAt": "2022-07-14T14:36:06Z",
      "content": "Manchester United are close to completing the signing of Lisandro Martinez, according to reports.\r\nThe Ajax (opens in new tab) centre-back is one of Erik ten Hag's top transfer targets and United (op… [+1750 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": "NDTV Sports Desk",
      "title": "Stars Descend At Lord's: MS Dhoni, Sachin Tendulkar, Sourav Ganguly, Harbhajan Singh, Suresh Raina I.. - NDTV Sports",
      "description": "Several former Indian cricket team stars including MS Dhoni, Sourav Ganguly, Sachin Tendulkar, Harbhajan Singh, Suresh Raina were present at the Lord's for the second ODI",
      "url": "https://sports.ndtv.com/england-vs-india-2022/ms-dhoni-sachin-tendulkar-sourav-ganguly-harbhajan-singh-suresh-raina-stars-descend-at-lords-see-pics-3158471",
      "urlToImage": "https://c.ndtvimg.com/2022-07/tfjbrc9_dhoni-raina_625x300_14_July_22.jpg",
      "publishedAt": "2022-07-14T14:29:32Z",
      "content": "The second ODI between India and England at Lord's on Thursday will be a great opportunity for the Rohit Sharma-led visitors to seal the series. India had won the first ODI of the three-match contest… [+2781 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sportskeeda"
      },
      "author": "Sportskeeda",
      "title": "Live Cricket Score | Bologna Cricket Club vs Trentino Aquila Live Score & Commentary | BCC vs TA Scorecard - Sportskeeda",
      "description": "Bologna Cricket Club vs Trentino Aquila Live Score - Catch live cricket score, ball by ball commentary & highlights of BCC vs TA,  Online. Also find latest news, match highlights, twitter reactions, photos & videos at sportskeeda.com",
      "url": "https://www.sportskeeda.com/live-cricket-score/bologna-cricket-club-vs-trentino-aquila-match-16-14-july-2022",
      "urlToImage": null,
      "publishedAt": "2022-07-14T14:15:45Z",
      "content": "Bologna CC 93/5 (9.3) beat Trentino Aquila by 5 wickets Umar Gujjar 40(22) | Tasin Mostafa 21*(10)Sadaqat Ali 2-28(2) | Muhammad Kashif 1-16(2) \r\nWhew! An absolute cracker of a contest and it is Most… [+900 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cricbuzz"
      },
      "author": null,
      "title": "Netherlands cruise into semifinals, PNG scrape through on net run rate | Cricbuzz.com - Cricbuzz - Cricbuzz",
      "description": "The Netherlands registered a crushing win over Uganda while PNG got through on NRR as Hong Kong took 12 balls too many to chase the 186-run target",
      "url": "https://www.cricbuzz.com/cricket-news/123068/netherlands-cruise-into-semifinals-png-scrape-through-on-net-run-rate",
      "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c238799/max-odowd-and-tom-cooper-star.jpg",
      "publishedAt": "2022-07-14T13:17:36Z",
      "content": "Max O'Dowd and Tom Cooper starred with the bat for the Netherlands © Getty\r\nThe Netherlands cruised into the T20 World Cup Global Qualifier semi-finals with a crushing win over Uganda at Queens club.… [+8838 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Sports Desk",
      "title": "Ex-India cricketer's 5-word reaction to veteran journalist's tweet on Virat Kohli - Hindustan Times",
      "description": "Hemang Badani, a staple of the Indian one-day teams in the early 2000s, is one of the few who has chosen to come out in Kohli’s defence. He said it is only a matter of time before the former Indian captain finds himself back in a vein of good form, and back a…",
      "url": "https://www.hindustantimes.com/cricket/exindian-cricketer-s-5-word-reaction-to-veteran-journalist-s-tweet-on-virat-kohli-101657801690818.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/07/14/1600x900/ANI-20220709299-0_1657802730005_1657802730005_1657802834968_1657802834968.jpg",
      "publishedAt": "2022-07-14T13:08:27Z",
      "content": "Virat Kohli has been going through a lean patch in recent times. Runs have strangely deserted him. It is a poor which has seeped through all forms of the game for him, and has exposed him to plenty o… [+1498 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "India Today"
      },
      "author": null,
      "title": "I want Babar Azam to score 3000 to 4000 more runs than Virat Kohli in every format: Imam-ul-Haq - India Today",
      "description": "The 27-year-old Babar Azam has scored nearly 10,000 runs for Pakistan and has been a fulcrum of their batting lineup over the last few years.",
      "url": "https://www.indiatoday.in/sports/cricket/story/i-want-babar-azam-to-score-3000-to-4000-more-runs-than-virat-kohli-in-every-format-imam-ul-haq-1975639-2022-07-14",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/RTXIZLYZ-647x363.png?sNHRRbiTIfTAsUB5ghEtbYQNTB9688YQ",
      "publishedAt": "2022-07-14T12:58:44Z",
      "content": "Pakistan batter Imam-ul-Haq said that he wants Babar Azam to score three to four thousand more runs than former Indian skipper Virat Kohli. At the age of 27, the right-handed Babar has scored nearly … [+1409 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "Video: Kickboxer from Mysuru, who went into coma after suffering grievous injury in ring, dies - Times of India",
      "description": "An FIR has been registered at the Jnanabharathi police station in this connection.",
      "url": "https://timesofindia.indiatimes.com/city/bengaluru/karnataka-kickboxer-from-mysuru-who-went-into-coma-after-suffering-grievous-injury-in-ring-dies/articleshow/92878762.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-92879552,width-1070,height-580,imgsize-16536,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2022-07-14T12:54:00Z",
      "content": "Kick boxer collapses after being hit by a punch in a boxing ring. He later succumbed to injuries at a hospital in https://t.co/bIZdmwXNDP\r\n— TOI Bengaluru (@TOIBengaluru) 1657804596000"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Sports Desk",
      "title": "How Wasim Akram schooled struggling Brett Lee, set 4-ball trap for Kallis - Hindustan Times",
      "description": "Brett Lee recalled an interesting episode involving Wasim Akram and how he took just four deliveries to get the better of renowned all-rounder Jacques Kallis while others, including the Australian, struggled.",
      "url": "https://www.hindustantimes.com/cricket/how-wasim-akram-schooled-struggling-brett-lee-set-four-ball-trap-for-jacques-kallis-101657795209408.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/07/14/1600x900/WhatsApp_Image_2022-07-14_at_17.41.37_1657800734429_1657800751371_1657800751371.jpeg",
      "publishedAt": "2022-07-14T12:20:22Z",
      "content": "The legendary Wasim Akram is regarded as one of the best swing bowlers the game has ever seen. Such was dominance that he went to scalp over 500 wickets in ODIs and currently stands as the second hig… [+2706 chars]"
    }
  ]
  constructor() {
    super();
    console.log("this is constructor");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?category=business&apiKey=5d79a230f6ad4ea5a067d4fab4bd7e57&pageSize=5";
    let data = await fetch(url);
    let dataPromised = await data.json();
    this.setState({articles : dataPromised.articles})
  }
  render() {
    return (
      <>
        <div className="container">
          <h1 className='text-center my-3'>Latest News & Headlines</h1>
          <div className="row">
            {this.state.articles.map((element, index) => {
              return (
                <>
                  <div className="col-md-4 my-3">
                    <NewsItems title={element.title ? element.title.slice(0, 45) : ""} description={element.title ? element.title.slice(0, 88) : ""} imagUrl={element.urlToImage} url = {element.url}/>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </>

    )
  }
}
