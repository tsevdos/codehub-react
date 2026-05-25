import { Todo } from "./App";

type TodosListProps = {
    title: string;
    todos: Todo[];
    toggleTodo: (title: string) => void;
}

export default function TodosList({ title, todos, toggleTodo }: TodosListProps) {
    const noOftotal = todos.length;
    const noOfDone = todos.filter(({ done }) => done).length;

    return (
        <div className="todo-section">
            <h3>
                {title} ({noOfDone}/{noOftotal})
            </h3>
            <ul className="todo-list">
                {todos.map(({ title, done }) => (
                    <li key={title} className="todo-item">
                        <label>
                            <input type="checkbox" checked={done} onChange={() => toggleTodo(title)} />
                            {done ? <s>{title}</s> : <span>{title}</span>}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};
