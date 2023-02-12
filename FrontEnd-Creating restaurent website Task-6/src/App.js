import { Fragment, useState } from 'react';
import Cart from './Components/Layout/Cart';
import Header from './Components/Layout/Header';
import MealItem from './Components/Layout/MealItem';
import Summary from './Components/Layout/Summary';


function App() {
  const [cartOpened, setcartOpened] = useState(false);
  const toggleCartFunction=()=>{
    if(cartOpened){
      setcartOpened(false);
    }else{
      setcartOpened(true);
    }
  }

  return (
    <Fragment>
     {cartOpened && <Cart toggleCartFunction={toggleCartFunction}/>}
      <Header toggleCartFunction={toggleCartFunction}/>
      <main>
        <Summary/>
      </main>
      <MealItem/>
    </Fragment>
  );
}

export default App;