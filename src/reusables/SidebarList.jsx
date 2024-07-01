import SidebarIcon from "../components/SidebarIcon";
import { AiOutlineLogin } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { FaHourglassStart, FaInfoCircle } from "react-icons/fa";
import { MdDevicesOther, MdSpaceDashboard } from "react-icons/md";

const SidebarList = () => {
  const sidebarListProps = [
    { icon: <MdSpaceDashboard />, name: "Dashboard" },
    { icon: <FaInfoCircle />, name: "About Us" },
    { icon: <FaHourglassStart />, name: "Get Started" },
    { icon: <BiSolidContact />, name: "Contact Us" },
    { icon: <MdDevicesOther />, name: "Our Other Products" },
    { icon: <AiOutlineLogin />, name: "Log Out" },
  ];

  return (
    <div>
      {sidebarListProps.map((item, index) => (
        <li key={index} className="p-2">
          <SidebarIcon icon={item.icon} name={item.name} />
        </li>
      ))}
    </div>
  );
};

export default SidebarList;
