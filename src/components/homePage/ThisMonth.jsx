import React from "react";
import { thismonth } from "../../constants/thismonth";
import LikeIcon from "../../assets/icons/LikeIcon";
import ViewIcon from "../../assets/icons/ViewIcon";
import { useNavigate } from "react-router-dom";
function ThisMonth({card, setCard}) {
     const navigate = useNavigate();
      const addCardData = (data) => {
        const fd = card.find((e) => e.id === data.id && e.type === 2);
        const fdindex = card.findIndex((e) => e.id === data.id && e.type === 2);
        console.log(fd);
        if (fd) {
          card[fdindex].count = fd.count + 1;
          setCard(card);
        } else {
          data.type = 2;
          data.count = 1;
          setCard((e) => [...e, data]);
        }
        console.log(card);
      };
    return (
      <section className="ThisMonth">
        <div className="container">
          <div className="today-top__row">
            <span className="today-border"></span>
            <h1 className="today-title">Thismonth</h1>
          </div>
          <div className="today-date">
            <div className="today-left">
              <h3 className="today-date__title">Best Selling Products</h3>
            </div>
            <div className="today-paginition">
              <button className="today-bottom-button">View All</button>
            </div>
          </div>

          <div className="today-swiper">
            {thismonth.map((item) => (
              <div key={item.id} className="today-card">
                <div className="today-image">
                  <img src={item.image} alt={item.title} />
                  <div className="today-icons">
                    <button className="today-btn">
                      <LikeIcon />
                    </button>
                    <button className="today-btn">
                      <ViewIcon />
                    </button>
                  </div>
                  <div className="today-add">
                    <p className="today-text" onClick={(_) => addCardData(item)}>
                      Add To Cart
                    </p>
                  </div>
                </div>
                <h4
                  className="today-swiper__title"
                  onClick={(_) => navigate(`/param/${item.id}`)}
                >
                  {item.text}
                </h4>
                <p className="today-price">
                  <span className="today-price__new">{item.newPrice}</span>
                  <span className="today-price__old">{item.oldPrice}</span>
                </p>
                <div className="today-star">
                  {item.icon}
                  {item.icon2}
                  {item.icon3}
                  {item.icon4}
                  {item.icon5}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default ThisMonth;
