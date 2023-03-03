import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartItems=useSelector(state=>state.cart.cartItems);
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
