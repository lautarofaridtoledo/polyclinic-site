import React from "react";
import {CButton, CCol, CForm, CFormInput, CFormTextarea} from "@coreui/react";

const ContactForm = ({onChange, onSubmit}) =>
    (
        <CForm
            className="row g-3 need-validation"
            noValidate
            onSubmit={onSubmit}
        >
            <CCol xs={12} lg={6} md={6}>
                <CFormInput
                    type="text"
                    className="form-control"
                    id="inputName"
                    name='name'
                    label="Nombre"
                    placeholder={'Tu nombre...'}
                    feedbackInvalid={'Por favor, ingresa un nombre válido'}
                    onChange={(e) => onChange(e)}
                />
            </CCol>
            <CCol xs={12} lg={6} md={6}>
                <CFormInput
                    type="email"
                    id="validationCustom01"
                    className="form-control"
                    label="Email"
                    name='email'
                    placeholder={'Tu email...'}
                    required
                    feedbackInvalid={'Debes ingresar una cuenta de correo electrónico válida'}
                    onChange={(e) => onChange(e)}
                />
            </CCol>
            <CCol xs={12} lg={12} md={12}>
                <CFormTextarea
                    label="Mensaje"
                    name='message'
                    id="inputMessage"
                    placeholder="Escribe tu mensaje aquí..."
                    style={{resize: "none"}}
                    onChange={(e) => onChange(e)}
                />
            </CCol>

            <CCol xs={12}>
                <CButton className={'mt-2'} type="submit">Enviar</CButton>
            </CCol>
        </CForm>
    )

export default ContactForm;
