import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link to={`/Kanbas/Account/Signin`} target="_blank" rel="noreferrer"> Signin </Link> <br />
      <Link to={`/Kanbas/Account/Signup`} target="_blank" rel="noreferrer"> Signup </Link> <br />
      <Link to={`/Kanbas/Account/Profile`} target="_blank" rel="noreferrer"> Profile </Link> <br />
      <br />
    </div>
  );
}
