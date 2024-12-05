import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Widgets/Layout/Layout";
import StartPage from "../Pages/StartPage/StartPage";
import PricePage from "../Pages/PricePage/PricePage";

import SignInPage from "../Pages/SignInPage/SignInPage.jsx";
import SignUpPage from "../Pages/SignUpPage/SignUpPage.jsx";

import ImagePage from "../Pages/ImagePage/ImagePage";
import AnimalsPage from "../Pages/AnimalsPage/AnimalsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <StartPage />,
        },
        {
          path: "/animals",
          element: <AnimalsPage />,
        },
        {
          path: "/price",
          element: <PricePage />,
        },
        {
          path: "/signin",
          element: <SignInPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
        {
          path: "/image",
          element: <ImagePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
