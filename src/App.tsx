import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import JoinMySchool from "./pages/JoinMySchool";
import JoinMySchoolForm from "./pages/JoinMySchool-Form";
// import Upwork from "./pages/Upwork";

export default function SchoolManagementLanding() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/about-us" element={<AboutUs/>} />
                    <Route path="/pricing" element={<Pricing/>} />
                    <Route path="/join" element={<JoinMySchool />} />
                    <Route path="/join/form" element={<JoinMySchoolForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
