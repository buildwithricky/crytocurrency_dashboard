import React from "react";
import pic1 from "../static/Images/pic1.png";
import pic2 from "../static/Images/pic2.png";
import pic3 from "../static/Images/pic3.png";
import pic4 from "../static/Images/pic4.png";
import pic5 from "../static/Images/pic5.png";
import pic6 from "../static/Images/pic6.png";
import Image from "next/image";

const image = [
  {
    title: "Token airDrop",
    description: "Join Hero airdrop campaign",
    src: pic1,
  },
  {
    title: "Daily news",
    description: "Staples Center = Cryto.com Arena",
    src: pic2,
  },
  {
    title: "Collect diamonds",
    description: "Collect Diamonds & Get Nfts",
    src: pic3,
  },
  {
    title: "learn & earn",
    description: "Learn about ,aars Ecosystem & Earn!",
    src: pic4,
  },
  {
    title: "Podcast",
    description: "Podcast:BTC very Volatile Week",
    src: pic5,
  },
  {
    title: "Promotion Request",
    description: "Promote Your project on our site",
    src: pic6,
  },
];

const CardSlide = () => {
  const [slide, setIsSlide] = React.useState(true);
  const [number, setNumber] = React.useState(0);
  return (
    <div className="card-section">
      <div
        className={slide ? "arrow" : "arrow change"}
        onClick={() => {
          if (number <= 0) {
            setIsSlide(false);
            setNumber(100);
          } else if (number >= 100) {
            setNumber(0);
            setIsSlide(true);
          }
        }}>
        {" "}
        <span>&apos;</span>{" "}
      </div>
      <div
        style={{
          transform: `translateX(-${number}vw)`,
        }}
        className="card-slide">
        {image.map((image, index) => {
          const { title, src, description } = image;
          return (
            <div className="single" key={index}>
              <div>
                <Image
                  className="img-rect"
                  src={src}
                  width={300}
                  height={150}
                  alt="image"
                />
              </div>
              <div className="content">
                <p
                  style={{
                    color: "#58667e",
                    fontSize: "15px",
                  }}>
                  {" "}
                  {title}
                </p>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSlide;
