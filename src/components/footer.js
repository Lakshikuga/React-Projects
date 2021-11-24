import React from 'react';
import { Button } from './Button';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer(){

    return(

        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Get more profitable by investing in us and subscribe for our services
                </p>
                <p className="footer-subscription-text">

                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your email" className="footer-input"/>
                        <Button buttonStyle="btn-outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-links_wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Services</Link>
                        <Link to='/'>Terms of Services</Link>                    
                    </div>
                </div>
                <div className="footer-links_wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Subscription</Link>                    
                    </div>
                </div>
                <div className="footer-links_wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>LinkedIn</Link>                    
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            SALFIX <i className="fab fa-typo3" />
                        </Link>
                    </div>
                    <small className="website-rights">SALFIX &#169; 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to='/' target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link className="social-icon-link instagram" to='/' target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link className="social-icon-link linkedin" to='/' target="_blank" aria-label="LinkedIn">
                            <i className="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
   }

   export default Footer;