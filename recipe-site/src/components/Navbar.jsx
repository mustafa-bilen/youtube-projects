import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3 text-xl bg-green-100">
      <div className="text-blue-500 flex items-center gap-3">
        <NavLink
          className="text-blue-500 flex items-center gap-3"
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "red" : "",
          })}
        >
          RECIPE
        </NavLink>
      </div>
      <div className="flex gap-5 text-gray-600   ">
        <NavLink
          className="hover:text-blue-400 transition ease-in-out delay-100 hover:scale-125"
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "red" : "",
          })}
        >
          ABOUT
        </NavLink>

        <a
          className="hover:text-blue-400 transition ease-in-out delay-100 hover:scale-125"
          href="https://github.com/mustafa-bilen"
          target="_blank"
        >
          GITHUB
        </a>

        <NavLink
          className="hover:text-blue-400 transition ease-in-out delay-100 hover:scale-125"
          to="/"
        >
          LOGOUT
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
