const initialState = {
  isAuthenticated: false,
  productsInWishlist: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "test":
      return {
        state
      };
    default:
      return state;
  }
};
