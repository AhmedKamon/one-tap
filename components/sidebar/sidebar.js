import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { data } from "../../utilites/data";
import icon from "../../utilites/images/Mask Group.svg";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={`${styles.maindiv}`}>
      <div className={`${styles.main}`}>
        <a className="navbar-brand text-white mt-3 px-5" href="#">
          <Image src={icon} alt="icon" className="" />
        </a>

        <ul className={`${styles.sideBarLogo} navbar-nav`}>
          {data.map((logo) => (
            <li key={logo.id} className={`nav-item mt-2 `}>
              <span className="d-flex align-items-center" href="">
                <div className="me-3">
                  <Image src={logo.logo} height="20" width="20" alt="logo" />
                </div>
                <Link href={logo.link}>
                  <a className={`${styles.singleLogo}`}>{logo.name}</a>
                </Link>
              </span>
            </li>
          ))}
        </ul>
        <div className={`${styles.upgrade} text-center w-100`}>
          <button className={`${styles.btn} ms-5 mt-1`} type="">
            <BsStarFill className="me-3" style={{ fontSize: "25px" }} /> UPGRADE
            NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
