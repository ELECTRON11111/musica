import classes from "./NavigationItem.module.css";

interface propType {
    src: string;
    text: string;
    active: boolean
}

function NavigationItems(props: propType) {
    return (
        <div className={classes.Nav_Item}>
            <img src={props.src} alt="img" />
            <span className = {props.active? classes.text_active: classes.text} >{props.text}</span>
        </div>
    )
}

export default NavigationItems;