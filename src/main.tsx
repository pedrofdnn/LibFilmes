import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

// pagina e components
import ErroPage from "./Pages/ErroPage";
import SearchPage from "./Pages/SearchPage";
import ContactPage from "./Pages/Contact";

// componente de paginação
const router = createBrowserRouter([
  {
    // pagina padrão como home page
    path: "/",
    element: <App />,
    errorElement: <ErroPage />,
    // componente base para páginas
    children: [
      {
        path: "/search/:query",
        element: <SearchPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
