export default function AssignmentEditor({
  dialogTitle,
  assignmentName,
  setAssignmentName,
  addAssignment,
}: {
  dialogTitle: string;
  assignmentName: string;
  setAssignmentName: (name: string) => void;
  addAssignment: () => void;
}) {
  return (
    <div
      id="wd-add-assignment-dialog"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {dialogTitle}{" "}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <label htmlFor="assignmentName" className="col-form-label">
              Assignment Name
            </label>
            <input
              className="form-control mt-2"
              defaultValue={assignmentName}
              placeholder="New Assignment"
              onChange={(e) => setAssignmentName(e.target.value)}
            />
            <textarea
              className="form-control mt-2"
              placeholder="New Assignment Description"
            ></textarea>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col">
                <label htmlFor="points" className="col-form-label sm-4">
                  <b>Points</b>
                </label>
              </div>
              <div className="col-sm-10">
                <input
                  type="number"
                  id="points"
                  name="points"
                  className="form-control"
                  placeholder="100"
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-start modal-body">
            <label className="me-2">
              <b>Assign</b>
            </label>
            <div
              className="container p-2 border rounded"
              style={{ maxWidth: "400px", maxHeight: "250px" }}
            >
              <div className="modal-body">
                <label htmlFor="dueDate" className="col-sm-2 col-form-label">
                  <b>Due</b>
                </label>
                <div className="col-sm-12">
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    className="form-control"
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="availableFrom" className="col-form-label">
                      <b> Available From </b>
                    </label>
                    <input
                      type="date"
                      id="availableFrom"
                      name="availableFrom"
                      className="form-control"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="availableUntil" className="col-form-label">
                      <b> Until </b>
                    </label>
                    <input
                      type="date"
                      id="availableUntil"
                      name="availableUntil"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel{" "}
            </button>
            <button
              onClick={addAssignment}
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-danger"
            >
              Save{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
