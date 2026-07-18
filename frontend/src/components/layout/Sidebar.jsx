import { useState } from "react";
import {
  FaBars,
  FaPlus,
  FaHistory,
  FaBook,
  FaUserGraduate,
  FaBriefcase,
  FaFlask,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar({ onNewChat }) {
  const [open, setOpen] = useState(true);

  const menu = [
    { icon: <FaPlus />, label: "New Chat" },
    { icon: <FaHistory />, label: "History" },
    { icon: <FaUserGraduate />, label: "Faculty" },
    { icon: <FaBook />, label: "Curriculum" },
    { icon: <FaBriefcase />, label: "Placements" },
    { icon: <FaFlask />, label: "Laboratories" },
  ];

  function handleMenuClick(item) {
    switch (item.label) {
      case "New Chat":
        onNewChat();
        break;

      default:
        console.log(`${item.label} clicked`);
        break;
    }
  }

  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } h-screen bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col`}
    >
      {/* Toggle Button */}

      <button
        onClick={() => setOpen(!open)}
        className="p-5 text-white hover:bg-slate-800"
      >
        <FaBars size={22} />
      </button>

      {/* Menu */}

      <div className="flex-1 mt-2">
        {menu.map((item, index) => (
          <button
            key={index}
            onClick={() => handleMenuClick(item)}
            className="w-full flex items-center gap-4 px-5 py-4 text-gray-300 hover:bg-slate-800 hover:text-cyan-400 transition"
          >
            <div className="text-xl">{item.icon}</div>

            {open && (
              <span className="text-lg">
                {item.label}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Logout */}

      <div className="border-t border-slate-800 p-4">
        <button className="w-full flex items-center gap-4 text-red-400 hover:text-red-500">
          <FaSignOutAlt />

          {open && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;