import Vue from 'vue'
import store from './store'
import router from './router'

import App from './App.vue'
import '@/assets/main.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
