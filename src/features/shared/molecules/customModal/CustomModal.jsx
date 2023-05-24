import React from "react";
import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from "@coreui/react";
import ImageSpeciality from "../../../specialities/atoms/ImageSpeciality";
import styles from './customModal.module.css';

const CustomModal = (props) =>
    (
        <CModal
            alignment='center'
            visible={props.isOpen}
            size={ window.innerWidth > 760 ? 'lg' : 'sm'}
            backdrop={'static'}
            className={styles.modalContent}
        >
            <CModalHeader>
                <CModalTitle>
                    <p className='flex gap-3 items-center mb-0'>
                        <span className='w-fit'>
                            <ImageSpeciality url={props.imageUrl} name={props.title} modal={true}/>
                        </span>
                        {props.title}
                    </p>
                </CModalTitle>
            </CModalHeader>
            <CModalBody>
                {props.children}
            </CModalBody>
            <CModalFooter>
                <CButton
                    color='primary'
                    onClick={props.onSave}
                >
                    Agendar cita
                </CButton>
                <CButton
                    color='secondary'
                    onClick={props.onClose}
                >
                    Volver
                </CButton>
            </CModalFooter>
        </CModal>
    )

export default CustomModal;
