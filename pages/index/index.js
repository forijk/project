//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper03.jpg',
      '/images/swiper04.jpg',
      '/images/swiper05.jpg',
      '/images/swiper06.jpg',
      '/images/swiper07.jpg',
      '/images/swiper08.jpg',
      '/images/swiper09.jpg',
      '/images/swiper10.jpg',
      '/images/swiper11.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 1000,
    proList: null,
  },
  onLoad: function () {
    this.setData({
      test: 'test',
    })
    this.getProList();
  },
  toDetail: function(e){
    var index = e.currentTarget.dataset.index;
    var proList = this.data.proList;
    var title = proList[index].title;
    var content = proList[index].content;
    wx.setStorageSync('title', title);
    wx.setStorageSync('content', content);
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  getProList: function(){
    var self = this;
    wx.request({
      url: app.globalData.host,
      method: 'GET',
      success: function(res){
        console.log(res);
        self.setData({
          proList: res.data,
        })
      },
      fail: function(){

      }
    })
  },
})
