import { FaInfoCircle } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { MdDevicesOther } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import SidebarIcon from "./SidebarIcon";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-300 dark:bg-gray-800">
        <div className="flex items-center ps-2.5 mb-5">
          <img src="/assets/DP.jpg" className="me-3 sm:h-7" alt="Profile" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Pritam
          </span>
        </div>
        <ul className="space-y-2 font-medium">
          <li>
            <Link to="/dashboard">
              <SidebarIcon icon={<MdSpaceDashboard />} name={"Dashboard"} />
            </Link>
          </li>
          <li>
            <Link to="/aboutus">
              <SidebarIcon icon={<FaInfoCircle />} name={"About Us"} />
            </Link>
          </li>
          <li>
            <Link to="/getstarted">
              <SidebarIcon icon={<FaHourglassStart />} name={"Get Started"} />
            </Link>
          </li>
          <li>
            <Link to="/contactus">
              <SidebarIcon icon={<BiSolidContact />} name={"Contact Us"} />
            </Link>
          </li>
          <li>
            <Link to="/ourotherproducts">
              <SidebarIcon
                icon={<MdDevicesOther />}
                name={"Our Other Products"}
              />
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <SidebarIcon icon={<AiOutlineLogin />} name={"Log out"} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
