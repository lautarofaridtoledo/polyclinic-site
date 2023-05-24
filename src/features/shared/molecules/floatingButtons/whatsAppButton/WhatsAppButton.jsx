import React, {useEffect, useState} from "react";
import {CButton} from "@coreui/react";
import wppIcon from '../../../../../assets/images/global/wpp-icon.svg';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () =>
{
    const [offsetTop, setOffsetTop] = useState(0);
    useEffect(() =>
    {
        document.addEventListener('scroll', () => setOffsetTop(window.scrollY));

        return(
            document.removeEventListener('scroll',() => setOffsetTop(window.scrollY))
        )
    }, [])

    const redirectToWhatsApp = () =>
    {
        const phone = '5492234212380'
        window.location.href = "https://wa.me/" + phone + "?text= ";
    }

    return(
        <div className={`flex absolute right-5 ${ styles.btnWpp }`}>
            <CButton color='light' onClick={redirectToWhatsApp}>
                <img src={wppIcon} alt={'Contactanos por WhatsApp'} className={'w-[40px] z-100'} title={"Contactar por WhatsApp"} />
            </CButton>
        </div>
    )
}


export default WhatsAppButton;
