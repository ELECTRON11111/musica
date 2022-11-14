import React from "react";
import classes from "./HeroSection.module.css";
import heroImage from "../../../assets/hero.svg";
import peopleLikes from "../../../assets/people-likes.svg";

interface propsType {
    title: string,
    description: string,
    likes: number
}


const HeroSection = (props: propsType) => {
    return (
        <div className={classes.Container}>
            <div className={classes.text}>
                <p>currated playlist</p>

                <div className={classes.centreText}>
                    <h2>{props.title}</h2>
                    <span>All mine, Lie again, Petty call me everyday,<br /> Out of time, No love, Bad habit, and so much more</span>    
                </div>

                <img src={peopleLikes} alt="likes" />
            </div>

            <img src={heroImage} className={classes.heroImage} alt="heroImage" />
        </div>
    )
}

HeroSection.defaultProps = {
    title: "R & B Hits",
    description: "",
    likes: 33
}

export default HeroSection;