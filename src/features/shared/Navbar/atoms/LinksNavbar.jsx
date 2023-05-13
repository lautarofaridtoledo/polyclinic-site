import React from "react";
import styles from '../Navbar.module.css';
import smoothScroll from "../../../../utils/smoothScroll";

const LinksNavbar = ({title, onSelectSection}) =>
{
    const handleClick = (e) =>
    {
        e.preventDefault();
        smoothScroll(title);
        onSelectSection();
    }

    return (
        <li className={`mt-0 xl:mr-2 xl:mt-4 ${styles.navItem}`}>
            <p onClick={handleClick} className='px-3 py-2 ds:py-0 text-md flex items-center text-center w-100 text-xs cursor-pointer uppercase font-bold leading-snug text-black hover:opacity-75'>
                {title}
            </p>
        </li>
    );
}

export default LinksNavbar;
