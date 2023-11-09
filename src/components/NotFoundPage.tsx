import PATHS from "../constants/paths";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <h1>not Found Page page</h1>
      <p>
        news page <Link to={PATHS.news}>News</Link>
      </p>
      <p>
        home page <Link to={PATHS.index}>Home</Link>
      </p>
    </>
  );
}

export default NotFoundPage;
