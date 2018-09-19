const numberOfMillisecondsIn25Min = 25 * 60 * 1000;
// TODO: Clean up this store
export default {
  namespaced: true,
  state: {
    timeLeft: 0,
    timerRunning: false,
  },
  mutations: {
    resetTimer(state) {
      state.timeLeft = numberOfMillisecondsIn25Min;
    },
    updateTimeLeft(state, newTime) {
      state.timeLeft = newTime;
    },
    timerOn(state) {
      state.timerRunning = true;
    },
    timerOff(state) {
      state.timerRunning = false;
    },
  },
  getters: {
    timeLeft(state) {
      return state.timeLeft;
    },
    isTimerRunning(state) {
      return state.timerRunning;
    },
  },
};
