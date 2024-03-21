import Header from "./Header";
import Sidebar from "./SideBar";
import TodoList from "./TodoList";

function Body() {
  return (
    <>
      <div>
        <Sidebar />
        <div className="p-4 md:ml-64 ">
          <Header />
          <div >
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
