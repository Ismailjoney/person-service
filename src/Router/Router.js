import { createBrowserRouter } from "react-router-dom";
import AddService from "../AddService/AddService";
import Login from "../FormInfo/Login";
import Register from "../FormInfo/Register/Register";
import Main from "../layout/Main";
import MyReview from "../MyReview/MyReview";
import AllServiceDetails from "../pages/AllServiceDetails/AllServiceDetails";
import Blog from "../pages/Blog/Blog";
import Details from "../pages/Details/Details";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/Service`)
            },
            {
                path:'/allservicedetails',
                element:<AllServiceDetails></AllServiceDetails>,
                loader: () => fetch(`http://localhost:5000/allServices`)
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)

            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/myreviews',
                element:<MyReview></MyReview>
            },
            {
                path:'/add',
                element:<AddService></AddService>
            }
]}     
])
