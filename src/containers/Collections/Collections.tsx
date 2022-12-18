import React, {useState, useEffect} from "react";
import {NavLink, Routes, Route} from "react-router-dom";
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
    const [items, setItems] = useState([
        {
            cover: "collection/Rectangle 26.png",
            title: "Limits",
            artist: "John McCall",
            likesInMillions: 2.3,
            id: "2"
        }
    ]);


    useEffect(() => {
        // On Mounting this component get the data from localStorage
        // So Typescript would have to deal with null data type - if the "items" from localStorage is null meaning nothing is assigned yet, we just assign an empty object
        const items = localStorage.getItem("items");  

        // if items are not empty i.e not false, i.e true set the Items to the state.
        if(items) {
            setItems(JSON.parse(items));
        }
    }, []);

    // useEffect(() => {
    //   localStorage.setItem("items", JSON.stringify(items));
    // }, [items]);

    const DOM = items.map(collectionItem => {
        return <Collection 
            title={collectionItem.title}
            artist={collectionItem.artist}
            imgSrc={collectionItem.cover}
            likesInMillions={2.3}
            key={collectionItem.id}
        />
    });
  
    return (
        <div className={classes.Collections_Container}>
            <Search isIcon = {false}/>
            <div className={classes.Links}>
                <Link path="/collections" text="My Collection" />
                <Link path="/collections/likes" text="Likes" />
            </div>

            <div className={classes.Collections}>
                {items.map(collectionItem => {
                    return <Collection 
                        title={collectionItem.title}
                        artist={collectionItem.artist}
                        imgSrc={collectionItem.cover}
                        likesInMillions={2.3}
                        key={collectionItem.id}
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