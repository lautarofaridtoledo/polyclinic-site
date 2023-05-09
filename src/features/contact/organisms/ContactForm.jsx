import React from "react";
import {CButton, CCol, CForm, CFormCheck, CFormInput, CFormSelect, CFormTextarea} from "@coreui/react";

const ContactForm = () =>
{
    return(
        <CForm className="row g-3">
            <CCol lg={6} md={6}>
                <CFormInput type="text" id="inputName" label="Nombre" placeholder={'Tu nombre...'}/>
            </CCol>
            <CCol lg={6} md={6}>
                <CFormInput type="email" id="inputEmail4" label="Email" placeholder={'Tu email...'}/>
            </CCol>
            <CCol lg={12} md={12}>
                <CFormTextarea label="Mensaje" id="inputMessage" placeholder="Escribe tu mensaje aquí" style={{resize: "none"}}/>
            </CCol>

            <CCol xs={12}>
                <CButton className={'mt-2'} type="submit">Enviar</CButton>
            </CCol>
        </CForm>
    )
}

export default ContactForm;
