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
          {/* <Scrollbar style={{ width: '76vw', height: '80vh' }}> */}
          <div className="row my-5 ms-5">
            <div className={` col-md-5 mb-5`}>
              <div
                className={`${styles.card} d-flex flex-column justify-content-center align-items-center`}
              >
                <h6 className="fw-bold mb-5 fs-22 lh-26">QR Codes</h6>
                <h6 className="fw-bold fs-46 lh-66">20</h6>
                <h6 className="fw-bold fs-18 lh-26">SCENS</h6>
              </div>
            </div>
            <div className={` col-md-5 mb-5`}>
              <div
                className={`${styles.card} d-flex flex-column justify-content-center align-items-center`}
              >
                <h6 className="fw-bold mb-5 fs-22 lh-26">QR Codes</h6>
                <h6 className="fw-bold fs-46 lh-66">20</h6>
                <h6 className="fw-bold fs-18 lh-26">SCENS</h6>
              </div>
            </div>
            <div className={` col-md-5 mb-5`}>
              <div
                className={`${styles.card} d-flex flex-column justify-content-center align-items-center`}
              >
                <h6 className="fw-bold mb-5 fs-22 lh-26">QR Codes</h6>
                <h6 className="fw-bold fs-46 lh-66">20</h6>
                <h6 className="fw-bold fs-18 lh-26">SCENS</h6>
              </div>
            </div>
            <div className={` col-md-5 mb-5`}>
              <div
                className={`${styles.card} d-flex flex-column justify-content-center align-items-center`}
              >
                <h6 className="fw-bold mb-5 fs-22 lh-26">QR Codes</h6>
                <h6 className="fw-bold fs-46 lh-66">20</h6>
                <h6 className="fw-bold fs-18 lh-26">SCENS</h6>
              </div>
            </div>
          </div>
        </div>
        {/* </Scrollbar> */}
      </div>
    </div>
    // </div>
  );
};

export default Overview;
