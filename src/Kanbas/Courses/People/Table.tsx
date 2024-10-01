import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Login ID</th>
                        <th>Section</th>
                        <th>Role</th>
                        <th>Last Activity</th>
                        <th>Total Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Tony</span>{" "}
                            <span className="wd-last-name">Stark</span>
                        </td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Bruce</span>{" "}
                            <span className="wd-last-name">Wayne</span>
                        </td>
                        <td className="wd-login-id">001234562B</td>
                        <td className="wd-section">S102</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-02</td>
                        <td className="wd-total-activity">12:34:56</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Steve</span>{" "}
                            <span className="wd-last-name">Rogers</span>
                        </td>
                        <td className="wd-login-id">001234563S</td>
                        <td className="wd-section">S103</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2020-10-03</td>
                        <td className="wd-total-activity">08:45:12</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Natasha</span>{" "}
                            <span className="wd-last-name">Romanoff</span>
                        </td>
                        <td className="wd-login-id">001234564N</td>
                        <td className="wd-section">S104</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-04</td>
                        <td className="wd-total-activity">09:12:34</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Clark</span>{" "}
                            <span className="wd-last-name">Kent</span>
                        </td>
                        <td className="wd-login-id">001234565C</td>
                        <td className="wd-section">S105</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2020-10-05</td>
                        <td className="wd-total-activity">11:23:45</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Wade</span>{" "}
                            <span className="wd-last-name">Wilson</span>
                        </td>
                        <td className="wd-login-id">001234566W</td>
                        <td className="wd-section">S106</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-06</td>
                        <td className="wd-total-activity">07:56:34</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Peter</span>{" "}
                            <span className="wd-last-name">Parker</span>
                        </td>
                        <td className="wd-login-id">001234567P</td>
                        <td className="wd-section">S107</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-07</td>
                        <td className="wd-total-activity">06:45:23</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Naruto</span>{" "}
                            <span className="wd-last-name">Uzumaki</span>
                        </td>
                        <td className="wd-login-id">001234568N</td>
                        <td className="wd-section">S108</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-08</td>
                        <td className="wd-total-activity">05:34:12</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Sasuke</span>{" "}
                            <span className="wd-last-name">Uchiha</span>
                        </td>
                        <td className="wd-login-id">001234569S</td>
                        <td className="wd-section">S109</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-09</td>
                        <td className="wd-total-activity">04:23:01</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Kakashi</span>{" "}
                            <span className="wd-last-name">Hatake</span>
                        </td>
                        <td className="wd-login-id">001234570K</td>
                        <td className="wd-section">S110</td>
                        <td className="wd-role">PROFESSOR</td>
                        <td className="wd-last-activity">2020-10-10</td>
                        <td className="wd-total-activity">03:12:45</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Itachi</span>{" "}
                            <span className="wd-last-name">Uchiha</span>
                        </td>
                        <td className="wd-login-id">001234571I</td>
                        <td className="wd-section">S111</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2020-10-11</td>
                        <td className="wd-total-activity">02:01:23</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}