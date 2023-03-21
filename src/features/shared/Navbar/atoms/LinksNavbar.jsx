import React from "react";
import styles from '../Navbar.module.css';

const LinksNavbar = ({title}) => (
    <li className={`mr-2 ${styles.navItem}`}>
        <a href='#' className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75'>
            {title}
        </a>
    </li>
);

export default LinksNavbar;
