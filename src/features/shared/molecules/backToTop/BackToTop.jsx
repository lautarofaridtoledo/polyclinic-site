import React, {useEffect, useState} from "react";
import {CButton} from "@coreui/react";
import arrow from '../../../../assets/images/global/top-arrow.webp';
import styles from './BackToTop.module.css';

const BackToTop = () =>
{
    const [offsetTop, setOffsetTop] = useState(0);
    useEffect(() =>
    {
        document.addEventListener('scroll', () => setOffsetTop(window.scrollY));

        return(
            document.removeEventListener('scroll',() => setOffsetTop(window.scrollY))
        )
    }, [])

    const scrollTop = () =>
    {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return(
        <div className={`flex absolute right-5 ${ offsetTop > 200 ? styles.btnBack : 'hidden' }`}>
            <CButton color='light' onClick={scrollTop}>
                <img src={arrow} alt={'arrow top'} className={'w-[40px]'} title={"Volver arriba"} />
            </CButton>
        </div>
    )
}


export default BackToTop;
