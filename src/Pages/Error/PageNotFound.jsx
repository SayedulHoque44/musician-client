import React from "react";
import { Link } from "react-router-dom";
import page from "../../assets/icon/undraw_page_not_found_re_e9o6.svg";
const PageNotFound = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${page})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg space-y-5">
          <p className="text-5xl">Ooops! Sorry.. Your Page Not Found!</p>
          <p className="mb-5">Please Go Back To Home!</p>
          <Link to={"/"} className="btn btn-primary">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
