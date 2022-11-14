import React from "react";
import classes from "./TopContent.module.css";
import HeroSection from "./HeroSection/HeroSection";
import Charts from "./Charts/Charts";

const TopContent = () => {
    return (
        <div className={classes.Container} style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        }}>
            <HeroSection />
            <Charts />
        </div>
    )
}

export default TopContent;