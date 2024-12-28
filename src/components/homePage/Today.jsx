import React, { useEffect,  useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import ViewIcon from "../../assets/icons/ViewIcon";
import LikeIcon from "../../assets/icons/LikeIcon";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { getStarts } from "../../utils/helpers";
function Today({ card, setCard }) {
  const navigate = useNavigate();
  const addCardData = (data) =>{
    const fd = card.find(e => (e.id === data.id && e.type === 1))
    const fdindex = card.findIndex((e) => e.id === data.id && e.type === 1);
    if (fd){
        card[fdindex].count = fd.count +1
      setCard(card)
    }else{
      data.type=1;
       data.count = 1; 
       setCard(e => [...e, data]);
    }
  }

  const [praducts, setPraducts] = useState([]);

  function getPraducts() {
    fetch("https://6715a255772c4a9b.mokky.dev/Products")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setPraducts(data);
      })
      .catch(function (err) {
        console.log(err, "ashipka error");
      });
  }
  useEffect(() => {
  getPraducts()
  }, []);



  

  
  return (
    <>
      <section className="today">
        <div className="container">
          <div className="main-top">
            <p className="main-boder-top"></p>
            <h3 className="main-text-boder">Today's</h3>
          </div>
          <Swiper
            slidesPerView={4.2}
            spaceBetween={20}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper today-swiper"
          >
            {praducts.map((item) => (
              <SwiperSlide key={item.id} className="today-card">
                <div className="today-image">
                  <img src={item.images[0]} alt={item.name} />
                  <p className="today-discount">{item.discount}%</p>
                  <div className="today-icons">
                    <button className="today-btn">
                      <LikeIcon />
                    </button>
                    <button className="today-btn">
                      <ViewIcon />
                    </button>
                  </div>
                  <div className="today-add">
                    <button
                      className="today-text"
                      onClick={(_) => addCardData(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
                <h2
                  className="today-swiper__title"
                  onClick={(_) => navigate(`/view/${item.id}`)}
                >
                  {item.name}
                </h2>
                <p className="today-price">
                  <span className="today-price__new">${item.old_price}</span>
                  <span className="today-price__old">${item.price}</span>
                </p>
                <div className="today-star">{getStarts(item.star_count)}</div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="today-bottom-btn">
            <button className="today-bottom-button">View All Products</button>
          </div>
          <hr className="today-Categories" />
        </div>
      </section>
    </>
  );
}
  
  export default Today;