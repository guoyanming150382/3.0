//app.js
const data = [{
  id: "001",
  image: "/pages/img/c1.jpg",
  name: "保时捷",
  miaoshu:"奥迪是著名的汽车开发商和制造商，其标志为四个圆环相扣。现为德国大众汽车公司的子公司，总部设在德国的英戈尔施塔特，主要车型有A1、A3、A4、A5、A6、A7、A8、Q1、Q3、Q5、Q7、TT、R8以及S、RS性能系列等。"
},{
  id:"002",
  image: "/pages/img/c2.jpg",
  name:"保时捷",
  miaoshu:"商和制造商，其标志为四个圆环相扣。现为德国大众汽车公司的子公司，总部设在德国的英戈尔施塔特，主要车型有"
  }, {
    id: "003",
    image: "/pages/img/c3.jpg",
    name: "保时捷",
    miaoshu:"标志为四个圆环相扣。现为"
}, {
  id: "004",
  image: "/pages/img/c4.jpg",
  name: "保时捷",
  miaoshu: "标志为四个圆环相扣。现为"
}];
App({
  onLaunch: function () {//查看当前有哪些授权
  console.log("1564969");
    wx.getSetting({
      success:function(res){
        console.log("res",res);
        if(res.authSetting["scope.userLocation"]===false){
          wx.openSetting({
            success:function(res){
              console.log(res); 
            }
          })
        } else if (!res.authSetting["scope.userLocation"]){
          wx.authorize({
            scope: 'scope.userLocation',
            complete:function(res){
              console.log(res)
            }
          })
        }
      }
    });
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {//全局变量
    userInfo: null,
    data: data,//date中所写的数据
    server:"http://192.168.1.210:3000"
  }
})