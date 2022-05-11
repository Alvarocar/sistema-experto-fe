const user_key = "user_key";
const users_list_key = "user_list_key"

/**
 * @typedef {Object} User
 * @property {string | null} name
 * @property {string} email
 * @property {string} password 
 */


const userStore = {
  state() {
    /**
     * @type User
     */
    const user = JSON.parse(localStorage.getItem(user_key)) || { name: null, email: '', password: '' }
    return {
      current: user,
      users: []
    };
  },
  actions: {
    async logIn({ state, commit }, user = { email: '', password: '' }) {
      /**
       * @type {Array}
       */
      const result = state.users.filter(u => {
        if (u.email === user.email && u.password === user.password) {
          return true
        }
      })
      if (result.length <= 0) {
        throw new Error('User Not Found')
      }
      commit('setCurrent', result[0])
      return result[0]
    },
    /**
     * 
     * @param {User} user 
     */  
    async signUp({ commit }, user) {
      commit('createUser', user)
    }
  },
  mutations: {
    createUser(state, user) {
      state.users.push(user)
      localStorage.setItem(users_list_key, JSON.stringify(state.users))
    },
    setCurrent(state, current) {
      state.current = current
      localStorage.setItem(user_key, JSON.stringify(current))
    }
  }
};

export default userStore;
