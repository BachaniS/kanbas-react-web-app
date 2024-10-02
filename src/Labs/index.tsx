import { Routes, Route } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";
import { Link } from "react-router-dom";

export default function Labs() {
  return (
    <div>
      <h1>Somesh Bachani</h1>
      <h1>
        <Link id="wd-a" to="/Labs">
          Labs
        </Link>
      </h1>
      <TOC />
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
