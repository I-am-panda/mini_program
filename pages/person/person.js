// pages/person/person.js
var util = require('../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDisabled:true,
    text:"编辑信息",
    person:{
      number:'',
      sex:'',
      phone:'',
      college:'',
      major:'',
      name:''
    },
  },
  
  // 返回上一级页面
  Back:function(){
    wx.navigateBack({
      url: '../index/index',
    })
  },

  // 捕获name的值
  nameInput:function(e) {
    this.setData({
      "person.name":e.detail.value
    })
  },

  // 捕获phone的值
  phoneInput:function(e) {
  this.setData({
    "person.phone":e.detail.value
  })
},

// 捕获college的值
collegeInput:function(e){
  this.setData({
    "person.college":e.detail.value
  })
},

// 捕获major的值
majorInput:function(e){
  this.setData({
    "person.major":e.detail.value
  })
},

  // 编辑信息
  jumpInformation:function(){
    var url = "/6040aaef60b22ade4c8e06aa/save";
    wx.showLoading({
      title: '加载中',
    })
    var person = this.data.person;
    util.request(url,person,'POST',(res)=>{
      this.setData({
        person:person
      })
      wx.hideLoading();
    })
    if (!this.data.isDisabled) { 
      this.setData({ 
        //修改isDisabled的值为true（即启用状态）
        isDisabled: true, 
        text: "编辑信息"
      })
      }
      else
      { 
        this.setData({ 
          //当isDisabled的值为false时，没有任何效果
          isDisabled: false, 
           //文字修改为“保存”
          text: "保存"
          })
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var url = "/6040aaef60b22ade4c8e06aa/person";
    wx.showLoading({
      title: '加载中',
    })

    util.request(url,'','GET',(res)=>{
      this.setData({
        person:res.person
      })
      wx.hideLoading();
    })
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