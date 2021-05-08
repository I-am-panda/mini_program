// pages/report/report.js
var util = require('../../utils/util')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    person:[],
    //普通选择器：（普通数组）
    array: ['桌椅', '水电', '电器', '其它'],
    index: 0,//默认显示位置,
    //当前选中数组的下标值
    customIndex: [0, 0, 0],
    //当前选中数组
    onlyArray: [[],[], []],
    //customArray假设为我们从后台获取到的json数据
    customArray: [
      {
      name: 'C18',
      dept: [
        {name: '一层',
          product: [
            {name: '110'},{name: '111'},{name: '112'},{name: '113'},{name: '114'},{name: '115'},{name: '116'},{name: '117'},{name: '118'},{name: '119'},{name: '120'},{name: '121'}
          ]
        },
        {name: '二层',
        product: [
          {name: '210'},{name: '211'},{name: '212'},{name: '213'},{name: '214'},{name: '215'},{name: '216'},{name: '217'},{name: '218'},{name: '219'},{name: '120'},{name: '121'}
        ]
      },
      {name: '三层',
        product: [
          {name: '310'},{name: '311'},{name: '312'},{name: '313'},{name: '314'},{name: '315'},{name: '316'},{name: '317'},{name: '318'},{name: '319'},{name: '320'},{name: '321'}
        ]
      },
      {name: '四层',
        product: [
          {name: '410'},{name: '411'},{name: '412'},{name: '413'},{name: '414'},{name: '415'},{name: '416'},{name: '417'},{name: '418'},{name: '419'},{name: '420'},{name: '421'}
        ]
      }
    ]},
      {
        name: 'C19',
        dept: [
          {name: '一层',
            product: [
              {name: '110'},{name: '111'},{name: '112'},{name: '113'},{name: '114'},{name: '115'},{name: '116'},{name: '117'},{name: '118'},{name: '119'},{name: '120'},{name: '121'}
            ]
          },
          {name: '二层',
          product: [
            {name: '210'},{name: '211'},{name: '212'},{name: '213'},{name: '214'},{name: '215'},{name: '216'},{name: '217'},{name: '218'},{name: '219'},{name: '120'},{name: '121'}
          ]
        },
        {name: '三层',
          product: [
            {name: '310'},{name: '311'},{name: '312'},{name: '313'},{name: '314'},{name: '315'},{name: '316'},{name: '317'},{name: '318'},{name: '319'},{name: '320'},{name: '321'}
          ]
        },
        {name: '四层',
          product: [
            {name: '410'},{name: '411'},{name: '412'},{name: '413'},{name: '414'},{name: '415'},{name: '416'},{name: '417'},{name: '418'},{name: '419'},{name: '420'},{name: '421'}
          ]
        }
      ]},
      {
        name: 'C20',
        dept: [
          {name: '一层',
            product: [
              {name: '110'},{name: '111'},{name: '112'},{name: '113'},{name: '114'},{name: '115'},{name: '116'},{name: '117'},{name: '118'},{name: '119'},{name: '120'},{name: '121'}
            ]
          },
          {name: '二层',
          product: [
            {name: '210'},{name: '211'},{name: '212'},{name: '213'},{name: '214'},{name: '215'},{name: '216'},{name: '217'},{name: '218'},{name: '219'},{name: '120'},{name: '121'}
          ]
        },
        {name: '三层',
          product: [
            {name: '310'},{name: '311'},{name: '312'},{name: '313'},{name: '314'},{name: '315'},{name: '316'},{name: '317'},{name: '318'},{name: '319'},{name: '320'},{name: '321'}
          ]
        },
        {name: '四层',
          product: [
            {name: '410'},{name: '411'},{name: '412'},{name: '413'},{name: '414'},{name: '415'},{name: '416'},{name: '417'},{name: '418'},{name: '419'},{name: '420'},{name: '421'}
          ]
        }
      ]},
      {
        name: 'C21',
        dept: [
          {name: '一层',
            product: [
              {name: '110'},{name: '111'},{name: '112'},{name: '113'},{name: '114'},{name: '115'},{name: '116'},{name: '117'},{name: '118'},{name: '119'},{name: '120'},{name: '121'}
            ]
          },
          {name: '二层',
          product: [
            {name: '210'},{name: '211'},{name: '212'},{name: '213'},{name: '214'},{name: '215'},{name: '216'},{name: '217'},{name: '218'},{name: '219'},{name: '120'},{name: '121'}
          ]
        },
        {name: '三层',
          product: [
            {name: '310'},{name: '311'},{name: '312'},{name: '313'},{name: '314'},{name: '315'},{name: '316'},{name: '317'},{name: '318'},{name: '319'},{name: '320'},{name: '321'}
          ]
        },
        {name: '四层',
          product: [
            {name: '410'},{name: '411'},{name: '412'},{name: '413'},{name: '414'},{name: '415'},{name: '416'},{name: '417'},{name: '418'},{name: '419'},{name: '420'},{name: '421'}
          ]
        }
      ]},
    ],
    imgList: [],
    malfunction:{
      number:'',
      location:'',
      phone:'',
      dormitory:'C18 一层 110',
      description:'',
      img:[],
      name:"",
      classify:'桌椅'
    },
  },
  
// 捕获name的值
nameInput:function(e) {
  this.setData({
    "malfunction.name":e.detail.value
  })
},

// 捕获number的值
numberInput:function(e) {
  this.setData({
    "malfunction.number":e.detail.value
  })
},

// 捕获phone的值
phoneInput:function(e) {
  this.setData({
    "malfunction.phone":e.detail.value
  })
},

// 捕获location的值
locationInput:function(e) {
  this.setData({
    "malfunction.location":e.detail.value
  })
},

// 捕获textareaB的值
textareaBInput:function(e) {
  this.setData({
    "malfunction.description":e.detail.value
  })
},

//提交表单
submitTap: function() {
  var url = "/6040aaef60b22ade4c8e06aa/addfrom";
  var malfunction = this.data.malfunction;

    if (malfunction.description == "") {
      wx.showToast({
        title: "还没输入内容哦(●'◡'●)",
        icon:"none",
        duration: 3000
      })
      return
    }

    wx.showLoading({
      title: '正在提交...',
    })
    
  util.request(url,malfunction,'POST',(res)=>{
    this.setData({
      malfunction:malfunction
    })
    wx.hideLoading();
    wx.navigateBack({
      url: '../index/index',
    })
    wx.showToast({
      title: '提交成功',
      duration: 3000
    })
  })
},

bindPickerChange: function (e) {
  var array = this.data.array
  this.setData({
    index:e.detail.value,
    "malfunction.classify": array[e.detail.value]
  })
},

//多列选择器改变value的方法
bindCustomPickerChange: function(e) {
  var customIndex = this.data.customIndex,
      onlyArray = this.data.onlyArray;
  //此处e.detail.value为当前选择的列的下标值数组，如[0,1,0]
  var Array = onlyArray[0][customIndex[0]]+onlyArray[1][customIndex[1]]+onlyArray[2][customIndex[2]]
  this.setData({
   customIndex: e.detail.value,
   "malfunction.dormitory":Array,
  })
  },

  //获取定位地址
  getLocation() {
    wx.chooseLocation({
      success: (res)=>{
        this.setData({
          "malfunction.location":res.name
        })}
    })},

//多列自创选择器换列方法
bindCustomPickerColumnChange: function(e) {
  var customArray = this.data.customArray,
  customIndex = this.data.customIndex,
  onlyArray = this.data.onlyArray;
  customIndex[e.detail.column] = e.detail.value;
 
  var searchColumn = () => {
   for (var i = 0; i < customArray.length; i++) {
   var arr1 = [];
   var arr2 = [];
   if (i == customIndex[0]) {
    for (var j = 0; j < customArray[i].dept.length; j++) {
    arr1.push(customArray[i].dept[j].name);
    if (j == customIndex[1]) {
     for (var k = 0; k < customArray[i].dept[j].product.length; k++) {
     arr2.push(customArray[i].dept[j].product[k].name);
     }
     onlyArray[2] = arr2;
    }
    }
    onlyArray[1] = arr1;
   }
   };
  }
 
  switch (e.detail.column) {
   case 0:
   customIndex[1] = 0;
   customIndex[2] = 0;
   searchColumn();
   break;
   case 1:
   customIndex[2] = 0;
   searchColumn();
   break;
  }
  this.setData({
   onlyArray: onlyArray,
   customIndex: customIndex
  });
  },

  ChooseImage() {
    var picture = this.data.imgList;
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths),
            "malfunction.img":picture
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths,
            "malfunction.img":picture
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '提示',
      content: '确定要删除该图片吗？',
      cancelText: '再看看',
      confirmText: '删除',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },

// 返回上一级页面
Back:function(){
  wx.navigateBack({
    url: '../index/index',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var url = "/6040aaef60b22ade4c8e06aa/person"
    util.request(url,'','GET',(res)=>{
      this.setData({
        person:res.person,
        "malfunction.name":res.person.name,
        "malfunction.number":res.person.number,
        "malfunction.phone":res.person.phone,
      })
    })
    var data = {
      customArray: this.data.customArray,
      customIndex: this.data.customIndex,
      onlyArray: this.data.onlyArray,
     };
     for (var i = 0; i < data.customArray.length; i++) {
      data.onlyArray[0].push(data.customArray[i].name);
     }
     for (var j = 0; j < data.customArray[data.customIndex[0]].dept.length; j++) {
      data.onlyArray[1].push(data.customArray[data.customIndex[0]].dept[j].name);
     }
     for (var k = 0; k < data.customArray[data.customIndex[0]].dept[data.customIndex[1]].product.length; k++) {
      data.onlyArray[2].push(data.customArray[data.customIndex[0]].dept[data.customIndex[1]].product[k].name);
     }
     this.setData(data);
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