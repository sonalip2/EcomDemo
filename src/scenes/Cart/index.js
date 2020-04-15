import { connect } from 'react-redux';
import Cart from './cart';
import * as itemActions from '../../actions/itemActions';

export default connect(
  state => ({
    cartData: state.items.cart,
    items: state.items.items,
  }),
  dispatch => ({
    setCartData: (data) => {
      dispatch(itemActions.setCartItems(data));
    },
  }),
)(Cart);
