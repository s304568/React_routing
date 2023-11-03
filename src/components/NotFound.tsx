import { useEffect } from "react";
import { Link } from "react-router-dom";
import PATHS from "../constants/paths";

function NotFound() {
  useEffect(() => {
    document.title = "Not Found 404";
  });

  return (
    <>
      <h1>Not found 404</h1>
      <p>
        Here is a link to the <Link to={PATHS.index}>Home Page.</Link>
        <p>
          Here is a link to the <Link to={PATHS.news}>News Page.</Link>
        </p>
      </p>
    </>
  );
}

export default NotFound;
