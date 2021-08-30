import React from 'react';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import styles from '../styles/overview.module.css';
import { Scrollbar } from 'react-scrollbars-custom';

const Overview = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 ">
          <Navbar />
          <Scrollbar style={{ width: '55vw', height: '85vh' }}>
            <div className="row pb-3">
              <div className="col-md-6">
                <div className={`${styles.card} mt-5 p-3`}>
                  <div className={`${styles.cardText}  p-5`}>
                    <h6 className="fw-bold mb-5">QR Codes</h6>
                    <h6 className="fw-bold">20</h6>
                    <h6 className="fw-bold">SCENS</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`${styles.card} mt-5 p-3`}>
                  <div className={`${styles.cardText}  p-5`}>
                    <h6 className="fw-bold mb-5">QR Codes</h6>
                    <h6 className="fw-bold">20</h6>
                    <h6 className="fw-bold">SCENS</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`${styles.card} mt-5 p-3`}>
                  <div className={`${styles.cardText}  p-5`}>
                    <h6 className="fw-bold mb-5">QR Codes</h6>
                    <h6 className="fw-bold">20</h6>
                    <h6 className="fw-bold">SCENS</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`${styles.card} mt-5 p-3`}>
                  <div className={`${styles.cardText}  p-5`}>
                    <h6 className="fw-bold mb-5">QR Codes</h6>
                    <h6 className="fw-bold">20</h6>
                    <h6 className="fw-bold">SCENS</h6>
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

export default Overview;
