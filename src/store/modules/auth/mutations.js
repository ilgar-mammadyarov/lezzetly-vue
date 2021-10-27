export default {
  SET_TOKEN(state, token) {
    state.token = token;
    localStorage.setItem("token", JSON.stringify(token));
  },
};
