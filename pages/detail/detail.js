// pages/detail/detail.js
let app = getApp();
const HOST = app.globalData.host;
let API = app.globalData.apis.DETAIL;
Page({
  data:{

  },
  onLoad:function(options){
    // wx.showNavigationBarLoading();
    wx.setNavigationBarTitle({
       title: options.title
    });
    this.getFilm(options.id);
  },
  getFilm: function(id) {
    wx.request({
      url: HOST + API + id,
      header: {
        'Content-type': 'json'
      },
      success: function(res) {
        console.log(res.data);
      }
    });
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