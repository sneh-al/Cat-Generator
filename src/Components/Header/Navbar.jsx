import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='flex-wrap flex gap-5 justify-evenly  w-full'>
      {["home", "breeds", "random", "search"].map((item, i) => (
        <NavLink
          key={i}
          to={item === "home" ? "/" : item}
          className={({ isActive }) =>
            isActive
              ? "text-white capitalize transition duration-500 "
              : "capitalize transition duration-100  "
          }>
          {item}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
