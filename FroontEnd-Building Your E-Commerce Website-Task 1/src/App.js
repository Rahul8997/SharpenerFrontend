import { Fragment } from 'react';
import Footer from './Components/Layout/Footer';
import Heading from './Components/Layout/Heading';
import MusicContent from './Components/Layout/MusicContent';
import Navbar from './Components/Layout/Navbar';


function App() {
  return (
    <Fragment>
      <Navbar/>
      <Heading/>
      <MusicContent/>
      <Footer/>
    </Fragment>
  );
}

export default App;