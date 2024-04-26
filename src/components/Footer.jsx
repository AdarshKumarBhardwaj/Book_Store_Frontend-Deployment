import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10  text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Linkdin</a>
          <a className="link link-hover">Github</a>
          <a className="link link-hover">Facebook</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/adarsh-kumar-279370272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              target="_blank"
            >
              <FaLinkedin size={40} />
            </a>
            <a href="https://github.com/AdarshKumarBhardwaj" target="_blank">
              <FaGithub size={40} />
            </a>
            <a>
              <FaFacebook size={40} />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by Adarsh Bhardwaj</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
