import { useEffect, useState } from 'react';
import styles from './Checkout.module.css';
import { LoadingIcon } from './Icons';
import { getProducts } from './dataService';

// You are provided with an incomplete <Checkout /> component.
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs.

// Demo video - You can view how the completed functionality should look at: https://drive.google.com/file/d/1bcXpGUzJUyUwITOqEn8QPj8ZOgUbTGQD/view?usp=sharing

// Once the <Checkout /> component is mounted, load the products using the getProducts function.
// Once all the data is successfully loaded, hide the loading icon.
// Render each product object as a <Product/> component, passing in the necessary props.
// Implement the following functionality:
//  - The add and remove buttons should adjust the ordered quantity of each product
//  - The add and remove buttons should be enabled/disabled to ensure that the ordered quantity can’t be negative and can’t exceed the available count for that product.
//  - The total shown for each product should be calculated based on the ordered quantity and the price
//  - The total in the order summary should be calculated
//  - For orders over $1000, apply a 10% discount to the order. Display the discount text only if a discount has been applied.
//  - The total should reflect any discount that has been applied
//  - All dollar amounts should be displayed to 2 decimal places

type ProductBody = {
  id: number;
  name: string;
  availableCount: number;
  price: number;
  orderedQuantity: number;
  total: number;
};

type Props = {
  id: number;
  name: string;
  availableCount: number;
  price: number;
  orderedQuantity: number;
  total: number;
  addCuant: (id: number) => void;
  removeCuant: (id: number) => void;
};


const Product = ({ id, name, availableCount, price, orderedQuantity, total, addCuant, removeCuant }: Props) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price}</td>
      <td>{orderedQuantity}</td>
      <td>${total}</td>
      <td>
        <button className={styles.actionButton}
          onClick={() => addCuant(id)}>+</button>
        <button className={styles.actionButton}
          onClick={() => removeCuant(id)}>-</button>
      </td>
    </tr >
  );
}

const Checkout = () => {
  const [products, setProducts] = useState<ProductBody[]>([]);
  // const [discount, setDiscount] = useState(0);
  // const [total, setTotal] = useState(0);

  const addCuant = (id: number) => {
    console.log(id);
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          orderedQuantity: product.orderedQuantity + 1,
          total: (product.orderedQuantity + 1) * product.price,
        };
      }
      return product;
    });
    console.log(newProducts);
    setProducts(newProducts);
  }

  const removeCuant = (id: number) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          orderedQuantity: product.orderedQuantity - 1,
          total: (product.orderedQuantity - 1) * product.price,
        };
      }
      return product;
    });
    setProducts(newProducts);
  }

  useEffect(() => {
    getProducts().then((data) => {
      const initialProducts = data.map((product) => ({
        ...product,
        orderedQuantity: 0,
        total: 0,
      }));
      setProducts(initialProducts);
    });
  }, []);
  return (
    <div>
      <header className={styles.header}>
        <h1>Electro World</h1>
      </header>
      <main>
        {
          products.length === 0 && <LoadingIcon />
        }
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th># Available</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {
            products.length !== 0
            &&
            <tbody>
              {products.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  availableCount={product.availableCount}
                  price={product.price}
                  orderedQuantity={product.orderedQuantity}
                  total={product.total}
                  addCuant={addCuant}
                  removeCuant={removeCuant}
                />
              ))}
            </tbody>
          }
        </table>
        <h2>Order summary</h2>
        <p>Discount: $ </p>
        <p>Total: 0$ </p>
      </main>
    </div>
  );
};

export default Checkout;