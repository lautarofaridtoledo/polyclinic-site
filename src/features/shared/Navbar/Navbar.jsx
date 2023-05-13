import React, {useEffect, useState} from 'react';
import styles from './Navbar.module.css';
import logo from '../../../assets/images/global/Logo.svg';
import LinksNavbar from './atoms/LinksNavbar.jsx';
import burgerIcon from '../../../assets/images/global/burgerIcon.svg';
import crossIcon from '../../../assets/images/global/cross.svg';
import smoothScroll from '../../../utils/smoothScroll';

const Navbar = () =>
{
    const links = ['Especialidades', 'Institucional', 'Contacto'];
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [ navShadow, setNavShadow ] = useState(false);

    useEffect(() =>
    {
        const setShadow = () => setNavShadow(window.scrollY > 0);
        window.addEventListener('scroll', setShadow);

        return(()=>
        {
            window.removeEventListener('scroll', setShadow)
        })
    }, [])

    return (
        <header className='sticky top-0 z-10'>
            <nav className={`relative ${styles.navbar} flex flex-wrap items-center justify-between px-[50px] py-2 mb-2 md:px-0 sm:px-2 ${navShadow ? styles.boxShadow : styles.shadowNone}`}>
                <div className='container px-0 mx-auto flex flex-wrap items-center justify-between'>
                    <div className='w-full relative flex justify-between md:px-5 lg:w-auto xl:w-auto lg:static xl:static lg:block xl:block lg:justify-start xl:justify-start'>
                        <div className={styles.logo} onClick={() => smoothScroll('banner')}>
                            <img src={logo} alt={'logo'} className='w-[80%]'/>
                        </div>
                        <button
                            className='text-black cursor-pointer text-xl leading-none px-3 py-1  border-0 rounded bg-transparent block lg:hidden  xl:hidden outline-none focus:outline-none'
                            type='button'
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <img className={'h-5'} src={navbarOpen ? crossIcon : burgerIcon } alt={'menu icon'} />
                        </button>
                    </div>
                    <div
                        className={`lg:flex xl:flex flex-grow items-center ${navbarOpen ? 'flex' : 'hidden'}`}
                        id='example-navbar-danger'
                    >
                        <ul className='flex flex-col list-none lg:flex-row xl:flex-row lg:ml-auto xl:ml-auto md:w-1/2 sm:w-auto'>
                            {
                                links.map((title, idx) =>
                                    (
                                        <LinksNavbar
                                            key={idx}
                                            title={title}
                                        />
                                    ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
