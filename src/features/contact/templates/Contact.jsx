import React from "react";
import ContactForm from "../organisms/ContactForm";

const Contact = () =>
{
    return(
        <section className={'mx-auto my-4'}>
            <div className='my-5 w-[90vw] mx-auto'>
                <h3 className='text-2xl'>Contacto</h3>
                <div className='border-b-[#CACACA] border-b-[3px] rounded w-[90vw] mx-auto' ></div>
            </div>
            <div className={'flex flex-row w-[90vw] mx-auto gap-2'}>
                <div className={'w-1/2 h'}>
                    <p>Send your information and I will contact you soon</p>
                </div>
                <div className={'w-1/2 bg-gray-200 p-5 rounded-xl shadow-md'}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact;
