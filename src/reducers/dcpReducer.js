const initialState = {
  isAuthenticated: false,
  productsInWishlist: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_LOGIN":
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated
      };
    default:
      return state;
  }
};
