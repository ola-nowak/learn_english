import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../styles.css";

// import required modules
import { EffectCards } from "swiper";

import Banana from "../assets/banana.png";
import Blueberry from "../assets/blueberry.png";
import Carrot from "../assets/carrot.png";
import Pineapple from "../assets/pineapple.png";
import Plum from "../assets/plum.png";
import Strawberry from "../assets/strawberry.png";
import Watermelon from "../assets/watermelon.png";

const fruitsList = [
  {
    id: 1,
    title: "banana",
    image: Banana,
  },
  {
    id: 2,
    title: "blueberry",
    image: Blueberry,
  },
  {
    id: 3,
    title: "carrot",
    image: Carrot,
  },
  {
    id: 4,
    title: "pineapple",
    image: Pineapple,
  },
  {
    id: 5,
    title: "plum",
    image: Plum,
  },
  {
    id: 6,
    title: "strawberry",
    image: Strawberry,
  },
  {
    id: 7,
    title: "watermelon",
    image: Watermelon,
  },
];

function Fruits({ id, title, image }) {
  return (
    <>
      <div className="heading">
        <h1>Fruits</h1>
        <h2>swipe cards to learn new fruits</h2>
      </div>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <h1>butterfly</h1>
          <img src={Butterfly} alt="butterfly" />
        </SwiperSlide> */}

        {fruitsList.map((fruit) => (
          <SwiperSlide key={fruit.id}>
            <h1>{fruit.title}</h1>
            <img src={fruit.image} alt={fruit.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Fruits;
