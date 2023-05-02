import React from "react";
import banner from "../../assets/images/global/institutional.webp";

const Institutional = () =>
{
    return(
        <section className='mx-auto'>
            <div className='my-5 w-[90vw] mx-auto'>
                <h3 className='text-2xl'>Institucional</h3>
                <div className='border-b-[#CACACA] border-b-[3px] rounded w-[90vw] mx-auto' ></div>
            </div>
            <div>
                <img src={banner} alt='specialities banner' className='w-full mx-auto' />
            </div>
        </section>
    )
}

export default Institutional;
