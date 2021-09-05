import Image from 'next/image';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import styles from '../styles/qrCodeTemplate.module.css';
import { BiPlusMedical } from 'react-icons/bi';
import { FaDownload } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
import QRCode from '../utilites/images/001-qr-code.svg';
import qr from '../utilites/images/001-qr-code -black.svg';
import logo from '../utilites/images/001-water-drop.svg';
import Link from 'next/link';

const QrCodeTemplate = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 vh-100 scroll">
          <Navbar />
          {/* =========== */}

          <div
            className={`${styles.card} mt-5 mb-5 pt-4 px-5 me-5 ms-1  boxShadow  bg-body rounded shadow-sm`}
          >
            <div className="d-flex align-items-center">
              <div>
                <Image src={logo} alt="logo" />
              </div>
              <div>
                <h6
                  className="ms-4 fw-bold fs-22 lh-26"
                  style={{ color: '#004CD4' }}
                >
                  QR code templates (3)
                </h6>
              </div>
            </div>
            <div className="d-flex my-4">
              <div className="p-2 text-center">
                <Image src={qr} height="80" width="80" alt="logo" />
                <Link href="/createTemplate">
                  <a>
                    <p className="mt-3 px-3 py-2 fs-16 lh-12 fw-bold border">
                      Default template
                    </p>
                  </a>
                </Link>
              </div>
              <div className="p-2 text-center ms-5">
                <Image src={qr} height="80" width="80" alt="logo" />
                <Link href="/createTemplate">
                  <a>
                    {' '}
                    <p className={` mt-3 px-3 py-2 fs-16 lh-12 fw-bold border`}>
                      Circular
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`${styles.card} pt-4 px-5 py-5 me-5 ms-1 boxShadow  bg-body rounded shadow-sm`}
          >
            <div className="d-flex justify-content-between pb-5">
              <div className="d-flex align-items-center pb-5">
                <div>
                  <Image src={logo} alt="logo" />
                </div>
                <div>
                  <h6
                    className="ms-4 fw-bold fs-22 lh-26"
                    style={{ color: '#004CD4' }}
                  >
                    Landing Page (3)
                  </h6>
                </div>
              </div>
              <div>
                <h6
                  className="text-white fw-bold px-3 py-2 rounded fs-16 lh-12"
                  style={{ backgroundColor: '#004CD4' }}
                >
                  <GoPlus className="me-2" style={{ fontSize: '25px' }} />{' '}
                  CREATE LANDING PAGE
                </h6>
              </div>
            </div>
          </div>

          {/* ====== */}
          {/* <div className="bg-white mt-5 pb-5">
            <div
              className={`d-flex justify-content-between align-items-center px-5 pt-4`}
            >
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={QRCode} height="20" width="20" alt="qrCode" />
                </div>
                <div>
                  <h6 className={`${styles.textColor} fw-bold`}>
                    QR codes (1)
                  </h6>
                </div>
              </div>

              <div className="">
                <h6
                  className={` text-center cursor-poiter px-3 py-2`}
                  style={{
                    color: '#FFFFFF',
                    backgroundColor: '#004CD4',
                  }}
                >
                  <GoPlus
                    className="me-2"
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                    }}
                  />
                  CREATE QR CODE{' '}
                </h6>
              </div>
            </div>
            <hr />

            <div className={`${styles.card} m-4 mt-5 rounded-3 shadow-sm`}>
              <div className="row px-4 py-2">
                <div className="col-md-3 d-flex justify-content-center align-items-center ">
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkboxNoLabel"
                      value=""
                      aria-label="..."
                    />
                  </div>
                  <div className="ms-5">
                    <Image src={QRCode} height="90" width="90" alt="qrCode" />
                  </div>
                </div>
                <div className="col-md-6  d-flex justify-content-start align-items-center">
                  <div className="me-5">
                    <h3 className="fs-22 lh-12 textColor fw-bold my-3">
                      WEBSITE 10/08/2021
                    </h3>
                    <div className="row">
                      <div className="col-md-3">
                        <p className="m-0 ">Link:</p>
                        <p className="m-0 ">Org:</p>
                        <p className="m-0 ">Created:</p>
                        <p className="m-0 ">Labels:</p>
                      </div>
                      <div className="col-md-8">
                        <p className="m-0 ">https://qrcodes.pro/eLGyzc</p>
                        <p className="m-0 ">Master organization</p>
                        <p className="m-0 ">August 10, 2021</p>
                        <p className="m-0 ">--</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column  justify-content-center align-items-center">
                    <Image src={QRCode} height="40" width="40" alt="qrCode" />
                    <h6 className="mt-3 fw-bold textColor">0</h6>
                    <h6 className=" fw-bold textColor">Scans</h6>
                  </div>
                </div>

                <div className="col-md-3 py-5 ps-5 pe-3">
                  <button
                    type=""
                    className={`${styles.btn} d-flex justify-content-between align-items-center px-4 py-2 text-primary  rounded-3 mt-2 w-100`}
                  >
                    <span>
                      <BiPlusMedical className={`${styles.iconColor} me-2`} />
                      <span>Edit</span>
                    </span>
                    <FiMoreVertical className={`${styles.iconColor}`} />
                  </button>
                  <button
                    type=""
                    className={`${styles.btn} d-flex justify-content-between align-items-center px-4 py-2 text-primary  rounded-3 mt-2 w-100`}
                  >
                    <FaDownload className={`${styles.iconColor} me-3 `} />
                    <span className="">Download</span>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          {/* ====== */}
        </div>
      </div>
    </div>
  );
};

export default QrCodeTemplate;
