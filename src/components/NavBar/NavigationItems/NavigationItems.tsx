import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

function NavigationItems() {
    return (
        <div className={classes.Container}>
            <NavigationItem src = "NavImages/Home-active.svg" text = "Home" route="home" active/>
            <NavigationItem src = "NavImages/Playlist.svg" text = "My Collections" active = {false} route = "collections" />
            <NavigationItem src = "NavImages/radio.svg" text = "Radio" active = {false} route="home"/>
            <NavigationItem src = "NavImages/videos.svg" text = "Music Videos" active = {false} route="home"/>
            <NavigationItem src = "NavImages/profile.svg" text = "Profile" active = {false} route="home"/>
        </div>
    )
}

export default NavigationItems;