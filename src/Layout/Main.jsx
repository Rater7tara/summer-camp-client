import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Headers from "../pages/Shared/NavBar/Headers";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            {/* <NavBar></NavBar> */}
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;