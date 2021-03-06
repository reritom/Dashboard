import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'

Vue.use(VueRouter)

const EventBus = new Vue();
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

export { EventBus };
