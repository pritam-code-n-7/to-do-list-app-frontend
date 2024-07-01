import { useState } from "react";
import Button from "../reusables/Button";
import InputField from "../reusables/InputField";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: Date.now(), // Generate unique timestamp
      content: inputValue, // Todo content
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="sm:ml-64 p-5 ">
        <h1 className="text-2xl font-semibold mb-5">Todo List</h1>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center gap-4 mb-2">
              <span>{todo.content}</span>
              <button
                onClick={() => handleDelete(todo.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex right-0 items-center border-b-2 border-blue-500 py-2 absolute max-w-full bottom-0 gap-2">
        <InputField
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="appearance-none w-full text-black p-2 leading-tight resize-none focus:outline-none"
          placeholder="Add new todo"
          aria-label="Add new todo"
        />
        <Button
          name="Add"
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </>
  );
};

export default TodoList;
