// This is a general UI element that wraps some content - order summary
import React from "react";

import classes from "./Modal.module.css";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

interface propType {
    show: boolean;
    children: JSX.Element
    modalClosed: Function
}


function Modal(props: propType) {
    return (
        <Auxiliary>
            <Backdrop show = {props.show} clicked={props.modalClosed}/>
            <div 
                className={classes.Modal}
                style={{
                    transform: props.show? "translateY(0)": "translateY(-100vh)",
                    opacity: props.show? "1": "0"
                }}
            >
                {props.children}
            </div>
        </Auxiliary>
    )
}

export default Modal;