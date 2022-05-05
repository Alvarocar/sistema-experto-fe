import { createStore } from "vuex";
import User from "./user";

const store = createStore({
  modules: {
    user: User
  }
});

export default store;
