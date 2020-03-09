import OverlayComponent from '@/components/overlay'

let _Vue

const plugin = {
  install (Vue) {
    const getInstance = () => {
      const Overlay = Vue.extend(OverlayComponent)
      const vm = new Overlay({
        el: document.createElement('div')
      })
      document.body.appendChild(vm.$el)

      return {
        show (options) {
          Object.assign(vm, options, {
            value: true
          })
          vm.$on('click', () => {
            options.onClick && options.onClick()
          })
        },
        hide () {
          vm.value = false
        }
      }
    }
    if (!_Vue) {
      _Vue = Vue
      Vue.prototype.$overlay = getInstance()
    }
  }
}

export default plugin
