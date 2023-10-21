const ADD_TO_CART = "cart/addToCart";
const REMOVE_FROM_CART = "cart/removeFromCart";

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          count: 1,
        },
      };
    case REMOVE_FROM_CART:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
