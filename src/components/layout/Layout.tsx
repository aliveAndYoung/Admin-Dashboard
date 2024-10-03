import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";
import NavBar from "../navbar/NavBar";

function Layout() {
    return (
        <div className="main">
            <NavBar />
            <div className="container">
                <div className="menuContainer">
                    <Menu />
                </div>
                <div className="contentContainer">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
