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
    const newTodo = {
      id: Date.now(), // Generate unique timestamp
      content: inputValue, // Todo content
    };
   

    setTodos([...todos, newTodo]);
    setInputValue("");
    setInputHeight("38px");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo=>todo.id !==id));
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
      <form
        onSubmit={handleSubmit}
        className="left-0 max-w-screen-lg p-4 absolute bottom-0 w-full"
      >
        <div className="flex items-center border-b-2 border-blue-500 py-2 ">
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
