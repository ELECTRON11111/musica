import React, {useState, useEffect, useRef, useContext, createContext} from "react";
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
    // store active status in state so there are rerenders when active class changes.
    const [activeLinks, setActiveLinks] = useState({
        isHomeActive: true, 
        isCollectionsActive: false, 
        isRadioActive: false, 
        isVideosActive: false, 
        isProfileActive: false, 
        isLogoutActive: false, 
    });

    const active = {
        isHomeActive: true, 
        isCollectionsActive: false, 
        isRadioActive: false, 
        isVideosActive: false, 
        isProfileActive: false, 
        isLogoutActive: false, 
    }

    const ActiveContext = createContext(active);

    // Store previous value of state with useRef and useEffect
    const prevActiveLinks = useRef({isHomeActive: true, isCollectionsActive: false});

    useEffect(() => {
        prevActiveLinks.current = activeLinks;
    }, [activeLinks])
    
    useEffect(() => {
        navClickedHandler();
    }, [])

    const navClickedHandler = () => {

        // Check all the link References to determine with icons should be active and which shouldn't
        
        // Before we do that, we have to make sure there were changes between the prevState and the current state
        // so we don't end up having a re-render cycle
        // console.log(activeLinks.isHomeActive !== prevActiveLinks.current.isHomeActive)
        if (!(activeLinks.isHomeActive !== prevActiveLinks.current.isHomeActive) && !(activeLinks.isCollectionsActive !== prevActiveLinks.current.isCollectionsActive)) {

            setActiveLinks({
                isHomeActive: homeRef.current.className === "active",
                isCollectionsActive: collectionsRef.current.className === "active", 
                isRadioActive: radioRef.current.className === "active", 
                isVideosActive: videosRef.current.className === "active", 
                isProfileActive: profileRef.current.className === "active", 
                isLogoutActive: logoutRef.current.className === "active", 
            });
        }
    }
    
    // useRefs to store active class to store the NavLinks each.
    const a = document.createElement("a"); // Example for typescript to infer type of our refs
    const homeRef = useRef(a);
    const collectionsRef = useRef(a);
    const radioRef = useRef(a);
    const videosRef = useRef(a);
    const profileRef = useRef(a);
    const logoutRef = useRef(a);

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
                    ref = {homeRef}
                    onClick = {(e: React.MouseEvent) => navClickedHandler()}
                >
                    <img src={activeLinks.isHomeActive ? HomeActive: Home} alt="home_icon" />
                </NavLink>

                <NavLink 
                    to={"/collections"}
                    ref={collectionsRef}
                    onClick = {(e: React.MouseEvent) => navClickedHandler()}
                >
                    <img src={activeLinks.isCollectionsActive? CollectionsActive: Collections} alt="playlist_icon"/>
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