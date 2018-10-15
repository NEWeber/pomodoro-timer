import Vue from 'vue';
import Vuex from 'vuex';

import timerModule from './modules/timer';
import emailModule from './modules/email';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    completedPomodoros: 0,
  },
  mutations: {
    pomodoroComplete(state) {
      state.completedPomodoros += 1;
    },
  },
  getters: {
    completedPomodoros(state) {
      return state.completedPomodoros;
    },
  },
  actions: {

  },
  modules: {
    timer: timerModule,
    email: emailModule,
  },
});
