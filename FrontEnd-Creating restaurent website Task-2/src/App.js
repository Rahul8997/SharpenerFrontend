import { Fragment } from 'react';
import Header from './Components/Layout/Header';
import Summary from './Components/Layout/Summary';


function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Summary/>
      </main>
    </Fragment>
  );
}

export default App;