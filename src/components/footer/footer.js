import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <ul className="footer-column">
          <li><a href="/">FAQ</a></li>
          <li><a href="/">Investor Relations</a></li>
          <li><a href="/">Ways to Watch</a></li>
          <li><a href="/">Corporate Information</a></li>
          <li><a href="/">Netflix Originals</a></li>
        </ul>
        <ul className="footer-column">
          <li><a href="/">Help Center</a></li>
          <li><a href="/">Jobs</a></li>
          <li><a href="/">Terms of Use</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
        <ul className="footer-column">
          <li><a href="/">Account</a></li>
          <li><a href="/">Redeem Gift Cards</a></li>
          <li><a href="/">Privacy</a></li>
          <li><a href="/">Speed Test</a></li>
        </ul>
        <ul className="footer-column">
          <li><a href="/">Media Center</a></li>
          <li><a href="/">Buy Gift Cards</a></li>
          <li><a href="/">Cookie Preferences</a></li>
          <li><a href="/">Legal Notices</a></li>
        </ul>
      </div>
      <div className="footer-social">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
      </div>
      <div className="footer-service">
        <p>Netflix clone developed by vaishnav</p>
      </div>
    </footer>
  );
}

export default Footer;
