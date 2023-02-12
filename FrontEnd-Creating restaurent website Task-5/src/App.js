import { Fragment } from 'react';
import Cart from './Components/Layout/Cart';
import Header from './Components/Layout/Header';
import MealItem from './Components/Layout/MealItem';
import Summary from './Components/Layout/Summary';


function App() {
  return (
    <Fragment>
      <Cart/>
      <Header />
      <main>
        <Summary/>
      </main>
      <MealItem/>
    </Fragment>
  );
}

export default App;