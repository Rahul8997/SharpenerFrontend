import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';


const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const handleClose = () => {
    props.toggleCartFunction();
  }

  return (
    <Modal>
      {cartCtx.cartItems.map((item) => {
        return <div className={classes.mealItem} key={item.mealName}>
          <h5>{item.mealName}</h5>
          <h6>${item.mealPrice}<button>x{item.mealQty}</button></h6>
          <span>
            <button onClick={() => {
              if (item.mealQty > 0) {
                const newState = cartCtx.cartItems.map(element =>
                  element.mealId === item.mealId ? { ...element, mealQty: element.mealQty - 1 } : element
                );
                console.log(newState)
                let newTotal = (cartCtx.total) - ((item.mealPrice));
                cartCtx.setTotal(newTotal);
                cartCtx.setcartItems(newState);
                cartCtx.setTotalItems(cartCtx.totalItems - 1);

              }
            }}>-</button>

            <button onClick={() => {
              const newState = cartCtx.cartItems.map(element =>
                element.id === item.id ? { ...element, mealQty: element.mealQty + 1 } : element
              );
              console.log(newState)
              let newTotal = (cartCtx.total) + ((item.mealPrice));
              cartCtx.setTotal(newTotal);
              cartCtx.setcartItems(newState);
            }}>+</button>

          </span>
          <hr />
        </div>
      })}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={handleClose}>Close</button>
        <button className={classes.button} >Order</button>
      </div>
    </Modal>
  );
};

export default Cart;