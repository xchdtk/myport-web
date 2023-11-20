import axios from "../../plugins/axios-interceptors";
import router from "@/router";

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
        const response = await axios.get(`/auth/email?email=${value}`);

        if (response?.status === 200) {
          context.commit("setAuthCode", response?.data);
          return true;
        }

        router.push("/error");
        return false;
      } catch (error) {
        console.error("Vuex getAuthEmail error:", error.message);

        router.push("/error");
        return false;
      }
    },

    async AuthRegister(context, value) {
      try {
        const response = await axios.post(`/auth/register`, value);

        if (response?.status === 201) {
          return true;
        }

        router.push("/error");
        return false;
      } catch (error) {
        console.error("Vuex AuthRegister error:", error.message);

        router.push("/error");
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
        const { response, message } = error;
        console.error("Vuex AuthLogin error:", message);
        
        if (response?.status === 400) {
          return false;
        }

        router.push("/error");
        return false;
      }
    },
  },
};
