import React, {useEffect, useState} from 'react'
import ListSpecialities from "../molecules/ListSpecialities";
import banner from '../../../assets/images/global/specialities-banner.webp'
import CustomModal from "../../shared/molecules/CustomModal";


const Specialities = () =>
{
    const [modalSpeciality, setModalSpeciality] = useState({isOpen: false, speciality: '', description: ''});

    const toggleModal = () =>
    {
        setModalSpeciality(prevState => {
          return { ...prevState, isOpen: !prevState.isOpen }})
    };

    const setSpeciality = (name, description) =>
    {
        setModalSpeciality({...modalSpeciality, speciality: name, description: description})
    };

    return(
        <section className='mx-auto'>
            <div className='my-5 w-[90vw] mx-auto'>
                <h3 className='text-2xl'>Especialidades</h3>
                <div className='border-b-[#CACACA] border-b-[3px] rounded w-[90vw] mx-auto' ></div>
            </div>
            <div>
                <img src={banner} alt='specialities banner' className='w-full mx-auto' />
            </div>
            <div className='flex ds:flex-col xl:flex-row md:flex-row items-center md:justify-center xl:justify-center flex-wrap xl:w-[70vw] xl:h-[30vw] mx-auto my-5 xl:py-5 ds:h-[40vh] md:h-[30vw]'>
                <ListSpecialities onSelectSpeciality={setSpeciality} toggleModal={toggleModal} />
            </div>
            <CustomModal
                title={modalSpeciality.speciality}
                isOpen={modalSpeciality.isOpen}
                onClose={toggleModal}
                onSave={()=>{}}
            >
                <div>
                    <p>{modalSpeciality.description}</p>
                </div>
            </CustomModal>
        </section>
    )
}

export default Specialities;
