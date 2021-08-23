import React from 'react';
import styles from './overview.module.css';

const Overview = () => {
  return (
    <div className="row">
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
  );
};

export default Overview;
