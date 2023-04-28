import React from "react";

const ImageSpeciality = ({url, name}) => <img src={`src/assets/images${url}`} alt={`Speciality ${name}`} />;

export default ImageSpeciality;
