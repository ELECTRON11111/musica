import React, {useState, useEffect} from "react";
import ChartItem from "./ChartItem/ChartItem";
import classes from "./ChartItems.module.css";

interface chartType {
    songName: string;
    songArtist: string;
    imgSrc: string;
    length: string;
}

const ChartItems = () => {
    const [chart, setChart] = useState<any>([
        {
            songName: "Golden age of 80s",
            songArtist: "Sean swadder",
            imgSrc: "chartImages/chart-img-1.png",
            length: "2:34:45"
        },
        {
            songName: "Raggae 'n' blues",
            songArtist: "Dj YK mule",
            imgSrc: "chartImages/chart-img-2.png",
            length: "1:02:42"
        },
        {
            songName: "Tomorrow's tunes",
            songArtist: "Obi Datti",
            imgSrc: "chartImages/chart-img-3.png",
            length: "2:01:25"
        }
    ]);

    useEffect(() => {
        console.log("[ChartItems.js] useEffect ran"); 
        console.log(chart);
    }, []);
    
    return (
        <div className={classes.Container}>
            {/* use short-circuiting to infer if the chart is available before mapping the array */}
            {chart && chart.map((song: any)=> {
                return <ChartItem 
                    title = {song.songName}
                    artist = {song.songArtist}
                    imgSrc = {song.imgSrc}
                    length = {song.length}
                    // Recall, key must be added to any dynamically used array for content display.
                    key = {song.length}
                />
            })}
        </div>
    );
}

export default ChartItems;