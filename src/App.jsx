import React from "react";
import './assets/styles/index.css';
import Navbar from './features/shared/Navbar/Navbar.jsx';
import Banner from "./features/banner/template/Banner.jsx";
import Specialities from "./features/specialities/templates/Specialities";

const App = () =>
{
    return (
            <div className="min-h-screen">
                <Navbar />
                <Banner />
                <Specialities />
            </div>
    );
}

export default App;
