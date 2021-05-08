// pages/del/del.js
var util = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
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
    var that=this;
    wx.request({
      url: 'https://test.apilab.cn/v1/6040aaef60b22ade4c8e06aa/demo',
      method:'GET',
      data:{},
      success:function(res){
        var list=res.data.list;
        if(list==null){
          var toastText='获取数据失败';
          wx.showToast({
            title: toastText,
            icon:'',
            duration:2000 //弹出时间
          })
        }else{
          var arr2 = list
          var i = 0
          for(i=0;i<arr2.length;i++){
            arr2[i].check = false
          }
          that.setData({
            list:arr2
          })
        }
      }
    })
  },

  // 完成按钮
  accomplish:function(){
    var url = "/6040aaef60b22ade4c8e06aa/del"; 
    var list = this.data.list, temp =false , list2 = []
    // 判断删除list里面的check
    for (var i = 0; i < list.length; i++) {
        if(list[i].check == true){
          temp = true
          list2.push(list[i])
        }
      }

    if(temp == false){
      wx.showToast({
        title: '还没有选择要删除的用户哦！',
        icon:'none',
        duration: 2000
      })
      return
    }

    util.request(url,list2,'POST',(res)=>{
      wx.navigateBack({
        url: '../admin/admin',
      })
      wx.showToast({
        title: '删除成功',
        duration: 2000
      })
    })
  },
  
  checkboxChange: function(e) {
    var index =e.target.dataset.index
    var list =this.data.list
    // 改变list的check状态
    if(list[index].check == false){
      list[index].check = true
    }
    else{
      list[index].check = false
    }
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