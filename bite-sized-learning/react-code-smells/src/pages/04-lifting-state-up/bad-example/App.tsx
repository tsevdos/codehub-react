import { useState } from 'react'

const PRODUCTS = [
  { id: 1, name: 'Wireless Keyboard', price: 89 },
  { id: 2, name: 'USB-C Hub', price: 45 },
  { id: 3, name: 'Webcam HD', price: 120 },
]

// ❌ BAD: ProductList and CartSummary each maintain their own cartItems state.
// Clicking "Add to cart" in ProductList updates its local copy only.
// CartSummary never receives those updates — it always shows an empty cart.
// The "Clear cart" button in CartSummary is a silent no-op for the same reason.
export default function App() {
  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
      }}
    >
      <ProductList />
      <CartSummary />
    </div>
  )
}

function ProductList() {
  const [cartItems, setCartItems] = useState<number[]>([])

  return (
    <div>
      <h2>Products</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {PRODUCTS.map((product) => (
          <li key={product.id} style={{ marginBottom: '0.5rem' }}>
            {product.name} — ${product.price}
            <button
              style={{ marginLeft: '1rem' }}
              onClick={() => setCartItems((prev) => [...prev, product.id])}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
      <p style={{ color: '#888', fontSize: '0.875rem' }}>
        Items added (local count): {cartItems.length}
      </p>
    </div>
  )
}

function CartSummary() {
  const [cartItems, setCartItems] = useState<number[]>([])

  const total = cartItems.reduce((sum, id) => {
    const product = PRODUCTS.find((p) => p.id === id)
    return sum + (product?.price ?? 0)
  }, 0)

  return (
    <div>
      <h2>Cart</h2>
      <p>Items in cart: {cartItems.length}</p>
      <p>Total: ${total}</p>
      <button onClick={() => setCartItems([])}>Clear cart</button>
    </div>
  )
}
