import { Routes, Route } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import TOC from "./TOC";
import { Link } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Lab5 from "./Lab5";

export default function Labs() {
  return (
    <Provider store={store}>
    <div className="container-fluid">
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
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4/*" element={<Lab4 />} />
        <Route path="Lab5/*" element={<Lab5 />} />
      </Routes>
    </div>
    </Provider>
  );
}
