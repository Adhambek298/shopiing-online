import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BottomNarrow from "../../assets/icons/BottomNarrov";
import LikeIcon from "../../assets/icons/LikeIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import ShopIcon from "../../assets/icons/ShopIcon";
function ShoppingCard({card, setCard}) {
    const navigate = useNavigate();
     const [time, setTime] = useState(0);
      const decrease = (count, ind) => {
        let dt = card;
        dt[ind].count = count;
        setTime(count)
        setCard(dt);
  }
       const increase = (count,ind) => {
        if(count == 0){
            card.splice(ind, 1)
        }else{
            card[ind].count = count
        }
         setTime(count);
        setCard(card)
       };
    useEffect(() =>{
        localStorage.setItem("shoppingCard", JSON.stringify(card));

    },[card, time])
    
  return (
    <div>
      <header className="header">
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
                <button
                  className="header-like-icon"
                  type="button"
                  onClick={(_) => navigate("/shoppingcard")}
                >
                  <ShopIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>
      <hr className="hr-top" />

      <div className="container">
      <button>
        <span className="window-span">Home</span> /
        <span className="window-span">Card</span>
      </button>
        <div className="winodow-top">
          {card &&
            card?.map((e, ind) => {
              return (
                <div key={ind}>
                  <div className="window-word">
                    <img className="window-img" src={e?.images} alt="" />
                    <div className="window-text">
                      <p>{e?.name}</p>
                      <p>{e?.title}</p>
                    </div>
                    <div className="window">
                      <button onClick={(_) => increase(e.count - 1, ind)}>
                        -
                      </button>
                      <h1>{e?.count}</h1>
                      <button onClick={(_) => decrease(e.count + 1, ind)}>
                        +
                      </button>
                    </div>
                    <h4>${e?.old_price}</h4>

                    <Link to="/PaymentPage">
                      <button
                        onClick={(_) => navigate(`/view/${item.id}`)}
                        className="Button-shart"
                      >
                        Shartnomalashtirish
                      </button>
                    </Link>
                    <h2>{e?.donk}</h2>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCard
