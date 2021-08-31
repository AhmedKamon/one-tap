import React from 'react';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import { Scrollbar } from 'react-scrollbars-custom';
import RightSideBar from '../components/rightSideBar/rightSideBar';
import { creatProject } from '../utilites/createProject';
import styles from '../styles/createPage.module.css';

const CreatePage = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 ">
          <Navbar />
          <Scrollbar style={{ width: '60vw', height: '85vh' }}>
            <div className="row mt-5 pe-5">
              <div className="col-md-8 ">
                <div className="bg-project p-5">
                  <h6 className="fw-bold">CREATE PROJECT</h6>
                  <div className={`row mt-3`}>
                    {creatProject.map((data) => (
                      <div
                        key={data.id}
                        className={`${styles.card} col-md-3 bg-white m-3 d-flex justify-content-center align-items-center`}
                        style={{ height: '100px' }}
                      >
                        <small className="">{data.name}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <RightSideBar />
              </div>
            </div>
          </Scrollbar>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;