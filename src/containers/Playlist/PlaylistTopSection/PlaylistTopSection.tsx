import classes from "./PlaylistTopSection.module.css";
import heart from "../../../assets/playlist/love.png";
import play from "../../../assets/playlist/play-all.png";
import AddToCollectionBtn from "../../../assets/playlist/music-square-add.png";
import LeadImg from "../../../assets/playlist/Lead-image.png";

// For Playlist.
interface propType {
    cover: string;
    title: string;
    info: string;
    length: string;
}

function PlaylistTopSection(props: propType) { 
    return (
        <div className= {classes.TopSection}>
            <img src = {props.cover} className={classes.Lead} />
            
            <div className = {classes.Top_Text_Btns}>
                <div className = {classes.Text}>
                    <h3>{props.title}</h3>
                    <p>{props.info}</p>
                    <p>{props.length}</p>
                </div>

                <div className = {classes.Btns}>
                    <div className = {classes.Play}>
                        <img src={play} alt="playBtn" />
                        <p>Play all</p>
                    </div>
                    <div className = {classes.Add_to_Collection}>
                        <img src={AddToCollectionBtn} alt="playBtn" />
                        <p>Add to collection</p>
                    </div>
                    <div className = {classes.heart}>
                        <img src={heart} />
                    </div>
                </div>
            </div>
        </div>
    )
}

PlaylistTopSection.defaultProps = {
    cover: LeadImg,
    title: "Tomorrow's tunes",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    length: "56 songs - 16 hrs+"
}


export default PlaylistTopSection;