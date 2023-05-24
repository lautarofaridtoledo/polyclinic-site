import React, {useEffect, useState} from "react";
import {CButton, CCol, CForm, CFormInput, CFormLabel, CFormTextarea, CInputGroup} from "@coreui/react";

const ContactForm = ({onChange, onSubmit}) =>
{
    const [validated, setValidated] = useState(false)
    const handleSubmit = (event) => {
        const form = event.currentTarget
        event.preventDefault()
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }
        setValidated(true)
    }

    useEffect(() =>
    {
        onSubmit(validated)
    }, [validated])

    return (
        <CForm
            className="row g-3 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
        >
            <CCol xs={12} lg={6} md={6}>
                <CFormLabel htmlFor="inputName">Nombre <span className={'text-danger'}>*</span></CFormLabel>
                <CInputGroup className="has-validation">
                    <CFormInput
                        type="text"
                        className="form-control"
                        id="inputName"
                        name='name'
                        placeholder="Tu nombre..."
                        aria-describedby="validationInputName"
                        feedbackInvalid="Por favor, ingresa un nombre válido"
                        onChange={(e) => onChange(e)}
                        required
                    />
                </CInputGroup>

            </CCol>
            <CCol xs={12} lg={6} md={6}>
                <CFormLabel htmlFor="inputEmail">Email <span className={'text-danger'}>*</span></CFormLabel>
                <CFormInput
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    name='email'
                    placeholder={'Tu email...'}
                    required
                    feedbackInvalid="Debes ingresar una cuenta de correo electrónico válida"
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
}


export default ContactForm;
