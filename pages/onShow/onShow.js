// pages/onShow/onShow.js
let app = getApp();
let host = app.globalData.host;
let api = app.globalData.apis.ON_SHOW;
let curCount = 0;
const STEP = 15;
let TOTAL = 0;
let TOTAL_PAGES = 0;
let curPage = 0;
Page({
    data: {
        films: [],
        hiddenLoading: false
    },
    onLoad: function(options) {
        this.getFilms();
        // fetch(host + api, {
        //   headers: {
        //     "Content-Type": "json"
        //   }
        // }).then(function(response) {
        //   response.json().then(function (data) {
        //     that.setData({
        //       hiddenLoading: true
        //     })
        //     that.setData({
        //       films: data.subjects
        //     })
        //   })
        // });
    },
    toFilmDetailPage: function(event) {
      let film = event.currentTarget;
      console.log(film)
      let id = film.id;
      let title = film.dataset.title ;
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + id + '&title=' + title
      })
      console.log(event.currentTarget.id)
    },
    getFilms: function() {
      let that = this;
      wx.request({
          url: host + api,
          data: {
              start: curCount,
              count: STEP
          },
          header: {
              "Content-Type": "json"
          },
          success: function(res) {
              TOTAL = res.data.total;
              TOTAL_PAGES = Math.ceil(TOTAL / STEP);
              let films = that.data.films;
              let curFilms = films.concat(res.data.subjects);
              curCount += STEP;

              // 翻页
              curPage ++;
              that.setData({
                  hiddenLoading: true
              })
              that.setData({
                  films: curFilms
              })
          }
      });
    },
    onReachBottom: function() {
        console.log(curPage, TOTAL_PAGES);
        // 最后一页
        if(curPage == TOTAL_PAGES) return;
        this.setData({
          hiddenLoading: false
        })
        this.getFilms();
    },
    onReady: function() {
        // 页面渲染完成
    },
    onShow: function() {
        // console.log(MATH.random())
        // 页面显示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    }
})
