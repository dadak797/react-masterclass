import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Search from "./Routes/Search";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path:"movies/:movieId",
                element: <Home />
            },
            {
                path: "search",
                element: <Search />
            },
            {
                path: "tv",
                element: <Tv />
            },
        ]
    },
]);

export default router;