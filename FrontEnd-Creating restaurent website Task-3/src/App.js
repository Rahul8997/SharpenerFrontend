import { Fragment } from 'react';
import Header from './Components/Layout/Header';
import MealItem from './Components/Layout/MealItem';
import Summary from './Components/Layout/Summary';


function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Summary/>
      </main>
      <MealItem/>
    </Fragment>
  );
}

export default App;