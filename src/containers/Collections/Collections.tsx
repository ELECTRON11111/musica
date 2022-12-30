import React, {useState, useEffect} from "react";
import {NavLink, Routes, Route, useLocation, useNavigate} from "react-router-dom";
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
    id: string;
}

function Collections() {
    const [theCollections, setTheCollections] = useState([
        {
            cover: "collection/Rectangle 26.png",
            title: "Limits",
            artist: "John McCall",
            likesInMillions: 2.3,
            id: "2"
        }
    ]);

    const [likedPlaylists,setLikedPlaylists] = useState([
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
        const theCollections = localStorage.getItem("items"); 
        const likedPlaylists = localStorage.getItem("likedPlaylists"); 

        // if items are not empty i.e not false, i.e true set the Items to the state.
        if(theCollections) {
            setTheCollections(JSON.parse(theCollections));
        }

        if(likedPlaylists) {
            setLikedPlaylists(JSON.parse(likedPlaylists));
        }
    }, []);

    const currentRoute = useLocation();

    return (
        <div className={classes.Collections_Container}>
            <Search isIcon = {false}/>
            <div className={classes.Links}>
                <Link path={`/collections`} text="My Collection" />
                <Link path={`/collections/likes`} text="Likes" />
            </div>

            <Routes>
                <Route path={``} element={<ItemsComponent items = {theCollections}/>} />
                <Route path={`likes`} element={<ItemsComponent items = {likedPlaylists}/>} />
            </Routes>

            {/* <div className={classes.Collections}>
                {items.map(collectionItem => {
                    return <Collection 
                        title={collectionItem.title}
                        artist={collectionItem.artist}
                        imgSrc={collectionItem.cover}
                        likesInMillions={2.3}
                        key={collectionItem.id}
                    />
                })}
            </div> */}
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
            // The "end" keyword ensures this element isn't matched as active other descendants are matched
            // For example, to render a link that is only active at the website root and not any other URLs
            // So it prevents the collections whoose route is just "/" to show active for "/likes" 
            end
            >
            {props.text}
        </NavLink>
    )
}

function ItemsComponent(props: any) {
    return (
        <div className={classes.Collections}>
        {props.items.map((collectionItem: any) => {
            return <Collection 
                title={collectionItem.title}
                artist={collectionItem.artist}
                imgSrc={collectionItem.cover}
                likesInMillions={2.3}
                id={collectionItem.id}
                key={collectionItem.id}
            />
        })}
    </div>
    )
}

function Collection(props: collectionPropTypes) {
    const navigate = useNavigate()
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

            <div className={classes.play_btn} onClick={() => navigate(`/playlist/${props.id}`)}>
                <img src={playIcon} alt="play!" />
            </div>
        </div>
    )
}


export default Collections;