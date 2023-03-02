import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const cardShow=useSelector(state=>state.cart.cardShow)
  return (
    <Layout>
      {cardShow && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
