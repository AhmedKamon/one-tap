import React from "react";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
const array = [1, 2, 3, 4];

const Overview = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 vh-100 scroll">
          <Navbar />
          <div className="row my-5">
            {array.map((test) => (
              <div className="col-md-6 m-0" key={test}>
                <div className="p-5 bg-white text-center m-4">
                  <h6 className="fw-bold mb-5 fs-22 lh-26">QR Codes</h6>
                  <h6 className="fw-bold fs-46 lh-66">20</h6>
                  <h6 className="fw-bold fs-18 lh-26">SCENS</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
