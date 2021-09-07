import Image from "next/image";
import "node-self";
import QRCodeStyling from "qr-code-styling";
import React, { useEffect, useRef, useState } from "react";
import { BsUpload } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import styles from "../styles/qrCodes.module.css";
import logo from "../utilites/images/001-qr-code -black.svg";

const qrCode = new QRCodeStyling({
  width: 320,
  height: 320,
  image:
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  dotsOptions: {
    color: "#171717",
    type: "rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20,
  },
});

const QrCodes = () => {
  const [text, setText] = useState("");
  const [selectedColor, setSelectedColor] = useState("#000");
  const [url, setUrl] = useState("https://qr-code-styling.com");
  const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
    });
  }, [url]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt,
    });
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 vh-100 scroll">
          <Navbar />
          {/* ======= */}
          <div className=" row mt-5 pb-5">
            <div className="col-md-5">
              <h3 className="fs-24 lh-27 fw-bold">Create a new QR Code</h3>
              <h6 className="mt-4 fs-17 m-0 lh-27">Name my code (optional)</h6>
              <input
                className={`${styles.qrInput} form-control mt-2`}
                type="text"
                value={text}
                label="QR content"
                size="large"
                color="primary"
                placeholder="Enter company name"
                onChange={handleChange}
              />
              <div className=" mt-4">
                <h6
                  className="mt-2 mb-4 fs-20 lh-13 fw-bold text-center"
                  style={{ color: "#004CD4" }}
                >
                  Preview
                </h6>
                {/* <div style={styles.inputWrapper}> */}
                {/* <select onChange={onExtensionChange} value={fileExt}>
                    <option value="png">PNG</option>
                    <option value="jpeg">JPEG</option>
                    <option value="webp">WEBP</option>
                  </select> */}
                {/* </div> */}
                <div className="ms-2" ref={ref} />
              </div>
              <h6 className="mt-4 fs-20 lh-27">
                I want my QR code to scan to:
              </h6>
              <p className="mt-2 m-0 lh-26">Enter or Paste a link</p>
              <input
                className={`${styles.qrInput} form-control`}
                value={url}
                onChange={onUrlChange}
                style={styles.inputBox}
                name="qr-code"
              />
            </div>
            <div className="col-md-5 p-2 my-5 ms-5" style={{ width: "350px" }}>
              <h6 className={`${styles.title} fs-18 lh-13 py-3 px-3`}>
                Select a Template
              </h6>
              <div className="d-flex justify-content-between my-4">
                <div className="p-2 text-center">
                  <Image src={logo} height="100" width="100" alt="logo" />
                  <p className={`${styles.temp} mt-3 px-2 py-2 fs-13 lh-10`}>
                    Default template
                  </p>
                </div>
                <div className="p-2 text-center">
                  <Image src={logo} height="100" width="100" alt="logo" />
                  <p className={`${styles.temp} mt-3 px-2 py-2 fs-13 lh-10`}>
                    Circular
                  </p>
                </div>
              </div>
              <h6 className={`${styles.title} fs-18 lh-13 py-3 px-3`}>
                Image File
              </h6>
              <label
                htmlFor="file"
                className="text-center d-block py-2 bg-white my-3 textColor fw-bold cursor-poiter"
              >
                <BsUpload className="me-2" /> Upload File{" "}
              </label>
              <input type="file" className="d-none" id="file" />
              <p className="my-2 fw-bold fs-18 lh-12 textColor">QR Colors</p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="col-6">
                  <input
                    className="bg-white"
                    style={{
                      border: "none",
                      width: "140px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    type="color"
                    name=""
                    value=""
                  />
                </div>

                <div className="col-6">
                  <p
                    className="text-white text-center mt-2 pt-2"
                    style={{
                      backgroundColor: `${selectedColor}`,
                      width: "140px",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    {selectedColor}
                  </p>
                </div>
              </div>
              <div>
                <h6
                  className={`mt-2 text-center px-2 py-2 fs-17 lh-28 cursor-poiter rounded-3`}
                  style={{ backgroundColor: "#E8F0FF" }}
                >
                  SAVE FOR ART BOARD
                </h6>
                <h6
                  className={`mt-2 text-center px-2 py-3 cursor-poiter fs-14 lh-23 bgBlue text-white rounded-3`}
                  onClick={onDownloadClick}
                >
                  CREATE AND DOWNLOAD QR CODE{" "}
                  <IoIosArrowDown className="ms-3" size="20" />
                </h6>
              </div>
            </div>
          </div>
          {/* ======= */}
        </div>
      </div>
    </div>
  );
};

export default QrCodes;
