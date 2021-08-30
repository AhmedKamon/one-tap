import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { data } from '../../utilites/data';
import icon from '../../utilites/images/Mask Group.svg';
import styles from './sidebar.module.css';
import NextLink from 'next/link';

const Sidebar = () => {
  return (
    <div className={`${styles.maindiv}`}>
      <div className={`${styles.main} `}>
        <NextLink href="/">
          <div className={`${styles.oneTap} mt-4 container`}>
            <Image src={icon} alt="icon" />
          </div>
        </NextLink>

        <ul className={`${styles.sideBarLogo} navbar-nav container`}>
          {data.map((logo) => (
            <li key={logo.id} className={`nav-item container`}>
              <div className=" d-flex align-items-center mt-3 ms-3">
                <Link href={logo.link}>
                  <a className="me-3 fs-16 mt-1">
                    <Image src={logo.logo} height="16" width="16" alt="logo" />
                  </a>
                </Link>
                <Link href={logo.link}>
                  <a className={`${styles.singleLogo} fs-16 `}>{logo.name}</a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className={`${styles.upgrade}`}>
          <div type="" className={`${styles.btn} mt-2`}>
            <span>
              <BsStarFill className="me-2 " style={{ fontSize: '29px' }} />
            </span>
            <span className="fs-18">UPGRADE NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
