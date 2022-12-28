import React, {useState, useEffect} from "react";
import axios from "axios";
import classes from "./Releases.module.css";
import ReleaseItem from "./ReleaseItem/ReleaseItem";
import Spinner from "../UI/Spinner/Spinner";

interface propType {
    type: string;
    route: string;
}

function Releases(props: propType) {
    const [response, setResponse] = useState([]);
    
    const songs = [
        {
            src: "album/img-21.png",
            title: "Life in a bubble.",
            id: "1"
        }
    ]

	useEffect(() => {
		// Trigger the API Call
        axios.get(`https://musica-api.onrender.com/${props.route}`)
            .then(res => {
                // console.log(res.status);
                setResponse(res.data);
            })
            .catch(err => {
                console.error(err);
            })
	}, []);

    // DOM 
    let DOM;
    
    DOM = (
        <div className={classes.release_items}>
            {Array.from(response).map(song => {
                return (
                    <ReleaseItem 
                        imgSrc={song['cover']} 
                        title={song['title']} 
                        allReleases = {response}
                        id={song['id']}
                        key={song['id']}
                    />
                )
            })}
        </div>
    )
    
    return (
        <div 
            className={classes.Container}
            style = {props.route === "popular"? {
                marginBottom: "110px"
            }: {}}
        >
            <h2>{props.type}</h2>
            {response.length == 0? <Spinner />: DOM}
        </div>
    )
}

export default Releases;