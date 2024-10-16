import { Link } from "react-router-dom";
import { useLocation } from "react-router";
export default function AccountNavigation() {
  const location = useLocation();
  const links = [
    { name: "Signin", path: "Signin" },
    { name: "Signup", path: "Signup" },
    { name: "Profile", path: "Profile" }
  ];
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0" style={{ marginRight: '30px' }}>
      {links.map(link => (
        <Link
          key={link.path}
          to={`/Kanbas/Account/${link.path}`}
          className={`list-group-item border border-0 ${location.pathname.includes(link.path) ? 'active' : 'text-danger'}`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
