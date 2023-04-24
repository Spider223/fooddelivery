import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p>Follow us on social media:</p>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p>&copy;2023 FoodDelivery. All rights reserved. </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
