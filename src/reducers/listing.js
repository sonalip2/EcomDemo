import { SET_LISTING_DATA, SET_CART_DATA } from './../actions/actionTypes';

const initialState = {
  items: [],
  cart: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LISTING_DATA:
      return {
        ...state,
        items: action.payload,
      };
    case SET_CART_DATA:
      return {
        ...state,
        cart: action.payload
      };
    default:
      return state;
  }
};
