import React from "react";
import classes from "./Backdrop.module.css";

interface propType {
    show: boolean;
    clicked: Function
}

const Backdrop = (props: propType) => (
    props.show? <div className={classes.Backdrop} onClick={(e) => props.clicked(e)}></div> : null
);

export default Backdrop;