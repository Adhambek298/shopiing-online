import React from "react";
import Banner from "../components/homePage/Banner";
import Today from "../components/homePage/Today";
import Categories from "../components/homePage/categories";
import ThisMonth from "../components/homePage/ThisMonth";
import Main_banner from "../components/homePage/Main-banner";
import OurProdact from "../components/homePage/OurProdact";

function Home({card,setCard}) {
    return (
      <div>
        <Banner />
        <Today card={card} setCard={setCard} />
        <Categories />
        <ThisMonth card={card} setCard={setCard} />
        <Main_banner />
        <OurProdact />
      </div>
    );
}

export default Home;
