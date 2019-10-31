import computed from './computed/index.js'

const app = getApp()

Page({
  data:{
    firstName:'jake',
    lastName:'last'
  },
  computed:{
    name(){
    
      return 'eueur'
    },
    name2(){
      return this.data.firstName + '2'
    },
    fullName(){
      return this.data.lastName+'1'
    }
  },
  onLoad(){
    computed(this)
  },

 change(){
    this.setData({
      firstName:"aily",
      lastName:'lat'
    })
  },
  formSubmit: function(e) {
    console.info('表单提交携带数据', e.detail.value)
  },
})
