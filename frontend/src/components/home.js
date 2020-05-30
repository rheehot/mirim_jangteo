import React from "react";
import "../style/home.scss";
import Banner from "./banner";
import PopularList from "./popular";


const Home = () => {

    return (
        <div className="home">
            <Banner/>
            <div className="cont-sub-title">오늘의 인기 상품은?</div>
            <div className="cont-title">미림장터 카테고리별 인기 상품 TOP 10</div>
            <PopularList/>
        </div>
    );
}

export default Home;