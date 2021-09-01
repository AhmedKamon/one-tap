import React from "react";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import styles from "../styles/overview.module.css";

const Overview = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 vh-100 scroll">
          <Navbar />
          {/* <Scrollbar style={{ width: "76vw", height: "80vh" }}> */}
          <div className="row pb-3 container mx-auto">
            <div className="col-md-6">
              <div className={`${styles.card} mt-5 me-3 h-100`}>
                <div className={`${styles.cardText}  p-5`}>
                  <h6 className="fw-bold mb-5 fs-22 lh-26">QR Codes</h6>
                  <h6 className="fw-bold fs-46 lh-66">20</h6>
                  <h6 className="fw-bold fs-18 lh-26">SCENS</h6>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className={`${styles.card} mt-5 ms-3`}>
                <div className={`${styles.cardText}  p-5`}>
                  <h6 className="fw-bold mb-5 fs-22 lh-26">projects</h6>
                  <h6 className="fw-bold fs-46 lh-66">20</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={`${styles.card} mt-5`}>
                <div className={`${styles.cardText}  p-5`}>
                  <h6 className="fw-bold mb-5 fs-22 lh-26">Landing Page</h6>
                  <h6 className="fw-bold fs-46 lh-66">12</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={`${styles.card} mt-5 `}>
                <div className={`${styles.cardText}  p-5`}>
                  <h6 className="fw-bold mb-5 fs-22 lh-26">Business Card</h6>
                  <h6 className="fw-bold fs-46 lh-66">20</h6>
                </div>
              </div>
            </div>
          </div>
          {/* </Scrollbar> */}
        </div>
      </div>
    </div>
  );
};

export default Overview;
