import React from "react";
import ContactForm from "../organisms/ContactForm";
import styles from './Contact.module.css'
import SectionTitle from "../../shared/atoms/SectionTitle";

const Contact = () =>
{
    return(
        <section id={'contacto'} className={'mx-auto my-4'}>
            <SectionTitle name={'Contacto'}/>
            <div className={'mb-5'}>
                <div className={`max-w-2xl mx-auto  p-5 rounded-xl shadow-md ${styles.formContainer}`}>
                    <div className={'pb-3'}>
                        <p>Completa con tu información y nos pondremos en contacto contigo.</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact;
