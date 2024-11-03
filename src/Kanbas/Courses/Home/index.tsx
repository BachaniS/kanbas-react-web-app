import Modules from "../Modules";
import CourseStatus from "./Status";
import React from "react";
import "./index.css";

export default function Home() {
  return (
    <div className="container">
      <table className="table">
        <tbody>
          <tr>
            <td className="align-top">
              <Modules />
            </td>
            <td className="align-top course-status" style={{ width: "30%" }}>
              <CourseStatus />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
