import React from "react";
import { toast } from "react-hot-toast";
import { CiDark, CiLight } from "react-icons/ci";
import { Link, NavLink, useLocation } from "react-router-dom";
import useGetContext from "../../../Hooks/useGetContext";
import logo from "../../../assets/icon/undraw_compose_music_re_wpiw.svg";
const Navbar = () => {
  const { theme, toggleTheme, user, logout, loading } = useGetContext();
  const location = useLocation();
  const path = location.pathname;
  //
  const navItems = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      {path === "/" && (
        <>
          <li>
            <a href="#popularClass">Popular Class</a>
          </li>
          <li>
            <a href="#popularInstructor">Popular Instructor</a>
          </li>
          <li>
            <a href="#offer">Offer</a>
          </li>
        </>
      )}
      <li>
        <NavLink to={`instructors`}>Instructors</NavLink>
      </li>
      <li>
        <NavLink to={`classes`}>Classes</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={`/dashboard`}>Dashboard</NavLink>
        </li>
      )}
    </>
  );
  //
  const hangleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logout");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              id="navItem"
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
              {navItems}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost normal-case md:text-xl text-sm">
            {" "}
            <img className="h-full" src={logo} alt="" /> Musician
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul id="navItem" className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn md:btn-md md:mr-5 btn-sm md:text-sm text-xs"
            onClick={toggleTheme}>
            {theme == "light" ? "dark" : "light"}
            {theme == "light" ? <CiDark /> : <CiLight />}
          </a>
          {user ? (
            <>
              <button
                className=" btn-error btn md:btn-md mr-5 btn-sm md:text-sm text-xs"
                onClick={hangleLogout}>
                {" "}
                Logout
              </button>
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar m-0">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      "https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg"
                    }
                  />
                </div>
              </label>
            </>
          ) : (
            <Link
              className="btn md:btn-md mr-5 btn-sm md:text-sm text-xs"
              to={`login`}>
              {" "}
              login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
