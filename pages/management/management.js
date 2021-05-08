// pages/list/list.js
var util = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this,
    url = '/6040aaef60b22ade4c8e06aa/demo'
    util.request(url,'','GET',(res)=>{
      var arr2 = res.list, i = 0
      // 每个编辑按钮添加文案
      for(i = 0; i < arr2.length; i++){
        arr2[i].isDisabled = true
        arr2[i].text = "编辑"
      }
      that.setData({
        list:arr2
      })
    });
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
  
  },
  // 添加
  addArea:function(){
    wx.navigateTo({
      url:'../add/add'
    })
  },
  // 删除
  deleteArea: function (e) {
    wx.navigateTo({
      url:'../del/del'
    })
  },

  // 捕获password的值
  passwordInput:function(e) {
    var list = this.data.list
    list[e.currentTarget.dataset.index].password = e.detail.value
  },
  
  // 捕获role的值
  roleInput:function(e){
    var list = this.data.list
    list[e.currentTarget.dataset.index].role = e.detail.value
  },
  
    // 编辑
    editArea:function(e){
      var url = "/6040aaef60b22ade4c8e06aa/save_user", list = this.data.list,
      i = e.target.dataset.index, j = 1
      if (list[i].isDisabled == true) { 
        for( j = 0;j < list.length ; j++){
          if ( list[j].isDisabled  ==  false) { 
            wx.showToast({
              title: '请保存当前正在编辑的内容!',
              icon: 'none',
              duration: 2000
              })
              return
            }
        }
        list[i].isDisabled = false
        list[i].text = "保存"
        this.setData({
          list:list
        })
      }
      else
      { 
        list[i].isDisabled = true
        list[i].text = "编辑"
        this.setData({
          list:list
        })
        wx.showLoading({
          title: '加载中',
        })
        util.request(url,list[i],'POST',(res)=>{
          wx.hideLoading();
          // this.onLoad()
        })
      }
    },
})