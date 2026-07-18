import { FaRobot, FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="h-16 border-b border-slate-800 bg-slate-950 flex justify-between items-center px-8">

      <div className="flex items-center gap-3">

        <FaRobot
          className="text-cyan-400"
          size={26}
        />

        <h1 className="text-white text-xl font-semibold">

          IT Department AI Assistant

        </h1>

      </div>

      <div className="flex items-center gap-3">

        <FaUserCircle
          className="text-cyan-400"
          size={34}
        />

        <span className="text-white">

          Welcome

        </span>

      </div>

    </div>
  );
}

export default Header;