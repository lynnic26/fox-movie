// pages/onShow/onShow.js
let app = getApp();
let host = app.globalData.host;
let api = app.globalData.apis.ON_SHOW;
Page({
  data:{
     films: []
  },
  onLoad:function(options){
    let that = this;
    fetch(host + api).then(function(response) {
      response.json().then(function (data) {
        console.log(data);
        that.setData({
          films: data.subjects
        })
      })
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