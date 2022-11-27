import classes from "./NavigationItem.module.css";
import {NavLink} from "react-router-dom";

interface propType {
    src: string;
    text: string;
    active: boolean;
    route: string
}

function NavigationItems(props: propType) {
    return (
        <div className={classes.Nav_Item}>
            <img src={props.src} alt="img" />
            <span className = {props.active? classes.text_active: classes.text} >
                <NavLink to={`/${props.route}`}>
                    {props.text}
                </NavLink>
            </span>
        </div>
    )
}

export default NavigationItems;