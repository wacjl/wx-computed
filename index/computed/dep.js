let uuid=0
class Dep{
  constructor(){
    this.subs=[];
    this.id=++uuid
  }
  addSub(sub){
    this.subs.push(sub)
  }
  depend(){
    if(Dep.target){
      Dep.target.addDep(this)
    }
  }
  notify(){
    for(let i=0;i<this.subs.length;i++){
      this.subs[i].update()
    }
  }
}
Dep.target=null;
export default Dep