import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Widgets/Layout/Layout";
import StartPage from "../Pages/StartPage/StartPage";
import PricePage from "../Pages/PricePage/PricePage";
import SignInPage from "../Pages/SignInPage/SignInPage.jsx";
import SignUpPage from "../Pages/SignUpPage/SignUpPage.jsx";

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
        {
          path:'/',
          element:<StartPage />
        },
        {
          path:'/price',
          element:<PricePage />
        },
        {
          path:'/signin',
          element:<SignInPage />
        },
        {
          path:'/signup',
          element:<SignUpPage />
        },
        
      ]
    }
  ])

    return <RouterProvider router={router} />;

}

export default App
