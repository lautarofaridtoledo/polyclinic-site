import React from "react";
import './assets/styles/index.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './features/shared/Navbar/Navbar.jsx';
import Banner from "./features/banner/template/Banner.jsx";
import Specialities from "./features/specialities/templates/Specialities";
import Institutional from "./features/institutional/templates/Institutional";
import Contact from "./features/contact/templates/Contact";
import Footer from "./features/shared/Footer/Footer";
import BackToTop from "./features/shared/molecules/floatingButtons/backToTop/BackToTop";
import WhatsAppButton from "./features/shared/molecules/floatingButtons/whatsAppButton/WhatsAppButton";

const App = () =>
{
    return (
            <div className="min-h-screen min-w-full">
                <Navbar />
                <Banner />
                <Specialities />
                <Institutional />
                <Contact />
                <BackToTop />
                <WhatsAppButton />
                <Footer />
            </div>
    );
}

export default App;
