import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" alt="React JS" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" alt="HTML" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2345 HTML
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    HTML developer
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" alt="JavaScript" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2456 Java Script
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    JS developer
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" alt="Node.js" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2999 Node.js
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Node.js developer
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" alt="Program Design Paradigm" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5010 Program Design Paradigm
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Software developer
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" alt="Object Oriented Design" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2120 Object Oriented Design
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Software developer
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" alt="Data Analysis" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2020 Data Analysis
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Data Analyst
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
