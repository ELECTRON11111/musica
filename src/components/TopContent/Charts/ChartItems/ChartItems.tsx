import React, {useState, useEffect} from "react";
import axios from "axios";
import Spinner from "../../../UI/Spinner/Spinner";
import ChartItem from "./ChartItem/ChartItem";
import classes from "./ChartItems.module.css";

const ChartItems = (props: any) => {
    const [chart, setChart] = useState<any>([]);

    useEffect(() => {
        // Trigger the API Call
        axios.get(`https://musica-api.onrender.com/playlist`)
            .then(res => {
                console.log(res.status);
                setChart(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    const DOM = (
        <React.Fragment>
            {/* use short-circuiting to infer if the chart is available before mapping the array */}
            {chart && chart.map((song: any)=> {
                return <ChartItem 
                    title = {song["title"]}
                    // Take name of first artist in the playlist
                    artist = {song["files"][0]["artist"]}
                    imgSrc = {song["cover"]}
                    length = {"30:00"}
                    id =  {song["id"]}
                    // Recall, key must be added to any dynamically used array for content display.
                    key = {song["id"]}
                />
            })}
        </React.Fragment>
    )
    
    return (
        <div className={classes.Container}>
            {/* if the chart is empty show a spinner, else show the DOM */}
            {chart.length == 0? <Spinner />: DOM}
        </div>
    );
}

export default ChartItems;