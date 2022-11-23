import classes from "./DrawerToggle.module.css";

interface propTypes {
    clicked: Function;
}

const DrawerToggle = (props: propTypes) => {
    return (
        // To use events for conditional rendering with typescript, you have to pass the event through every prop it needs to go through.
        <div onClick = {(e) => props.clicked(e)} className = {classes.DrawerToggle}>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawerToggle;