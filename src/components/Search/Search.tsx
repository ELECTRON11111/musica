import classes from "./Search.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import SearchIcon from "../../assets/search.svg";

interface propType {
    isIcon: boolean;
}

const Search = (props: propType) => {
    let jsx = null;
    if (props.isIcon) {
        jsx = <img src={SearchIcon} style={{cursor: "pointer"}} alt="searchIcon"/>
    } else {
        jsx = (
            <div className={classes.Container}>
                <input type="text" name="text" id="search-input" placeholder="Search artists"/>
            </div>
        )
    }

    return (
        <Auxiliary>
            {jsx}
        </Auxiliary>
    );
}

Search.defaultProps = {
    isIcon: false
}

export default Search;