const numberOfMillisecondsIn25Min = 25 * 60 * 1000;

export default {
  namespaced: true,
  store: {
    timeLeft: 0,
  },
  mutations: {
    resetTimer(state) {
      state.timeLeft = numberOfMillisecondsIn25Min;
    },
    updateTimeLeft(state, newTime) {
      state.timeLeft = newTime;
    },
  },
  getters: {
    timeLeft(state) {
      return state.timeLeft;
    },
  },
};
