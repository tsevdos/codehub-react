import { useState } from 'react'

const PRODUCTS = [
  { id: 1, name: 'Wireless Keyboard', price: 89 },
  { id: 2, name: 'USB-C Hub', price: 45 },
  { id: 3, name: 'Webcam HD', price: 120 },
]

// ✅ GOOD: cartItems lives in App — the nearest common ancestor of ProductList
// and CartSummary. Both components now share the same source of truth.
// Adding an item in ProductList immediately updates CartSummary.
export default function App() {
  const [cartItems, setCartItems] = useState<number[]>([])

  function handleAdd(productId: number) {
    setCartItems((prev) => [...prev, productId])
  }

  function handleClear() {
    setCartItems([])
  }

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
      <ProductList cartItems={cartItems} onAdd={handleAdd} />
      <CartSummary cartItems={cartItems} onClear={handleClear} />
    </div>
  )
}

function ProductList({
  cartItems,
  onAdd,
}: {
  cartItems: number[]
  onAdd: (productId: number) => void
}) {
  return (
    <div>
      <h2>Products</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {PRODUCTS.map((product) => (
          <li key={product.id} style={{ marginBottom: '0.5rem' }}>
            {product.name} — ${product.price}
            <button
              style={{ marginLeft: '1rem' }}
              onClick={() => onAdd(product.id)}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
      <p style={{ color: '#888', fontSize: '0.875rem' }}>
        Items in cart: {cartItems.length}
      </p>
    </div>
  )
}

function CartSummary({
  cartItems,
  onClear,
}: {
  cartItems: number[]
  onClear: () => void
}) {
  const total = cartItems.reduce((sum, id) => {
    const product = PRODUCTS.find((p) => p.id === id)
    return sum + (product?.price ?? 0)
  }, 0)

  return (
    <div>
      <h2>Cart</h2>
      <p>Items in cart: {cartItems.length}</p>
      <p>Total: ${total}</p>
      <button onClick={onClear}>Clear cart</button>
    </div>
  )
}
