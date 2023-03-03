import { useDispatch } from 'react-redux';
import { cartActions} from '../Store';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, price, quantity, prodId } = props.item;

  const dispatch = useDispatch();
  const handleIncreaseQty = (e) => {
    e.preventDefault();
    dispatch(cartActions.setCartItemIncrease(prodId))
  }
  const handleDecreaseQty = (e) => {
    e.preventDefault();
    if (quantity > 0) {
      dispatch(cartActions.setCartItemDecrease(prodId))
    }
    dispatch(cartActions.setCartFilter());
  }


  return (
    <div className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(price * quantity).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecreaseQty}>-</button>
          <button onClick={handleIncreaseQty}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
