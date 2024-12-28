import React from "react";
import LikeIcon from "../../assets/icons/LikeIcon";
import ViewIcon from "../../assets/icons/ViewIcon";
import { ourprodact } from "../../constants/ourprodact";

function OurProdact() {
    return (
        <section className='OurProdact'>
            <div className='container'>
                <div className='today-top__row'>
                    <span className='today-border'></span>
                    <h5 className='today-title'>This Month</h5>
                </div>
                <div className='today-date'>
                    <div className='today-left'>
                        <h3 className='today-date__title'>
                            Best Selling Products
                        </h3>
                    </div>
                    <div className='today-paginition'>
                        <button className='today-bottom-button'>
                            View All
                        </button>
                    </div>
                </div>

                <div className='today-swiper our-prodact-swiper'>
                    {ourprodact.map((item) => (
                        <div key={item.id} className='today-card'>
                            <div className='today-image'>
                                <img src={item.image} alt={item.title} />
                                <div className='today-icons'>
                                    <button className='today-btn'>
                                        <LikeIcon />
                                    </button>
                                    <button className='today-btn'>
                                        <ViewIcon />
                                    </button>
                                </div>
                                <div className='today-add'>
                                    <p className='today-text'>Add To Cart</p>
                                </div>
                            </div>
                            <h4 className='today-swiper__title'>
                                {item.title}
                            </h4>
                            <div className='today-star'>
                                <p className='today-price'>
                                    <span className='today-price__new'>
                                        {item.newPrice}
                                    </span>
                                </p>
                                {item.icon}
                                {item.icon2}
                                {item.icon3}
                                {item.icon4}
                                {item.icon5}
                                <p className="OurProdact-revews">{item.reviews}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='today-bottom-btn'>
                    <button className='today-bottom-button'>
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
}

export default OurProdact;
