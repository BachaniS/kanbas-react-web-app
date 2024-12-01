import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EditAccess from "./Courses/EditAccess";
import EditAccessStudents from "./Courses/EditAccessStudents";
import { fetchAllCourses } from "./Courses/client";
import * as enrollmentsClient from "./Courses/Enrollments/client";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [allCourses, setAllCourses] = useState<any[]>([]);

  useEffect(() => {
    if (enrolling) {
      fetchAllCourses().then((data) => setAllCourses(data));
    }
  }, [enrolling]);

  const handleDelete = async (event: React.MouseEvent, courseId: string) => {
    event.preventDefault();
    await deleteCourse(courseId);
    if (enrolling) {
      setAllCourses(allCourses.filter((c) => c._id !== courseId));
    }
  };

  useEffect(() => {
    if (!enrolling) {
      const fetchEnrolledCourses = async () => {
        try {
          const enrolledCourses = await enrollmentsClient.fetchEnrollments(currentUser._id);
          setAllCourses(enrolledCourses);
        } catch (error) {
          console.error("Failed to fetch enrolled courses:", error);
        }
      };
      fetchEnrolledCourses();
    }
  }, [enrolling, currentUser._id]);

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );

  const filteredCourses = enrolling
    ? allCourses
    : courses.filter((course) =>
        enrollments.some(
          (enrollment: any) =>
            enrollment.user === currentUser._id &&
            enrollment.course === course._id
        )
      );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <EditAccessStudents>
        <h5>
          Enrollments
          <button
            className="btn btn-primary float-end"
            id="wd-enrollments-course-click"
            onClick={() => setEnrolling(!enrolling)}
          >
            {enrolling ? "Show Enrolled Courses" : "Show All Courses"}
          </button>
        </h5>
        <br />
      </EditAccessStudents>
      <hr />
      <EditAccess>
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            {" "}
            Add{" "}
          </button>
          <button
            className="btn btn-warning float-end me-2"
            id="wd-update-course-click"
            onClick={updateCourse}
          >
            Update
          </button>
        </h5>

        <br />
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <textarea
          value={course.description}
          className="form-control"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
      </EditAccess>
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({filteredCourses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src={`/images/${course._id}.png`}
                    width="100%"
                    height={160}
                    alt={`${course.name}`}
                    onError={(e) => {
                      e.currentTarget.src = "/images/reactjs.png";
                    }}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}{" "}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    <button className="btn btn-primary"> Go </button>

                    <EditAccess>
                      <button
                        onClick={(event) => handleDelete(event, course._id)}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>

                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </EditAccess>

                    {enrolling && (
                      <EditAccessStudents>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            updateEnrollment(
                              course._id,
                              !isEnrolled(course._id)
                            );
                          }}
                          className={`btn ${
                            course.enrolled ? "btn-danger" : "btn-success"
                          } float-end`}
                        >
                          {course.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      </EditAccessStudents>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
