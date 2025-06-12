import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";
import { Suspense } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export const Navigation = () => {
  return (
    // Suspense muestra un fallback o pantalla de carga mientras se carga el componente
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />

            <ul>
              {routes.map(({ to, name, path }) => (
                <li>
                  <NavLink
                    key={path}
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
