import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter, createBrowserRouter, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";

// const AppLayout = () => {
//     return (
//         <div className="app">
//             <BrowserRouter>
//             <Header />
//             <Routes>
//             <Route path="/" element={<Body />} />
//             <Route path="/restaurent/:resId" element={<RestaurentMenu />} />
//             {/* <Outlet /> */}
//             </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )    
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurent/:resId",
                element: <RestaurentMenu />
            },
        ],
        errorElement: <Error />
    },
    // {
    //     path: "*",
    //     element: <AppLayout />
    // }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />); 
root.render(<RouterProvider router={appRouter} />);