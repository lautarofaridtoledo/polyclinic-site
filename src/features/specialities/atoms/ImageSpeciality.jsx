import React from "react";

const ImageSpeciality = ({url, name}) => <img src={`../assets/images${url}`} alt={`Speciality ${name}`} className={'ds:w-3/4'} />;

export default ImageSpeciality;
