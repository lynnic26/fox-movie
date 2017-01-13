// pages/detail/detail.js
let app = getApp();
const HOST = app.globalData.host;
let API = app.globalData.apis.DETAIL;
Page({
  data: {
      film: {
        "rating": {
            "max": 10,
            "average": 7.4,
            "stars": "40",
            "min": 0
        },
        "reviews_count": 295,
        "wish_count": 15063,
        "douban_site": "",
        "year": "2009",
        "images": {
            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p494268647.jpg",
            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p494268647.jpg",
            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p494268647.jpg"
        },
        "alt": "https://movie.douban.com/subject/1764796/",
        "id": "1764796",
        "mobile_url": "https://movie.douban.com/subject/1764796/mobile",
        "title": "机器人9号",
        "do_count": null,
        "share_url": "https://m.douban.com/movie/subject/1764796",
        "seasons_count": null,
        "schedule_url": "",
        "episodes_count": null,
        "countries": [
            "美国"
        ],
        "genres": [
            "动画",
            "冒险",
            "奇幻"
        ],
        "collect_count": 71713,
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1054395/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/51597.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/51597.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/51597.jpg"
            },
            "name": "伊利亚·伍德",
            "id": "1054395"
        }, {
            "alt": "https://movie.douban.com/celebrity/1016673/",
            "avatars": {
                "small": "https://img5.doubanio.com/img/celebrity/small/3996.jpg",
                "large": "https://img5.doubanio.com/img/celebrity/large/3996.jpg",
                "medium": "https://img5.doubanio.com/img/celebrity/medium/3996.jpg"
            },
            "name": "詹妮弗·康纳利",
            "id": "1016673"
        }, {
            "alt": "https://movie.douban.com/celebrity/1017907/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/55994.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/55994.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/55994.jpg"
            },
            "name": "约翰·C·赖利",
            "id": "1017907"
        }, {
            "alt": "https://movie.douban.com/celebrity/1036321/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/42033.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/42033.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/42033.jpg"
            },
            "name": "克里斯托弗·普卢默",
            "id": "1036321"
        }],
        "current_season": null,
        "original_title": "9",
        "summary": "机器人9号（伊利亚•伍德 Elijah Wood 饰）突然醒来，发现身边的世界充满危机，四处残败，一片末世景象。9号带着一个画有三个奇怪符号的圆形物体逃到街上，幸遇发明家机器人2号（马丁•兰道 Martin Landau 饰）给自己装上了声音，但2号却不幸被机器怪兽抓走。9号找到了老兵1号（克里斯托弗•普卢默 Christopher Plummer 饰）、机械工5号（约翰•雷利 John C. Reilly 饰）、疯癫画家6号（克里斯品•格拉夫 Crispin Glover 饰）和大力士8号（弗雷德•塔塔绍尔 Fred Tatasciore 饰）。9号与5号擅自出行援救2号，危急时被女武士7号（詹妮佛•康纳利 Jennifer Connelly 饰）救下，但无意中9号却令终极机器兽复活。带着自己从哪里来以及生存使命的问题，9号决定想尽办法制服机器兽，拯救全世界……©豆瓣",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1276787/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/1351678808.44.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/1351678808.44.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/1351678808.44.jpg"
            },
            "name": "申·阿克",
            "id": "1276787"
        }],
        "comments_count": 11600,
        "ratings_count": 57465,
        "aka": [
            "9：末世决战",
            "九",
            "Number 9",
            "机器人9号"
        ]
    },
    countries: '',
    tags: '',
    starWidth: '112px',
    summaryCollapse: true,
    summaryHeight: '140rpx'
  },
  formatData: function() {
    this.setData({
      countries: this.data.film.countries.join(','),
      tags: this.data.film.genres.join(','),
      starWidth: 112 * this.data.film.rating.average / 10 + 'px' 
    });
  },
  onLoad:function(options){
    // wx.showNavigationBarLoading();
    wx.setNavigationBarTitle({
       title: 'xxx'
       // title: options.title
    });
    this.formatData();
    // this.getFilm(1764796);
    // this.getFilm(options.id);
  },
  getFilm: function(id) {
    let that = this;
    wx.request({
      url: HOST + API + id,
      header: {
        'Content-type': 'json'
      },
      success: function(res) {
        console.log(res.data)
        that.setData({
          film: res.data
        })
      }
    });
  },
  toggleSummary: function() {
     this.setData({
         summaryCollapse: !this.data.summaryCollapse,
         summaryHeight: this.data.summaryCollapse? 'auto': '140rpx'
     })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})