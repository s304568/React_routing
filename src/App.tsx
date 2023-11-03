import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import NotFound from "./components/NotFound";
import PATHS from "./constants/paths";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      
        <Routes>
          <Route path={PATHS.index} element={<NavBar />}>
            <Route path={PATHS.index} element={<Home />} />
            <Route path={PATHS.news} element={<News />} />
          </Route>
          <Route path={PATHS.notFound} element={<NotFound />} />
        </Routes>
      
    </>
  );
}

export default App;
