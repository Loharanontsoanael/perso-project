import { createBrowserRouter } from "react-router-dom";
import App from './App'
import Hero from "./pages/Hero";
import Products from './pages/Products'
import Cart from './pages/Cart'
import Rentals from './pages/Rentals'
import Entry from "./Entry";

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
            {
                path:"/ProductsAdmin",
                element:<Products/>
            },
            {
                path:"/RentalsAdmin",
                element:<Rentals/>
            },
            {
                path:"/Requests",
                element:<Rentals/>
            },
        ]
    },

    // {
    //     path: "/",
    //     element:<Entry/>,
    //     children:[
    //         {
    //             path:"/Login",
    //             element:<Login/>
    //         }
    //     ]
    // }
])

export default Router