import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, cartItemActions } from '../Store';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const [qty, setQty] = useState(1);
  const { title, total, price } = props.item;
  const handleIncreaseQty = (e) => {
    e.preventDefault();
    setQty(qty + 1)
  }
  const handleDecreaseQty = (e) => {
    e.preventDefault();
    if (qty > 0) {
      setQty(qty - 1);
    }
  }


  return (
    <div>
      <li className={classes.item}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            ${total.toFixed(2)}{' '}
            <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{qty}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={handleDecreaseQty}>-</button>
            <button onClick={handleIncreaseQty}>+</button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
