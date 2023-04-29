import React from 'react'
import CardSpeciality from "../atoms/CardSpeciality";
import {specialities} from "../../../constant/specialities";

const ListSpecialities = ({onSelectSpeciality, toggleModal}) => specialities.map((speciality, idx) => <CardSpeciality key={idx} name={speciality.name} imageUrl={speciality.image} description={speciality.description} onSelectSpeciality={onSelectSpeciality} toggleModal={toggleModal} />)

export default ListSpecialities;
