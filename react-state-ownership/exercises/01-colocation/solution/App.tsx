import { useState } from 'react'

const USERS = [
  { id: 1, name: 'Alice', role: 'Engineer' },
  { id: 2, name: 'Bob', role: 'Designer' },
  { id: 3, name: 'Carol', role: 'Product' },
]

// ✅ GOOD: each UserCard owns its own open/close state.
// App and UserList have no knowledge of it — shorter prop lists,
// fewer re-renders, and the logic lives exactly where it is used.
export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Team Directory</h1>
      <UserList users={USERS} />
    </div>
  )
}

function UserList({ users }: { users: typeof USERS }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  )
}

function UserCard({ user }: { user: (typeof USERS)[number] }) {
  const [isOpen, setIsOpen] = useState(false)

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
      <button style={{ marginLeft: '1rem' }} onClick={() => setIsOpen(true)}>
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
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </li>
  )
}
