import { createContext, useContext, useReducer, useEffect, type ReactNode, type Dispatch } from "react";

export type Todo = {
    title: string;
    done: boolean;
};

type TodoState = {
    todos: Todo[];
    toDoInput: string;
};

type TodoAction =
    | { type: "SET_TODOS"; payload: Todo[] }
    | { type: "ADD_TODO"; payload: Todo }
    | { type: "TOGGLE_TODO"; payload: number }
    | { type: "DELETE_TODO"; payload: number }
    | { type: "UPDATE_INPUT"; payload: string };

type TodoContextType = {
    state: TodoState;
    dispatch: Dispatch<TodoAction>;
};

const TodoContext = createContext<TodoContextType | null>(null);

function todoReducer(state: TodoState, action: TodoAction): TodoState {
    switch (action.type) {
        case "SET_TODOS":
            return { ...state, todos: action.payload };
        case "ADD_TODO":
            return { todos: [...state.todos, action.payload], toDoInput: "" };
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload ? { ...todo, done: !todo.done } : todo
                ),
            };
        case "DELETE_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, action.payload),
                    ...state.todos.slice(action.payload + 1),
                ],
            };
        case "UPDATE_INPUT":
            return { ...state, toDoInput: action.payload };
        default:
            return state;
    }
}

type TodoProviderProps = {
    children: ReactNode;
};

export function TodoProvider({ children }: TodoProviderProps) {
    const [state, dispatch] = useReducer(todoReducer, { todos: [], toDoInput: "" });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.npoint.io/7b0685d9058f9f9c0aa4");
            const data = await response.json();
            dispatch({ type: "SET_TODOS", payload: data });
        };

        fetchData();
    }, []);

    return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
}

export function useTodos() {
    const context = useContext(TodoContext);
    if (context === null) {
        throw new Error("useTodos must be used within a TodoProvider");
    }

    return context;
}
