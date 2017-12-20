// pages/music/music.js
const audio=wx.createInnerAudioContext();//跳转到此页面播放
audio.src ="/static/ゆう十 - 刚好遇见你 - 日文版.mp3";
audio.startTime=18;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster:"http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000",
    name:"刚好遇见你",
    author:"优十",
    src:"/static/ゆう十 - 刚好遇见你 - 日文版.mp3"
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
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
  onShow: function () {//跳转到此页面时候执行
    audio.play();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {//离开此页面时候关闭
    //audio.stop();
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