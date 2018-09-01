import Vue from 'vue';
import Vuex from 'vuex';

import timerModule from './modules/timer';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    timer: timerModule,
  },
});
