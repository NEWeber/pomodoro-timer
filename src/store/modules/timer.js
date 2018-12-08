export default {
  namespaced: true,
  state: {
    timerRunning: false,
    completedState: false,
  },
  mutations: {
    timerOn(state) {
      state.timerRunning = true;
      state.completedState = false;
    },
    timerOff(state) {
      state.timerRunning = false;
    },
    hasCompleted(state) {
      state.completedState = true;
    },
    readyToPlay(state) {
      state.completedState = false;
    },
  },
  getters: {
    isTimerRunning(state) {
      return state.timerRunning;
    },
    isTimerComplete(state) {
      return state.completedState;
    },
  },
};
