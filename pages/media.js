import Image from "next/image";
import React from "react";
import Navbar from "../components/navbar/navbar";
import About from "../components/qrCode/qrcode";
import Sidebar from "../components/sidebar/sidebar";
import demo from "../utilites/images/damo.svg";
const Media = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 vh-100 scroll">
          <Navbar />
          <Image
            src={demo}
            alt="working"
            title="working"
            height={640}
            width={640}
            layout="responsive"
          />
          <About />
        </div>
      </div>
    </div>
  );
};

export default Media;
