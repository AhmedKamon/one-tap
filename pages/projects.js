import { FaSearch } from "react-icons/fa";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import { projectData } from "../utilites/projectData";

const Projects = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 ">
          <Navbar />
          <div className="mt-5 main">
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
                <button className="btn" type="">
                  Filter
                </button>
              </div>
              <div className="col-md-3 text-center">
                <button className="btn" type="">
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
                  <>
                    <div
                      key={item.id}
                      className="col-md-3  my-3  projectCardItems"
                    >
                      <div className="h-100">
                        <div className=" projectCardItem ">
                          <span style={{ fontSize: "50px" }}>{item.icon}</span>
                          <p>{item.tittle}</p>
                        </div>
                        <div
                          className="d-flex justify-content-between "
                          style={{
                            fontSize: "13px",
                            margin: "0px 0px 0px 20px",
                          }}
                        >
                          <p>{item.detail}</p>
                          <p>{item.date}</p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
