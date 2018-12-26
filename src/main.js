import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { rutas } from "./rutas"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter);  

const enrutador = new VueRouter({
  routes: rutas
});

Vue.config.productionTip = false;

new Vue({
  router: enrutador,
  render: h => h(App),
}).$mount('#app')
