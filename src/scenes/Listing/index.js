import { connect } from 'react-redux';
import Listing from './Listing';
import * as itemActions from './../../actions/itemActions';

export default connect(
  state => ({
    items: state.items.items,
    cartData: state.items.cart,
  }),
  dispatch => ({
    getDispatchItems: () => {
      dispatch(itemActions.getItems());
    },
    setCartData: (data) => {
      dispatch(itemActions.setCartItems(data));
    },
  }),
)(Listing);
