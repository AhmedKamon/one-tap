import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import user from "../../utilites/PewDiePie-Facebook.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className="mt-5 mb-3 w-100">
      <div className="row d-flex align-items-center mx-2">
        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <h6 className="me-5 fw-bold fs-30 lh-26">Hello Kamon</h6>
            <button
              className={`${styles.btn} d-flex align-items-center justify-content-center`}
            >
              {" "}
              <BsStarFill
                className="me-2"
                style={{ width: "19px", height: "20px" }}
              />
              PREMIUM
            </button>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="d-flex align-items-center justify-content-center mt-1">
            <span>
              {/* <h6 className={`${styles.Invitebtn} me-4 fs-16 lh-12`}>
                Invite A Friend
              </h6> */}
              <button className="btn btn-primary px-4 py-2 me-4">
                Invite A Friend
              </button>
            </span>

            <span>
              <Image
                src={user}
                height="50"
                width="50"
                className="rounded-circle"
                alt="user"
              />
            </span>
            <span>
              <h6 className="ms-3 fs-22 lh-26 fw-bold">Kamon Ahmed</h6>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
