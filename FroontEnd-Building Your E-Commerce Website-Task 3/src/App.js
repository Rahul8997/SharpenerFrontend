import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import Heading from './Components/Layout/Heading';
import MusicContent from './Components/Layout/MusicContent';
import Navbar from './Components/Layout/Navbar';
// import CartContext from './Components/Store/CartContext';
import CartProvider from './Components/Store/CartProvider';


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
    <CartProvider>
      {showCart && <Cart handleToggleCart={handleToggleCart}/>}
      <Navbar handleToggleCart={handleToggleCart}/>
      <Heading/>
      <MusicContent handleToggleCart={handleToggleCart}/>
      <Footer/>
    </CartProvider>
  );
}

export default App;