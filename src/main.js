import Vue from 'vue';
import VueCookie from 'vue-cookie';
import VModal from 'vue-js-modal';

import App from './App.vue';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;
Vue.use(VueCookie);
Vue.use(VModal, { dynamic: true });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
