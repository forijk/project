// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    content:''
  },
  onLoad: function (options) {
    console.log(options);
    var title = wx.getStorageSync('title');
    var content = wx.getStorageSync('content');
    this.setData({
      title: title,
      content: content
    })

  },

  
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
  
  },
    copy: function () {
    if (wx.setClipboardData) {
      wx.setClipboardData({
        data: this.data.content,
        success: function (res) {
          wx.showModal({
            title: '复制成功',
            content: '内容已经复制成功！',
          })
        }
      })
    }
    else {
      wx.showModal({
        title: '提示内容',
        content: '您的微信版本较低，请升级',
      })
    }
  }
})