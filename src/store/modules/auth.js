import axios from "axios";

export const Auth = {
  namespaced: true,
  state: () => ({
    authCode: "",
  }),
  mutations: {
    setAuthCode(state, value) {
      state.authCode = value;
    },
  },
  actions: {
    async getAuthEmail(context, value) {
      try {
        const response = await axios.get(
          `http://localhost:3000/auth/email?email=${value}`
        );
        if (response?.status === 200) {
          context.commit("setAuthCode", response?.data);
          return true;
        }
        return false;
      } catch (error) {
        console.error("error:", error.message);
        return false;
      }
    },
  },
};
