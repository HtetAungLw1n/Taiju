import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main, { loader as authLoader } from "./layout/Main";
import Login, { action as loginAction } from "./pages/Login";
import Signup, { action as signupAction } from "./pages/Signup";
import Welcome from "./pages/Welcome";
import Home, { loader as linkLoader } from "./pages/Home";
import Setting from "./pages/Setting";
import NewInput from "./pages/NewInput";
import Edit, { loader as gettingPreviousDataLoader } from "./pages/Edit";
import PreviewMobile, {
  loader as previewMobileLoader,
} from "./pages/PreviewMobile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: authLoader,
    children: [
      { index: true, element: <Home />, loader: linkLoader },
      { path: "/setting", element: <Setting /> },
      { path: "/newInput", element: <NewInput /> },
      {
        path: "/previewMobile",
        element: <PreviewMobile />,
        loader: previewMobileLoader,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
        loader: gettingPreviousDataLoader,
      },
    ],
  },
  { path: "/welcome", element: <Welcome /> },
  { path: "/login", element: <Login />, action: loginAction },
  { path: "/signup", element: <Signup />, action: signupAction },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
