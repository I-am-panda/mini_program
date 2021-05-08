// pages/add/add.js
const util = require("../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      account:'',
      password:'',
      sex:'',
      college:'',
      identity:'',
      phone:'',
      name:''
    }]
  },

  // 返回上一级页面
  Back:function(){
    wx.navigateBack({
      url: '../index/index',
    })
  },
  //自己封装的Toast函数
  toast: function (title, icon, duration) {
    wx.showToast({
      title: title,
      icon: icon,
      duration: duration
    })
  },
  // 请求函数
  request: function () {
    var url = "/6040aaef60b22ade4c8e06aa/feedback"
    var data = {
      list: this.data.list
    }
    util.request(url,data,'POST',(res)=>{
      wx.navigateBack({
        url: '/pages/admin/admin'
      })
      this.toast("提交成功", "", 2000)
    })
  },
  
  accountInput: function (e) {
    var that = this;
    that.setData({ "list.account": e.detail.value })
  },

  passwordInput: function (e) {
    var that = this;
    that.setData({ "list.password": e.detail.value })
  },

  sexInput: function (e) {
    var that = this;
    that.setData({ "list.sex": e.detail.value })
  },

  nameInput: function (e) {
    var that = this;
    that.setData({ "list.name": e.detail.value })
  },
  
  collegeInput: function (e) {
    var that = this;
    that.setData({ "list.college": e.detail.value })
  },

  identityInput: function (e) {
    var that = this;
    that.setData({ "list.identity": e.detail.value })
  },

  phoneInput: function (e) {
    var that = this;
    that.setData({ "list.phone": e.detail.value })
  },

  // 提交表单
  formclick: function (e) {
    var that = this;
    if ( e.detail.value.phone== "") {
      that.toast("还没输入手机号码哦(●'◡'●)", "none", 2000)
      return
    } 
    else {
        that.request();
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})