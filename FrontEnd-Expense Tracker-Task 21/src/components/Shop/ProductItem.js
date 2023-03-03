import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../Store';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const addedProduct = {
    title: props.title,
    price: props.price,
    description: props.description,
    quantity: props.quantity,
    prodId: props.prodId,
  }
  const dispatch = useDispatch();

  const handleAdd = () => {
    function checkItem(item) {
      for (let i = 0; i < cartItems.length; i++) {
        if (item.prodId === cartItems[i].prodId) {
          return true;
        }
      }
      return false;
    }
    if (!checkItem(addedProduct)) {
      dispatch(cartActions.setAddCartItem(addedProduct));
    } else {
      dispatch(cartActions.setCartItemIncrease(addedProduct.prodId));
    }
  }
  return (
    <Card className={classes.item}>

      <header>
        <h3>{addedProduct.title}</h3>
        <div className={classes.price}>${addedProduct.price.toFixed(2)}</div>
      </header>
      <p>{addedProduct.description}</p>
      <div className={classes.actions}>
        <button onClick={() => handleAdd()}>Add to Cart</button>
      </div>

    </Card>
  );
}




export default ProductItem;
