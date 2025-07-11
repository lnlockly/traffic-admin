
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../../pages/home/home";
import App from "../App";



const routes = [
  {
    path: "/",
    element: <App />,
    children:[
      {path:"/",element:<Home/>}
    ]
    
  },
];

export const router = createBrowserRouter(routes);
