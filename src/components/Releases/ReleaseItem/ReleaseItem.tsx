import React from "react";
import classes from "./ReleaseItem.module.css";

interface propType {
    imgSrc: string;
    title: string;
}

function ReleaseItems(props: propType) {
    return (
        <div className={classes.Release}>
            <img src={props.imgSrc} alt="Release" />
            <p>{props.title}</p>
        </div>
    )
}

export default ReleaseItems;