import React from "react";
import classes from "./Charts.module.css";
import ChartItems from "./ChartItems/ChartItems";

const Charts = () => {
    return (
        <div className={classes.Container}>
            <h2>Top charts</h2>
            <ChartItems/>
        </div>
            
    )
}

export default Charts;