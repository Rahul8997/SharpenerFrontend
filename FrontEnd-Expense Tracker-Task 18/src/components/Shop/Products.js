import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  { title: "Fafda", price: 100, description: "Gujarati Snacks",quantity:1 },
  { title: "Jalebi", price: 20, description: "Gujarati sweet",quantity:1 },
  { title: "Vada-pao", price: 30, description: "Mumbai ka street food",quantity:1 },
  { title: "Lassi", price: 40, description: "Punjab da Taste",quantity:1 }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((prod) => {
          return <li>
            <ProductItem
              title={prod.title}
              price={prod.price}
              description={prod.description}
              quantity={prod.quantity}
            />
          </li>
        })}

      </ul>
    </section>
  );
};

export default Products;
