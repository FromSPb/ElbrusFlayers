import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Widgets/Layout/Layout";
import StartPage from "../Pages/StartPage/StartPage";
import PricePage from "../Pages/PricePage/PricePage";
import ImagePage from "../Pages/ImagePage/ImagePage";
// import "swiper/swiper-bundle.min.css"
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
          path:'/image',
          element:<ImagePage />
        }
      ]
    }
  ])

    return <RouterProvider router={router} />;

}

export default App
