import { useState, useEffect } from "react";

const UserCard = () => {
  const [products, setProducts] = useState({ apples: 0, bananas: 0, oranges: 0 });
  const [totalProducts, setTotalProducts] = useState(0);
  const [showApples, setShowApples] = useState(false);
  const [showBananas, setShowBananas] = useState(false);
  const [showOranges, setShowOranges] = useState(false);

  const addToCart = (product) => {
    switch (product) {
      case "apple": {
        setProducts({ ...products, apples: products.apples + 1 });
        break;
      }
      case "banana": {
        setProducts({ ...products, bananas: products.bananas + 1 });
        break;
      }
      case "orange": {
        setProducts({ ...products, oranges: products.oranges + 1 });
        break;
      }
    }
  };

  useEffect(() => {
    const total = Object.values(products).reduce((acc, curr) => acc + curr, 0);
    setTotalProducts(total);
  }, [products]);

  useEffect(() => {
    setShowApples(products.apples > 0);
  }, [products]);

  useEffect(() => {
    setShowBananas(products.bananas > 0);
  }, [products]);

  useEffect(() => {
    setShowOranges(products.oranges > 0);
  }, [products]);

  return (
    <div>
      <hr />
      <div style={{ display: "flex" }}>
        <div style={{ padding: "0 2rem" }}>
          <h2>Products</h2>
          <ul>
            <li>
              <button onClick={() => addToCart("apple")}>🍎 apple</button>
            </li>
            <li>
              <button onClick={() => addToCart("banana")}>🍌 banana</button>
            </li>
            <li>
              <button onClick={() => addToCart("orange")}>🍊 orange</button>
            </li>
          </ul>
        </div>
        <div style={{ padding: "0 2rem" }}>
          <h2>Cart ({totalProducts})</h2>
          <ul>
            {showApples && <li>{products.apples} x 🍎 apple</li>}
            {showBananas && <li>{products.bananas} x 🍌 banana</li>}
            {showOranges && <li>{products.oranges} x 🍊 orange</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
