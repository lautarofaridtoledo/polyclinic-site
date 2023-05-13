import React from "react";

const ImageSpeciality = ({url, name}) => <img src={`../assets/images${url}`} alt={`Speciality ${name}`} className={'w-1/2'} />;

export default ImageSpeciality;
