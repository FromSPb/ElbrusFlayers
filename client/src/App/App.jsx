import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Widgets/Layout/Layout";
import StartPage from "../Pages/StartPage";
function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
        {
          path:'/',
          element:<StartPage />
        }
      ]
    }
  ])

    return <RouterProvider router={router} />;

}

export default App
