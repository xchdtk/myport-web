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
    async GetAuthEmail(context, value) {
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
        console.error("Vuex getAuthEmail error:", error.message);
        return false;
      }
    },

    async AuthRegister(context, value) {
      try {
        const response = await axios.post(
          `http://localhost:3000/auth/register`,
          value
        );

        if (response?.status === 200) {
          return true;
        }
        return false;
      } catch (error) {
        console.error("Vuex AuthRegister error:", error.message);
        return false;
      }
    },

    async AuthLogin(context, value) {
      try {
        const response = await axios.post(
          `http://localhost:3000/auth/login`,
          value
        );

        if (response?.status === 200) {
          localStorage.setItem("folio_token", response.data.token.access);
          return true;
        }
        return false;
      } catch (error) {
        console.error("Vuex AuthLogin error:", error.message);
        return false;
      }
    },
  },
};
