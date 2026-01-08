import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import CTA from "./CTA";
import Footer from "./Footer";


const Layout = () => {
    return (
        <div className="min-h-screen bg-white pt-[120px]">
            <Navbar />
            <Outlet />
            <CTA />
            <Footer />
        </div>
    );
}

export default Layout;
