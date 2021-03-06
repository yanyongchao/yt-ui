import Vue from 'vue'
import App from './App.vue'
import router from './router'
import YTUI from '@'
import Overlay from '@/plugins/overlay'
import './assets/styles/index.scss'

Vue.use(YTUI)
Vue.use(Overlay)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
