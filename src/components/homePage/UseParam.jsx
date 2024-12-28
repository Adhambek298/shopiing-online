import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import BottomNarrow from "../../assets/icons/BottomNarrov";
// import LikeIcon from "../../assets/icons/LikeIcon";
// import SearchIcon from "../../assets/icons/SearchIcon";
// import ShopIcon from "../../assets/icons/ShopIcon";
import CounterApp from "../checkoutPage/Settaout";
import { getStarts } from "../../utils/helpers";
import Header from ".././layout/Header"
function UseParam() {
  const { id } = useParams();
  const [praducts, setpraducts] = useState({});

  function getPraducts() {
      fetch(`https://6715a255772c4a9b.mokky.dev/Products/${id}`)
      .then(function (res){
        return res.json();
      }).then(function (data) {
        setpraducts(data);
      }).catch(function(err){
        console.log(err, "ashipka error");
      })
    }

  useEffect(() => {
    getPraducts();
  }, []);

  
  return (
    <>
     <Header />
      <hr className="hr-top" />
      <div className="container">
        <div className="imges-word-top">
          <div className="imges-icon-top-word">
            <img
              className="imges-top-icon-lower"
              src={praducts.images}
              alt=""
            />
            <img
              className="imges-top-icon-lower"
              src={praducts?.images}
              alt=""
            />
            <img
              className="imges-top-icon-lower"
              src={praducts?.images}
              alt=""
            />
            <img
              className="imges-top-icon-lower"
              src={praducts?.images}
              alt=""
            />
          </div>
          <div className="top-imges-icona">
            <div className="Imges-word">
              <img
                className="imges-top-icon-lower-top"
                src={praducts?.images}
                alt=""
              />
            </div>
            <div className="text-top-pro">
              <h3 className="Use-text">{praducts?.name}</h3>
              <div className="start-icon">
                {getStarts(praducts?.star_count)}
                <span>|</span>
                <p className="Stock-text">{praducts?.name}</p>
              </div>
              <div className="praductsdollor">
                <h4 className="Dolor-top">{praducts?.old_price}$</h4>
                <p className="top-lorem">{praducts?.description}</p>
                <hr className="hr-buttom" />
                <div className="Color-s">
                  <p className="Color">Colours:</p>
                  <form>
                    <input
                      className="top-input"
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <input
                      className="top-input"
                      type="radio"
                      id="css"
                      name="fav_language"
                      value="CSS"
                      checked
                    />
                  </form>
                </div>
                <div className="size">
                  <h3>Size:</h3>
                  <button className="button-boder">XS</button>
                  <button className="button-boder">S</button>
                  <button className="button-boder">M</button>
                  <button className="button-boder">L</button>
                  <button className="button-boder">XL</button>
                </div>
                <div className="set-coutr">
                  <CounterApp />
                  <button className="button-win">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseParam;
