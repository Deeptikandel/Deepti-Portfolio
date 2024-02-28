import React from "react";
import "./footer.scss";
import { socialIcon } from "../../data";

const Footer = () => {
  return (
    <footer>
      <h3>Connect with me</h3>
      <p>Get to know me and my works by connecting with me. Enjoy my work.</p>

      <div className="social-icons">
        {socialIcon.map((icon) => {
          return (
            <a
              href={icon.link}
              target="_blank"
              rel="noreferrer"
              key={icon.iconClass}
            >
              <i className={icon.iconClass}></i>
            </a>
          );
        })}
      </div>
      <p className="copyright">&copy; Copyright 2024</p>
    </footer>
  );
};

export default Footer;
