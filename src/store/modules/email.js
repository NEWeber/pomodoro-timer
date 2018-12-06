import axios from 'axios';

export default {
  namespaced: true,
  state: {
    signedUp: false,
    errors: [],
  },
  mutations: {
    signedUp(state) {
      state.signedUp = true;
    },
    updateErrors(state, newErrors) {
      state.errors = newErrors;
    },
  },
  actions: {
    signUpRequest({ commit }, signUpObj) {
      return axios.post('/api/add-email', signUpObj)
        .then(() => {
          commit('updateErrors', []);
          commit('signedUp');
        })
        .catch((error) => {
          if (error.response.status === 400) {
            commit('updateErrors', error.response.data.error);
          }
        });
    },
  },
  getters: {
    hasSignedUp(state) {
      return state.signedUp;
    },
    getErrors(state) {
      return state.errors;
    },
  },
};
