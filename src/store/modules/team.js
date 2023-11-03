import axios from "../../plugins/axios-interceptors";

export const Team = {
  namespaced: true,
  state: () => ({
    team: [],
    teams: [],
    userTeams: [],
  }),
  mutations: {
    setTeam(state, value) {
      state.team = value;
    },

    setTeams(state, value) {
      state.teams = value;
    },

    setUserTeams(state, value) {
      state.userTeams = value;
    },
  },
  actions: {
    async GetTeam(context, value) {
      try {
        const response = await axios.get(`/teams/${value}`);
        console.log("GetTeam", response);
        if (response?.status === 200) {
          context.commit("setTeam", response?.data);
          return true;
        }
        return false;
      } catch (error) {
        console.error("Vuex GetTeam error");
        return false;
      }
    },

    async GetTeams(context, value) {
      try {
        const response = await axios.get(`/teams`, value);
        if (response?.status === 200) {
          context.commit("setTeams", response?.data);
          return true;
        }
        return false;
      } catch (error) {
        console.error("Vuex GetTeams error:", error.message);
        return false;
      }
    },

    async GetUserTeams(context, value) {
      try {
        const response = await axios.get(`/teams/user`, value);
        if (response?.status === 200) {
          context.commit("setUserTeams", response?.data);
          return true;
        }
        return false;
      } catch (error) {
        console.error("Vuex GetUserTeam error:", error.message);
        return false;
      }
    },

    async SaveTeam(context, value) {
      try {
        const response = await axios.post(`/teams`, value);

        if (response?.status === 201) {
          return true;
        }
        return false;
      } catch (error) {
        console.error("Vuex SaveTeam error:", error.message);
        return false;
      }
    },

    async ApplyTeam(context, value) {
      try {
        const response = await axios.post("/teams/applications", value);

        if (response?.status === 201) {
          return true;
        }
        return false;
      } catch (error) {
        console.error("Vuex ApplyTeam error", error.message);
        return false;
      }
    },
  },
};
