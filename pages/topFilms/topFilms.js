//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
     films: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this;
    fetch("http://api.douban.com/v2/movie/top250").then(function(response) {
      response.json().then(function (data) {
        console.log(data);
        that.setData({
          films: data.subjects
        })
      })
    });
  }
})
