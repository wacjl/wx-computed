import Dep from './dep.js'
let uuid=0
class Watch{
  constructor(vm,fn,cb){
    this.vm=vm;
    this.fn=fn;
    this.cb=cb;
    this.id=++uuid;
    this.depIdMap={};
    this.value=this.get()
  }
  get(){
    Dep.target=this;
    // 往oberseve里的dep添加watch
    const value = this.fn.call(this.vm);
    Dep.target = null;
    return value
  }
  update(){
    const value= this.get();
    if(value != this.value){//不等于value才更新
      this.value=value
      typeof this.cb === 'function' && this.cb.call(this.vm)
    } 
   
  }
  addDep(dep){
    if (!this.depIdMap.hasOwnProperty(dep.id)) {
      dep.addSub(this)
      this.depIdMap[dep.id] = dep
    }
  }
  depend(){
    for(var key in this.depIdMap){
      this.depIdMap[key].depend()
    }
  }
}
export default Watch