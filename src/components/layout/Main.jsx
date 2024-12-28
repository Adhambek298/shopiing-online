import React from "react";
import Home from "../../pages/Home";


function Main({ card, setCard }) {
  return (
    <main className="main">
      <>
        <Home card={card} setCard={setCard} />
      </>
    </main>
  );
}

export default Main;
