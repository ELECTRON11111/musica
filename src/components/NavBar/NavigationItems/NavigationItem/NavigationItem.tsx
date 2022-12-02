import { useState } from "react";
import classes from "./NavigationItem.module.css";
import {NavLink} from "react-router-dom";

interface propType {
    src: string;
    text: string;
    active: boolean;
    route: string
}

function NavigationItems(props: propType) {
    const [active, changeActiveStatus] = useState(false);

    return (
        <div className={classes.Nav_Item}>
            <img src={props.src} alt="img" />
            <span>
                <NavLink 
                    to={`/${props.route}`} 
                    className = {({isActive} :any) => isActive? classes.text_active: classes.text} 
                >
                    {props.text}
                </NavLink>
            </span>
        </div>
    )
}

export default NavigationItems;