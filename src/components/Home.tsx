import { useEffect } from "react";
import { Link } from "react-router-dom";
import PATHS from "../constants/paths";

function Home() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <>
      <h1>This is the Home Page.</h1>
      <p>
        Here is a link to the <Link to={PATHS.news}>News Page.</Link>
      </p>
    </>
  );
}

export default Home;
