// pages/login/login.js
var util = require('../../utils/util')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    role:'',
    userName: '',
    password: '',
    login: false,
  },

  // 返回首页 
  Back:function(){
    wx.navigateBack({
      delta: 0,
    })
  },

 // 捕获userName的值
 userNameInput:function(e) {
  this.setData({
    userName:e.detail.value
  })
},

// 捕获password的值
passwordInput:function(e){
  this.setData({
    password:e.detail.value
  })
},

  // 跳转登录
  adminLogin: function (role) {
    var userName = this.data.userName;
    var password = this.data.password;
    var role = this.data.role;
    // 验证userName和password合法性
    if(userName === ''){
      wx.showToast({
        title: '请输入学号/工号',
        icon: 'none',
        duration: 3000
      })
    }

    else if(password === ''){
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 3000
      })
    }

    else{
       wx.showLoading({
      title: '登录中...',
    })
    
    var data ={
      userName: userName,
      password: password,
    }

    util.request('/6040aaef60b22ade4c8e06aa/login',data,'POST',(res)=>{
      
      wx.hideLoading({
        success: (res) => {},
      })

      if(res.status === "success"){
        this.setData({
          login:true
        })
        // 判断登录角色决定跳转页面
        if(role == 'admin'){
          wx.reLaunch({
            url: '/pages/admin/admin',
          })
        }
        else if(role === 'student') {
          wx.reLaunch({
            url: '/pages/index/index',
          })
        }
        else if(role === 'repair') {
          wx.reLaunch({
            url: '/pages/admin_report/admin_report',
          })
        }
      }
      else{
        wx.showToast({
          icon: 'none',
          title: "账号/密码错误,请重新输入"
        })
       this.onLoad
      }
    })
  }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
     role:options.role
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
    app.globalData.openId = this.data.userName
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