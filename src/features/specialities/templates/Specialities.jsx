import React, {useState} from 'react'
import ListSpecialities from "../molecules/ListSpecialities";
import banner from '../../../assets/images/global/specialities-banner.webp'
import CustomModal from "../../shared/molecules/customModal/CustomModal";
import specialities from '../../../json/specialities.json'
import SectionTitle from "../../shared/atoms/SectionTitle";

const Specialities = () =>
{
    const [modalSpeciality, setModalSpeciality] = useState({isOpen: false, speciality: '', description: '', url: ''});

    const toggleModal = () =>
    {
        setModalSpeciality(prevState => {
          return { ...prevState, isOpen: !prevState.isOpen }})
    };

    const setSpeciality = (name, description, url) =>
    {
        setModalSpeciality({...modalSpeciality, speciality: name, description: description, url: url})
    };

    return(
        <section id={'especialidades'} className='mx-auto bg-[#34495E] p-1'>
            <SectionTitle name={'Especialidades'} />
            <div>
                <img src={banner} alt='specialities banner' className='mx-auto h-[20vh] w-[90vw]' />
            </div>
            <div className='flex ds:flex-col xl:flex-row md:flex-row items-center md:justify-center xl:justify-center flex-wrap xl:w-[70vw] xl:h-[20vw] mx-auto my-5 xl:py-5 ds:h-[60vh] md:h-[30vw]'>
                <ListSpecialities specialities={specialities} onSelectSpeciality={setSpeciality} toggleModal={toggleModal} />
            </div>
            <CustomModal
                title={modalSpeciality.speciality}
                isOpen={modalSpeciality.isOpen}
                onClose={toggleModal}
                onSave={()=>{}}
                imageUrl={modalSpeciality.url}
            >
                <div>
                    <p>{modalSpeciality.description}</p>
                </div>
            </CustomModal>
        </section>
    )
}

export default Specialities;
