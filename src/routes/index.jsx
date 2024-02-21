import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/homepage";
import Explore from "../pages/explorepage";
import Notification from "../pages/notificationpage";
import MainLayout from "../layout/main";



const routes = createBrowserRouter([



    {path:"/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        index: true,
        element: <Home/>
      },

    {
        path : "/explore",
        element: <Explore></Explore>
    },


    {
        path : "/notification",
        element: <Notification></Notification>
    },
    {path: "*",
    element:<div className="bg-red-400 flex justify-center align-middles text-[30px]">Not Found</div>}

    ]
},





])


export default routes;