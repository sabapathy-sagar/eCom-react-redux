//TOGGLE_LOGIN
export const toggleLogin = () => ({
  type: "TOGGLE_LOGIN"
});

//SET_LOGIN
export const setLogin = isAuthenticated => ({
  type: "SET_LOGIN",
  isAuthenticated
});
