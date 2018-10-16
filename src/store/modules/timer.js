export default {
  namespaced: true,
  state: {
    timerRunning: false,
  },
  mutations: {
    timerOn(state) {
      state.timerRunning = true;
    },
    timerOff(state) {
      state.timerRunning = false;
    },
  },
  getters: {
    isTimerRunning(state) {
      return state.timerRunning;
    },
  },
};
