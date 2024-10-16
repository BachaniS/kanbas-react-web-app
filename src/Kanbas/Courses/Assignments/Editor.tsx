import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, Link } from 'react-router-dom';
import { assignments } from '../../Database';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = assignments.find(a => a._id === aid);

    if (!assignment) {
        return <div>Assignment not found</div>;
    }

    return (
        <div className="container mt-4">
            <form id="assignmentForm">
                <div className="row mb-3">
                    <label htmlFor="assignmentName" className="col-sm-2 col-form-label">
                        <b>Assignment Name</b>
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            id="assignmentName"
                            name="assignmentName"
                            className="form-control"
                            value={assignment.title}
                            readOnly
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="description" className="col-sm-2 col-form-label">
                        <b>Description</b>
                    </label>
                    <div className="col-sm-10">
                        <textarea
                            id="description"
                            name="description"
                            className="form-control"
                            cols={45}
                            rows={15}
                            readOnly
                        >
                            {assignment.description}
                        </textarea>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="points" className="col-sm-2 col-form-label">Points</label>
                    <div className="col-sm-8">
                        <input type="number" id="points" name="points" className="form-control" value={assignment.points} readOnly />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="assignmentGroup" className="col-sm-2 col-form-label">Assignment Group</label>
                    <div className="col-sm-8">
                        <select id="assignmentGroup" name="assignmentGroup" className="form-select">
                            <option value="assignments">Assignments</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="displayGradeAs" className="col-sm-2 col-form-label">Display Grade As</label>
                    <div className="col-sm-8">
                        <select id="displayGradeAs" name="displayGradeAs" className="form-select">
                            <option value="percentage">Percentage</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="submissionType" className="col-sm-2 col-form-label">Submission Type</label>
                    <div className="col-sm-8">
                        <select id="submissionType" name="submissionType" className="form-select">
                            <option value="online">Online</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Online Entry Options</label>
                    <div className="col-sm-8">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="textEntry"
                                name="textEntry"
                                className="form-check-input"
                                value="Text Entry"
                            />
                            <label className="form-check-label" htmlFor="textEntry">Text Entry</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="websiteUrl"
                                name="websiteUrl"
                                className="form-check-input"
                                value="Website URL"
                            />
                            <label className="form-check-label" htmlFor="websiteUrl">Website URL</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="mediaRecordings"
                                name="mediaRecordings"
                                className="form-check-input"
                                value="Media Recordings"
                            />
                            <label className="form-check-label" htmlFor="mediaRecordings">Media Recordings</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="studentAnnotation"
                                name="studentAnnotation"
                                className="form-check-input"
                                value="Student Annotation"
                            />
                            <label className="form-check-label" htmlFor="studentAnnotation">Student Annotation</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="fileUploads"
                                name="fileUploads"
                                className="form-check-input"
                                value="File Uploads"
                            />
                            <label className="form-check-label" htmlFor="fileUploads">File Uploads</label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="assignTo" className="col-sm-2 col-form-label">Assign To</label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            id="assignTo"
                            name="assignTo"
                            className="form-control"
                            value="Everyone"
                            readOnly
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="dueDate" className="col-sm-2 col-form-label">Due Date</label>
                    <div className="col-sm-8">
                        <input type="date" id="dueDate" name="dueDate" className="form-control" value={assignment.dueDate} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="availableFrom" className="col-sm-2 col-form-label">Available From</label>
                    <div className="col-sm-8">
                        <input type="date" id="availableFrom" name="availableFrom" className="form-control" value={assignment.availableFrom} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="availableUntil" className="col-sm-2 col-form-label">Available Until</label>
                    <div className="col-sm-8">
                        <input type="date" id="availableUntil" name="availableUntil" className="form-control" value={assignment.availableUntil} />
                    </div>
                </div>
                <br />
                <div className="col-sm-10">
                    <div className="float-end">
                        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary">Cancel</Link>
                        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
