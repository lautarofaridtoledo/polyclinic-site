import React from "react";
import InstitutionalPrinciple from "../atom/InstitutionalPrinciple";

const InstitutionalPrinciples = ({institutional}) => ( institutional.map((principle, idx) => <InstitutionalPrinciple key={idx} title={principle.title} description={principle.description} />))


export default InstitutionalPrinciples;
