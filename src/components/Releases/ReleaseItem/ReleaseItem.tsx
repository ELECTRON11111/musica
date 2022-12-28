import React, {useState, useContext} from "react";
import SongsContext from "../../../SongsContext/SongsContext";
import classes from "./ReleaseItem.module.css";

interface propType {
    imgSrc: string;
    title: string;
    id: string;
    // The releases is an array with each child an Object.
    allReleases: Array<object>;
}

function ReleaseItems(props: propType) {
    const [allReleases, setAllReleases] = useState(props.allReleases);

    const {data, setData} = useContext<any>(SongsContext);
    return (
        <div className={classes.Release}>
            <img 
                src={props.imgSrc} 
                alt="Release" 
                onClick={() => setData({id: props.id, allSongs: props.allReleases})} 
                style = {{cursor: "pointer"}}
            />
            <p>{props.title}</p>
        </div>
    )
}

export default ReleaseItems;