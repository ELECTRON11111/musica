import React from "react";
import classes from "./TopContent.module.css";
import HeroSection from "./HeroSection/HeroSection";
import Charts from "./Charts/Charts";

const TopContent = () => {
    return (
        <div className={classes.Container}>
            <HeroSection />
            <Charts />
        </div>
    )
}

export default TopContent;