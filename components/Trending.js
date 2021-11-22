import React, { useState } from "react";
import trending1 from "../static/Images/TrendingIcon.png";
import trending2 from "../static/Images/AddIcon.png";
import trending3 from "../static/Images/GainnerIcon.png";
import Image from "next/image";
const Trending = ({ trending, recents, gainer }) => {
  const [isChecked, setIsChecked] = useState(true);
  const handleChange = () => {
    if (isChecked) {
      setIsChecked(false);
    } else if (isChecked === false) {
      setIsChecked(true);
    }
  };
  const data = [
    {
      name: "Trending",
      src: trending1,
      item: trending,
    },
    {
      name: "Biggest Gainers",
      src: trending3,
      item: gainer,
    },
    {
      name: "Recently Added",
      src: trending2,
      item: recents,
    },
  ];
  return (
    <div>
      <div style={{ padding: "13px" }} className="content3 ">
        <div>
          <h2>Today&apos;s Cryptocurrency Prices by Market Cap</h2>
          <p
            style={{
              color: "#58667e",
              fontSize: "15px",
            }}>
            {" "}
            The global crypto market cap is $2.48T, a 6.64% decrease over the
            last day.<a>Read More</a>
          </p>
        </div>
        <div>
          <p className="text-secondary">highlights</p>
          <label className="switch">
            <input
              type="checkbox"
              value={isChecked}
              onChange={() => handleChange()}
            />
            <div className="slider"></div>
          </label>
        </div>
      </div>

      <div
        className="row container-fluid"
        style={{
          display: `${isChecked ? "none" : "flex"}`,
        }}>
        {data.map((single, index) => {
          const { name, src, item } = single;
          return (
            <div className="col-md-4" key={index}>
              <div className="card-trn">
                <div className="card-body">
                  <h2 className="card-title">
                    <img src={src} height="25" width="25" />
                    {name}
                    <span>more</span>
                  </h2>
                  <p className="card-text">
                    <ul>
                      {item.map((single, index) => {
                        const {
                          image,
                          symbol,
                          name,
                          id,
                          price_change_percentage_24h,
                        } = single;
                        return (
                          <li key={index}>
                            <div className="content2">
                              <img
                                src={image}
                                style={{
                                  width: 25,
                                  height: 25,
                                  marginRight: 10,
                                }}
                              />
                              <h4> {name} </h4>
                              <p>{symbol}</p>
                              <span
                                className={
                                  price_change_percentage_24h > 0
                                    ? "text-success"
                                    : "text-danger"
                                }>
                                {" "}
                                {price_change_percentage_24h}{" "}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
