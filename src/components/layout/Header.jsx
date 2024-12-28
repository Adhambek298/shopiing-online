import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BottomNarrow from "../../assets/icons/BottomNarrov";
import LikeIcon from "../../assets/icons/LikeIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import ShopIcon from "../../assets/icons/ShopIcon";
import {Typography, Button } from '@mui/material' 
function Header({card}) {
  const navigate = useNavigate()
  const [count, setCount] = useState("")
  const emails = ['username@gmail.com', 'user02@gmail.com'];
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
      };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  useEffect(() =>{
    setCount(card?.length)
  },[card])
  return (
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
              <Link to="/Conteact">Conteact</Link>
            </a>
            <a href="#" className="header-link">
              About
            </a>
            <a href="#" className="header-link">
              <Link to="/Buyrutmalar">Order</Link>
            </a>
            <a href="#" className="header-link">
              <Link to="/User">Sign Up</Link>
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
              <button className="header-like-icon" type="button">
                <LikeIcon />
              </button>
              <button
                className="header-like-icon"
                type="button"
                onClick={(_) => navigate("/shoppingcard")}
              >
                <div className="cout-shopping-top">
                  <ShopIcon />
                  <div className="cout-shopping">{count}</div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
