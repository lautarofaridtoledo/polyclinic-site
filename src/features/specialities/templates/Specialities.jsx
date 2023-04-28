import React from 'react'
import ListSpecialities from "../molecules/ListSpecialities";
import banner from '../../../assets/images/global/specialities-banner.webp'

const Specialities = () =>
{
    return(
        <section className='mx-auto'>
            <div className='border-b-[#CACACA] border-b-[3px] rounded w-[90vw] mx-auto my-5'>
                <h3 className='text-2xl'>Especialidades</h3>
            </div>
            <div>
                <img src={banner} alt='specialities banner' className='w-full mx-auto' />
            </div>
            <div className='flex flex-col xl:flex-row md:flex-row items-center md:justify-center xl:justify-center flex-wrap xl:w-[70vw] xl:h-[30vw] mx-auto my-5 xl:py-5 ds:h-[40vh] md:h-[50vw]'>
                <ListSpecialities />
            </div>
        </section>
    )
}

export default Specialities;
