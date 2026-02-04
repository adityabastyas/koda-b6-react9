import React from "react";
import FormSurvey from "./pages/FormSurvey";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Table from "./pages/Table";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormSurvey />,
  },
  {
    path: "/submission",
    element: <Table />,
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
