// index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  // 意见反馈
  callAdmin:function(){
    wx.navigateTo({
      url: '../comment/comment'
    })
  },

  // 个人信息
  jumpPerson: function () {
    wx.navigateTo({
      url: '../person/person'
    })
  },

  // 我的报修
  jumpException: function () {
    wx.navigateTo({
      url: '../record/record'
    })
  },

  // 故障报修
  jumpReport: function () {
    wx.navigateTo({
      url: '../report/report'
    })
  },

  // 更多功能（忽悠）
  goback:function(){
    wx.showToast({
      title: '敬请期待',
      icon:'none'
    })
  },

  onLoad: function () {

  },

  onShow: function () {
   
  },

})