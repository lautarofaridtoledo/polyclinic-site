import React from 'react'
import ImageSpeciality from "./ImageSpeciality";
import styles from './CardSpeciality.module.css';

const CardSpeciality = ({name, imageUrl, description, onSelectSpeciality, toggleModal}) =>
{
    const handlerClick = () =>
    {
        onSelectSpeciality(name, description, imageUrl);
        toggleModal();
    };

    return (
        <>
            <div className={`w-[120px] h-[120px] xl:w-[200px] xl:h-[200px] xl:m-5  relative ds:m-2 md:m-5 shadow-md ${styles.cardSpeciality}`} onClick={handlerClick}>
                <div className='absolute inset-0 flex justify-center items-center'>
                    <ImageSpeciality url={imageUrl} name={name} />
                    <div className={`absolute inset-0 z-100 items-center opacity-0 h-full ${styles.textSpeciality}`}>
                        <div className='w-full h-full flex justify-center items-center my-auto duration-300 text-center'>
                            <p className='bg-[#289C8E] w-full my-auto text-black font-bold items-center py-1'>{name}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};


export default CardSpeciality;
