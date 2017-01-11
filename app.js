//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){

  },
  globalData:{
     host: 'https://api.douban.com/',
     apis: {
        'ON_SHOW': '/v2/movie/in_theaters',
        'TOP_RANK': '/v2/movie/top250',
        'COMING_SOOM': '/v2/movie/new_movies'
     }  
  }
})