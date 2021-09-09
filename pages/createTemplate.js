import Image from "next/image";
import { useRouter } from "next/router";
import "node-self";
import QRCodeStyling from "qr-code-styling";
import React, { useContext, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { HiOutlineDownload } from "react-icons/hi";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import styles from "../styles/createTemplate.module.css";
import QRCode from "../utilites/images/001-qr-code.svg";
import { QrContext } from "./_app";

//

const qrCode = new QRCodeStyling({
  width: 320,
  height: 360,
  margin: 10,
  // image: image,
  dotsOptions: {
    color: "#171717",
    type: "rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20,
  },
});

const CreateTemplate = () => {
  const [qrCodeInfo, setQrCodeInfo] = useContext(QrContext);
  const router = useRouter();

  console.log(qrCodeInfo._options);
  // const image = qrCodeInfo._options.image || "e";

  useEffect(() => {
    qrCode.update({
      data: "https://qr-code-styling.com",
      // image: imgURl,
      imageOptions: {
        margin: qrCodeInfo._options?.margin,
      },
    });
  }, []);

  const onDownloadClick = () => {
    setQrCodeInfo(qrCode);
    qrCode.download({
      // name: organizationName,
      extension: "jpeg",
    });
  };

  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 vh-100 scroll">
          <Navbar />
          <div className="bg-white  mt-5 me-5 ms-1 pb-3">
            <div
              className={`d-flex justify-content-between align-items-center px-5 pt-4`}
            >
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={QRCode} height="20" width="20" alt="qrCode" />
                </div>
                <div>
                  <h6 className="fs-16 fontSemiBold lh-26 textColor">
                    QR Codes (1)
                  </h6>
                </div>
              </div>

              <h6
                onClick={() => router.push("/qr-codes")}
                className={`text-center cursor-poiter px-3 paddingY lh-24 fs-14 bgBlue text-white lh-12 rounded-3`}
              >
                <GoPlus className="me-2" />
                CREATE QR CODE{" "}
              </h6>
            </div>
            <hr />

            <div className={`${styles.card} my-5 mx-4 rounded-3 shadow-sm`}>
              <div className="row px-3 py-1">
                <div className="col-md-2 d-flex justify-content-center align-items-center ">
                  <Image src={QRCode} height="90" width="90" alt="qrCode" />
                  {/* <div className="ms-2" ref={ref} /> */}
                </div>
                <div className="col-md-6 d-flex justify-content-between align-items-center">
                  <div className="me-5">
                    <h3 className="fs-18 fontSemiBold lh-12 textColor my-3">
                      WEBSITE 10/08/2021
                    </h3>
                    <div className="row">
                      <div className="col-md-12">
                        <p className="m-0 fs-14">
                          Link: https://qrcodes.pro/eLGyzc
                        </p>
                        <p className="m-0 fs-14">Org: Master organization</p>
                        <p className="m-0 fs-14">Created: August 10, 2021</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column  justify-content-center align-items-center mt-4">
                    <Image src={QRCode} height="40" width="40" alt="qrCode" />
                    <p className="m-0 mt-3 fontMedium textColor fs-18 lh-26">
                      0
                    </p>
                    <p className="m-0 fontMedium textColor fs-18 lh-26">
                      Scans
                    </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplate;
