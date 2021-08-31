import React from 'react';
import RightSideBar from '../rightSideBar/rightSideBar';
import styles from './canvas.module.css';

const Canvas = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-7 d-flex justify-content-center align-items-center my-3">
        <div className="bg-white h-100 w-75 "></div>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-4">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Canvas;
