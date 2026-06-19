import { useState } from 'react'

const PRODUCTS = [
  { id: 1, name: 'Wireless Keyboard', category: 'Electronics' },
  { id: 2, name: 'Standing Desk', category: 'Furniture' },
  { id: 3, name: 'USB-C Hub', category: 'Electronics' },
  { id: 4, name: 'Ergonomic Chair', category: 'Furniture' },
  { id: 5, name: 'Webcam HD', category: 'Electronics' },
  { id: 6, name: 'Desk Lamp', category: 'Furniture' },
]

// ✅ SOLUTION
// Fix 1 (colocation): filterPanelOpen moved inside ProductFilter.
//   App no longer holds it and no longer passes isOpen / onToggle.
// Fix 2 (derived state): filteredProducts computed as a const from searchQuery.
//   No useState, no useEffect.
export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Product Catalogue</h1>
      <SearchBar query={searchQuery} onChange={setSearchQuery} />
      <ProductFilter />
      <ProductList products={filteredProducts} />
    </div>
  )
}

function SearchBar({
  query,
  onChange,
}: {
  query: string
  onChange: (value: string) => void
}) {
  return (
    <input
      type="text"
      placeholder="Search products…"
      value={query}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: '0.4rem',
        fontSize: '1rem',
        width: '100%',
        maxWidth: 400,
        marginBottom: '1rem',
      }}
    />
  )
}

function ProductFilter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ marginBottom: '1rem' }}>
      <button onClick={() => setIsOpen((v) => !v)}>
        {isOpen ? 'Hide Filters ▲' : 'Show Filters ▼'}
      </button>
      {isOpen && (
        <div
          style={{
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: 4,
            marginTop: '0.5rem',
          }}
        >
          <label>
            <input type="checkbox" /> Electronics
          </label>{' '}
          <label>
            <input type="checkbox" /> Furniture
          </label>
        </div>
      )}
    </div>
  )
}

function ProductList({ products }: { products: typeof PRODUCTS }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {products.map((product) => (
        <li
          key={product.id}
          style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}
        >
          {product.name} — <em>{product.category}</em>
        </li>
      ))}
    </ul>
  )
}
