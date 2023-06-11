import React from "react";
import { toast } from "react-hot-toast";
import { CiDark, CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";
import useGetContext from "../../../Hooks/useGetContext";
import logo from "../../../assets/icon/undraw_compose_music_re_wpiw.svg";
const Navbar = () => {
  const { theme, toggleTheme, user, logout, loading } = useGetContext();

  //
  const navItems = (
    <>
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`instructors`}>Instructors</Link>
      </li>
      <li>
        <Link to={`classes`}>Classes</Link>
      </li>
      {user && (
        <li>
          <Link to={`/dashboard`}>Dashboard</Link>
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            {" "}
            <img className="h-full" src={logo} alt="" /> Musician
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn mr-5" onClick={toggleTheme}>
            {theme == "light" ? "dark" : "light"}
            {theme == "light" ? <CiDark /> : <CiLight />}
          </a>
          {user ? (
            <>
              <button className="btn btn-error" onClick={hangleLogout}>
                {" "}
                Logout
              </button>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
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
            <Link className="btn" to={`login`}>
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
