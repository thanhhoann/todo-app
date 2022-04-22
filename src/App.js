import "./App.css";
import React from "react";

export default function App() {
  const [todos, setTodo] = React.useState([]);
  const [todoName, setTodoName] = React.useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTodo([...todos, { name: todoName, id: String(Math.random()) }]);
    setTodoName("");
  };

  const onCompleteHandler = (id) => {
    setTodo(() => todos.filter((todo) => todo.id != id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="todoName"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <button type="submit">+</button>
        </form>
      </div>
      <div className="todos">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} onComplete={onCompleteHandler} />
        ))}
      </div>
    </div>
  );
}

function Todo({ todo, onComplete }) {
  const markDone = () => {
    onComplete(todo.id);
  };

  return (
    <>
      <div className="todo">
        {todo.name}
        <button onClick={markDone}>
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
        </button>
      </div>
    </>
  );
}
