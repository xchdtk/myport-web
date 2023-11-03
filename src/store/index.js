import { createStore } from "vuex";
import { Auth } from "@/store/modules/auth";
import { Team } from "@/store/modules/team";
export default createStore({
  modules: { Auth, Team },
});
