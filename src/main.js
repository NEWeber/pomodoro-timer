import Vue from 'vue';
import VueCookie from 'vue-cookie';
import App from './App.vue';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;
Vue.use(VueCookie);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
