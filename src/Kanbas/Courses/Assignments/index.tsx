export default function Assignments() {
    return (
        <div id="wd-assignments">
            <h2>Assignments</h2>
            <form>
                <input type="text" placeholder="Search for Assignments" />
                <button type="button">+ Group</button>
                <button type="button">+ Assignment</button>
                <br />
                <h1>Assignments 40% of Total</h1> <button type="button">+</button>
                <br />
                <ul>
                    <li className="wd-assignment-list-item">
                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                            A1 - ENV + HTML
                        </a>
                        <br />
                        Multiple Modules | <b>Not available until</b> May 6 at 12:00am |<br /> 
                        <b>Due</b> May 13 at 11:59pm | 100 points
                    </li>
                    <li className="wd-assignment-list-item">
                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                        A2 - CSS + BOOTSTRAP
                        </a>
                        <br />
                        Multiple Modules | <b>Not available until</b> May 13 at 12:00am |<br /> 
                        <b>Due</b> May 20 at 11:59pm | 100 points
                    </li>
                    <li className="wd-assignment-list-item">
                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                        A3 - ENV + HTML
                        </a>
                        <br />
                        Multiple Modules | <b>Not available until</b> May 20 at 12:00am |<br /> 
                        <b>Due</b> May 27 at 11:59pm | 100 points
                    </li>
                </ul>
            </form>
        </div>
    );
}