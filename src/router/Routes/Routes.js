import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRouter/PrivateRoute";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch("http://localhost:5000/limitServices")
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: "/services",
          element: <Services></Services>,
          loader: ()=> fetch("http://localhost:5000/services")
        },
        {
          path:"/service/:id",
          element:<ServiceDetails></ServiceDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path: "/addReview/:id",
          element: <AddReview></AddReview>,
          loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path: "/myReview",
          element: <PrivateRoute> <MyReview></MyReview></PrivateRoute>
        },
        {
          path: "/addService",
          element: <AddService></AddService>
        }
      ]
    }
  ]);
  export default router;