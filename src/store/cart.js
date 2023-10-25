const ADD_TO_CART = "cart/addToCart";
const REMOVE_FROM_CART = "cart/removeFromCart";
const UPDATE_COUNT = "cart/updateCount";
const RESET = "cart/reset";

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const updateCount = (id, count) => {
  if (count < 1) return removeFromCart(id);
  return {
    type: UPDATE_COUNT,
    id,
    count,
  };
};

export const reset = () => ({
  type: RESET,
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
    case UPDATE_COUNT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          count: action.count,
        },
      };
    case RESET:
      return (state = {});
    default:
      return state;
  }
};

export default cartReducer;
