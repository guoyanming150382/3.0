//index.js
//获取应用实例
const app = getApp()//得到全局变量中的数据
const paseObjtoQuery = require("../../utils/paseObjtoQuery.js");


Page({
  chooseImage: function () {//上传图片
    wx.chooseImage({
      count: 1,
      success:  (res)=> {
        console.log(res);
        this.setData({
          imagePath:res.tempFilePaths[0],
        })
      },
    })
  },
  uploadImage:function(){
    const filePath=this.data.imagePath;
    wx.uploadFile({
      url: 'http://192.168.1.210:3000/upload',
      filePath: filePath,
      name: 'file',
      complete:(res)=>{
        console.log("987",res);
        this.setData({
          uploadImage:res.data
        })
      }
    })
  },
  data: {
   
    hideModal:true,
    motto: 'Hello World',
    uploadImage:"",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
text:function(event){
  console.log(event);
  console.log("text");
},
text2: function (event) {
  console.log(event);
  console.log("text2");
},
text3: function (event) {
  console.log(event);
  console.log("text3");
},
t1: function (event) {
  console.log(event);
  console.log("t1");
},
t2: function (event) {
  console.log(event);
  console.log("t2");
},
t3: function (event) {
  console.log(event);
  console.log("t3");
},
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log("load")
    wx.showModal({
      title: '是否使用个人信息',
      content: '确定吗',
      success:(res) => {
        console.log(res);
        if(res.confirm){
          wx.showToast({
            title: '同意',
            icon:"success",
          })
        }
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  switchLog:function(){
    wx.switchTab({
      url: '../logs/logs',
    })
  },
  xiangqing:function(event){
    const data=event.target.dataset;
    console.log(data);
    const query = paseObjtoQuery(data);
    console.log(query);
    wx.navigateTo({
      url: '/pages/bbb/bbb'+"?"+query,
    })
  },
  music:function(){
    wx.navigateTo({
      url: '/pages/music/music',
    })
  },
  showToast:function(e){//点击显示成功提交
    wx.showToast({
      title: '提交成功',
      icon:"success",
      duration:1500,
      mask:true,
      success:function(res){
        console.log(res);
      }
    })
  },
  loading: function (e) {
    wx.showToast({
      title: 'load',
      icon: "loading",
      duration: 1000,
      mask: true,
      success: function (res) {
        console.log(res);
      }
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("OnHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPPP")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("ONREACH");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
 
   onShow: function () {
    wx.showLoading({//一直会处于加载中的状态
      title: '加载中',
      mask:true,
      success: function (res) {
        console.log(res);
      }
    });
    setTimeout(()=>{
      wx.hideLoading();//手动关闭加载
    },2000);
  },
   showAction: function () {//保存图片
     wx.showActionSheet({
       itemList: ["共享图片", "保存到本地", "发送好友"],
       success: function (res) {

       }
     })
   },
   showModal:function(e){
     this.setData({
       hideModal:false
     })
   },
   modalCancel:function(){
     this.setData({
       hideModal: true,
       modalInput:"",
     });
   },
  modalConfirm:function(){
    console.log("modal input",this.data.modalInput);
    wx.showToast({
      title: this.data.modalInput,
      icon:"success",
      duration:10000,
      mask:true,
      success:function(res){
        console.log(res);
      }
    })
    this.setData({
      hideModal: true
    });
  },
  getModalInput:function(e){
    console.log(e.detail);
    this.setData({
      modalInput:e.detail.value
    });
   },
   modalConfirm:function(){
     this.setData({
       hideModal: true
     });
   },
   openLocation:function(){//获取当前经纬度
     wx.getLocation({
       type:"gcj02",
       success:function(res){
        console.log(res);
        wx.showToast({
          title: res.accuracy.toString(),
        });
        wx.openLocation({//打开地图定位，以网络位置为准
          latitude: res.latitude,
          longitude: res.longitude,
          success:function(res){
            console.log(res);
          }
        })
       },
     })
   },
   chooseLocation:function(){//选取位置
     wx.chooseLocation({
       success: function(res) {
         console.log(res);
       },
     })
   }
})
