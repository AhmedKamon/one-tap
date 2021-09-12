import "node-self";
import QRCodeStyling from "qr-code-styling";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BsUpload } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import styles from "../styles/qrCodes.module.css";
import { QrContext } from "./_app";

const qrCode = new QRCodeStyling({
  width: 320,
  height: 360,
  margin: 10,
  backgroundOptions: {
    color: "#F3F5F7",
  },
  dotsOptions: {
    color: "#171717",
    type: "Dots",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20,
  },
});

const QrCodes = () => {
  const [dots, setDots] = useState("classy");
  const [corneDots, setCornerDots] = useState("");
  const [qrCodeInfo, setQrCodeInfo] = useContext(QrContext);
  const [showError, setShowError] = useState(false);
  const [organizationName, setOrganizationName] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#000");
  const [url, setUrl] = useState("https://qr-code-styling.com");
  const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);
  const [imgURl, setImgURL] = useState("");

  useEffect(() => {
    console.log(qrCode);
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
      image: imgURl,
      dotsOptions: {
        color: selectedColor,
        type: dots,
      },
      cornersSquareOptions: {
        type: corneDots,
      },
    });
  }, [url, selectedColor, imgURl, dots, corneDots]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    // setQrCodeInfo(qrCode);
    qrCode.download({
      name: organizationName,
      extension: fileExt,
    });
  };

  const handleChange = (e) => {
    setOrganizationName(e.target.value);
  };

  const uploadImage = (files) => {
    setShowSpinner(true);
    const url = "https://api.cloudinary.com/v1_1/one-tap/image/upload";

    const formData = new FormData();
    formData.append("file", files);
    formData.append("upload_preset", "tbjkdozx");

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setImgURL(data.url);
        setShowSpinner(false);
      });
  };

  const handleSave = () => {
    setShowError(false);
    if (organizationName) {
      const imgUrl = imgURl;
      const color = selectedColor;
      const link = url;
      const companyName = organizationName;
      fetch("http://localhost:3000/api/qrcode", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ imgUrl, color, link, companyName }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-12 col-md-3">
          <Sidebar />
        </div>
        <div className="col-12 col-md-9 vh-100 scroll">
          <Navbar />
          {/* ======= */}
          <div className="row mt-5 d-flex justify-content-between pb-5">
            <div className="col-md-5">
              <h3 className="fs-24 lh-27 fw-bold">Create a new QR Code</h3>
              <h6 className="mt-4 fs-17 m-0 lh-27">Name my code</h6>
              <input
                className={`${styles.qrInput} form-control mt-2`}
                type="text"
                value={organizationName}
                label="QR content"
                size="large"
                color="primary"
                placeholder="Enter company name"
                onChange={handleChange}
              />
              {showError ? (
                <p className="text-danger my-2">Projects Name Required</p>
              ) : (
                ""
              )}
              <div className=" mt-4">
                <h6
                  className="mt-5 mb-4 fs-20 lh-13 fw-bold text-center"
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
                {showSpinner && (
                  <div className="text-center mb-4">
                    <div
                      className="spinner-border spinner-border-sm"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>{" "}
                    Generating QR code...
                  </div>
                )}
                <div className="ms-2" ref={ref} />
              </div>
            </div>
            <div className="col-md-5 p-3 my-5" style={{ width: "350px" }}>
              {/* ======================= */}
              <div className="row">
                <div className="col-md-6">
                  <p className="fs-16 lh-18 fw-bold">Select Dots</p>
                  <select
                    className=" custom-select my-1 mr-sm-2 w-100 py-2 px-1 rounded border"
                    onChange={(e) => setDots(e.target.value)}
                  >
                    <option value="square">Square </option>
                    <option value="dots">Dots</option>
                    <option value="classy">Classy</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <p className="fs-16 lh-18 fw-bold">Select Corners </p>
                  <select
                    className=" custom-select my-1 mr-sm-2 w-100 py-2 px-1 rounded border"
                    onChange={(e) => setCornerDots(e.target.value)}
                  >
                    <option value="square">Square</option>
                    <option value="dot">Dot</option>
                    <option value="extra-rounded">Extra Rounded</option>
                  </select>
                </div>
              </div>
              {/* ======================= */}
              <div className="my-4">
                <p className="mt-4 fs-16 lh-27 py-2 bgBlue text-white px-3 rounded-3 fontMedium">
                  I want my QR code to scan to
                </p>
                <p className="mt-4 mb-2 m-0 lh-26">Enter or Paste a link</p>
                <input
                  className={`${styles.qrInput} form-control`}
                  value={url}
                  onChange={onUrlChange}
                  style={styles.inputBox}
                  name="qr-code"
                />
              </div>
              <h6 className={`${styles.title} fs-16 lh-13 py-3 px-3`}>
                Image File
              </h6>
              <label
                htmlFor="file"
                className="text-center d-block py-2 bg-white my-3 textColor cursor-poiter fontMedium"
              >
                <BsUpload className="me-2" /> Upload File{" "}
              </label>
              <input
                type="file"
                className="d-none"
                id="file"
                onChange={(e) => uploadImage(e.target.files[0])}
              />
              <p className="mt-4 mb-1 fontMedium fs-16 lh-12 textColor">
                Pick QR Colors
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="col-6">
                  {/* <label htmlFor="color">Test</label> */}
                  <input
                    className="bg-white"
                    id="color"
                    placeholder="Pick a color"
                    style={{
                      border: "none !important",
                      width: "140px",
                      height: "40px",
                      borderRadius: "10px",
                      color: "red !important",
                    }}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    type="color"
                    name=""
                    value="#D09090"
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
                <p
                  className={`mt-2 text-center px-2 py-2 fs-14 lh-28 cursor-poiter rounded-3 textColor`}
                  style={{ backgroundColor: "#E8F0FF" }}
                  onClick={handleSave}
                >
                  SAVE FOR ART BOARD
                </p>
                <h6
                  className={`mt-2 text-center px-2 py-3 cursor-poiter fontRegular fs-14 lh-23 bgBlue text-white rounded-3`}
                  onClick={onDownloadClick}
                >
                  DOWNLOAD QR CODE <IoIosArrowDown className="ms-3" size="16" />
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
