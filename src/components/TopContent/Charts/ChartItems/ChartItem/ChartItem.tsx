import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import classes from "./ChartItem.module.css";
import heart from "../../../../../assets/Heart.svg";

interface propTypes {
    title: string;
    artist: string;
    imgSrc: string;
    length: string;
    id: string;
}


function ChartItem(props: propTypes) {

    return (
        <div className={classes.Container}>
            <div className={classes.data}>
                <img src={props.imgSrc} alt="AlbumIMG" />
                
                <div className={classes.text}>
                    <NavLink to = {`/playlist/${props.id}`} style = {{
                        textDecoration: "none",
                        background: "transparent"
                    }} className={classes.title}>
                        {props.title}
                    </NavLink>

                    <p>{props.artist}</p>
                    <span className={classes.length}>{props.length}</span>
                </div>
            </div>

            <div className={classes.heartContainer}>
                <img src={heart} alt="heart" />
            </div>

        </div>
    )
}

ChartItem.defaultProps = {
    title: "Golden age of 80s",
    artist: "Sean Swadder",
    imgSrc: "chartImages/chart-img-3.png",
    length: "2:34:45"
}

export default ChartItem;