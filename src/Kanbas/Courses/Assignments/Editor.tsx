export default function AssignmentEditor() {
    return (
        <>
            <h1>Assignment Name</h1>

            <form id="assignmentForm">
                <label htmlFor="assignmentName"><b>Assignment Name</b></label>
                <br />
                <br />
                <input type="text" id="assignmentName" name="assignmentName" value="A1 - ENV + HTML" readOnly />

                <br />
                <br />
                <textarea id="description" name="description" cols={35} rows={15} readOnly>
The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. 
The landing page should include the following: 
- Your full name and section 
- Links to each of the lab assignments 
- Link to the Kanbas application 
- Links to all relevant source code repositories 
- The Kanbas application should include a link to navigate back to the landing page.
                </textarea>
                <br />
                <br />
                <label htmlFor="points">Points  </label>
                <input type="number" id="points" name="points" value="100" readOnly />
                <br />
                <br />
                <label htmlFor="assignmentGroup">Assignment Group  </label>
                <select id="assignmentGroup" name="assignmentGroup">
                    <option value="assignments">Assignments</option>
                </select>
                <br />
                <br />
                <label htmlFor="displayGradeAs">Display Grade As  </label>
                <select id="displayGradeAs" name="displayGradeAs">
                    <option value="percentage">Percentage</option>
                </select>
                <br />
                <br />
                <label htmlFor="submissionType">Submission Type  </label>
                <select id="submissionType" name="submissionType">
                    <option value="online">Online</option>
                </select>
                <br />
                <br />
                <label>Online Entry Options</label>
                <br />
                <input type="checkbox" id="textEntry" name="textEntry" value="Text Entry" /> Text Entry<br />
                <input type="checkbox" id="websiteUrl" name="websiteUrl" value="Website URL" /> Website URL<br />
                <input type="checkbox" id="mediaRecordings" name="mediaRecordings" value="Media Recordings" /> Media Recordings<br />
                <input type="checkbox" id="studentAnnotation" name="studentAnnotation" value="Student Annotation" /> Student Annotation<br />
                <input type="checkbox" id="fileUploads" name="fileUploads" value="File Uploads" /> File Uploads<br />
                <br />
                <br />
                <label htmlFor="assignTo">Assign To  </label>
                <input type="text" id="assignTo" name="assignTo" value="Everyone" readOnly />
                <br />
                <br />
                <label htmlFor="dueDate">Due Date  </label>
                <input type="date" id="dueDate" name="dueDate" value="2024-05-13" />
                <br />
                <br />
                <label htmlFor="availableFrom">Available From  </label>
                <input type="date" id="availableFrom" name="availableFrom" value="2024-05-06" />
                <label htmlFor="availableUntil">  Available Until  </label>
                <input type="date" id="availableUntil" name="availableUntil" value="2024-05-20" />
                <br />
                <br />
                <div className="submit-group">
                    <button type="button">Save</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </>
    );
}