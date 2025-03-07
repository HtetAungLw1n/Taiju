import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main, { loader as authLoader } from "./layout/Main";
import Login, { action as loginAction } from "./pages/Login";
import Signin, { action as signinAction } from "./pages/Signin";
import Welcome from "./pages/Welcome";
import Home, { loader as linkLoader } from "./pages/Home";
import Setting from "./pages/Setting";
import NewInput from "./pages/NewInput";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: authLoader,
    children: [
      { index: true, element: <Home />, loader: linkLoader },
      { path: "/setting", element: <Setting /> },
      { path: "/newInput", element: <NewInput /> },
    ],
  },
  { path: "/welcome", element: <Welcome /> },
  { path: "/login", element: <Login />, action: loginAction },
  { path: "/signin", element: <Signin />, action: signinAction },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
