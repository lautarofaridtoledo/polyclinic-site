import React from "react";
import tick from '../../../assets/images/global/tick.webp';

const SendSuccessfully = () =>
{
    return(
        <div className='flex flex-col justify-content-around text-center'>
            <img src={tick} alt={'tick icon'}  className={'w-[32px] mx-auto my-3'}/>
            <p className={'mb-1'}>Tu consulta ha sido enviada con éxito!</p>
            <p>En breve, nos pondremos en contacto contigo.</p>
        </div>
    )
}

export default SendSuccessfully;
