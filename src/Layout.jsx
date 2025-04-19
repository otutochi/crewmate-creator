import Dashboard from "./Dashboard";
import { Outlet } from "react-router";

const Layout = () => {


    return (
        <div className="Layout" >

            <Dashboard />
            <Outlet />



        </div>
    )
}

export default Layout;