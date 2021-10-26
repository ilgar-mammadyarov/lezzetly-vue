export default {
  IS_AUTH: (state) => {
    return !!state.token;
  },
};
