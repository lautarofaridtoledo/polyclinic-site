import React from "react";
import styles from './Banner.module.css';
import {CButton} from "@coreui/react";
import smoothScroll from "../../../utils/smoothScroll";

const Banner = () =>
    (
        <main id='banner'>
            <div className={styles.content}>
                <h1 className={'text-7xl'}>Policlinica</h1>
                <h3>Expertos en salud mental</h3>
                <p>Nuestros especialistas altamente capacitados están comprometidos en proporcionar una atención segura y eficaz a todos nuestros pacientes.</p>
                <div className={'mt-3'}>
                    <CButton
                        onClick={() => smoothScroll('contacto')}
                    >Contactanos</CButton>
                </div>
            </div>
            <div className={styles.banner}></div>
        </main>
    );

export  default Banner;
