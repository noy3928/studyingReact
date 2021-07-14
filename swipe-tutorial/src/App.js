import logo from "./logo.svg";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

const data = [
  {
    id: 1,
    username: "Shadrack",
    testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    username: "Shadrack",
    testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    username: "Shadrack",
    testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    username: "Shadrack",
    testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    username: "Shadrack",
    testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

function App() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((user) => (
        <SwiperSlide key={user.id}>
          <div>{user.testimonial}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default App;
