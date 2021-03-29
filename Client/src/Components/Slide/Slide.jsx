import React from "react";
import Rating from "../Rating";
import ButtonRect from "../ButtonRect";
import makeStyles from "./Styles";

const Slide = ({ img }) => {
  const { day, row_rating, col_rating } = makeStyles();

  return (
    <div>
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

          <div style={row_rating}>
            <div style={col_rating}>
              <h3 class="align-left">Rating:</h3>
            </div>
            <div style={col_rating}>
              <Rating rating="5" />
            </div>
          </div>

          <ButtonRect text="ADD TO CART" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
