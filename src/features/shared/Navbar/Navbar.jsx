import React from "react";
import styles from './Navbar.module.css';
import logo from '../../../assets/react.svg';
import LinksNavbar from "./atoms/LinksNavbar.jsx";

const Navbar = () =>
{
    const links = ['Institucional', 'Especialidades', 'Contacto', 'Sacar turno'];

    return (
        <header className='sticky top-0 z-10'>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={logo} alt={'logo'}/>
                </div>
                <ol>
                    {
                        links.map((title, idx) =>
                            (
                                <LinksNavbar key={idx} title={title} />
                            ))
                    }
                </ol>
            </nav>
        </header>
    )
}

export default Navbar;
