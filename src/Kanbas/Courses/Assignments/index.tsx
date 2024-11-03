import { BsGripVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import AssignmentControl from "./AssignmentControl";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
import EditAccess from "../EditAccess";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const handleDelete = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to remove this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
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
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
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
                  <EditAccess>
                    <div>
                      <FaTrash
                        className="text-danger me-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDelete(assignment._id)}
                      />
                    </div>
                  </EditAccess>
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
