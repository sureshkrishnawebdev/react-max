import React, { Fragment } from "react";
import  ReactDOM  from 'react-dom';

// Styles
import classes from './Modal.module.css';

// Components

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop}>{props.children}</div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
	return (
        <Fragment>
            {ReactDOM.createPortal( <Backdrop />,  portalElement)}
            {ReactDOM.createPortal( <ModalOverlay> {props.children} </ModalOverlay>, portalElement)}
        </Fragment>
	)
};

export default Modal;
