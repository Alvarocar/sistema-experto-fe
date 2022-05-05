const user_key = "user_key";

const userStore = {
  state() {
    const user = JSON.parse(localStorage.getItem(user_key)) || { name: null };
    return user;
  }
};

export default userStore;
