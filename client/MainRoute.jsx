import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayout from "./src/MainLayout/MainLayout";
import Home from "./src/Pages/Home";
import Login from "./src/Pages/Login";
import Signup from "./src/Pages/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      }
    

    ]
  },
]);

export default router 