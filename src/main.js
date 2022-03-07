import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// This is to use ouur new created methods
// Only for instance methods
// eventBus making variables global
export const eventBus = new Vue()

// Our instance coupled with DOM
new Vue({
  render: h => h(App),
}).$mount('#app')
