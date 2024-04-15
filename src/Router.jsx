import { createBrowserRouter } from "react-router-dom";
import App from './App'
import Hero from "./pages/Hero";
import Products from './pages/Products'
import Cart from './pages/Cart'
import Rentals from './pages/Rentals'
import Entry from "./Entry";
import Login from "./pages/Login";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Hero/>
            },
            {
                path:"/Products",
                element:<Products/>
            },
            {
                path:"/Cart",
                element:<Cart/>
            },
            {
                path:"/Rentals",
                element:<Rentals/>
            },
        ]
    },

    {
        path: "/",
        element:<Entry/>,
        children:[
            {
                path:"/Login",
                element:<Login/>
            }
        ]
    }
])

export default Router