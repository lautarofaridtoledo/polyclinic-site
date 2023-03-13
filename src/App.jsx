import React from "react";
import './assets/styles/index.css';
import Navbar from './features/shared/Navbar/Navbar.jsx';
import Banner from "./features/banner/template/Banner.jsx";

const App = () =>
{
    return (
            <div className="min-h-screen">
                <Navbar />
                <Banner />
            </div>
    );
}

export default App;
