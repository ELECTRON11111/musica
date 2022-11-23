import React from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import classes from "./SideDrawer.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
// import Modal from "../../UI/Modal/Modal";
import Logo from "../../../assets/logo.svg";
import Backdrop from "../../UI/Backdrop/Backdrop";

interface propType {
    open: boolean;
    closed: Function
}

const sideDrawer = (props: propType) => {
    // ....
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Auxiliary>
            <Backdrop show= {props.open} clicked = {props.closed}/>
            <div className={attachedClasses.join(' ')}>
                {/* <div className={classes.Logo}>
                    <img src={Logo} alt="logo" />
                </div> */}
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    )
};

export default sideDrawer;