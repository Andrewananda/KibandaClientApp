import {ADD_ITEM, COUNT} from './constants';

const INITIAL_STATE = {
  cartItems: [],
  count: 0,
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {...state, cartItems: state.cartItems.concat(action.payload)};
    case COUNT:
      return {...state, count: action.payload};
    default:
      return state;
  }
}
