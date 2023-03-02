import { useDispatch, useSelector } from 'react-redux';
import { cartActions, cartItemActions } from '../Store';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const { title, price, description } = props;
  const dispatch = useDispatch();

  function checkItem(array) {
    let flag = false;
    for (let i = 0; i < array.length; i++) {
      if (props.title === array[i].title) {
        flag = true;
        return flag;
      }
      return flag;
    }
  }
  const handleAdd = (e) => {
    e.preventDefault();
    let addedItem = {
      title: props.title,
      price: props.price,
      description: props.description
    }
    if (!checkItem(cartItems)) {
      dispatch(cartActions.setAddCartItem(addedItem));
    } else {
      alert("already present")
    }

  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAdd}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
