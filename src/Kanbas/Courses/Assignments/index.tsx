import { BsGripVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import AssignmentControl from "./AssignmentControl";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
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
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-start">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdEditNote className="me-2 fs-3" color="green" />
                            <div className="flex-grow-1">
                                <a className="wd-assignment-link text-black" href="#/Kanbas/Courses/1234/Assignments/123">
                                    A1
                                </a>
                                <br />
                                <span className="text-red">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |<br /> 
                                <b>Due</b> May 13 at 11:59pm | 100 points
                            </div>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-start">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdEditNote className="me-2 fs-3" color="green" />
                            <div className="flex-grow-1">
                                <a className="wd-assignment-link text-black" href="#/Kanbas/Courses/1234/Assignments/124">
                                    A2
                                </a>
                                <br />
                                <span className="text-red">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |<br /> 
                                <b>Due</b> May 20 at 11:59pm | 100 points
                            </div>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-start">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdEditNote className="me-2 fs-3" color="green" />
                            <div className="flex-grow-1">
                                <a className="wd-assignment-link text-black" href="#/Kanbas/Courses/1234/Assignments/125">
                                    A3
                                </a>
                                <br />
                                <span className="text-red">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |<br /> 
                                <b>Due</b> May 27 at 11:59pm | 100 points
                            </div>
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}