import Modules from "../Modules";
import CourseStatus from "./Status";
import React from "react";
import "./index.css";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-12 mb-4">
          <Modules />
        </div>
        <div className="col-lg-4 col-md-5 d-none d-sm-flex justify-content-center justify-content-md-end">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
