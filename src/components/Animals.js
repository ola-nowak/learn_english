import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../styles.css";
import Butterfly from "../assets/butterfly.png";
import Cat from "../assets/cat.png";
import Chicken from "../assets/chicken.png";
import Crab from "../assets/crab.png";
import Dog from "../assets/dog.png";
import Fish from "../assets/fish.png";
import Frog from "../assets/frog.png";
import Jellyfish from "../assets/jellyfish.png";
import Mouse from "../assets/mouse.png";
import Panda from "../assets/panda.png";
import Pig from "../assets/pig.png";
import Rabbit from "../assets/rabbit.png";
import Seal from "../assets/seal.png";
import Tortoise from "../assets/tortoise.png";
import Whale from "../assets/whale.png";

// import required modules
import { EffectCards } from "swiper";

const animalsList = [
  {
    id: 1,
    title: "butterly",
    image: Butterfly,
  },
  {
    id: 2,
    title: "cat",
    image: Cat,
  },
  {
    id: 3,
    title: "chicken",
    image: Chicken,
  },
  {
    id: 4,
    title: "crab",
    image: Crab,
  },
  {
    id: 5,
    title: "dog",
    image: Dog,
  },
  {
    id: 6,
    title: "fish",
    image: Fish,
  },
  {
    id: 7,
    title: "frog",
    image: Frog,
  },
  {
    id: 8,
    title: "jellyfish",
    image: Jellyfish,
  },
  {
    id: 9,
    title: "mouse",
    image: Mouse,
  },
  {
    id: 10,
    title: "frog",
    image: Frog,
  },
  {
    id: 11,
    title: "panda",
    image: Panda,
  },
  {
    id: 12,
    title: "pig",
    image: Pig,
  },
  {
    id: 13,
    title: "rabbit",
    image: Rabbit,
  },
  {
    id: 14,
    title: "seal",
    image: Seal,
  },
  {
    id: 15,
    title: "tortoise",
    image: Tortoise,
  },
  {
    id: 16,
    title: "whale",
    image: Whale,
  },
];
export default function Animals() {
  return (
    <>
      <div className="heading">
        <h1>Animals</h1>
        <h2>swipe cards to learn new animals</h2>
      </div>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {animalsList.map((animal) => (
          <SwiperSlide key={animal.id}>
            <h1>{animal.title}</h1>
            <img src={animal.image} alt={animal.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
