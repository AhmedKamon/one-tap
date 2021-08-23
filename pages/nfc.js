import Image from "next/image";
import React from "react";
import { GoPlus } from "react-icons/go";
import { Scrollbar } from "react-scrollbars-custom";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import "../styles/nfc.module.css";
import styles from "../styles/nfc.module.css";
import qr from "../utilites/images/001-qr-code -black.svg";
import logo from "../utilites/images/001-water-drop.svg";

const Nfc = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 ">
          <Navbar />
          <Scrollbar style={{ width: "55vw", height: "85vh" }}>
            <div className="pe-2 mb-5">
              <div className={`${styles.card} mt-5 px-5 pt-5 pb-3 shadow-sm`}>
                <div className="d-flex align-items-center">
                  <div>
                    <Image src={logo} alt="logo" />
                  </div>
                  <div>
                    <h6 className="ms-4 fw-bold" style={{ color: "#004CD4" }}>
                      QR code templates (3)
                    </h6>
                  </div>
                </div>
                <div className="d-flex my-4">
                  <div className="p-2 text-center">
                    <Image src={qr} height="100" width="100" alt="logo" />
                    <p className={` mt-3 px-2 py-1 border fw-bold`}>
                      Default template
                    </p>
                  </div>
                  <div className="p-2 text-center ms-5">
                    <Image src={qr} height="100" width="100" alt="logo" />
                    <p className={` mt-3 px-2 py-1 border fw-bold`}>Circular</p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.bottomCard} mt-5 px-5 pt-5 pb-3 shadow-sm rounded`}
              >
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <div>
                      <Image src={logo} alt="logo" />
                    </div>
                    <div>
                      <h6 className="ms-4 fw-bold" style={{ color: "#004CD4" }}>
                        QR code templates (3)
                      </h6>
                    </div>
                  </div>
                  <div>
                    <h6
                      className="text-white fw-bold px-3 py-3"
                      style={{ backgroundColor: "#004CD4" }}
                    >
                      <GoPlus className="me-2" style={{ fontSize: "25px" }} />{" "}
                      CREATE LANDING PAGE
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Scrollbar>
        </div>
      </div>
    </div>
  );
};

export default Nfc;
