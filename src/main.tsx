import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./Styles/StyleGlobal";

// pagina e components
import ErroPage from "./Pages/ErroPage";
import SearchPage from "./Pages/SearchPage";
import ContactPage from "./Pages/Contact";
import ReactModal from "react-modal";
import HomePage from "./Pages/HomePage";

// componente de paginação

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "search/:query",
        element: <SearchPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

// import do modal para não ter erros de leitura de pagina
ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle /> {<RouterProvider router={router} />}
  </React.StrictMode>
);
