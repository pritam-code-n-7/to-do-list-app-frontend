import { FaInfoCircle } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { MdDevicesOther } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import SidebarIcon from "./SidebarIcon";

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-300 dark:bg-gray-800">
        <div className="flex items-center ps-2.5 mb-5">
          <img src="/assets/DP.jpg" className="me-3 sm:h-7" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Pritam
          </span>
        </div>
        <ul className="space-y-2 font-medium">
          <li>
            <SidebarIcon icon={<MdSpaceDashboard />} name={"Dashboard"} />
          </li>
          <li>
            <SidebarIcon icon={<FaInfoCircle />} name={"About Us"} />
          </li>
          <li>
            <SidebarIcon icon={<FaHourglassStart />} name={"Get Started"} />
          </li>
          <li>
            <SidebarIcon icon={<BiSolidContact />} name={"Contact Us"} />
          </li>
          <li>
            <SidebarIcon
              icon={<MdDevicesOther />}
              name={"Our Other Products"}
            />
          </li>
          <li>
            <SidebarIcon icon={<AiOutlineLogin />} name={"Log out"} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
