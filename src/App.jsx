import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Welcome from "./pages/Welcome";

const router = createBrowserRouter([
  { index: true, element: <Main /> },
  { path: "/welcome", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/signin", element: <Signin /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
