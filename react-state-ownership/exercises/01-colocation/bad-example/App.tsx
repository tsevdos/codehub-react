import { useState } from 'react'

const USERS = [
  { id: 1, name: 'Alice', role: 'Engineer' },
  { id: 2, name: 'Bob', role: 'Designer' },
  { id: 3, name: 'Carol', role: 'Product' },
]

// ❌ BAD: detailsOpen and selectedId live in App, but only UserCard reads and
// mutates them. UserList is a pure pass-through, carrying four props it doesn't
// use for its own rendering. Every open/close causes App to re-render, which
// re-renders ALL UserCard instances — not just the one that changed.
export default function App() {
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Team Directory</h1>
      <UserList
        users={USERS}
        detailsOpen={detailsOpen}
        selectedId={selectedId}
        onSelect={(id) => {
          setSelectedId(id)
          setDetailsOpen(true)
        }}
        onClose={() => setDetailsOpen(false)}
      />
    </div>
  )
}

function UserList({
  users,
  detailsOpen,
  selectedId,
  onSelect,
  onClose,
}: {
  users: typeof USERS
  detailsOpen: boolean
  selectedId: number | null
  onSelect: (id: number) => void
  onClose: () => void
}) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          isOpen={detailsOpen && selectedId === user.id}
          onOpen={() => onSelect(user.id)}
          onClose={onClose}
        />
      ))}
    </ul>
  )
}

function UserCard({
  user,
  isOpen,
  onOpen,
  onClose,
}: {
  user: (typeof USERS)[number]
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}) {
  return (
    <li
      style={{
        marginBottom: '1rem',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: 4,
      }}
    >
      <strong>{user.name}</strong> — {user.role}
      <button style={{ marginLeft: '1rem' }} onClick={onOpen}>
        Details
      </button>
      {isOpen && (
        <div
          style={{
            marginTop: '0.5rem',
            background: '#f5f5f5',
            padding: '0.5rem',
            borderRadius: 4,
          }}
        >
          <p>Role: {user.role}</p>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </li>
  )
}
