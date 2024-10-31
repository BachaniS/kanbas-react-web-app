import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiOutlineHome, AiOutlineEye, AiOutlineNotification } from "react-icons/ai";
import { MdAnnouncement, MdAnalytics } from "react-icons/md";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="p-3" style={{ maxWidth: "100%", minWidth: "250px" }}>
      <h2 className="text-center">Course Status</h2>
      <div className="d-flex flex-wrap">
        <div className="col-12 col-md-6 mb-2 pe-md-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap">
            <MdDoNotDisturbAlt className="me-2 fs-6" /> Unpublish
          </button>
        </div>
        <div className="col-12 col-md-6 mb-2 ps-md-1">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-6" /> Publish
          </button>
        </div>
      </div>
      <button className="btn btn-lg btn-secondary w-100 mt-2 text-start">
        <BiImport className="me-2 fs-6" /> Import Existing Content
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-2 text-start">
        <LiaFileImportSolid className="me-2 fs-6" /> Import from Commons
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-2 text-start">
        <AiOutlineHome className="me-2 fs-6" /> Choose Home Page
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-2 text-start">
        <AiOutlineEye className="me-2 fs-6" /> View Course Stream
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-2 text-start">
        <MdAnnouncement className="me-2 fs-6" /> New Announcement
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-2 text-start">
        <MdAnalytics className="me-2 fs-6" /> New Analytics
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-2 text-start">
        <AiOutlineNotification className="me-2 fs-6" /> View Course Notifications
      </button>
    </div>
  );
}
