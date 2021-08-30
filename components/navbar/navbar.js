import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import { BsStarFill } from 'react-icons/bs';
import user from '../../utilites/PewDiePie-Facebook.png';

const Navbar = () => {
  return (
    <div className="mt-5 mb-3">
      <div className="row d-flex align-items-center">
        <div className="col-md-6 ">
          <div className="d-flex align-items-center  justify-content-center">
            <h6 className="me-5 fw-bold fs-30 lh-26">Hello Kamon</h6>
            <button className={`${styles.btn}`}>
              {' '}
              <BsStarFill
                className="me-2"
                style={{ width: '19px', height: '20px' }}
              />
              PREMIUM
            </button>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="d-flex align-items-center justify-content-between mt-1">
            <h6 className={`${styles.Invitebtn} fs-16 lh-12`}>
              Invite A Friend
            </h6>

            <Image
              src={user}
              height="50"
              width="50"
              className="rounded-circle "
              alt="user"
            />
            <h6 className="mx-4 fs-22 lh-26">Kamon Ahmed</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
