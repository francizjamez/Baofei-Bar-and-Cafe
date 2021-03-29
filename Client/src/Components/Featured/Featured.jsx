import "./Style-Featured.css";
import Slide from "../Slide/Slide";
import { useState } from "react";
import makeStyles from "./Styles";

import greenTea from "./Images/GreenTea.jpg";
import milkTea from "./Images/Milk Tea.jpg";

const Featured = () => {
  const [featuredItems] = useState([
    <Slide img={greenTea} />,
    <Slide img={milkTea} />,
  ]);
  let [currentSlide, setCurrent] = useState(0);

  const { left, right } = makeStyles();

  const previous = () => {
    let prevSlide = currentSlide - 1;
    setCurrent(prevSlide === -1 ? featuredItems.length - 1 : prevSlide);
  };

  const next = () => {
    let nextSlide = currentSlide + 1;
    setCurrent(nextSlide === featuredItems.length ? 0 : nextSlide);
  };
  return (
    <section id="featured" class="featured">
      <h1>Featured</h1>
      <p class="color-gray">
        The Specials of the Day! buy them now for they are only sold for today!
      </p>

      {featuredItems[currentSlide]}
      <button style={left} onClick={previous}>
        &#10094;
      </button>
      <button style={right} onClick={next}>
        &#10095;
      </button>
    </section>
  );
};

export default Featured;
