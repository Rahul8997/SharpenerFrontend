import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { cartActions } from './components/Store';
import Card from './components/UI/Card';

let initial = true;
function App() {
  const cardShow = useSelector(state => state.cart.cardShow);
  const cartItems = useSelector(state => state.cart.cartItems);
  const [successShow, setSuccessShow] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const [processShow, setProcessShow] = useState(false);
  let dispatch = useDispatch();
  useEffect(() => {
    if (initial) {
      try {
        async function fetchData() {
          setErrorShow(false);
          setSuccessShow(false);
          setProcessShow(true);
          let responce = await fetch(
            'https://react-authantication-app-default-rtdb.firebaseio.com/cart.json',
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          if (responce.ok) {
            const data = await responce.json();
            console.log("data", data.cartItems);
            setErrorShow(false);
            setSuccessShow(true);
            setProcessShow(false);
            dispatch(cartActions.setCart(data.cartItems))
          } else {
            setErrorShow(true);
            setSuccessShow(false);
            setProcessShow(false);
            console.log("Error :Sending cart data failed")
            throw new Error("Error :Sending cart data failed");
          }
        }
        fetchData();
      } catch (error) {
        setErrorShow(true);
        setSuccessShow(false);
        setProcessShow(false);
        console.log(error)
      }
      initial = false;
    } else {
      try {
        async function fetchData() {
          setErrorShow(false);
          setSuccessShow(false);
          setProcessShow(true);
          let responce = await fetch(
            'https://react-authantication-app-default-rtdb.firebaseio.com/cart.json',
            {
              method: 'PUT',
              body: JSON.stringify({ cartItems }),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          if (responce.ok) {
            const data = await responce.json();
            console.log("data", data);
            setErrorShow(false);
            setSuccessShow(true);
            setProcessShow(false);
          } else {
            throw new Error("Error :Sending cart data failed");
          }
        }
        fetchData();
      } catch (error) {
        setErrorShow(true);
        setSuccessShow(false);
        setProcessShow(false);
      }
    }


  }, [cartItems])

  return (
    <Fragment>
      {successShow && <div className='bg-success'><Card className="text-light bg-success w-100 h4">Success!Sent Cart data successfully!!!</Card></div>}
      {errorShow && <div className='bg-danger'><Card className="text-light bg-danger h4">Error!Sending data failed!!!</Card></div>}
      {processShow && <div className='bg-primary'><Card className="text-light bg-primary h4">Sending...Sending cart data!!!</Card></div>}
      <Layout>
        {cardShow && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
