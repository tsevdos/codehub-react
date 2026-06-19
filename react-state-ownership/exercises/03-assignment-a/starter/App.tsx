import { useEffect, useState } from 'react'

// TODO: This app has two state ownership problems.
//
// Problem 1 — COLOCATION
//   `filterPanelOpen` is managed here in App but is only ever read and
//   mutated inside ProductFilter. Move it to where it belongs.
//   Once you do, remove the props App no longer needs to pass.
//
// Problem 2 — DERIVED STATE
//   `filteredProducts` is stored as useState and kept in sync with
//   `searchQuery` via useEffect. Remove the redundant state and the
//   effect. Compute `filteredProducts` as a plain const instead.

const PRODUCTS = [
  { id: 1, name: 'Wireless Keyboard', category: 'Electronics' },
  { id: 2, name: 'Standing Desk', category: 'Furniture' },
  { id: 3, name: 'USB-C Hub', category: 'Electronics' },
  { id: 4, name: 'Ergonomic Chair', category: 'Furniture' },
  { id: 5, name: 'Webcam HD', category: 'Electronics' },
  { id: 6, name: 'Desk Lamp', category: 'Furniture' },
]

export default function App() {
  const [filterPanelOpen, setFilterPanelOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS)

  useEffect(() => {
    setFilteredProducts(
      PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    )
  }, [searchQuery])

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Product Catalogue</h1>
      <SearchBar query={searchQuery} onChange={setSearchQuery} />
      <ProductFilter
        isOpen={filterPanelOpen}
        onToggle={() => setFilterPanelOpen((v) => !v)}
      />
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

function ProductFilter({
  isOpen,
  onToggle,
}: {
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <button onClick={onToggle}>
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
