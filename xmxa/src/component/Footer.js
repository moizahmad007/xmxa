import React, { useState } from "react";
import Facebook from "./assets/social.png";
import Instagram from "./assets/instagram1.png";
import Twitter from "./assets/twitter.png";
import Whatsapp from "./assets/whatsapp.png"; // I corrected the file name
import Pinterest from "./assets/pinterest1.png";
import Youtube from "./assets/youtube.png";
import Telephone from "./assets/telephone.png";
import Tiktok from "./assets/tik-tok.png";
import Email from  "./assets/mail.png";
import "./Footer.css";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [isCustomerCareOpen, setIsCustomerCareOpen] = useState(false);
    const [isOurCompanyOpen, setIsOurCompanyOpen] = useState(false);

    const handleNewsletterSignup = (e) => {
      e.preventDefault();
      console.log("Signing up for newsletter with email:", email);
    };

    const toggleCustomerCare = () => {
      setIsCustomerCareOpen(!isCustomerCareOpen);
    };

    const toggleOurCompany = () => {
      setIsOurCompanyOpen(!isOurCompanyOpen);
    };

    return (
      <footer className="footer">
        <div className="footer-container">
          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Need Help?</h4>  
            <p>Phone: <a href="tel:+922138227292">+92 31 872 167 52</a></p>
            <p>Email: <a href="mailto:sale@saya.pk">sale@xmxa.pk</a></p>
          </div>
           
          {/* Footer Links */}
          <div className="footer-links">
            <div className={`footer-links-section ${isCustomerCareOpen ? "open" : ""}`}>
              <h4 onClick={toggleCustomerCare}>
                Customer Care
              </h4>
              <ul>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/shipping-policy">Shipping Policy</a></li>
                <li><a href="/returns-exchange">Return and Exchange</a></li>
                <li><a href="/faq">FAQs</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/store-locator">Store Locator</a></li>
              </ul>
            </div>

            <div className={`footer-links-section ${isOurCompanyOpen ? "open" : ""}`}>
              <h4 onClick={toggleOurCompany}>
                Our Company
              </h4>
              <ul>
                <li><a href="/company-profile">Company Profile</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/terms-of-use">Terms of Use</a></li>
                <li><a href="/order-process">Order Process</a></li>
                <li><a href="/track-order">Track Your Order</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="footer-newsletter">
            <h4>Newsletter Signup</h4>
            <p>Subscribe to our newsletter to get notified of the latest launches and offers.</p>
            <form onSubmit={handleNewsletterSignup} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>

            {/* Social Media Icons */}
            <div className="social-media-icons">
                <p>Follow us on social media</p>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" className="social-icon" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" className="social-icon" />
              </a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <img src={Whatsapp} alt="Whatsapp" className="social-icon" /></a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                <img src={Pinterest} alt="pinterest" className="social-icon" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={Youtube} alt="youtube" className="social-icon" />
              </a>
              <a href="https://www.telephone.com" target="_blank" rel="noopener noreferrer">
                <img src={Telephone} alt="telephone" className="social-icon" />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <img src={Tiktok} alt="tiktok" className="social-icon" />
              </a>
              <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={Email} alt="mail" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
