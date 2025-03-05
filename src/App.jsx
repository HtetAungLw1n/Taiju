import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Setting from "./pages/Setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "/setting", element: <Setting /> },
    ],
  },
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
