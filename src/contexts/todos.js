import { createContext, useContext, useReducer } from "react";

const initialState = [
  { id: 1, text: "1", done: true },
  { id: 2, text: "2", done: false },
  { id: 3, text: "3", done: false },
];

function reducer(state, action) {
  switch (action.type) {
    case "create":
      return state.concat({ id: action.id, text: action.text, done: false });
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

export const TodoStateContext = createContext(null);
export const TodoDispatchContext = createContext(null);

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) throw Error("TodoProvider 없음");
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) throw Error("TodoProvider 없음");
  return context;
}