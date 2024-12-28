import React, { useEffect, useState } from "react";
import LeftNarrow from "../../assets/icons/LeftNarrow";
import RightIcon from "../../assets/icons/RightIcon";
import { categoris } from "../../constants/categories";
import { useNavigate } from "react-router-dom";

function Categories() {

      const [brends, setBrends] = useState([]);
    
      function getPraducts() {
        fetch("https://6715a255772c4a9b.mokky.dev/Brends")
          .then(function (res) {
            return res.json();
          })
          .then(function (data) {
            setBrends(data);
          })
          .catch(function (err) {
            console.log(err, "ashipka error");
          });
      }
      useEffect(() => {
      getPraducts()
      }, []);
    
    return (
      <section className="categoris">
        <div className="container">
          <div className="today-top__row">
            <span className="today-border"></span>
            <h5 className="today-title">Categories</h5>
          </div>
          <div className="today-date">
            <div className="today-left">
              <h3 className="today-date__title">Browse By Category</h3>
            </div>
            <div className="today-paginition">
              <button className="today-button">
                <LeftNarrow />
              </button>
              <button className="today-button">
                <RightIcon />
              </button>
            </div>
          </div>
          <div className="categoris-cards">
            {brends.map((item) => (
              <div key={item.id} className="categoris-cards-card">
                <div className="categoris-cards-card-img">
                  <img
                    width={64}
                    height={64}
                    preview={false}
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    src={item.image}
                    alt=""
                  />
                </div>
                {item.name}
              </div>
            ))}
          </div>
          <hr className="today-Categories" />
        </div>
      </section>
    );
}

export default Categories;
