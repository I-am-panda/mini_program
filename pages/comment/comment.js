// pages/comment/comment.js
const util = require("../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    suggest: "", //反馈内容
    email: "", //联系方式
    wordnumber: 0, //内容框字数的个数
    time: "",//反馈时间
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

  // 获取时间
  getTime: function () {
    var timestamp = Date.parse(new Date());
    var dates = new Date(timestamp);
    var that = this;
    //获取年份  
    var Y = dates.getFullYear();
    //获取月份  
    var M = (dates.getMonth() + 1 < 10 ? '0' +
      (dates.getMonth() + 1) : dates.getMonth() + 1);
    //获取当日日期 
    var D = dates.getDate() < 10 ? '0' + dates.getDate() : dates.getDate();
    //获取当日时间 
    var H = dates.getHours()+':'+dates.getMinutes()+':'+dates.getSeconds();
    that.data.time = Y + "-" + M + "-" + D + " " + H;
  },

  // 请求函数
  request: function () {
    var url = "/6040aaef60b22ade4c8e06aa/feedback"
    var data = {
      "content": this.data.suggest,//反馈内容
      "contact": this.data.email,//联系方式
    }
    util.request(url,data,'POST',(res)=>{
      wx.navigateBack({
        url: '/pages/index/index'
      })
      this.toast("提交成功", "", 2000)
    })
  },
  
  inputs: function (e) {
    // 获取输入框的字数个数
    var that = this;
    that.setData({ wordnumber: e.detail.cursor })
  },

  // 提交表单
  formclick: function (e) {
    var that = this;
    var suggest = e.detail.value.suggest;
    var email = e.detail.value.eamil;
    this.setData({ suggest: suggest })
    this.setData({ email: email })
    that.data.suggest = suggest;
    that.data.email = email;
    var reg = new RegExp('^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$');
    var phoneVar = reg.test(email);     // 得到的值为布尔型
    var reg1 = new RegExp('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$');
    var emailVar = reg1.test(email);     // 得到的值为布尔型
    that.getTime();

    if (suggest == "") {
      that.toast("还没输入反馈内容哦(●'◡'●)", "none", 2000)
      return
    } 
    else {
      if (email !== "") {//验证邮箱与电话
        if (!phoneVar && !emailVar) {
          that.toast("您输入的电话号码或邮箱格式不正确，请重新输入！", "none", 2000);
          return
        }
        else {
          that.request();
        }
      }
      else {
        that.request();
      }
    }
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})