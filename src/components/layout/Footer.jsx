import React from "react";
// import EmailSendIcon from "../../assets/icons/EmailSendIcon";
import FacebookIcon from "../../assets/icons/Facebook";
import TwitterIcon from "../../assets/icons/Twitter";
import InstagramIcon from "../../assets/icons/Instagram";
import LinkedinIcon from "../../assets/icons/Linkidicon";

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-row'>
                    <div className='footer-top'>
                        <div className='footer-top-exclusive'>
                            <p className='footer-site-logo'>Exclusive</p>
                            <p className='footer-subscribe-text'>Subscribe</p>
                            <p className='footer-sale-text'>
                                Get 10% off your first order
                            </p>
                            <button className='footer-email-input'>
                                <input
                                    type='text'
                                    placeholder='Enter your email'
                                    className='footer-input'
                                />
                            </button>
                        </div>
                        <div className='footer-top-support'>
                            <p className='footer-links-title'>Support</p>
                            <a href='#' className='footer-link'>
                                111 Bijoy sarani, Dhaka, <br /> DH 1515,
                                Bangladesh.
                            </a>
                            <a href='#' className='footer-link'>
                                exclusive@gmail.com
                            </a>
                            <a href='#' className='footer-link'>
                                +88015-88888-9999
                            </a>
                        </div>
                        <div className='footer-top-account'>
                            <p className='footer-links-title'>Account</p>
                            <a href='#' className='footer-link'>
                                My Account
                            </a>
                            <a href='#' className='footer-link'>
                                Login / Register
                            </a>
                            <a href='#' className='footer-link'>
                                Cart
                            </a>
                            <a href='#' className='footer-link'>
                                Wishlist
                            </a>
                            <a href='#' className='footer-link'>
                                Shop
                            </a>
                        </div>
                        <div className='footer-top-quicklink'>
                            <p className='footer-links-title'>Quick Link</p>
                            <a href='#' className='footer-link'>
                                Privacy Policy
                            </a>
                            <a href='#' className='footer-link'>
                                Terms Of Use
                            </a>
                            <a href='#' className='footer-link'>
                                FAQ
                            </a>
                            <a href='#' className='footer-link'>
                                Contact
                            </a>
                        </div>
                        <div className='footer-top-downloads'>
                            <p className='footer-links-title'>Download App</p>
                            <p className='footer-downloads-subtitle'>
                                Save $3 with App New User Only
                            </p>
                            <div className='footer-apps-links'>
                                <div className='footer-qr'>
                                    <img src='' alt='' />
                                </div>
                                <div className='footer-mobile-apps'>
                                    <img src='' alt='' />
                                    <img src='' alt='' />
                                </div>
                                <div className='footer-social-links'>
                                    <button className='footer-facebook'>
                                        <FacebookIcon />
                                    </button>
                                    <button className='footer-twitter'>
                                        <TwitterIcon />
                                    </button>
                                    <button className='footer-instagram'>
                                        <InstagramIcon />
                                    </button>
                                    <button className='footer-linkedin'>
                                        <LinkedinIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className='footer-line'></span>
                    <div className='footer-bottom'>
                        <p className='footer-bottom_text'>
                            Copyright Rimel 2022. All right reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
