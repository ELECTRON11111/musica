import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Collections.module.css";
import playIcon from "../../assets/play.svg";
import Search from "../../components/Search/Search";


interface linkPropTypes {
    path: string;
    text: string;
}

interface collectionPropTypes {
    title: string;
    artist: string;
    imgSrc: string;
    likesInMillions: number;
}

function Collections(props: any) {
    const collectionData = [
        {
            imgSource: "collection/Rectangle 26.png",
            title: "Limits",
            artist: "John McCall",
            likesInMillions: 2.3
        },
        {
            imgSource: "collection/Rectangle 27.png",
            title: "Limits",
            artist: "John McCall",
            likesInMillions: 2.3
        },
        {
            imgSource: "collection/Rectangle 28.png",
            title: "Limits",
            artist: "John McCall",
            likesInMillions: 2.3
        },
        {
            imgSource: "collection/Rectangle 29.png",
            title: "Limits",
            artist: "John McCall",
            likesInMillions: 2.3
        }
    ];

    // console.log(props); 

    return (
        <div className={classes.Collections_Container}>
            <Search isIcon = {false}/>
            <div className={classes.Links}>
                <Link path="/collections" text="My Collection" />
                <Link path="/collections/Likes" text="Likes" />
            </div>

            <div className={classes.Collections}>
                {collectionData.map(collectionItem => {
                    return <Collection 
                        title={collectionItem.title}
                        artist={collectionItem.artist}
                        imgSrc={collectionItem.imgSource}
                        likesInMillions={collectionItem.likesInMillions}
                        key={collectionItem.imgSource}
                    />
                })}
            </div>
        </div>
    )
}

function Link(props: linkPropTypes) {
    return (
        // If the link is active, change the background and text color of the NavLink
        <NavLink 
            to = {`${props.path}`} 
            style={({ isActive } :any) => ({ 
                color: isActive ? 'black' : '#89897f',
                border: isActive? "0": "1px solid #89897f",
                backgroundColor: isActive? "#FACD66":"inherit"
            })}
            >
            {props.text}
        </NavLink>
    )
}

function Collection(props: collectionPropTypes) {
    return (
        <div className={classes.Collection} style={{
            backgroundImage: `url("${props.imgSrc}")`
        }}>
            <div className={classes.text}>
                <div className={classes.artist_info}>
                    <h3>{props.title}</h3>
                    <span>{props.artist}</span>
                </div>

                <p className={classes.likes}>{props.likesInMillions}m likes</p>
            </div>

            <div className={classes.play_btn}>
                <img src={playIcon} alt="play!" />
            </div>
        </div>
    )
}


export default Collections;