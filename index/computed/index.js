import initObserve from './initObserve.js'
import initComputed from './initComputed.js'
import checkComputed from './checkComputed.js'
export default function computed(vm){
  if(!checkComputed(vm.computed)){
    return;
  }
  initObserve(vm)
  initComputed(vm)
}