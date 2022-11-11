import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import Signup from "../../Pages/Signup/Signup";

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
          path: "/myReview"
        }
      ]
    }
  ]);
  export default router;