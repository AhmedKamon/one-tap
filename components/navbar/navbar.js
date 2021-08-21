import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import { BsStarFill } from 'react-icons/bs';
import user from '../../utilites/PewDiePie-Facebook.png';

const Navbar = () => {
  return (
    <div className="mt-5">
      <div className="row ">
        <div className="col-md-4 mt-2">
          <div className="d-flex align-items-center  justify-content-between">
            <h6 className="me-5 fw-bold">Hello Kamon</h6>
            <button className={`${styles.btn}`}>
              {' '}
              <BsStarFill className="me-2" style={{ fontSize: '15px' }} />
              PREMIUM
            </button>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-6">
          <div className="d-flex align-items-center justify-content-between">
            <h6 className={`${styles.Invitebtn}`}>Invite A Friend</h6>

            <Image
              src={user}
              height="50"
              width="50"
              className="rounded-circle "
              alt="user"
            />
            <h6 className="mx-4">Kamon Ahmed</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
