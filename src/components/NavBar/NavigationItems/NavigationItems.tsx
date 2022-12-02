import React, {useState, useEffect} from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

export const activeContext = React.createContext("active");

function NavigationItems() {
    return (
        <div className={classes.Container}>
            <NavigationItem src = {`NavImages/Home${window.location.pathname === "/home"? "-active":""}.svg`} text = "Home" route="home" active/>
            <NavigationItem src = {`NavImages/Playlist${window.location.pathname === "/collections"? "-active":""}.svg`} text = "My Collections" active = {false} route = "collections" />
            <NavigationItem src = "NavImages/radio.svg" text = "Radio" active = {false} route="radio"/>
            <NavigationItem src = "NavImages/videos.svg" text = "Music Videos" active = {false} route="videos"/>
            <NavigationItem src = "NavImages/profile.svg" text = "Profile" active = {false} route="profile"/>
        </div>
    )
}

export default NavigationItems;