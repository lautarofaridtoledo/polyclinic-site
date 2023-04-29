import React from "react";
import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from "@coreui/react";

const CustomModal = (props) =>
    (
        <CModal
            alignment='center'
            visible={props.isOpen}
            size={'sm'}
            backdrop={'static'}
        >
            <CModalHeader>
                <CModalTitle>
                    <span></span>
                    {props?.title}
                </CModalTitle>
            </CModalHeader>
            <CModalBody>
                {props.children}
            </CModalBody>
            <CModalFooter>
                <CButton
                    color='primary'
                    // onClick={props.onSave}
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
