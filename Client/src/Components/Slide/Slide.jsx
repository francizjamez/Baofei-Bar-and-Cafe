import React from "react";
import Rating from "../Rating";
import ButtonRect from "../ButtonRect";
import makeStyles from "./Styles";

const Slide = ({ img }) => {
  const { day } = makeStyles();
  return (
    <div>
      <h1>Featured</h1>
      <p class="color-gray">
        The Specials of the Day!, buy them now for they are only sold for today!
      </p>

      <h2 style={day}>Monday</h2>

      <div class="row">
        <div class="col">
          <img class="item-image" src={img} alt="Food Item" />
        </div>
        <div class="col-2">
          <h2 class="align-left" text-align="left">
            Green Tea &nbsp;&nbsp; ₱ 59.99
          </h2>
          <p class="align-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            pellentesque metus ut purus hendrerit, quis bibendum.
          </p>

          <div class="row">
            <div class="col">
              <h3>Rating:</h3>
            </div>
            <div class="col">
              <Rating rating="5" />
            </div>
          </div>
          <ButtonRect />
        </div>
      </div>
    </div>
  );
};

export default Slide;
