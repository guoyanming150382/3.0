// pages/loca/loca.js
Page({

  /**
   * 页面的初始数据
   */
  data: {//固定位置
    markers:[{
      iconPath:"/static/icon/loca.png",
      id:0,
      latitude:34.044659,
      longitude:113.867514,
      width:50,
      height:50,
      callout: {//气泡
        content: "创业楼",
        fontSize: 20,
        padding: 15,
        borderRadius: 10,
        bgColor:"#ff3344",
        display:"BYCLICK",//点击显示需要监听
      }
    }],
    anthor:{x:.1,y:1},
    polyline:[//设置线路
     {points:[{
        latitude: 34.035506,
        longitude: 113.85264,
      },{
          latitude: 34.0362172681089,
          longitude: 113.85950645507815,
      },
      {
        latitude: 34.03988020442423,
        longitude: 113.86414131225588,
      },
      {
        latitude: 34.044659,
        longitude: 113.867514,
      }
      ],color:"#ff0000",
      width:2,
      borderWidth:2,
      dottedLine:true
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  bindmarkertap:function(e){
    console.log(e);//点击监听
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