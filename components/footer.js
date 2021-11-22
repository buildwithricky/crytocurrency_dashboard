import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid p-5 mt-5 footer">
      <div className="row">
        <div className="col-md-6 content-news">
          <h3> Binance</h3>
          <p className="text-secondary">© 2021 Binance. All rights reserved</p>
        </div>
        <div className="links col-md-6 row">
          <div className="col-md-3">
            <ul>
              <h2>products</h2>

              <li>Crypto API</li>
              <li> Crypto Indices </li>
              <li>Interest</li>
              <li> Jobs Board</li>
              <li> Sitemap</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <h2>Company</h2>

              <li>About us</li>
              <li> Terms of use</li>
              <li>Privacy Policy</li>
              <li> Disclaimer</li>
              <li> Methodology</li>
              <li> Careers</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <h2>Support</h2>

              <li> Request Form </li>
              <li>Contant Support</li>
              <li> FAQ</li>
              <li> Glossary</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <h2>Socials</h2>

              <li>Facebook</li>
              <li>Twitter</li>
              <li>Telegram</li>
              <li> Instagram</li>
              <li> Interactive Chat</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
