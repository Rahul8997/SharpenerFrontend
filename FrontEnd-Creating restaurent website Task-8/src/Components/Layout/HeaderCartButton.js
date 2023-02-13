import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const handleCartOpen = () => {
    props.toggleCartFunction();
  }
  
  return (

    <button className={classes.button} onClick={handleCartOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;