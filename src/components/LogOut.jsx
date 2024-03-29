import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogOut() {
  const [logout, setLogout] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logging out ...");
    navigate("/");
  };

  return (
    <div>
      {logout ? (
        <form className="flex flex-col p-4 border border-gray-300 rounded-md shadow-md">
          <p className="mb-2">Are you sure you want to logout?</p>
          <div className="flex justify-between">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md mr-2 hover:bg-red-600"
              onClick={() => setLogout(false)}
            >
              Yes
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              onClick={handleLogout}
            >
              No
            </button>
          </div>
        </form>
      ) : (
        <a
          href="#"
          onClick={() => setLogout(false)}
          className="text-blue-500 hover:underline"
        >
          Logout
        </a>
      )}
    </div>
  );
}

export default LogOut;
