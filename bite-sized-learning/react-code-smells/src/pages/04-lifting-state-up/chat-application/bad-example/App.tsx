import { FormEvent, useState } from "react";

export type Message = {
  id: number;
  username: string;
  text: string;
  reactions: number;
};

function MessageInput() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageText, setMessageText] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!messageText.trim()) {
      return;
    }

    const nextId =
      messages.reduce((max, message) => Math.max(max, message.id), 0) + 1;

    setMessages((prev) => [
      ...prev,
      {
        id: nextId,
        username: "User",
        text: messageText.trim(),
        reactions: 0,
      },
    ]);
    setMessageText("");
  }

  return (
    <div className="exercise-card">
      <h2>Chat input</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="field-input"
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
      <p className="muted-note">Messages sent here: {messages.length}</p>
    </div>
  );
}

function MessageList() {
  const [messages] = useState<Message[]>([]);

  return (
    <div className="exercise-card">
      <h2>Messages</h2>
      {messages.length === 0 ? (
        <p>No messages yet. Say something!</p>
      ) : (
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              <strong>{message.username}</strong>: {message.text} (
              {message.reactions} 👍)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="exercise-shell exercise-grid">
      <MessageInput />
      <MessageList />
    </div>
  );
}
