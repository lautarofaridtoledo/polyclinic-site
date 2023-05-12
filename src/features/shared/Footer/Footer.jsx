import React from "react";
import logo from '../../../assets/images/global/Logo.svg';
import styles from './Footer.module.css';

const Footer = () =>
{
    return(
        <footer className={`w-full ${styles.footer}`}>
            <div className={'container py-3 pb-0 flex flex-row justify-between items-center'}>
                <div>
                    <img src={logo} alt={'logo'}/>
                </div>
                <div className={'pt-3 items-center'}>
                    <div className={'flex flex-row justify-between gap-4 text-xs'}>
                        <div>
                            <p>Privacy Policy</p>
                        </div>
                        <div>
                            <p>Legal</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'items-center text-center'}>
                <hr/>
                <p className={'ds:text-sm'}>{new Date().getFullYear()} ® Todos los derechos reservados. </p>
            </div>


        </footer>
    )

}

export default Footer;
