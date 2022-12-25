import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "../../assets/logo.svg";
import HomeActive from "../../assets/navigation/Home-active.svg";
import Home from "../../assets/navigation/Home.svg";
import Collections from "../../assets/navigation/playlist.svg";
import CollectionsActive from "../../assets/navigation/playlist-active.svg";
import Radio from "../../assets/navigation/radio.svg";
import Videos from "../../assets/navigation/videos.svg";
import Profile from "../../assets/navigation/profile.svg";
import Logout from "../../assets/navigation/Logout.svg";
// import DrawerToggle from "../../components/NavBar/DrawerToggle/DrawerToggle";
import classes from "./NavBar.module.css";

const NavBar = () => {  
    return (
        <div className={classes.NavBar}>
            {/* Logo has more styles in the CSS file */}
            <div className={classes.Logo} style = {{
                marginBottom: "3rem",
                marginTop: "18px"
            }}>
                <img src={Logo} alt="logo" />              
            </div>

            <div className={classes.Nav_container} style = {{
                marginBottom: "2rem"
            }}> 
                <NavLink
                    to={"/"}
                    relative={"path"}
                >
                    {({ isActive }) => (
                        <img src={isActive ? HomeActive: Home} alt="home_icon" />
                    )}
                </NavLink>

                <NavLink 
                    to={"/collections"}
                >
                    {({ isActive }) => (
                        <img src={isActive? CollectionsActive: Collections} alt="playlist_icon"/>
                    )}
                </NavLink>

                <NavLink to={"/radio"}><img src={Radio} alt="radio_icon" /></NavLink>
                <NavLink to={"/videos"}><img src={Videos} alt="video_icon" /></NavLink>
            </div>

            <div className={classes.Nav_container}>
                <NavLink to={"/profile"}><img src={Profile} alt="profile_icon" /></NavLink>
                <NavLink to={"/logout"}><img src={Logout} alt="logout_icon" /></NavLink>
            </div>
        </div>
    )
}

export default NavBar;