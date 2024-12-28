import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { thismonth } from "../../constants/thismonth";
import BottomNarrow from "../../assets/icons/BottomNarrov";
import LikeIcon from "../../assets/icons/LikeIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import ShopIcon from "../../assets/icons/ShopIcon";
import CounterApp from "../checkoutPage/Settaout"
function UsePrsm2() {
  const { id } = useParams();
  const [win, setwin] = useState({});
  useEffect(() => {
    const dt = thismonth?.find((e) => e.id == id);
    setwin(dt);
  }, [id]);
  return (
    <><header className="header">
        <div className="header-top">
          <div className="header-icon-low">
            <div className="header-text-black">
              <p className="header-text-black-icon">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <button className="header-button-shoping">ShopNow</button>
            </div>
            <a className="header-languse">
              English <BottomNarrow />
            </a>
          </div>
        </div>
        <div className="container">
          <div className="header-wor">
            <div className="header-logo">
              <Link to="/">
                <h1>Exclusive</h1>
              </Link>
            </div>
            <nav className="header-links">
              <a href="#" className="header-link active">
                Home
              </a>
              <a href="#" className="header-link">
                Contact
              </a>
              <a href="#" className="header-link">
                About
              </a>
              <a href="#" className="header-link">
                Sign Up
              </a>
            </nav>
            <form className="header-input-top">
              <div className="header-input-from">
                <input type="text" placeholder="What are you looking for?" />
                <button className="header-serach">
                  <SearchIcon />
                </button>
              </div>
              <div className="header-line-shooping">
                <button className="header-like-icon">
                  <LikeIcon />
                </button>
                <button className="header-like-icon">
                  <ShopIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>
      <hr className="hr-top" />
      <div className="container">
        <div className="imges-word-top">
          <div className="imges-icon-top-word">
            <img className="imges-top-icon-lower" src={win?.image} alt="" />
            <img className="imges-top-icon-lower" src={win?.image} alt="" />
            <img className="imges-top-icon-lower" src={win?.image} alt="" />
            <img className="imges-top-icon-lower" src={win?.image} alt="" />
          </div>
          <div className="top-imges-icona">
            <div className="Imges-word">
              <img
                className="imges-top-icon-lower-top"
                src={win?.image}
                alt=""
              />
            </div>
            <div className="text-top-pro">
              <h3 className="Use-text">{win?.text}</h3>
              <div className="start-icon">
                <p>{win?.icon}</p>
                <p>{win?.icon}</p>
                <p>{win?.icon}</p>
                <p>{win?.icon}</p>
                <p>{win?.icon}</p>
                <p className="win-res">{win?.Reviews}</p>
                <span>|</span>
                <p className="Stock-text">{win?.Stock}</p>
              </div>
              <div className="windollor">
                <h4 className="Dolor-top">{win?.newPrice}</h4>
                <p className="top-lorem">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                  nisi eos, illo obcaecati laborum mollitia! Corrupti vel quidem
                  neque, aut at provident error voluptatum totam optio amet,
                  itaque doloribus magnam?
                </p>
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

export default UsePrsm2;
