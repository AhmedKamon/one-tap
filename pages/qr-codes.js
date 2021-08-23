import React from "react";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";

const QrCodes = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 ">
          <Navbar />
          <div>
            <div>Hello this is qr code page</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCodes;
