import React from "react";
import styles from '../Navbar.module.css';
import smoothScroll from "../../../../utils/smoothScroll";

const LinksNavbar = ({title}) =>
{
    const handleClick = (e) =>
    {
        e.preventDefault();
        smoothScroll(title);
    }

    return (
        <li className={`mr-2 ${styles.navItem}`}>
            <p onClick={handleClick} className='px-3 py-2 text-md flex items-center text-center w-100 text-xs cursor-pointer uppercase font-bold leading-snug text-black hover:opacity-75'>
                {title}
            </p>
        </li>
    );
}

export default LinksNavbar;
