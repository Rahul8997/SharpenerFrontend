import Modal from '../UI/Modal';
import classes from './Cart.module.css';


const Cart = (props) => {

  const handleClose=()=>{
    props.toggleCartFunction();
  }
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
  
  return (
   <Modal>
   {cartItems}
   <div className={classes.total}>
     <span>Total Amount</span>
     <span>35.62</span>
   </div>
   <div className={classes.actions}>
     <button className={classes['button--alt']} onClick={handleClose}>Close</button>
     <button className={classes.button} >Order</button>
   </div>
 </Modal>
  );
};

export default Cart;