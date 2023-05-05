import React, {useEffect} from "react";
import styles from './institutionalPrinciple.module.css';

const InstitutionalPrinciple  = ({title, description}) =>
{
    useEffect(() =>
    {
        const $description = document.getElementById(`description-${title}`);
        if (title === 'Valores')
        {
            $description.innerHTML = description;
        }
        else
        {
            $description.innerText = description;
        }
    }, [description])
    return(
        <div className={'my-5'}>
            <h3 className={`font-extrabold text-3xl ${styles.title} my-4`}>{title}</h3>
            <div className={'ml-5'} id={`description-${title}`}></div>
        </div>
    )
};

export default InstitutionalPrinciple;
