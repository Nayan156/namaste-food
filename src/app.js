import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter, createBrowserRouter, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { UserContextProvider } from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Groceries from "./components/Groceries";

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

const Groceries = lazy(()=>import("./components/Groceries"));

const AppLayout = () => {
    return (
        <div className="app">
            <Provider store={appStore}>
            <UserContextProvider>
            <Header />
            <Outlet />
            </UserContextProvider>
            </Provider>
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
                path: "/groceries",
                element: (<Suspense fallback={<h1>Loading...</h1>}>
                            <Groceries />
                        </Suspense>),
            },
            {
                path: "/restaurent/:resId",
                element: <RestaurentMenu />
            },
            {
                path: "/cart",
                element: <Cart />
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