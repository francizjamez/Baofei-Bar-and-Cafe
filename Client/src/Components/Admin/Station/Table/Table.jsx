import React from "react";
import { Grid } from "@material-ui/core";
import greenTea from "../Images/GreenTea.jpg";
import makeStyles from "./Styles";

const Table = () => {
  const { table, image } = makeStyles();
  return (
    <Grid container style={table}>
      <Grid item>
        <img src={greenTea} alt="Green Tea" style={image}></img>
      </Grid>
      <Grid item>
        <img src={greenTea} alt="Green Tea" style={image}></img>
      </Grid>
    </Grid>
  );
};

export default Table;
