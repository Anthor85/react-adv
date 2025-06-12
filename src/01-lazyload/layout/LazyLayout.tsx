import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const LazyLayout = () => {
  return (
    <div className="lazy-layout">
      <h1>Lazy Layout</h1>

      <ul>
        <li>
          <NavLink to="lazy1">Lazy Page 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy Page 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy Page 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />
        <Route
          path="*"
          // element={<div>Page not found. Please select a valid page.</div>}
          element={<Navigate to="lazy1" replace />}
        />
      </Routes>
    </div>
  );
};

export default LazyLayout;
