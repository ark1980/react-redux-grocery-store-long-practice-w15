import produceDate from "../mockData/produce.json";

const LOAD_PRODUCE = "produce/loadReducer";

export const loadProduce = () => ({
  type: LOAD_PRODUCE,
  produce: produceDate,
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
    default:
      return state;
  }
};

export default produceReducer;
