import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage"
import SearchPage from "./Pages/SearchPage"

export default function Routs() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="SearchPage" element={<SearchPage />} />
      </Route>
    </Routes>


  );
}
