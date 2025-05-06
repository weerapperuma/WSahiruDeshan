import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {Contact} from "../pages/Connect.tsx";
import {Projects} from "../pages/Projects.tsx";
import Skills from "../pages/Skills.tsx";
import {Hero} from "../pages/Hero.tsx";
const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children: [
            {path:"/",element:<Hero/>},
            {path:"/contact",element:<Contact/>},
            {path:"/projects",element:<Projects/>},
            {path:"/skills",element:<Skills/>},
        ]
    }
]);
export default router;