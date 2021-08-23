import { useState } from 'react';
import styles from './qrCodeTemplate.module.css';
import Image from 'next/image';
import logo from '../../utilites/images/001-qr-code -black.svg';
import { BsUpload } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { Scrollbar } from 'react-scrollbars-custom';

const QrCodeTemplate = () => {
  const [selectedColor, setSelectedColor] = useState('#000');
  return (
    <Scrollbar style={{ width: '55vw', height: '85vh' }}>
      <div className="row mt-5 pb-5">
        <div className="col-md-6 px-5">
          <h3>Create a new QR Code</h3>
          <h6 className="mt-4">Name my code (optional)</h6>
          <input
            className={`${styles.qrInput} form-control mt-3`}
            type="text"
            placeholder="enter your project name"
            name="enter your project name"
          />
          <div className="text-center mt-4">
            <h6 className="mt-2 mb-5" style={{ color: '#004CD4' }}>
              Preview
            </h6>
            <Image src={logo} height="300" width="300" alt="logo" />
          </div>
          <h6 className="mt-4">I want my QR code to scan to:</h6>
          <p className="mt-1">Enter or Paste a link</p>
          <input
            className={`${styles.qrInput} form-control mt-3`}
            type="text"
            placeholder="https://www.linkedin.com/in/kawsar-dev/"
            name="https://www.linkedin.com/in/kawsar-dev/"
          />
        </div>
        <div className="col-md-6 p-2" style={{ width: '350px' }}>
          <h6 className={`${styles.title} `}>Select a Template</h6>
          <div className="d-flex justify-content-between my-4">
            <div className="p-2 text-center">
              <Image src={logo} height="100" width="100" alt="logo" />
              <p className={`${styles.temp} mt-3 px-2 py-2`}>
                Default template
              </p>
            </div>
            <div className="p-2 text-center">
              <Image src={logo} height="100" width="100" alt="logo" />
              <p className={`${styles.temp} mt-3 px-2 py-2`}>Circular</p>
            </div>
          </div>
          <h6 className={`${styles.title}`}>Image File</h6>
          <button
            className="w-100 border-0 bg-white my-2 px-2 py-3 fw-bold"
            type=""
            style={{ color: '#004CD4' }}
          >
            <BsUpload style={{ fontSize: '25px' }} className="me-3 " />
            Upload File
          </button>
          <p className="my-2 fw-bold" style={{ color: '#004CD4' }}>
            QR Colors
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <div className="com-6">
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

            <div className="com-6">
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
              className={`mt-2 text-center px-2 py-3`}
              style={{
                color: '#004CD4',
                backgroundColor: '#E8F0FF',
              }}
            >
              SAVE FOR ART BOARD
            </h6>
            <h6
              className={`mt-2 text-center px-2 py-3 cursor-poiter`}
              style={{
                color: '#FFFFFF',
                backgroundColor: '#004CD4',
              }}
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
    </Scrollbar>
  );
};

export default QrCodeTemplate;
