import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./quiz_styles.css";

import Banana from "../assets/banana.png";
import Blueberry from "../assets/blueberry.png";
import Carrot from "../assets/carrot.png";
import Pineapple from "../assets/pineapple.png";
import Plum from "../assets/plum.png";
import Strawberry from "../assets/strawberry.png";
import Watermelon from "../assets/watermelon.png";
import Jellyfish from "../assets/jellyfish.png";
import Mouse from "../assets/mouse.png";
import Panda from "../assets/panda.png";
import Pig from "../assets/pig.png";
import BasicBoy from "../assets/boy-front-basic.png";
import SuccessBoy from "../assets/boy-front-success.png";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// import required modules
import { EffectCube, Pagination } from "swiper";

const quizList = [
  {
    id: 1,
    title: "watermelon",
    image: Watermelon,
  },
  {
    id: 2,
    title: "plum",
    image: Plum,
  },
  {
    id: 3,
    title: "carrot",
    image: Carrot,
  },
  {
    id: 4,
    title: "banana",
    image: Banana,
  },
  {
    id: 5,
    title: "strawberry",
    image: Strawberry,
  },
  {
    id: 6,
    title: "blueberry",
    image: Blueberry,
  },
  {
    id: 7,
    title: "pineapple",
    image: Pineapple,
  },
  {
    id: 8,
    title: "panda",
    image: Panda,
  },
  {
    id: 9,
    title: "mouse",
    image: Mouse,
  },
  {
    id: 10,
    title: "pig",
    image: Pig,
  },
  {
    id: 11,
    title: "jellyfish",
    image: Jellyfish,
  },
];
export default function App() {
  const [color, setColor] = useState("primary");
  const onSuccessClick = () => {
    setColor("success");
  };
  const onErrorClick = (item) => {
    setColor("danger");
  };
  return (
    <>
      <div className="heading">
        <h1>Quiz</h1>
        <h2>Check your knowledge</h2>
      </div>

      <img src={BasicBoy} alt="boy" />
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <Stack spacing={2} direction="row" className="quiz_stack">
          <Button variant="contained" onClick={onErrorClick}>
            Banana
          </Button>
          <Button variant="contained" color={color} onClick={onSuccessClick}>
            Watermelon
          </Button>
          <Button variant="contained" onClick={onErrorClick}>
            Kiwi
          </Button>
        </Stack>

        {quizList.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.title} />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <img src={Watermelon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Plum} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carrot} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banana} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Strawberry} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Blueberry} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pineapple} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Panda} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Mouse} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pig} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Jellyfish} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
