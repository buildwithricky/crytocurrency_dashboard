import React from "react";
import Image from "next/image";
import side from "../static/Images/newsletter_bg_light.svg";
const NewsLetter = () => {
  return (
    <div className="container-fluid p-5 mt-5">
      <div className="row">
        <div className="col-md-6 content-news">
          <h3>Be the first to know about crypto news every day</h3>
          <p className="text-secondary">
            Get crypto analysis, news and updates right to your inbox Sign up
            here so you don &apos t miss a single newsletter.
          </p>
          <div className="email row">
            <div className="col-md-6 mb-4">
              <input type="email" placeholder="Enter your email address" />
            </div>
            <div>
              <button className="btn-custom col-md-6">
                <p>Subscribe Now</p>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <Image src={side} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
