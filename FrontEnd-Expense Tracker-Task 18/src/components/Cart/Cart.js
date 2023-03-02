import { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {
  const cartList = useSelector(state => state.cart.cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartList.map((item) => {
            return <li>
              <CartItem
                item={{ title: item.title, total: 18, price: item.price }}
              />
            </li>
          })
        }

      </ul>
    </Card>
  );
};

export default Cart;
