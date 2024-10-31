import { useState, useEffect } from "react";
import { BsGripVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import AssignmentControl from "./AssignmentControl";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams } from "react-router-dom";
import { assignments as initialAssignments } from "../../Database";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const [courseAssignments, setCourseAssignments] = useState<
    {
      _id: string;
      title: string;
      course: string;
      description: string;
      points: number;
      dueDate: string;
      availableFrom: string;
      availableUntil: string;
    }[]
  >([]);

  useEffect(() => {
    setCourseAssignments(
      initialAssignments.filter((assignment) => assignment.course === cid)
    );
  }, [cid]);

  const dispatch = useDispatch();

  const handleDelete = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to remove this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
      setCourseAssignments((prevAssignments) =>
        prevAssignments.filter((assignment) => assignment._id !== assignmentId)
      );
    }
  };

  return (
    <div>
      <AssignmentControl />
      <br /> <br /> <br /> <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <MdArrowDropDown className="me-2 fs-5" />
            <b>ASSIGNMENTS</b>
            <AssignmentControlButtons />
          </div>
          <ul className="wd-assignment-list list-group rounded-0">
            {courseAssignments.map((assignment) => (
              <li
                key={assignment._id}
                className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-start"
              >
                <BsGripVertical className="me-2 fs-3" />
                <MdEditNote className="me-2 fs-3" color="green" />
                <div className="flex-grow-1">
                  <a
                    className="wd-assignment-link text-black"
                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </a>
                  <br />
                  <span style={{ color: "red" }}>
                    {" "}
                    Multiple Modules{" "}
                  </span> | <b>Not available until</b>{" "}
                  {assignment.availableFrom} |<br />
                  <b>Due</b> {assignment.availableUntil} | {assignment.points}{" "}
                  points
                </div>
                <div>
                  <FaTrash
                    className="text-danger me-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(assignment._id)}
                  />
                </div>
                <div>
                  <LessonControlButtons />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
