import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";
import { Link } from "react-router-dom";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      if (currentUser) {
        dispatch(setCurrentUser(currentUser));
        navigate("/Kanbas/Account/Profile");
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="wd-username form-control mb-2"
        placeholder="Username"
      />
      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        className="wd-password form-control mb-2"
        placeholder="Password"
      />
      <input
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        className="wd-firstname form-control mb-2"
        placeholder="First Name"
      />
      <input
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        className="wd-lastname form-control mb-2"
        placeholder="Last Name"
      />
      <select
        value={user.role}
        onChange={(e) => setUser({ ...user, role: e.target.value })}
        className="wd-role form-control mb-2"
      >
        <option value="">Select Role</option>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button
        onClick={signup}
        className="wd-signup-btn btn btn-primary mb-2 w-100"
      >
        Sign up
      </button>
      <br />
      <Link to="/Kanbas/Account/Signin" className="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}