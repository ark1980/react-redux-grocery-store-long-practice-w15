import produceDate from "../mockData/produce.json";

const LOAD_PRODUCE = "produce/loadReducer";
const TOGGLE_LIKE = "produce/toggleLike";

export const loadProduce = () => ({
  type: LOAD_PRODUCE,
  produce: produceDate,
});

export const toggleLike = (id) => ({
  type: TOGGLE_LIKE,
  id,
});

const produceReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_PRODUCE:
      // return {
      //   ...state,
      //   produce: { ...action.produce },
      // };
      const newState = {};
      action.produce.forEach((item) => {
        newState[item.id] = item;
      });
      return newState;
    case TOGGLE_LIKE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          liked: !state[action.id].liked,
        },
      };
    default:
      return state;
  }
};

export default produceReducer;
