import React from "react";

const ImageSpeciality = ({url, name, modal = false}) => <img src={`../assets/images${url}`} alt={`Speciality ${name}`} className={modal ? 'w-[40px]' : 'w-1/2' } />;

export default ImageSpeciality;
