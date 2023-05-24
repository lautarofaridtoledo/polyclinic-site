import React from 'react';
import ContactForm from '../organisms/ContactForm';
import styles from './Contact.module.css'
import SectionTitle from '../../shared/atoms/SectionTitle';
import {useState} from 'react';
import {CSpinner} from '@coreui/react';
import SendSuccessfully from '../atoms/SendSuccessfully';
import {validate} from "@babel/core/lib/config/validation/options";

const initialValues = {
    name: '',
    email: '',
    message: ''
};

const Contact = () =>
{
    const [loading, setLoading] = useState(false);
    const [leadData, setLeadData] = useState(initialValues);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (validated) =>
    {
        const options = {
            method: "POST",
            headers: {"Content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify(leadData)
        }

        if(validated)
        {
            setLoading(true);
            fetch('https://hook.us1.make.com/6kh7d9rhg54hnwkvzcwbc94z1d4a59hk', options)
                .then(response => response.json())
                .then(json => {
                    setLoading(false)
                    setTimeout(() =>
                        setSubmitted(true)
                    , 2000)
                })
                .catch(err => {
                    setLoading(false)
                })
                .finally(() => setSubmitted(false))
        }

    };

    const handleChangeLeadData = (e) =>
    {
        setLeadData({
            ...leadData,
            [e.target.name]: e.target.value
        });
    };


    return(
        <section id={'contacto'} className={'mx-auto mb-3'}>
            <SectionTitle name={'Contacto'}/>
            <div className={'mb-5 pt-3 w-[90%] mx-auto'}>
                <div className={`max-w-2xl mx-auto px-4 py-5 rounded-xl shadow-md ${styles.formContainer}`}>
                    {
                        loading &&
                            <div className={'flex items-center justify-center'}>
                                <CSpinner color='success' />
                            </div>
                    }
                    {
                        !loading && !submitted &&
                        <>
                            <div className={'pb-3 text-center'}>
                                <p>Completa con tu información y nos pondremos en contacto contigo.</p>
                                <p> Los valores con <span className={'text-danger'}>*</span> son requeridos.</p>
                            </div>
                            <ContactForm
                                onChange={handleChangeLeadData}
                                onSubmit={handleSubmit}
                            />
                        </>

                    }
                    {
                        !loading && submitted &&
                        <SendSuccessfully />
                    }
                </div>
            </div>
        </section>
    )
}

export default Contact;
