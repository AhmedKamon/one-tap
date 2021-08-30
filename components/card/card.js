import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import styles from './card.module.css';

const cardData = [
  {
    id: 1,
    title: 'FREE PLAN',
    price: 0,
  },
  {
    id: 2,
    title: 'PLUS PLAN',
    price: 5,
  },
  {
    id: 3,
    title: 'PRO PLAN',
    price: 15,
  },
  {
    id: 4,
    title: 'ENTERPRISE PLAN',
    price: 15,
  },
];
console.log(cardData[3]);

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
          <div
            key={data.id}
            className={`${styles.cardStyle} mt-4 mb-2 ${
              data.id === 4 ? `${styles.fourthCard}` : ' '
            }`}
          >
            <h1
              className={`${
                data.id === 4 ? `${styles.title}` : 'text-primary '
              } text-center mt-5 fs-22 fw-bold  lh-12`}
            >
              {data.title}
            </h1>
            <div className="text-center mt-4">
              <div className="mt-5 py-3">
                <h2 className="d-inline pt-5 fs-55 lh-12">
                  <sup className="fs-20 lh-12">$</sup>
                  {data.price}
                </h2>
                <span className="fs-24 fw-bold">.00</span>
              </div>
              <p className="fs-16 lh-12">per month</p>
              <p className="fs-16 lh-12">BILLED YEARLY</p>
            </div>
            <div className="p-3 mt-5">
              <p className="fs-18">
                <FiArrowRightCircle className="me-2 lh-12" />3 days dynamic or
                QR codes
              </p>

              <p className="fs-18">
                <FiArrowRightCircle className="me-2 lh-12" />
                20,000 anual scans
              </p>

              <p className="fs-18">
                <FiArrowRightCircle className="me-2 lh-12" />
                Scan tracking
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className={`px-4 ${
                  data.id === 4 ? `btn btn-light` : 'btn btn-primary'
                }`}
              >
                BUY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
