import axios from "../../plugins/axios-interceptors";
import router from "@/router";

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
        const response = await axios.get(`/teams/${value}`, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        });
        if (response?.status === 200) {
          context.commit("setTeam", response?.data);
          return true;
        }

        router.push("/error");
        return false;
      } catch (error) {
        console.error("Vuex GetTeam error");

        if (error?.response?.status === 401) {
          localStorage.removeItem("folio_token");
          router.push("/auth/login");
          return;
        }

        router.push("/error");
        return false;
      }
    },

    async GetTeams(context, value) {
      const { page, limit, searchWord } = value;
      try {
        const response = await axios.get(
          `/teams?page=${page}&limit=${limit}&search=${searchWord}`,
          value,
          {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
          }
        );
        if (response?.status === 200) {
          context.commit("setTeams", response?.data);
          return true;
        }

        router.push("/error");
        return false;
      } catch (error) {
        console.error("Vuex GetTeams error:", error.message);
        if (error?.response?.status === 401) {
          localStorage.removeItem("folio_token");
          router.push("/auth/login");
          return;
        }

        router.push("/error");
        return false;
      }
    },

    async GetUserTeams(context, value) {
      try {
        const response = await axios.get(`/teams/user`, value, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        });
        if (response?.status === 200) {
          context.commit("setUserTeams", response?.data);
          return true;
        }

        router.push("/error");
        return false;
      } catch (error) {
        console.error("Vuex GetUserTeam error:", error.message);

        if (error?.response?.status === 401) {
          localStorage.removeItem("folio_token");
          router.push("/auth/login");
          return;
        }

        router.push("/error");
        return false;
      }
    },

    async SaveTeam(context, value) {
      try {
        const response = await axios.post(`/teams`, value, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response?.status === 201) {
          return true;
        }

        router.push("/error");
        return false;
      } catch (error) {
        console.error("Vuex SaveTeam error:", error.message);

        if (error?.response?.status === 401) {
          localStorage.removeItem("folio_token");
          router.push("/auth/login");
          return;
        }

        router.push("/error");
        return false;
      }
    },

    async UploadTeamImage(contenxt, value) {
      try {
        const response = await axios.post("/teams/upload", value, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response?.status === 201) {
          return true;
        }

        router.push("/error");
      } catch (error) {
        if (error?.response?.status === 401) {
          localStorage.removeItem("folio_token");
          router.push("/auth/login");
          return;
        }

        router.push("/error");
        return false;
      }
    },

    async ApplyTeam(context, value) {
      try {
        const response = await axios.post("/teams/applications", value, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        });

        if (response?.status === 201) {
          return true;
        }

        router.push("/error");
        return false;
      } catch (error) {
        console.error("Vuex ApplyTeam error", error.message);

        if (error?.response?.status === 401) {
          localStorage.removeItem("folio_token");
          router.push("/auth/login");
          return;
        }

        router.push("/error");
        return false;
      }
    },
  },
};
