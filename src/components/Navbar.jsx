import React from "react";
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const openMenu = () => {
    setToggle(true);
  };
  const closeMenu = () => {
    setToggle(false);
  };
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setToggle(false);
      history.replaceState(null, "", `#${id}`);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div>
          <a
            href="#"
            className="text-white font-mono text-3xl tracking-wider flex items-center"
          >
            <UserOutlined />
            ANJALI E V
          </a>
        </div>
        <div className="space-x-4 ">
          <div className="ssm:hidden lg:block space-x-2">
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, "skills")}
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Projects
            </a>
            <a
              href="#internships"
              onClick={(e) => handleNavClick(e, "internships")}
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Internships/Certificates
            </a>
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose
                onClick={closeMenu}
                size={30}
                className="text-white cursor-pointer"
              />
            ) : (
              <HiMenuAlt1 onClick={openMenu} size={30} className="text-white" />
            )}
          </div>
        </div>
      </div>
      <div className="ssm:block lg:hidden">
        {toggle ? (
          <div className="flex justify-between ml-10">
            <ul>
              <li className="text-white text-xl mb-2 cursor-pointer">Skills</li>
              <li className="text-white text-xl mb-2 cursor-pointer">
                Projects
              </li>
              <li className="text-white text-xl mb-2 cursor-pointer">
                Internships/Cerificates
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Navbar;
