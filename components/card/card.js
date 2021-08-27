import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import styles from "./card.module.css";

const cardData = [
  {
    title: "FREE PLAN",
    price: 0,
  },
  {
    title: "PLUS PLAN",
    price: 5,
  },
  {
    title: "PRO PLAN",
    price: 15,
  },
  {
    title: "ENTERPRISE PLAN",
    price: 15,
  },
];

const Card = () => {
  return (
    <div className="mb-5">
      <div className="py-5 mx-5 px-5">
        <div className="px-3">
          <h2 className="mt-5 mx-5 px-5 fs-25 text-primary fw-bold">
            SELECT A PLAN
          </h2>
        </div>
      </div>
      {/* card start */}
      <div className="d-flex">
        {cardData.map((data) => (
          <div className={`${styles.cardStyle} mt-4 mb-5`}>
            <h1 className="text-center mt-5 fs-22 fw-bold text-primary">
              {data.title}
            </h1>
            <div className="text-center mt-4">
              <h2 className="d-inline pt-5 fs-55">
                <sup className="fs-20">$</sup>
                {data.price}
              </h2>
              <span className="fs-24 fw-bold">.00</span>
              <p className="fs-16">per month</p>
              <p className="fs-16">BILLED YEARLY</p>
            </div>
            <div className="container mt-5">
              <p className="fs-18">
                <FiArrowRightCircle className="me-2" />3 days dynamic or QR
                codes
              </p>

              <p className="fs-18">
                <FiArrowRightCircle className="me-2" />
                20,000 anual scans
              </p>

              <p className="fs-18">
                <FiArrowRightCircle className="me-2" />
                Scan tracking
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary">BUY NOW</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
