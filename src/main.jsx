import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./store";
import NotFoundPage from "./components/NotFound";
import MainLayout from "./components/layouts/MainLayout";
import ProductDetails from "./components/ProductDetails";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CartTable from "./components/CartTable";
const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFoundPage /> },
  {
    path: "products/:productId",
    element: (
      <MainLayout>
        <ProductDetails />
      </MainLayout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/cart",
    element: (
      <MainLayout>
        <CartTable />
      </MainLayout>
    ),
    errorElement: <NotFoundPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
