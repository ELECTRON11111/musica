import classes from "./TopNav.module.css";
import DrawerToggle from "../NavBar/DrawerToggle/DrawerToggle";
import Logo from "../../assets/logo.svg";
import Search from "../Search/Search";

function TopNav() {
    return (
        <div className={classes.Container}>
            <div className={classes.toggle_logo}>
                <DrawerToggle />
                <img src={Logo} alt="logo" />
            </div>

            {/* isIcon is a boolean so by just writing it there, the component assumes the value of true */}
            <Search isIcon />
        </div>
    )
}

export default TopNav;