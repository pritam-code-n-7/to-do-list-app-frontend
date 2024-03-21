/* eslint-disable react/prop-types */

function SidebarIcon(props) {
  return (
    <>
      <a
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <div className="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
          {props.icon}
        </div>
        <span className="ms-3">{props.name}</span>
      </a>
    </>
  );
}

export default SidebarIcon;
