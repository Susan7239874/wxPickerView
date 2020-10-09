

const hour = []
const minute = []

for (let i = 1; i <= 12; i++) {
  hour.push(i)
}

for (let i = 0; i <60; i++) {
  i=i<10?'0'+i:String(i);
  minute.push(i)
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogyn:true,
    hour,
    minute,
    value:[3],
    pickerlist1:[
      '教育云平台',
      '广电平台项目',
      '教育云平台项目申请',
      '教育云平台项目立项表格申请',
      '教育云平台2',
      '广电平台项目2',
      '教育云平台项目申请2'
    ],
    value2:[10,0]
  },
  bindChange1(e) {
    const val = e.detail.value
    this.setData({
      value:val,
    })
  },
  bindChange2(e) {
    const val = e.detail.value
    this.setData({
      value2:val,
    })
  },
  closeDialog(){
this.setData({
  dialogyn:false
})
  },
  sureDialog(){
    this.setData({
      dialogyn:false
    })
      },
      openDialog(){
        this.setData({
          dialogyn:true
        })
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