import React, {useEffect, useState} from "react";
import styles from '../templates/Contact.module.css';
import {CCol, CForm, CFormInput, CFormLabel, CFormTextarea, CInputGroup} from "@coreui/react";
import {validateEmail} from "../../../utils/validate";

const ContactForm = ({onSubmit, initValues}) =>
{
    const [validated, setValidated] = useState(false)
    const [formData, setFormData] = useState(initValues);
    const [error, setError] = useState(true);

    const handleChangeLeadData = (e) =>
    {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const hasEmptyFields = () => formData.name.length === 0 || formData.email.length === 0

    const handleSubmit = (event) =>
    {
        event.preventDefault()
        setValidated(true);
        if (!hasEmptyFields() && validateEmail(formData.email))
        {
            onSubmit(formData);
        }
    }

    useEffect(() =>
    {
        setError(hasEmptyFields())
    }, [formData])


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
                        onChange={(e) => handleChangeLeadData(e)}
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
                    onChange={(e) => handleChangeLeadData(e)}
                />
            </CCol>
            <CCol xs={12} lg={12} md={12}>
                <CFormTextarea
                    label="Mensaje"
                    name='message'
                    id="inputMessage"
                    placeholder="Escribe tu mensaje aquí..."
                    style={{resize: "none"}}
                    onChange={(e) => handleChangeLeadData(e)}
                />
            </CCol>

            <CCol xs={12}>
                <button
                    className={!error ? `btn ${styles.btnSend}` : `btn ${styles.btnForbidden}`}
                    type="button"
                    onClick={handleSubmit}
                >
                    Enviar
                </button>
            </CCol>
        </CForm>
    )
}


export default ContactForm;
