import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import { projectData } from '../utilites/projectData';
import { FaSearch } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 scroll vh-100 ">
          <Navbar />
          <div className=" my-5 mx-5 vw-75">
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
            {/* ==================== */}
            <div>
              <div className="bg-project p-5">
                <div className="ps-4">
                  <h6 className="fs-18 lh-12 fw-bold">ALL PROJECTS</h6>
                </div>
                <div className="row">
                  {projectData.map((item) => (
                    <div
                      key={item.id}
                      className="col-md-3  my-3 projectCardItems"
                    >
                      <a href={item.link} className="" style={{}}>
                        <div className=" text-center projectCardItem">
                          <span
                            className="color-text"
                            style={{ fontSize: '50px' }}
                          >
                            {item.icon}
                          </span>

                          <p>{item.tittle}</p>
                        </div>
                        <div
                          className=" mt-3 d-flex justify-content-center "
                          style={{
                            fontSize: '13px',
                          }}
                        >
                          <p className="me-3">{item.detail}</p>
                          <p>{item.date}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ==================== */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
