import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icon/undraw_compose_music_re_wpiw.svg";
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            {" "}
            <img className="h-full" src={logo} alt="" /> Musician
          </Link>
          <p className="font-semibold">
            Take Your Music Skill To High Level.
            <br />
            Providing Top Instructor With Beginner Friendly.
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to={"/"} className="link link-hover">
            Music
          </Link>
          <Link to={"/instructors"} className="link link-hover">
            Instructor
          </Link>
          <Link to={"/classes"} className="link link-hover">
            Classes
          </Link>
          <Link to={"/"} className="link link-hover">
            Guidline
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>
            Copyright © 2023 - All right reserved by musician Industries Ltd
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
