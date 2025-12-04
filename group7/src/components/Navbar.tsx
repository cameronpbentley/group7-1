import { NavLink } from "react-router-dom";
import "../styles/App.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/films", label: "Films" },
  { to: "/profile", label: "Profile" },
  { to: "/friends", label: "Friends" },
  { to: "/testing", label: "Testing" }, // remove later
];

const linkStyles = (isActive: boolean) =>
  `flex items-center px-6 py-2 text-lg transition-all duration-300 ${
    isActive ? "text-[#40bcf4]" : "text-[#f4f4f4] hover:text-[#40bcf4]"
  }`;

export default function Navbar() {
  return (
    <nav className="relative bg-[#1b1b1b] text-[#f4f4f4]">
      {/* Container for the navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between p-2 px-6">
        {/* Left-aligned MovieApp Title */}
        <NavLink to="/" className="text-3xl font-semibold no-underline">
          MovieApp
        </NavLink>

        {/* Centered Navigation Links */}
        <ul className="mx-auto hidden list-none gap-8 md:flex">
          {navLinks.map(({ to, label }) => (
            <li
              key={to}
              className="rounded-lg transition-all duration-300 hover:bg-[#333]"
            >
              <NavLink
                to={to}
                className={({ isActive }) => linkStyles(isActive)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation - Hamburger Men */}
        <p className="ml-auto flex md:hidden">insert hamburger</p>
      </div>
    </nav>
  );
}
