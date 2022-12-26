import React, {useState, useEffect} from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Home from "../../../../public/NavImages/Home.svg";
import HomeActive from "../../../../public/NavImages/Home-active.svg";
import Playlist from "../../../../public/NavImages/playlist.svg";
import PlaylistActive from "../../../../public/NavImages/Playlist-active.svg";
import Radio from "../../../../public/NavImages/radio.svg";
import Videos from "../../../../public/NavImages/videos.svg";
import Profile from "../../../../public/NavImages/profile.svg";

function NavigationItems() {
    return (
        <div className={classes.Container}>
            <NavigationItem  activeSrc={HomeActive} inActiveSrc = {Home} text = "Home" route="" />
            <NavigationItem  activeSrc={PlaylistActive} inActiveSrc = {Playlist} text = "My Collections" route = "collections" />
            <NavigationItem  activeSrc={Radio} inActiveSrc = {Radio} text = "Radio"  route="radio"/>
            <NavigationItem  activeSrc={Videos} inActiveSrc = {Videos} text = "Music Videos" route="videos"/>
            <NavigationItem activeSrc={Profile} inActiveSrc = {Profile} text = "Profile" route="profile"/>
        </div>
    )
}

export default NavigationItems;