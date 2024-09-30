import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="React JS Course" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              {" "}
              CS1234 React JS{" "}
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="React JS Course" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              {" "}
              CS2345 HTML{" "}
            </Link>
            <p className="wd-dashboard-course-title">
              HTML developer{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="React JS Course" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              {" "}
              CS2456 Java Script{" "}
            </Link>
            <p className="wd-dashboard-course-title">
              JS developer{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="React JS Course" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              {" "}
              CS2999 Node.js{" "}
            </Link>
            <p className="wd-dashboard-course-title">
              Node.js developer{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="React JS Course" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              {" "}
              CS5010 Program Design Paradigm{" "}
            </Link>
            <p className="wd-dashboard-course-title">
              Software developer{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="React JS Course" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              {" "}
              CS2120 Object Oriented Design{" "}
            </Link>
            <p className="wd-dashboard-course-title">
              Software developer{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="React JS Course" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              {" "}
              CS2020 Data Analysis{" "}
            </Link>
            <p className="wd-dashboard-course-title">
              Data Analyst{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
