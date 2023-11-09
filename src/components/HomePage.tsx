import PATHS from "../constants/paths";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h2>Home page</h2>
      <p>
        news page <Link to={PATHS.news}>Link</Link>
      </p>
    </>
  );
}

export default HomePage;
