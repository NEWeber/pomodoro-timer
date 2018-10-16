import Vue from 'vue';
import VueCookie from 'vue-cookie';
import VModal from 'vue-js-modal';
import VueAnalytics from 'vue-analytics';

import App from './App.vue';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;
Vue.use(VueCookie);
Vue.use(VModal, { dynamic: true });
Vue.use(VueAnalytics, {
  id: 'UA-86565930-3',
  router,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
