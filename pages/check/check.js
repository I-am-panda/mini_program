// pages/check/check.js
const util = require("../../utils/util")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    notSolve: true,
    isSolve: false,
    reportList: [],
    //多列选择器：
    multiArray: [['桌椅', '水电','电器','其它'], ['']],//二维数组，长度是多少是几列
    multiIndex: [0, 0],
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },

  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  isSolve: function (e) {
    this.setData({
      isSolve: e.detail.value
    })
  },

  // 是否显示没有解决的数据
  notSolve: function (e) {
    this.setData({
      notSolve: e.detail.value,
    })
  },


  // 请求所有report数据
  getReportList: function () {
    util.request('/6040aaef60b22ade4c8e06aa/select', '', 'GET', (res) => {
      this.setData({
        reportList: res.list,
      })
    })
  },

  updateStatu: function (id, statu2) {
    var data = {};
    data.id = id;
    data.statu2 = statu2 === true ? 1 : 0
    data = {
      id:data.id
    }
    var url = '/6040aaef60b22ade4c8e06aa/change';
    return new Promise((resolve, reject) => {
      util.request(url, data, 'PUT', (res) => {
        if (res.status === "success") {
          resolve(true);
        } else {
          resolve(false);
        }
      })
    })
  },

  // 切换状态
  switchStatu: function (e) {
    var that = this;
    wx.showLoading({
      title: '请稍候',
    })

    // 是否更新成功
    var p = that.updateStatu(e.currentTarget.dataset.id, e.detail.value);

    p.then((flag) => {
      wx.hideLoading({
        success: (res) => {
          if (flag == true) {
            e.currentTarget.dataset.item.status2 = e.detail.value == true ? "1" : "0";
            var newReportList = that.data.reportList;
            newReportList[e.currentTarget.dataset.idx].status2 = e.detail.value == true ? "1" : "0";
            that.setData({
              reportList: newReportList
            })
          }
        },
      })
    })
  },
//多列选择器：
bindMultiPickerChange: function (e) {
  
  var reportList1 = this.data.reportList
  reportList1[e.currentTarget.dataset.id].multiArray  = this.data.multiArray
  reportList1[e.currentTarget.dataset.id].multiIndex  = e.detail.value
  console.log(reportList1[e.currentTarget.dataset.id].multiIndex)
  console.log('picker发送选择改变，携带值为', e.detail.value)
  console.log(reportList1)
  this.setData({
    reportList : reportList1
  })
  console.log(this.data.reportList)
  // console.log( multiArray[0][multiIndex[0]],multiArray[1][multiIndex[1]])
},
bindMultiPickerColumnChange: function (e) {
  console.log(e)
  if (e.detail.column==0){//第1列
    
    if (e.detail.value == 0) {
      this.setData({
        multiArray: [['桌椅', '水电','电器','其它'], ['张三', '李四']]
      })
    };
    if (e.detail.value == 1) {
      this.setData({
        multiArray: [['桌椅', '水电','电器','其它'], ['小明', '小红']]
      })
    };
    if (e.detail.value == 2) {
      this.setData({
        multiArray: [['桌椅', '水电','电器','其它'], ['张师傅', '李师傅']]
      })
    };
    if (e.detail.value == 3) {
      this.setData({
        multiArray: [['桌椅', '水电','电器','其它'], ['小马', '小李']]
      })
    };
  };

},
  test: function () {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getReportList();
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