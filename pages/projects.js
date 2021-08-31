import { FaSearch } from 'react-icons/fa';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import { projectData } from '../utilites/projectData';
import { Scrollbar } from 'react-scrollbars-custom';
import NextLink from 'next/link';

const Projects = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 ">
          <Navbar />
          <Scrollbar style={{ width: '60vw', height: '85vh' }}>
            <div className="container mt-5 main pe-5">
              <div className="d-flex justify-content-between">
                <div className="col-md-6  position-relative ">
                  <input
                    className={`projectInput form-control`}
                    type="text"
                    placeholder="enter your project name"
                    name="enter your project name"
                  />
                  <FaSearch className="searchIcon" />
                </div>
                <div className="col-md-3 text-center ms-5">
                  <button className="project-btn fs-18 lh-12 py-3" type="">
                    Filter
                  </button>
                </div>
                <div className="col-md-3 text-center">
                  <button className="project-btn" type="">
                    Last 7 days
                  </button>
                </div>
              </div>

              <div className="bg-project p-5">
                <div className="ps-4">
                  <h6 className="fw-bold">ALL PROJECTS</h6>
                </div>
                <div className="row">
                  {projectData.map((item) => (
                    <div
                      key={item.id}
                      className="col-md-3  my-3 projectCardItems"
                    >
                      <a href={item.link}>
                        <div className="h-75">
                          <div className=" projectCardItem text-center ">
                            <span style={{ fontSize: '50px' }}>
                              {item.icon}
                            </span>

                            <p>{item.tittle}</p>
                          </div>
                          <div
                            className="d-flex justify-content-between "
                            style={{
                              fontSize: '13px',
                              margin: '0px 0px 0px 20px',
                            }}
                          >
                            <p>{item.detail}</p>
                            <p>{item.date}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Scrollbar>
        </div>
      </div>
    </div>
  );
};

export default Projects;
