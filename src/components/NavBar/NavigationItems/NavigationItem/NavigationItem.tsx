import React, { useState } from "react";
import classes from "./NavigationItem.module.css";
import {NavLink} from "react-router-dom";

interface propType {
    activeSrc: string;
    inActiveSrc: string;
    text: string;
    route: string
}

function NavigationItems(props: propType) {

    return (
        <div className={classes.Nav_Item}>
                <NavLink 
                    to={`/${props.route}`} 
                    className = {({isActive} :any) => isActive? classes.text_active: classes.text} 
                >
                    {({isActive}) => (
                        <React.Fragment>
                            <img src={isActive? props.activeSrc: props.inActiveSrc} alt="img" />
                            <span>{props.text}</span>
                        </React.Fragment>
                    )}
                </NavLink>
        </div>
    )
}

export default NavigationItems;