import React from "react";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiTelegram2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import "./Footer.scss";
import motion from "../../../assets/img/motion.svg";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--title">
            <img src={motion} alt="" />
          </div>

          <div className="footer--nav">
            <NavLink to={"/interior"}>Home</NavLink>
            <NavLink to={"/about-us"}>About us</NavLink>
            <NavLink to={"/menu"}>Study Abroad</NavLink>
            <NavLink to={"/contacts"}>Contacts</NavLink>
          </div>

          <div className="footer--icons">
            <a
              href="https://www.youtube.com/watch?v=UDgK_Ecssck"
              className="icon1"
            >
              <FaYoutube />
            </a>
            <a href="https://web.telegram.org/k/" className="icon1">
              <RiTelegram2Fill />
            </a>
            <a
              href="https://www.instagram.com/almazbekovich.08/"
              className="icon2"
            >
              <PiInstagramLogoFill />
            </a>
          </div>
        </div>

        <div className="footer--bottom">
          <hr />
          <center>
            <p>c 2023 Motion Study LLC</p>
          </center>
        </div>
      </div>
    </footer>
  );
};

export default Footer;