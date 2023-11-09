import PATHS from "../constants/paths";
import { Link } from "react-router-dom";

function NewsPage() {
  return (
    <>
      <h1>news page</h1>
      <p>
        Home page <Link to={PATHS.index}>Home</Link>
      </p>
    </>
  );
}

export default NewsPage;
