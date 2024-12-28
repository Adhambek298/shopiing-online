import React from 'react'

function Main_banner() {
  return (
          <div className="container">
              <div className="main-banner-row">
                  <div className="main-banner-left">
                      <p className="main-banner-text">Categories</p>
                      <h1 className="main-banner-title">Enhance Your Music Experience</h1>
                      <div className="main-banner-data">
                          <div className="main-banner-time">
                              <p className="main-banner-time-num hours">23</p>
                              <p className="main-banner-time-text">Hours</p>
                          </div>
                          <div className="main-banner-time days">
                              <p className="main-banner-time-num">5</p>
                              <p className="main-banner-time-text">days</p>
                          </div>
                          <div className="main-banner-time minutes">
                              <p className="main-banner-time-num">59</p>
                              <p className="main-banner-time-text">Minutes</p>
                          </div>
                          <div className="main-banner-time seconds">
                              <p className="main-banner-time-num">35</p>
                              <p className="main-banner-time-text ">Seconds</p>
                          </div>
                      </div>
                      <div className="main-banner-buttons">
                          <button className="main-banner-button">Buy Now!</button>
                      </div>
                  </div>
                  <div className="main-banner-right">
                    <img src="/images/main-banner-img.png" alt="" />
                  </div>
              </div>
          </div>
  )
}

export default Main_banner