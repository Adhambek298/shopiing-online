import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Layout({card,setCard}) {
    return (
      <>
        <Header card={card} />
        <Main card={card} setCard={setCard} />
        <Footer />
      </>
    );
}

export default Layout;
