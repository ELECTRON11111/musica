import React from "react";
import Search from "../../components/Search/Search";
import TopContent from "../../components/TopContent/TopContent";
import HeroSection from "../../components/TopContent/HeroSection/HeroSection";

const Content = () => {
    return (
        <div style={{
            width: "100vw"
        }}>
            <Search />
            <TopContent />
        </div>
    );
}

export default Content;
