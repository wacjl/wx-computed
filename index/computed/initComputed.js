import Watch from './watch.js'

export default function initComputed(vm) {
  const computedMap = {}
  for (const key in vm.computed) {
    const fn = vm.computed[key]
    if (typeof fn !== 'function') {
      console.error(`${key} prop not a function in computed!!!`)
      continue
    }
    Object.defineProperty(vm.data, key, {
      set: function _computedSetter() { },
      get: (function () {
        const watch = new Watch(vm, fn, () => {
          vm.setData({
            [key]: watch.value,
          })
        })
        // 为了在调试面板appData中显示此属性
        vm.data[key] = watch.value
        return function _computedGetter() {
          watch.depend()
          return watch.value
        }
      })(),
    })
    computedMap[key] = vm.data[key]
  }
  vm.setData(computedMap)
}
