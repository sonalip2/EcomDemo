import * as types from './actionTypes';
import data from '../constants/data';

export const getItems = () => {
  try {
    const listing = [];
    data.menu.map((m) => {
      m.items.map((i) => {
        listing.push(i)
      }) || [];
    });
    return ({
      type: types.SET_LISTING_DATA,
      payload: listing,
    });
  }
  catch (err) {
    throw new Error(err);
  }

};

export const setCartItems = (data) => {
  try {
    // console.log('---->cartItems', data);
    return ({
      type: types.SET_CART_DATA,
      payload: data,
    });
  }
  catch (err) {
    throw new Error(err);
  }

};
