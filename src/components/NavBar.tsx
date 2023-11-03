import { Outlet, Link } from "react-router-dom";
import PATHS from "../constants/paths";


function NavBar() {
  return (
    <>
      <div className="NavBarDiv"></div>
      <nav>
        <ul>
          <li>
            <Link to={PATHS.index}>Home</Link>
          </li>
          <li>
            <Link to={PATHS.news}>News</Link>
          </li>
        </ul>
      </nav>
      <div>

      <Outlet />
    </>
  );
}

export default NavBar;
