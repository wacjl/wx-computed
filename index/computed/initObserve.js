import Dep from './dep.js'
export default function initObserve(vm){
  defineProperty(vm.data)
}
function defineProperty(data){
  if( typeof data === 'object' && data!==null){
    Object.keys(data).forEach((key)=>{
        let value=data[key]
        let dep = new Dep();
        Object.defineProperty(data,key,{
          get:function(){
            //添加watch到subs里
            dep.depend();
            return value
          },
          set:function(newVal){
            value=newVal
            //更新数据
            dep.notify()
          }
        })
    })
  }
}