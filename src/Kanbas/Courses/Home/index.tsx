import Modules from "../Modules";
import CourseStatus from "./Status";
import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-12 mb-4">
          <Modules />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-12 d-flex justify-content-md-end justify-content-center">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
