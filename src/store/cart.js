const ADD_TO_CART = "cart/addToCart";
const REMOVE_FROM_CART = "cart/removeFromCart";
const UPDATE_COUNT = "cart/updateCount";

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const updateCount = (id, count) => ({
  type: UPDATE_COUNT,
  id,
  count,
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
    default:
      return state;
  }
};

export default cartReducer;
