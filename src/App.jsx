import React from "react";
import FormSurvey from "./pages/FormSurvey";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Table from "./pages/Table";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormSurvey />,
  },
  {
    path: "/submission",
    element: <Table />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
