import Vue from 'vue'
import App from './App.vue'
import router from './router'

// styles
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'animate.css'
// import './styles/inspinia.css'

//jquery

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
