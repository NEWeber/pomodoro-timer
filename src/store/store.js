import Vue from 'vue';
import Vuex from 'vuex';

import timerModule from './modules/timer';
import emailModule from './modules/email';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    completedPomodoros: 0,
    completedPomodorosThisSession: 0,
  },
  mutations: {
    pomodoroComplete(state) {
      state.completedPomodoros += 1;
      state.completedPomodorosThisSession += 1;
    },
    setPomodoroComplete(state, number) {
      state.completedPomodoros = number;
    },
  },
  getters: {
    completedPomodoros(state) {
      return state.completedPomodoros;
    },
    completedPomodorosThisSession(state) {
      return state.completedPomodorosThisSession;
    },
  },
  actions: {

  },
  modules: {
    timer: timerModule,
    email: emailModule,
  },
});
