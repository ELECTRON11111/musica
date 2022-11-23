import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

function NavigationItems() {
    return (
        <div className={classes.Container}>
            <NavigationItem src = "NavImages/Home-active.svg" text = "Home" active/>
            <NavigationItem src = "NavImages/Playlist.svg" text = "My Collections" active = {false}/>
            <NavigationItem src = "NavImages/radio.svg" text = "Radio" active = {false}/>
            <NavigationItem src = "NavImages/videos.svg" text = "Music Videos" active = {false}/>
            <NavigationItem src = "NavImages/profile.svg" text = "Profile" active = {false}/>
            {/* <NavigationItem src = "NavImages/Home-active.svg" text = "Home"  active = {false}/> */}
        </div>
    )
}

export default NavigationItems;