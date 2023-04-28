import React from 'react'
import CardSpeciality from "../atoms/CardSpeciality";
import {specialities} from "../../../constant/specialities";

const ListSpecialities = () => specialities.map((speciality, idx) => <CardSpeciality key={idx} name={speciality.name} imageUrl={speciality.image} />)

export default ListSpecialities;
