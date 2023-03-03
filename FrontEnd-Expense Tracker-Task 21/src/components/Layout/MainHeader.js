import { useDispatch, useSelector } from 'react-redux';
import CartButton from '../Cart/CartButton';
import { cartActions } from '../Store';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const cardShow=useSelector(state=>state.cart.cardShow)
  const dispatch=useDispatch();
  const handleCartToggle = (e) => {
    e.preventDefault();
    if(cardShow){
      dispatch(cartActions.setToggle(false));
    }else{
      dispatch(cartActions.setToggle(true));
    }
    
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li >
            <div  onClick={handleCartToggle}>
            <CartButton /></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
