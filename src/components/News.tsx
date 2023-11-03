import { useEffect } from "react";
import { Link } from "react-router-dom";
import PATHS from "../constants/paths";

function News() {
  useEffect(() => {
    document.title = "News";
  });
  return (
    <>
      <h1>This is the News Page.</h1>
      <p>
        Here is a link to the <Link to={PATHS.index}>Home Page.</Link>
      </p>
    </>
  );
}

export default News;
