import { FormEvent, useState } from "react";

export type Message = {
  id: number;
  username: string;
  text: string;
  reactions: number;
};

type MessageInputProps = {
  onSendMessage: (text: string) => void;
};

function MessageInput({ onSendMessage }: MessageInputProps) {
  const [messageText, setMessageText] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedMessage = messageText.trim();

    if (!trimmedMessage) {
      return;
    }

    onSendMessage(trimmedMessage);
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
    </div>
  );
}

type MessageListProps = {
  messages: Message[];
  onReact: (id: number) => void;
};

function MessageList({ messages, onReact }: MessageListProps) {
  if (messages.length === 0) {
    return <p>No messages yet. Say something!</p>;
  }

  return (
    <div className="exercise-card">
      <p>{messages.length} message(s)</p>

      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.username}</strong>: {message.text}{" "}
            <button type="button" onClick={() => onReact(message.id)}>
              👍 {message.reactions}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  function handleSendMessage(text: string) {
    setMessages((prev) => {
      const nextId =
        prev.reduce((max, message) => Math.max(max, message.id), 0) + 1;

      return [
        ...prev,
        {
          id: nextId,
          username: "User",
          text,
          reactions: 0,
        },
      ];
    });
  }

  function handleReact(id: number) {
    setMessages((prev) =>
      prev.map((message) =>
        message.id === id
          ? { ...message, reactions: message.reactions + 1 }
          : message,
      ),
    );
  }

  return (
    <div className="exercise-shell exercise-grid">
      <MessageList messages={messages} onReact={handleReact} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}
