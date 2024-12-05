import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "../Widgets/Layout/Layout";
import StartPage from "../Pages/StartPage/StartPage";
import PricePage from "../Pages/PricePage/PricePage";
import SignInPage from "../Pages/SignInPage/SignInPage.jsx";
import SignUpPage from "../Pages/SignUpPage/SignUpPage.jsx";
import ImagePage from "../Pages/ImagePage/ImagePage";
import AnimalsPage from "../Pages/AnimalsPage/AnimalsPage";
import { useEffect, useState } from "react";
import { setAccessToken } from "../shared/lib/axiosInstance.js";
import Navigation from "../Widgets/Navigate/Navigation.jsx";
// import { Layout } from "antd";
import UserApi from "../Entites/Users/UserApi.js";

function App() {
  const [user, setUser] = useState(null);

  // console.log(user);

  //NOTE - постоянный перезапрос данных по юзеру и токену
  useEffect(() => {
    UserApi.refreshTokens()
      .then(({ error, data, statusCode }) => {
        if (error) {
          setUser(null);
          return;
        }
        if (statusCode === 200) {
          setAccessToken(data.accessToken);
          setUser(data.user);
        }
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);

  //NOTE - юзера можно прокидывать вниз по роутингу
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation user={user} setUser={setUser} />,
      children: [
        { path: "/", element: <StartPage /> },
        { path: "/animals", element: <AnimalsPage setUser={setUser} /> },
        { path: "/price", element: <PricePage setUser={setUser} /> },
        { path: "/signIn", element: <SignInPage setUser={setUser} /> },
        { path: "/signUp", element: <SignUpPage setUser={setUser} /> },
        { path: "/image", element: <ImagePage setUser={setUser} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
