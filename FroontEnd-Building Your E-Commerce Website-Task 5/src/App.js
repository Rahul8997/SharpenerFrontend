import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import Heading from './Components/Layout/Heading';
import MusicContent from './Components/Layout/MusicContent';
import Navbar from './Components/Layout/Navbar';
import CartProvider from './Components/Store/CartProvider';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import HeaderContent from './Components/Layout/HeaderContent';



function App() {
  const [showCart, setShowCart] = useState(false);
  const handleToggleCart = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }
  const router = createBrowserRouter([
    {
      path: "/home",
      element: (<>
        <Navbar handleToggleCart={handleToggleCart} />
        <HeaderContent />
        <Home />
        <Footer />
      </>),
    },
    {
      path: "/store",
      element: (<>
        <Navbar handleToggleCart={handleToggleCart} />
        <Heading />
        <MusicContent handleToggleCart={handleToggleCart} />
        <Footer />
      </>),
    },
    {
      path: "/about",
      element: <>
        <Navbar handleToggleCart={handleToggleCart} />
        <Heading />
        <About />
        <Footer />
      </>,
    },
  ]);
  return (
    <CartProvider>
      {showCart && <Cart handleToggleCart={handleToggleCart} />}
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;