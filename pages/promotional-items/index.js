import { getGroomList } from '../../api/store.js';

const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      'title': '促销单品'
    },
    imgUrls: [],
    bastList: [],
    name: '',
    icon: '',
    type: 4,
    status: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIndexGroomList();
  },
  getIndexGroomList: function () {
    var that = this;
    getGroomList().then(res=>{
      that.setData({ imgUrls: res.data.banner, bastList: res.data.list })
    });
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
    var type = this.data.type;
    if (type == 1) {
      this.setData({ 'parameter.title': '精品推荐', name: '精品推荐', icon: 'icon-jingpintuijian' });
    } else if (type == 2) {
      this.setData({ 'parameter.title': '热门榜单', name: '热门榜单', icon: 'icon-remen', status: 1 });
    } else if (type == 3) {
      this.setData({ 'parameter.title': '首发新品', name: '首发新品', icon: 'icon-xinpin' });
    } else if (type == 4) {
      this.setData({ 'parameter.title': '促销单品', name: '促销单品', icon: 'icon-cuxiaoguanli' });
    } else {
      this.setData({ 'parameter.title': '首发新品', name: '首发新品', icon: 'icon-xinpin' });
    }
    this.getIndexGroomList();
  },
  getIndexGroomList: function () {
    var that = this;
    getGroomList(that.data.type).then(res => {
      that.setData({ imgUrls: res.data.banner, bastList: res.data.list })
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