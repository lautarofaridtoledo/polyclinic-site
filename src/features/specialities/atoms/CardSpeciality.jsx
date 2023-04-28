import React from 'react'
import ImageSpeciality from "./ImageSpeciality";

const CardSpeciality = ({name, imageUrl}) =>
{

    return(
        <div className='w-[120px] h-[120px] xl:w-[200px] xl:h-[200px]   m-5 bg-gray-200 relative'>
            <div className='absolute inset-0 flex justify-center items-center hover:opacity-30'>
                <ImageSpeciality url={imageUrl} name={name}/>
            </div>
            <div className='absolute inset-0 z-10  items-center hover:cursor-pointer h-full'>
                <div
                    className='w-full h-full flex justify-center items-center my-auto hover:opacity-100 opacity-0 duration-300 text-center'>
                    <p className='bg-[#289C8E] w-full my-auto text-black font-bold  items-center py-1'>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default CardSpeciality;
