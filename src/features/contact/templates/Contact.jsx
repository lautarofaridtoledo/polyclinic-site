import React from 'react';
import ContactForm from '../organisms/ContactForm';
import styles from './Contact.module.css'
import SectionTitle from '../../shared/atoms/SectionTitle';
import {useState} from 'react';
import {CSpinner} from '@coreui/react';
import SendSuccessfully from '../atoms/SendSuccessfully';

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

    const handleSubmit = (formData) =>
    {
        setLoading(true);
        const form = formData.currentTarget;
        if ( !form.checkValidity() )
        {
            formData.preventDefault();
            formData.stopPropagation();
        }
        setTimeout(() =>
            setLoading(false),
            setSubmitted(true)
        , 1000)

        setTimeout(() =>
            setSubmitted(false)
            , 3000)
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
