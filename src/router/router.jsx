import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Blogs from "../Pages/Blogs/Blogs";
import Services from "../Pages/Services/Services";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Order from "../components/Order/Order";
import OrderReview from "../components/OrderReview/OrderReview";
import ManageInventory from "../components/ManageInventory/ManageInventory";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Checkout from "../components/Checkout/Checkout";
import Bookings from "../components/Bookings/Bookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
               path: "/about",
               element: <About></About> 
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/blog",
                element: <Blogs></Blogs>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/services/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/signIn",
                element: <SignIn></SignIn>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/order",
                element: <Order></Order>
            },
            {
                path: "/orderReview",
                element: <OrderReview></OrderReview>
            },
            {
                path: "inventory",
                element: <ManageInventory></ManageInventory>
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/bookings",
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    },
])
export default router;