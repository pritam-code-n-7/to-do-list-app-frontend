import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputHeight, setInputHeight] = useState("38px");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    adjustInputHeight(e.target);
  };

  const adjustInputHeight = (input) => {
    input.style.height = "auto";
    if (input.scrollHeight > 38) {
      input.style.height = `${input.scrollHeight}px`;
    } else {
      input.style.height = "38px";
    }
    setInputHeight(input.style.height);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
    setInputHeight("38px");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="sm:ml-64 p-5 ">
        <h1 className="text-2xl font-semibold mb-5">Todo List</h1>

        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex items-center gap-4 mb-2">
              <span>{todo}</span>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:fixed md:bottom-0 left-64 w-full max-w-screen-lg p-4 "
      >
        <div className="flex items-center border-b-2 border-blue-500 py-2">
          <input
            type="text"
            style={{ height: inputHeight }}
            value={inputValue}
            onChange={handleInputChange}
            className="appearance-none  w-full  text-black py-1 px-2 leading-tight resize-none focus:outline-none "
            placeholder="Add new todo"
            aria-label="Add new todo"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoList;
