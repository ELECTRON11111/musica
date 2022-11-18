import React, {useEffect} from "react";
import classes from "./ChartItem.module.css";
import heart from "../../../../../assets/Heart.svg";

interface propTypes {
    title: string,
    artist: string,
    imgSrc: string,
    length: string
}


function ChartItem(props: propTypes) {

    return (
        <div className={classes.Container}>
            <div className={classes.data}>
                <img src={"chartImages/chart-img-3.png"} alt="AlbumIMG" />

                <div className={classes.text}>
                    <span className={classes.title}>{props.title}</span>
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