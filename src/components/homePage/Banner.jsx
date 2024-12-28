import React, { useEffect, useState } from "react";

function Banner() {

  const [categories, setCategories] = useState ([]);

  function getCategories(){
  fetch("https://6715a255772c4a9b.mokky.dev/categories").then(function (res){
    return res.json()
  }).then(function(data){
    setCategories(data)
  }).catch(function (err){
console.log(err, 'ashipka')

  })
  }
  useEffect(() => {
  getCategories()
  },[])

  console.log(categories);
  

  return (
    <section className="banner">
      <div className="container">
        <div className="banner-top">
          <div className="banner-row-icon">
            <div className="banner-menu">
              {
                categories.map(({id,name}) => (
                <a href="#" key={id} className="header-links">
                  {name}
                </a>
                ))
              }
            </div>
          </div>
          <div className="banner-imges">
            <div className="banner-icon-top">
              <div className="banner-logo">
                <img src="/images/iphone-logo.svg" alt="" />
                <p className="imges-text">iPhone 14 Series</p>
              </div>
              <h3 className="banner-text-top">Up to 10% off Voucher</h3>
              <button className="banner-button-icon">Shop Now </button>
            </div>
            <div className="banner-image">
              <img src="/images/banner-image.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
