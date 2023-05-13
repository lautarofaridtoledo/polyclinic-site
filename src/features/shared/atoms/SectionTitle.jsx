import React from "react";

const SectionTitle = ({name}) =>
    (
        <div className='my-5 w-[90vw] mx-auto'>
            <h3 className='text-3xl title-section' >{name}</h3>
            <div className='border-b-[#CACACA] border-b-[3px] rounded w-[90vw] mx-auto' ></div>
        </div>
    )

export default SectionTitle;
