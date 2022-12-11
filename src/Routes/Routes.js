import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import AboutMe from "../Pages/About me/AboutMe";
import Blog from "../Pages/Blog/Blog";
import FirstWeb from "../Pages/Firstweb/FirstWeb";
import Home from "../Pages/Home/Home"
import SecondWeb from "../Pages/SecondWeb/SecondWeb";
import ThirdWeb from "../Pages/ThirdWeb/ThirdWeb";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/first',
                element: <FirstWeb></FirstWeb>
            },
            {
                path: '/second',
                element: <SecondWeb></SecondWeb>
            },
            {
                path: '/third',
                element: <ThirdWeb></ThirdWeb>
            }
        ]
    },
    {
        path: '/*',
        element: <h1 className="text-4xl grid justify-center font-bold py-36 text-center"> Data not found</h1 >
    }
])
export default router;