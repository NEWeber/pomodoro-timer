import axios from 'axios';

export default {
  namespaced: true,
  state: {
    signedUp: false,
  },
  mutations: {
    signedUp(state) {
      state.signedUp = true;
    },
  },
  actions: {
    signUpRequest({ commit }, signUpObj) {
      return axios.post('/api/add-email', signUpObj)
        .then((result) => {
          console.log(result);
          commit('signedUp');
        })
        .catch(res => console.error(res));
    },
  },
  getters: {
    hasSignedUp(state) {
      return state.signedUp;
    },
  },
};
