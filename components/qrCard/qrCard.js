import Image from "next/image";
import "node-self";
import QRCodeStyling from "qr-code-styling";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";
import styles from "../../styles/createTemplate.module.css";
import QRCode from "../../utilites/images/001-qr-code.svg";

const qrCode = new QRCodeStyling({
  width: 130,
  height: 130,
  margin: 10,
  dotsOptions: {
    color: "#171717",
    type: "rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 10,
  },
});

function QrCard({ qrcode }) {
  const ref = useRef(null);

  const [isSmall, setIsSmall] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      width: 130,
      height: 130,
      margin: 10,
      data: qrcode?.link,
      image: qrcode?.imgUrl,
      imageOptions: {
        margin: 10,
      },
      dotsOptions: {
        color: qrcode?.color,
      },
    });
  }, [qrcode.imgUrl, qrcode.link, qrcode.color, isSmall]);

  const onDownloadClick = () => {
    setShowSpinner(true);
    qrCode.update({
      width: 350,
      height: 350,
      margin: 10,
      data: qrcode?.link,
      image: qrcode?.imgUrl,
      imageOptions: {
        margin: 10,
      },
      dotsOptions: {
        color: qrcode?.color,
      },
    });
    qrCode.download({
      // name: organizationName,
      extension: "png",
    });
    makeSmall();
  };

  const makeSmall = () => {
    setTimeout(() => {
      setIsSmall(!isSmall);
      setShowSpinner(false);
      qrCode.append(ref.current);
    }, 1000);
  };
  return (
    <div className={`${styles.card} my-5 mx-4 rounded-3 shadow-sm`}>
      <div className="row px-3 py-1">
        <div className="col-md-2 d-flex justify-content-center align-items-center ">
          {showSpinner ? "downloading..." : <div className="ms-2" ref={ref} />}
        </div>
        <div className="col-md-6 d-flex justify-content-between align-items-center">
          <div className="me-5">
            <div className="row">
              <div className="col-md-12">
                <p className="m-0 fs-14">Link: {qrcode.link}</p>
                <p className="m-0 fs-14">Org: {qrcode.companyName}</p>
                <p className="m-0 fs-14">Created: {qrcode.createdAt}</p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column  justify-content-center align-items-center mt-4">
            <Image src={QRCode} height="40" width="40" alt="qrCode" />
            <p className="m-0 mt-3 fontMedium textColor fs-18 lh-26">0</p>
            <p className="m-0 fontMedium textColor fs-18 lh-26">Scans</p>
          </div>
        </div>

        <div className="col-md-4 py-5 ps-5 pe-3">
          <button
            type=""
            className={`${styles.btn} d-flex justify-content-center align-items-center px-4 py-2  rounded-3 mt-2 w-100`}
          >
            <AiOutlineDelete size={18} className="me-1" />
            <span className="fs-12 lh-16">Delete</span>
          </button>
          <button
            type=""
            className={`${styles.btn} d-flex justify-content-center align-items-center px-4 py-2  rounded-3 mt-2 w-100`}
            onClick={onDownloadClick}
          >
            <HiOutlineDownload size={18} className="me-1" />
            <span className="fs-12 lh-16">Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QrCard;
