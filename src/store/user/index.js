const user_key = "user_key";
const users_list_key = "user_list_key"
const token_key = "user_token"
import backApi from '../../api/back'

/**
 * @typedef {Object} User
 * @property {string | null} name
 * @property {string} email
 * @property {string} password
 * @property {string} token
 */


const userStore = {
  state() {
    /**
     * @type User
     */
    const user = JSON.parse(localStorage.getItem(user_key)) || { name: null, email: '', password: '' }
    const token = localStorage.getItem(token_key) || null
    return {
      current: user,
      users: [],
      token
    };
  },
  actions: {
    async logIn({ state, commit }, user = { email: '', password: '' }) {
/*       const result = state.users.filter(u => {
        if (u.email === user.email && u.password === user.password) {
          return true
        }
      })
      if (result.length <= 0) {
        throw new Error('User Not Found')
      }
      commit('setCurrent', result[0])
      return result[0] */
      try {
        const result = await backApi.put('/user/login', user)
        const {token, type} = result.data
        localStorage.setItem(token_key, `${type} ${token}`)
        return `${type} ${token}`
      } catch(e) {
        throw new Error(e.message)  
      }
    },
    /**
     * 
     * @param {User} user 
     */  
    async signUp({ commit }, user) {
      const {token, type} = await backApi.post('/user/signup', user)
      localStorage.setItem(token_key, `${type} ${token}`)
      commit('createUser', user)
      return new Error(e.message)
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
