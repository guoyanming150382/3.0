// pages/self/self.js
const Chart = require("../../utils/wxcharts.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
    var res = wx.getSystemInfoSync();
    const chart2 = new Chart({
      canvasId: "leidachart",
      type: 'radar',
      categories: ['前端', '后端', '逻辑', '样式', 'DEBUG', '学习',],
      series: [{
        color:"#f88f07",
        name: '综合能力',
        data: [90, 65, 65, 70, 65, 79],
      }],
      width: res.windowWidth,
      height: 260,
      extra: {
        radar: {
          max: 100,
          gridColor: "#f11515",
          labelColor:"#fafafa",

        }
      }
    });
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