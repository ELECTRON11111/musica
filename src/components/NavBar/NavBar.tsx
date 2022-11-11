import React from "react";
import Logo from "../../assets/logo.svg";
import Home from "../../assets/navigation/Home-active.svg";
import Playlist from "../../assets/navigation/playlist.svg";
import Radio from "../../assets/navigation/radio.svg";
import Videos from "../../assets/navigation/videos.svg";
import Profile from "../../assets/navigation/profile.svg";
import Logout from "../../assets/navigation/Logout.svg";
import classes from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <div className={classes.Logo} style = {{
                marginBottom: "1.5rem",
                marginTop: "12px"
            }}>
                <img src={Logo} alt="logo" />              
            </div>

            <div className={classes.Nav_container} style = {{
                marginBottom: "2rem"
            }}>
                <img src={Home} alt="home_icon" />
                <img src={Playlist} alt="playlist_icon" />
                <img src={Radio} alt="radio_icon" />
                <img src={Videos} alt="video_icon" />
            </div>

            <div className={classes.Nav_container}>
                <img src={Profile} alt="profile_icon" />
                <img src={Logout} alt="logout_icon" />
            </div>
        </div>
    )
}

export default NavBar;