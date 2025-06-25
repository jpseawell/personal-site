import React from "react";
import Slider from "react-slick";
import ShowcaseTile from "@/components/showcaseTile";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ShowcaseSliderProps {
  items: Array<{
    imageUrl: string;
    link: string;
    children: React.ReactNode;
  }>;
}

const ShowcaseSlider: React.FC<ShowcaseSliderProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    className: "showcase-slider-gap",
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <Slider {...settings}>
      {items.map((item, idx) => (
        <div key={idx}>
          <ShowcaseTile imageUrl={item.imageUrl} link={item.link}>
            {item.children}
          </ShowcaseTile>
        </div>
      ))}
    </Slider>
  );
};

export default ShowcaseSlider;
