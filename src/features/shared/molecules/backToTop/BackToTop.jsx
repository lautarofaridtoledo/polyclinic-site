import React, {useEffect, useState} from "react";
import {CButton, CTooltip} from "@coreui/react";
import smoothScroll from "../../../../utils/smoothScroll";
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

    return(
        <div className={`flex absolute right-5 ${ offsetTop > 200 ? styles.btnBack : 'hidden' }`}>
            <CTooltip
                content="Volver arriba"
                placement="left"
            >
                <CButton color='light' onClick={()=> smoothScroll('banner')}>
                    <img src={arrow} alt={'arrow top'} className={'w-[40px]'} />
                </CButton>
            </CTooltip>
        </div>
    )
}


export default BackToTop;
