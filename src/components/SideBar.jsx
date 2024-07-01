import SidebarList from "../reusables/SidebarList";
//import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";
const LazyComponent = lazy(() => import("../reusables/SidebarImage.jsx"));

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-300 dark:bg-gray-800">
        <Suspense fallback="...Loading">
          <LazyComponent />
        </Suspense>
        <ul className="space-y-2 font-medium">
          <SidebarList />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
