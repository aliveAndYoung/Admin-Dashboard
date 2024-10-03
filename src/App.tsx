import { RouterProvider } from "react-router-dom";
import "./styles/global.scss"
import Routers from "./react-routes/Routers.tsx";

const App = () => {
    return (
        <RouterProvider router={Routers}/>
           
    );
};

export default App;
