import { FaSearch, FaUserCircle } from "react-icons/fa";

function Topbar() {
  return (
    <div className="flex justify-between items-center bg-slate-900 rounded-2xl p-6 shadow-lg">

      <div>

        <h2 className="text-3xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-gray-400">
          Welcome to the IT Department AI Portal
        </p>

      </div>

      <div className="flex items-center gap-6">

        <div className="relative">

          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="pl-12 pr-4 py-3 rounded-xl bg-slate-800 text-white w-72 outline-none"
          />

        </div>

        <div className="flex items-center gap-3">

          <FaUserCircle
            className="text-cyan-400"
            size={38}
          />

          <div>

            <p className="text-white font-semibold">
              Welcome
            </p>

            <p className="text-gray-400 text-sm">
              User
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Topbar;