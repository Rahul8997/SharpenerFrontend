import { Fragment, useState } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import Heading from './Components/Layout/Heading';
import MusicContent from './Components/Layout/MusicContent';
import Navbar from './Components/Layout/Navbar';


function App() {
  const [showCart,setShowCart]=useState(false);
  const handleToggleCart=()=>{
    if(showCart){
      setShowCart(false);
    }else{
      setShowCart(true);
    }
  }
  return (
    <Fragment>
      {showCart && <Cart handleToggleCart={handleToggleCart}/>}
      <Navbar handleToggleCart={handleToggleCart}/>
      <Heading/>
      <MusicContent/>
      <Footer/>
    </Fragment>
  );
}

export default App;