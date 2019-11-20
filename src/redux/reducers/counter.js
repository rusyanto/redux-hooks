import { DECREMENT, INCREMENT } from '../actionTypes';

const initialState = {
  num: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DECREMENT: {
      const { step } = action.payload;
      return {
        ...state,
        num: state.num - step
      };
    }
    case INCREMENT: {
      const { step } = action.payload;
      return {
        ...state,
        num: state.num + step
      };
    }
    default:
      return state;
  }
}
