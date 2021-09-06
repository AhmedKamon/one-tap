import Image from 'next/image';
import React from 'react';
import logo from '../utilites/images/001-qr-code -black.svg';
import { useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import styles from '../styles/qrCodes.module.css';
import qrcode from 'qrcode.react';
import QRcode from 'qrcode.react';

const QrCodes = () => {
  const [text, setText] = useState('kamon');
  const [selectedColor, setSelectedColor] = useState('#000');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const downloadQR = () => {
    const canvas = document.getElementById('myqr');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'myqr.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
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
          <div className=" row mt-5 pb-5 me-3">
            <div className="col-md-6 ">
              <h3 className="fs-30 lh-27 fw-bold">Create a new QR Code</h3>
              <h6 className="mt-4 fs-23 lh-27">Name my code (optional)</h6>
              <input
                className={`${styles.qrInput} form-control mt-3`}
                type="text"
                value={text}
                label="QR content"
                size="large"
                color="primary"
                onChange={handleChange}
              />
              <div className="text-center mt-4">
                <h6
                  className="mt-2 mb-5 fs-23 lh-13 fw-bold"
                  style={{ color: '#004CD4' }}
                >
                  Preview
                </h6>
                <QRcode
                  id="myqr"
                  value={text}
                  size={320}
                  includeMargin={true}
                />
              </div>
              <h6 className="mt-4 fs-23 lh-27">
                I want my QR code to scan to:
              </h6>
              <p className="mt-1 fs-28 lh-26">Enter or Paste a link</p>
              <input
                className={`${styles.qrInput} form-control mt-3`}
                type="text"
                placeholder="https://www.linkedin.com/in/kawsar-dev/"
                name="https://www.linkedin.com/in/kawsar-dev/"
              />
            </div>
            <div className="col-md-5 p-2 my-5" style={{ width: '350px' }}>
              <h6 className={`${styles.title} fs-23 lh-13 py-3 px-3`}>
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
              <h6 className={`${styles.title} fs-23 lh-13 py-3 px-3`}>
                Image File
              </h6>
              <button
                className="w-100 border-0 bg-white my-2 px-2 py-3 fw-bold"
                type=""
                style={{ color: '#004CD4' }}
              >
                <BsUpload style={{ fontSize: '25px' }} className="me-3 " />
                Upload File
              </button>
              <p
                className="my-2 fw-bold fs-18 lh-12 "
                style={{ color: '#004CD4' }}
              >
                QR Colors
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="col-6">
                  <input
                    className="bg-white"
                    style={{
                      border: 'none',
                      width: '140px',
                      height: '40px',
                      borderRadius: '10px',
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
                      width: '140px',
                      height: '40px',
                      borderRadius: '5px',
                    }}
                  >
                    {selectedColor}
                  </p>
                </div>
              </div>
              <div>
                <h6
                  className={`mt-2 text-center px-2 py-3 fs-17 lh-28`}
                  style={{
                    color: '#004CD4',
                    backgroundColor: '#E8F0FF',
                  }}
                >
                  SAVE FOR ART BOARD
                </h6>
                <h6
                  className={`mt-2 text-center px-2 py-3 cursor-poiter fs-14 lh-23`}
                  style={{
                    color: '#FFFFFF',
                    backgroundColor: '#004CD4',
                  }}
                  onClick={downloadQR}
                >
                  CREATE AND DOWNLOAD QR CODE{' '}
                  <IoIosArrowDown
                    className="ms-3"
                    style={{
                      fontSize: '25px',
                      fontWeight: 'bold',
                    }}
                  />
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
