import { FaPlus} from "react-icons/fa";

export default function AssignmentControl() {
    return (
        <div id="wd-assignment-control" className="toolbar">
            <input type = "text" placeholder = "Search..." className="form-control-lg me-1"/>
            <button id = "wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="me-2 fs-5" /> Assignment
            </button>
            <button id = "wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="me-2 fs-5" /> Group
            </button>
        </div>    
    );
    }