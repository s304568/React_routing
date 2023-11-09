import { useState } from "react";
import StockAPI from "../src/StockAPI";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import "./App.css";
import HomePage from "./components/homePage";
import NewsPage from "./components/newsPage";
import PATHS from "./constants/paths";

function App() {
  return (
    <>
      <Routes>
        <Route path={PATHS.index} element={((<HomePage />), (<StockAPI />))} />
        <Route path={PATHS.news} element={<NewsPage />} />
        <Route path={PATHS.notFound} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
